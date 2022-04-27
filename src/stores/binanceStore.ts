import { defineStore } from "pinia";
import axios from "axios";

export const useBinanceStore = defineStore("binanceStore", {
    state: () => ({
        socketConnection: new WebSocket("wss://stream.binance.com:9443/ws/!ticker@arr") as WebSocket,
        socketSingleTicker: new WebSocket(`wss://stream.binance.us:9443/ws/BTCUSDT@depth`) as WebSocket,
        coinsList: {} as CoinsList[],
        coinsListCache: {} as CoinsListCache,
        tickerInfo: {} as TickerInfo,
        prevTickerInfo: {} as TickerInfo,
        depthSnapshot: {} as DepthSnapshot,
        binanceStreamLoader: true as boolean,
    }),
    getters: {
        getCoinsList: (state) => state.coinsList,
        getTickerInfo: (state) => state.tickerInfo,
        getDepthSnapshot: (state) => state.depthSnapshot,
        getBinanceStreamLoader: (state) => state.binanceStreamLoader,
    },
    actions: {
        connectToBinanceStream() {
            console.log("Connecting to BinanceStream");

            this.socketConnection = new WebSocket("wss://stream.binance.com:9443/ws/!ticker@arr");
            this.socketConnection.onopen = () => {
                console.log("Connected to BinanceStream");
            };

            this.socketConnection!.onmessage = ({ data }) => {
                const list = JSON.parse(data) || [];
                list.forEach((ticker: CoinsList) => {
                    const close = Number(ticker.c);
                    ticker.history =
                        this.coinsListCache && this.coinsListCache.hasOwnProperty(ticker.s)
                            ? this.coinsListCache[ticker.s as keyof CoinsList].history
                            : this.fakeHistory(close);
                    if (ticker.history.length > 20) {
                        ticker.history = ticker.history.slice(ticker.history.length - 20);
                    }
                    const reg = /^([A-Z]+)(BTC|ETH|BNB|USDT|TUSD)$/;
                    const symbol = String(ticker.s)
                        .replace(/[^\w-]+/g, "")
                        .toUpperCase();
                    ticker.token = symbol.replace(reg, "$1");
                    ticker.asset = symbol.replace(reg, "$2");
                    ticker.history.push(close);
                    this.coinsListCache[ticker.s] = ticker;
                });
                this.coinsList = Object.keys(this.coinsListCache).map((s) => this.coinsListCache[s]);
                this.binanceStreamLoader = false;
            };
            this.socketConnection!.onclose = () => {
                console.log("Closed connection to BinanceStream");
            };
        },

        fakeHistory(close: number) {
            const num = close * 0.0001;
            const min = -Math.abs(num);
            const max = Math.abs(num);
            const out = [];

            for (let i = 0; i < 20; ++i) {
                const rand = Math.random() * (max - min) + min;
                out.push(close + rand);
            }
            return out;
        },

        // disconnectBinanceStream() {
        // 	this.socketConnection.send({
        // 		method: "UNSUBSCRIBE",
        // 		params: ["ticker@arr"],
        // 		id: 312,
        // 	})
        // },

        connectToTickerStream(symbol: string) {
            this.socketSingleTicker = new WebSocket(`wss://stream.binance.us:9443/ws/${symbol}@depth`);

            this.socketSingleTicker!.onmessage = (event: any) => {
                const data = JSON.parse(event.data) || [];

                if (!this.prevTickerInfo) {
                    this.prevTickerInfo = data;
                }
                this.tickerInfo = data;
                this.setTickerInfo();
                this.prevTickerInfo = data;
            };
        },

        fetchDepthSnapShot(symbol: string) {
            const api = `https://www.binance.us/api/v1/depth?symbol=${symbol}&limit=150`;
            axios.get(api).then((response) => {
                this.depthSnapshot = response.data;
            });
        },

        setTickerInfo() {
            if (
                this.tickerInfo.u &&
                this.depthSnapshot.lastUpdateId &&
                this.tickerInfo.u <= this.depthSnapshot.lastUpdateId
            ) {
                return;
            }
            if (this.prevTickerInfo.u && this.tickerInfo.U === this.prevTickerInfo.u + 1) {
                this.updateDepthSnapshotAsks();
                this.updateDepthSnapshotBids();
            }
        },

        updateDepthSnapshotAsks() {
            this.tickerInfo.a.map((tickerAsk) => {
                this.depthSnapshot.asks = this.depthSnapshot.asks.filter((depthAsk) => {
                    if (depthAsk[0] !== tickerAsk[0]) {
                        return depthAsk;
                    }
                });
            });

            this.depthSnapshot.asks = this.depthSnapshot.asks.concat(this.tickerInfo.a);

            this.tickerInfo.a.map((tickerAsk) => {
                this.depthSnapshot.asks = this.depthSnapshot.asks.filter((depthAsk) => {
                    if (depthAsk[1] !== "0.00000000") {
                        return tickerAsk;
                    }
                });
            });
            this.depthSnapshot.asks = this.depthSnapshot.asks
                ? this.depthSnapshot.asks.sort((a, b) => Number(a[0]) - Number(b[0])).splice(0, 60)
                : this.depthSnapshot.asks;
        },

        updateDepthSnapshotBids() {
            this.tickerInfo.b.map((tickerAsk) => {
                this.depthSnapshot.bids = this.depthSnapshot.bids.filter((depthAsk) => {
                    if (depthAsk[0] !== tickerAsk[0]) {
                        return depthAsk;
                    }
                });
            });

            this.depthSnapshot.bids = this.depthSnapshot.bids.concat(this.tickerInfo.b);

            this.tickerInfo.b.map((tickerAsk) => {
                this.depthSnapshot.bids = this.depthSnapshot.bids.filter((depthAsk) => {
                    if (depthAsk[1] !== "0.00000000") {
                        return tickerAsk;
                    }
                });
            });
            this.depthSnapshot.bids = this.depthSnapshot.bids
                .sort((a, b) => Number(a[0]) - Number(b[0]))
                .reverse()
                .splice(0, 60);
        },
    },
});

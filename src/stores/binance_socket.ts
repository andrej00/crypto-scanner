import { defineStore } from "pinia";
import axios from "axios";

type TickerInfo = {
	e?: string
	E?: number
	s?: string
	U?: number
	u?: number
	b?: Array<string>
	a?: Array<string>
}

type CoinsList = {
	e: string
	E: number
	s: string
	p: string
	P: string
	w: string
	x: string
	c:string
	Q: string
	b: string
	B:string
	a: string
	A: string
	o: string
	h: string
	l: string
	v: string
	q: string
	O: number
	C: number
	F: number
	L: number
	n: number
	history: Array<number>
	token: string
	asset: string
}

type DepthSnapshot = {
	lastUpdateId: number
	asks: Array<string>
	bids: Array<string>
}

interface IUserState {
	socketConnection: WebSocket;
	socketSingleTicker: WebSocket;
	coinsList: Array<CoinsList>;
	tickerInfo: Partial<TickerInfo>;
	prevTickerInfo: object;
	depthSnapshot: Partial<DepthSnapshot>;
	binanceStreamLoader: boolean;
}

export const useBinanceStore = defineStore("binance_socket", {
	state: (): IUserState => ({
		socketConnection: new WebSocket('wss://stream.binance.com:9443/ws/!ticker@arr'),
		socketSingleTicker: new WebSocket(`wss://stream.binance.us:9443/ws/BTCUSDT@depth`),
		coinsList: [],
		tickerInfo: {},
		prevTickerInfo: {},
		depthSnapshot: {},
		binanceStreamLoader: false,
	}),
	getters: {
		getCoinsList: (state) => state.coinsList,
		getTickerInfo: (state) => state.tickerInfo,
		getDepthSnapshot: (state) => state.depthSnapshot,
		getBinanceStreamLoader: (state) => state.binanceStreamLoader,
	},
	actions: {
		connectToBinanceStream() {
			this.binanceStreamLoader = true;

			console.log("Connecting to BinanceStream");

			this.socketConnection = new WebSocket(
				"wss://stream.binance.com:9443/ws/!ticker@arr"
			);
			this.socketConnection.onopen = () => {
				console.log("Connected to BinanceStream");
			};

			type cache = {
				[key: string]: object;
			};
			const cache: cache = {};

			this.socketConnection!.onmessage = (event: any) => {
				const list = JSON.parse(event.data) || [];
				list.forEach((ticker: any) => {
					let close = parseFloat(ticker.c)
					ticker.history = cache.hasOwnProperty(ticker.s) ? cache[ticker.s].history : this.fakeHistory(close);
					if (ticker.history.length > 20) { 
						ticker.history = ticker.history.slice(ticker.history.length - 20)
					}
					let reg         = /^([A-Z]+)(BTC|ETH|BNB|USDT|TUSD)$/;
					let symbol      = String( ticker.s ).replace( /[^\w\-]+/g, '' ).toUpperCase();
					ticker.token    = symbol.replace( reg, '$1' );
					ticker.asset    = symbol.replace( reg, '$2' );
					ticker.history.push(close);
					cache[ticker.s] = ticker;
				});
				this.coinsList = Object.keys(cache).map((s) => cache[s]);
				this.binanceStreamLoader = false;
			};
			this.socketConnection!.onclose = () => {
				console.log("Closed connection to BinanceStream");
			};
		},

		fakeHistory(close: number) {
			let num = close * 0.0001;
			let min = -Math.abs(num);
			let max = Math.abs(num);
			let out = [];
	  
			for (let i = 0; i < 20; ++i) {
				let rand = Math.random() * (max - min) + min;
				out.push(close + rand);
			}
			return out;
		  },

		disconnectBinanceStream() {
			this.socketConnection.send({
				method: "UNSUBSCRIBE",
				params: ["ticker@arr"],
				id: 312,
			});
		},

		connectToTickerStream(symbol: string) {
			this.socketSingleTicker = new WebSocket(`wss://stream.binance.us:9443/ws/${symbol}@depth`);
			let dalje = true;

			this.socketSingleTicker!.onmessage = (event: any) => {
				const data = JSON.parse(event.data) || [];

				if (dalje === true) {
					this.prevTickerInfo = data;
					dalje = false;
					return;
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
			if (this.tickerInfo.u && this.depthSnapshot.lastUpdateId && this.tickerInfo.u <= this.depthSnapshot.lastUpdateId) {
				return;
			}
			if (this.tickerInfo.U === this.prevTickerInfo.u + 1) {
				this.updateDepthSnapshot("asks", "a");
				this.updateDepthSnapshot("bids", "b");
			}
		},

		updateDepthSnapshot(depth: string, ticker: string) {
			if (this.tickerInfo[ticker] !== undefined) {
				this.tickerInfo[ticker].map((price: any) => {
					this.depthSnapshot[depth] = this.depthSnapshot[depth].filter(
					(price2: any) => {
						if (price2[0] !== price[0]) {
						return price2;
						}
					}
					);
				});
			}

			this.depthSnapshot[depth] = this.depthSnapshot[depth].concat(
				this.tickerInfo[ticker]
			);
			this.tickerInfo[ticker].map((price) => {
				this.depthSnapshot[depth] = this.depthSnapshot[depth].filter(
					(price2: any) => {
						if (price2["1"] !== "0.00000000") {
						return price;
						}
					}
				);
			});
			this.depthSnapshot[depth] = this.depthSnapshot[depth]
				.sort((a: Array<number>, b: Array<number>) => a[0] - b[0])
				.splice(0, 60);
		},
	},
});

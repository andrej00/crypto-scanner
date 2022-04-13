import { defineStore } from "pinia"
import axios from "axios"

export const useBinanceStore = defineStore("binance_socket", {
	state: () => ({
		socketConnection: new WebSocket('wss://stream.binance.com:9443/ws/!ticker@arr') as WebSocket,
		socketSingleTicker: new WebSocket(`wss://stream.binance.us:9443/ws/BTCUSDT@depth`) as WebSocket,
		coinsList: {} as CoinsList[],
		coinsListCache: {} as CoinsListCache,
		tickerInfo: {} as TickerInfo,
		prevTickerInfo: {} as TickerInfo,
		depthSnapshot: {} as DepthSnapshot,
		binanceStreamLoader: false as boolean,
	}),
	getters: {
		getCoinsList: (state) => state.coinsList,
		getTickerInfo: (state) => state.tickerInfo,
		getDepthSnapshot: (state) => state.depthSnapshot,
		getBinanceStreamLoader: (state) => state.binanceStreamLoader,
	},
	actions: {
		connectToBinanceStream() {
			this.binanceStreamLoader = true

			console.log("Connecting to BinanceStream")

			this.socketConnection = new WebSocket(
				"wss://stream.binance.com:9443/ws/!ticker@arr"
			)
			this.socketConnection.onopen = () => {
				console.log("Connected to BinanceStream")
			}

			this.socketConnection!.onmessage = ({data}) => {
				const list = JSON.parse(data) || []
				list.forEach((ticker: CoinsList) => {
					let close = parseFloat(ticker.c)
					ticker.history = (this.coinsListCache && this.coinsListCache.hasOwnProperty(ticker.s)) ? this.coinsListCache[ticker.s as keyof CoinsList].history : this.fakeHistory(close)
					if (ticker.history.length > 20) { 
						ticker.history = ticker.history.slice(ticker.history.length - 20)
					}
					let reg         = /^([A-Z]+)(BTC|ETH|BNB|USDT|TUSD)$/
					let symbol      = String(ticker.s).replace(/[^\w\-]+/g, '').toUpperCase()
					ticker.token    = symbol.replace( reg, '$1' )
					ticker.asset    = symbol.replace( reg, '$2' )
					ticker.history.push(close)
					this.coinsListCache[ticker.s] = ticker
				})
				this.coinsList = Object.keys(this.coinsListCache).map((s) => this.coinsListCache[s])
				this.binanceStreamLoader = false
			}
			this.socketConnection!.onclose = () => {
				console.log("Closed connection to BinanceStream")
			}
		},

		fakeHistory(close: number) {
			let num = close * 0.0001
			let min = -Math.abs(num)
			let max = Math.abs(num)
			let out = []
	  
			for (let i = 0; i < 20; ++i) {
				let rand = Math.random() * (max - min) + min
				out.push(close + rand)
			}
			return out
		  },

		disconnectBinanceStream() {
			this.socketConnection.send({
				method: "UNSUBSCRIBE",
				params: ["ticker@arr"],
				id: 312,
			})
		},

		connectToTickerStream(symbol: string) {
			this.socketSingleTicker = new WebSocket(`wss://stream.binance.us:9443/ws/${symbol}@depth`)
			let dalje = true

			this.socketSingleTicker!.onmessage = (event: any) => {
				const data = JSON.parse(event.data) || []

				if (dalje === true) {
					this.prevTickerInfo = data
					dalje = false
					return
				}
				this.tickerInfo = data
				this.setTickerInfo()
				this.prevTickerInfo = data
			}
		},

		fetchDepthSnapShot(symbol: string) {
			const api = `https://www.binance.us/api/v1/depth?symbol=${symbol}&limit=150`
			axios.get(api).then((response) => {
				this.depthSnapshot = response.data
			})
		},

		setTickerInfo() {
			if (this.tickerInfo.u && this.depthSnapshot.lastUpdateId && this.tickerInfo.u <= this.depthSnapshot.lastUpdateId) {
				return
			}
			if (this.prevTickerInfo.u && (this.tickerInfo.U === this.prevTickerInfo.u + 1)) {
				this.updateDepthSnapshotAsks()
				this.updateDepthSnapshotBids()
				// this.updateDepthSnapshot("asks", "a")
				// this.updateDepthSnapshot("bids", "b")
			}
		},

		updateDepthSnapshotAsks() {
			if (this.tickerInfo.a !== undefined) {
				this.tickerInfo.a.map((price: string) => {
					this.depthSnapshot.asks = this.depthSnapshot.asks ? this.depthSnapshot.asks.filter(
						(price2: Array<string>) => {
							if (price2[0] !== price[0]) {
								return price2
							}
						}
					) : this.depthSnapshot.asks
				})

				this.depthSnapshot.asks = this.depthSnapshot.asks ? this.depthSnapshot.asks
					.concat(this.tickerInfo.a) : this.depthSnapshot.bids

				this.tickerInfo.a.map((price: string) => {
					this.depthSnapshot.asks = this.depthSnapshot.asks ? this.depthSnapshot.asks.filter(
						(price2: Array<string>) => {
							if (price2["1"] !== "0.00000000") {
								return price
							}
						}
					) : this.depthSnapshot.bids
				})
				this.depthSnapshot.asks = this.depthSnapshot.asks ? this.depthSnapshot.asks
					.sort((a: Array<string>, b: Array<string>) => parseFloat(a[0]) - parseFloat(b[0]))
					.splice(0, 60) : this.depthSnapshot.asks
			}
		},

		updateDepthSnapshotBids() {
			if (this.tickerInfo.b !== undefined) {
				this.tickerInfo.b.map((price: string) => {
					this.depthSnapshot.bids = this.depthSnapshot.bids ? this.depthSnapshot.bids.filter(
						(price2: Array<string>) => {
							if (price2[0] !== price[0]) {
								return price2
							}
						}
					) : []
				})

				this.depthSnapshot.bids = this.depthSnapshot.bids ? this.depthSnapshot.bids
					.concat(this.tickerInfo.b) : this.depthSnapshot.bids

				this.tickerInfo.b.map((price) => {
					this.depthSnapshot.bids = this.depthSnapshot.bids ? this.depthSnapshot.bids.filter(
						(price2: Array<string>) => {
							if (price2["1"] !== "0.00000000") {
								return price
							}
						}
					) : this.depthSnapshot.bids
				})
				this.depthSnapshot.bids = this.depthSnapshot.bids ? this.depthSnapshot.bids
					.sort((a: Array<string>, b: Array<string>) => parseFloat(a[0]) - parseFloat(b[0]))
					.splice(0, 60) : this.depthSnapshot.bids
			}
		},

		// updateDepthSnapshot(depth: string, ticker: string) {
		// 	if (this.tickerInfo[ticker as keyof TickerInfo] !== undefined) {
		// 		this.tickerInfo[ticker].map((price: any) => {
		// 			this.depthSnapshot[depth] = this.depthSnapshot[depth].filter(
		// 			(price2: any) => {
		// 				if (price2[0] !== price[0]) {
		// 				return price2
		// 				}
		// 			}
		// 			)
		// 		})
		// 	}

		// 	this.depthSnapshot[depth] = this.depthSnapshot[depth].concat(
		// 		this.tickerInfo[ticker]
		// 	)
		// 	this.tickerInfo[ticker].map((price) => {
		// 		this.depthSnapshot[depth] = this.depthSnapshot[depth].filter(
		// 			(price2: any) => {
		// 				if (price2["1"] !== "0.00000000") {
		// 				return price
		// 				}
		// 			}
		// 		)
		// 	})
		// 	this.depthSnapshot[depth] = this.depthSnapshot[depth]
		// 		.sort((a: Array<number>, b: Array<number>) => a[0] - b[0])
		// 		.splice(0, 60)
		// },
	},
})

import { defineStore } from "pinia"
import axios from 'axios'

interface coinsList {

}

// {
//     "symbol": "LTCBTC",
//     "token": "LTC",
//     "asset": "BTC",
//     "name": "LTC",
//     "pair": "LTC/BTC",
//     "open": 0.002592,
//     "high": 0.002632,
//     "low": 0.002527,
//     "close": 0.002542,
//     "change": -0.00005,
//     "percent": -1.929,
//     "trades": 23718,
//     "tokenVolume": 79384,
//     "assetVolume": 205,
//     "sign": "",
//     "arrow": "▼",
//     "style": "loss",
//     "info": "LTC/BTC 0.00254200 ( ▼ -1.93% | -0.00005000 )"
// }

interface IUserState {
	socketConnection: WebSocket,
	socketSingleTicker: WebSocket,
	coinsList: Array<object>,
	tickerInfo: object,
	prevTickerInfo: object,
	depthSnapshot: object,
	binanceStreamLoader: boolean
}

export const useBinanceStore = defineStore('binance_socket', {
	state: (): IUserState => ({
		socketConnection: new WebSocket("wss://stream.binance.com:9443/ws/!ticker@arr"),
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
		connectToBinanceStream () {
			this.binanceStreamLoader = true

			console.log('Connecting to BinanceStream')

			this.socketConnection = new WebSocket('wss://stream.binance.com:9443/ws/!ticker@arr')
			this.socketConnection.onopen = () => {
				console.log('Connected to BinanceStream')
			}

			type cache = {
				[key: string]: object
			}
			const cache: cache = {}

			this.socketConnection!.onmessage = (event: any) => {
				let list = JSON.parse(event.data) || []
				list.forEach((ticker: any) => {
					cache[ticker.s] = ticker
				})
				this.coinsList = Object.keys(cache).map(s => cache[s])
				this.binanceStreamLoader = false
			}
			this.socketConnection!.onclose = () => {
				console.log('Closed connection to BinanceStream')
			}
		},

		disconnectBinanceStream() {
			this.socketConnection.send({
				'method': 'UNSUBSCRIBE',
				'params': [
				  'ticker@arr'
				],
				'id': 312
			})
		},

		connectToTickerStream(symbol: String) {
			this.socketSingleTicker = new WebSocket(`wss://stream.binance.us:9443/ws/${symbol}@depth`)
			let dalje = true

			this.socketSingleTicker!.onmessage = (event: any) => {
				let data = JSON.parse(event.data) || []

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

		fetchDepthSnapShot(symbol: String) {
			const api = `https://www.binance.us/api/v1/depth?symbol=${symbol}&limit=150`
			axios.get(api).then((response) => {
				this.depthSnapshot = response.data
			})
		},

		setTickerInfo() {
			if (this.tickerInfo.u <= this.depthSnapshot.lastUpdateId) {
				return
			}
			if (this.tickerInfo.U === this.prevTickerInfo.u + 1) {
				this.updateDepthSnapshot('asks', 'a')
				this.updateDepthSnapshot('bids', 'b')
			}
		},

		updateDepthSnapshot(depth: string, ticker: string) {
			this.tickerInfo[ticker].map((price: any) => {
				this.depthSnapshot[depth] = this.depthSnapshot[depth].filter((price2: any) => {
					if (price2[0] !== price[0]) {
						return price2
					}
				})
			})

			this.depthSnapshot[depth] = this.depthSnapshot[depth].concat(this.tickerInfo[ticker])
			this.tickerInfo[ticker].map(price => {
				this.depthSnapshot[depth] = this.depthSnapshot[depth].filter((price2: any) => {
					if (price2['1'] !== '0.00000000') {
						return price
					}
				})
			})
			this.depthSnapshot[depth] = this.depthSnapshot[depth].sort((a: Array<number>, b: Array<number>) => a[0] - b[0]).splice(0, 60)
		},
	}
})

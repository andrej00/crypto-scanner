import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { initializeApp } from 'firebase/app';

import App from './App.vue';
import router from './router';
import './assets/base.css';

const firebaseConfig = {
	apiKey: 'AIzaSyDbL2ZMJjYr8-J8VxC2JGyYzF-L8b0JH20',
	authDomain: 'crypto-scanner-d8e79.firebaseapp.com',
	projectId: 'crypto-scanner-d8e79',
	storageBucket: 'crypto-scanner-d8e79.appspot.com',
	messagingSenderId: '359040748010',
	appId: '1:359040748010:web:66a1b4a3aa5c446d990a93',
	measurementId: 'G-QD41TV94B4'
};

initializeApp(firebaseConfig);

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const Web3 = require('web3');
const cors = require('cors');
const mongoose = require('mongoose');
const carSupplyChainABI = require('./contracts/CarSupplyChain.json');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const web3 = new Web3(
	new Web3.providers.WebsocketProvider('ws://localhost:7545')
);
const contractAddress = '0xYourContractAddressHere'; // Replace with your contract address
const carSupplyChainContract = new web3.eth.Contract(
	carSupplyChainABI.abi,
	contractAddress
);

mongoose.connect('mongodb://mongodb:27017/carSupplyChain', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
const Car = mongoose.model(
	'Car',
	new mongoose.Schema({
		id: Number,
		model: String,
		manufacturer: String,
		supplier: String,
		dealer: String,
		timestamp: Date,
	})
);

app.get('/cars', async (req, res) => {
	const carCount = await carSupplyChainContract.methods.carCount().call();
	let cars = [];
	for (let i = 1; i <= carCount; i++) {
		const car = await carSupplyChainContract.methods.cars(i).call();
		const newCar = new Car({
			id: car.id,
			model: car.model,
			manufacturer: car.manufacturer,
			supplier: car.supplier,
			dealer: car.dealer,
			timestamp: new Date(car.timestamp * 1000),
		});
		await newCar.save();
		cars.push(newCar);
	}
	res.json(cars);
});

app.post('/register', async (req, res) => {
	const { model } = req.body;
	const accounts = await web3.eth.getAccounts();
	await carSupplyChainContract.methods
		.registerCar(model)
		.send({ from: accounts[0] });
	res.send('Car registered');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});

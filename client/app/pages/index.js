import { useEffect, useState } from 'react';
import Web3 from 'web3';
import carSupplyChainABI from '../contracts/CarSupplyChain.json';

const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");

const contractAddress = '0xYourContractAddressHere';

const carSupplyChainContract = new web3.eth.Contract(carSupplyChainABI.abi, contractAddress);

export default function Home() {
  const [account, setAccount] = useState('');
  const [carModel, setCarModel] = useState('');
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const loadBlockchainData = async () => {
      const accounts = await web3.eth.requestAccounts();
      setAccount(accounts[0]);
      const carCount = await carSupplyChainContract.methods.carCount().call();
      let carsArray = [];
      for (let i = 1; i <= carCount; i++) {
        const car = await carSupplyChainContract.methods.cars(i).call();
        carsArray.push(car);
      }
      setCars(carsArray);
    };
    loadBlockchainData();
  }, []);

  const registerCar = async () => {
    await carSupplyChainContract.methods.registerCar(carModel).send({ from: account });
    const carCount = await carSupplyChainContract.methods.carCount().call();
    let carsArray = [];
    for (let i = 1; i <= carCount; i++) {
      const car = await carSupplyChainContract.methods.cars(i).call();
      carsArray.push(car);
    }
    setCars(carsArray);
  };

  return (
    <div>
      <h1>Car Supply Chain Management</h1>
      <input
        type="text"
        placeholder="Car Model"
        value={carModel}
        onChange={(e) => setCarModel(e.target.value)}
      />
      <button onClick={registerCar}>Register Car</button>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            {car.model} - Manufacturer: {car.manufacturer}
          </li>
        ))}
      </ul>
    </div>
  );
}

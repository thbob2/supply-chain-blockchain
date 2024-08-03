# Mobility Manufacturing Supply Chain

## Overview

This project is a decentralized application (dApp) for managing a car manufacturing supply chain using Ethereum blockchain. The application consists of a frontend built with Next.js, a backend with Express.js, and a smart contract deployed on a local Ethereum blockchain using Ganache. MongoDB is used for off-chain data storage.

## Components

-   **Ethereum Blockchain**: Managed by Ganache.
-   **Smart Contract**: Written in Solidity.
-   **Frontend**: Next.js application.
-   **Backend**: Express.js server interacting with Ethereum and MongoDB.
-   **MongoDB**: Stores off-chain data.
-   **Docker**: Containerizes all components.

## Setup Guide

### 1. Prerequisites

-   Node.js and npm: [Install Node.js](https://nodejs.org/)
-   Docker: [Install Docker](https://www.docker.com/products/docker-desktop)
-   Ganache: [Download Ganache](https://www.trufflesuite.com/ganache)

### Project Structure

```
mobility-supply-chain/
├── blockchain/
│   ├── contracts/
│   │   └── VehicleSupplyChain.sol
│   ├── migrations/
│   │   └── 1_initial_migration.js
│   ├── truffle-config.js
│   └── package.json
├── backend/
│   ├── routes/
│   │   └── vehicleRoutes.js
│   ├── server.js
│   ├── config.js
│   └── package.json
├── frontend/
│   ├── pages/
│   │   └── index.js
│   ├── components/
│   ├── public/
│   ├── styles/
│   ├── package.json
│   └── next.config.js
├── mongo-init.js
├── docker-compose.yml
├── .env
└── README.md

```

### 2. Initialize Project Directory

```sh
mkdir car-supply-chain
cd car-supply-chain
```

### 3. Set Up Ganache

    Start Ganache and note the RPC URL (e.g., http://127.0.0.1:7545) and mnemonic.

### 4. Set Up Ethereum Smart Contract

```sh
npm install -g truffle
truffle init



truffle compile
truffle migrate --network development

```

## Running the Project

### Start Docker Containers:

```sh
Copier le code
docker-compose up -d
```

#### Navigate to Backend Directory and Run Server:

```sh
cd backend
docker build -t backend .
docker run -p 5000:5000 backend
```

### Navigate to Frontend Directory and Run Next.js:

```sh
cd frontend
docker build -t frontend .
docker run -p 3000:3000 frontend
```

Access Application:
Visit http://localhost:3000 to see the frontend interface.

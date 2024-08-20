# Vehicle Supply Chain Management Blockchain

## Overview

This project is a blockchain-based supply chain management system for vehicles. It tracks the lifecycle of vehicles, from manufacturing to final delivery, ensuring transparency and immutability.

## Technologies

-   **Backend:** NestJS
-   **Frontend:** Next.js
-   **Blockchain:** Ethereum (Solidity Smart Contracts)
-   **Database:** MongoDB
-   **Containerization:** Docker

## Setup Instructions

### Folder structure

```sh

vehicle-supply-chain/
├── backend/
│   ├── src/
│   │   ├── app.controller.ts
│   │   ├── app.module.ts
│   │   ├── app.service.ts
│   │   ├── vehicle/
│   │   │   ├── vehicle.controller.ts
│   │   │   ├── vehicle.module.ts
│   │   │   ├── vehicle.service.ts
│   │   │   └── dto/
│   │   │       └── create-vehicle.dto.ts
│   │   └── blockchain/
│   │       ├── blockchain.service.ts
│   │       ├── blockchain.module.ts
│   │       └── contracts/
│   │           └── VehicleSupplyChain.sol
│   ├── Dockerfile
│   ├── package.json
│   └── tsconfig.json
├── frontend/
│   ├── components/
│   │   └── Layout.js
│   ├── pages/
│   │   ├── api/
│   │   ├── index.js
│   │   ├── register.js
│   │   ├── transfer.js
│   │   └── receive.js
│   ├── public/
│   ├── styles/
│   │   └── globals.css
│   ├── Dockerfile
│   ├── next.config.js
│   └── package.json
├── blockchain/
│   ├── contracts/
│   │   └── VehicleSupplyChain.sol
│   ├── migrations/
│   ├── test/
│   ├── truffle-config.js
│   └── Dockerfile
└── docker-compose.yml




```

### Prerequisites

-   Docker
-   Docker Compose
-   Node.js

### Setup and Run

1. **Clone the Repository:**

    ```bash
    git clone <repository-url>
    cd vehicle-supply-chain
    ```

2. **Build and Run the Application:**

    ```bash
    docker-compose build
    docker-compose up
    ```

3. **Access the Application:**

    - **Frontend:** http://localhost:3001
    - **Backend:** http://localhost:3000
    - **MongoDB:** mongodb://localhost:27017
    - **Ganache (Blockchain):** http://localhost:7545

### API Endpoints

-   **Register Vehicle:** `POST /vehicle/register`
-   **Transfer Vehicle:** `POST /vehicle/transfer/:id`
-   **Check Vehicle Owner:** `GET /vehicle/:id/owner`

## Docker Services

-   **MongoDB:** Database service
-   **Blockchain:** Ganache service for the Ethereum blockchain
-   **Backend:** NestJS API server
-   **Frontend:** Next.js frontend server

## License

This project is licensed under the MIT License.

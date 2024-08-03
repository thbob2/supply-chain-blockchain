// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract VehicleSupplyChain {
    enum State { Manufactured, Shipped, Received }
    
    struct Vehicle {
        uint id;
        string brand;
        address owner;
        State state;
    }

    mapping(uint => Vehicle) public vehicles;
    uint public vehicleCount;

    event VehicleStateChanged(uint id, State state);

    function manufactureVehicle(string memory brand) public {
        vehicleCount++;
        vehicles[vehicleCount] = Vehicle(vehicleCount, brand, msg.sender, State.Manufactured);
        emit VehicleStateChanged(vehicleCount, State.Manufactured);
    }

    function shipVehicle(uint id, address newOwner) public {
        require(vehicles[id].owner == msg.sender, "Only owner can ship");
        require(vehicles[id].state == State.Manufactured, "Vehicle must be manufactured");
        vehicles[id].owner = newOwner;
        vehicles[id].state = State.Shipped;
        emit VehicleStateChanged(id, State.Shipped);
    }

    function receiveVehicle(uint id) public {
        require(vehicles[id].owner == msg.sender, "Only owner can receive");
        require(vehicles[id].state == State.Shipped, "Vehicle must be shipped");
        vehicles[id].state = State.Received;
        emit VehicleStateChanged(id, State.Received);
    }
}

pragma solidity ^0.8.0;

contract VehicleSupplyChain {
    struct Vehicle {
        string brand;
        address currentOwner;
        bool isReceived;
    }

    mapping(uint256 => Vehicle) public vehicles;
    uint256 public vehicleCount = 0;

    function manufactureVehicle(string memory brand) public {
        vehicleCount++;
        vehicles[vehicleCount] = Vehicle(brand, msg.sender, false);
    }

    function shipVehicle(uint256 vehicleId, address newOwner) public {
        Vehicle storage vehicle = vehicles[vehicleId];
        require(msg.sender == vehicle.currentOwner, "Only the current owner can ship the vehicle.");
        vehicle.currentOwner = newOwner;
    }

    function receiveVehicle(uint256 vehicleId) public {
        Vehicle storage vehicle = vehicles[vehicleId];
        require(msg.sender == vehicle.currentOwner, "Only the current owner can receive the vehicle.");
        vehicle.isReceived = true;
    }
}

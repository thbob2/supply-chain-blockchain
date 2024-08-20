pragma solidity ^0.8.0;

contract VehicleSupplyChain {
    struct Vehicle {
        string brand;
        address owner;
        bool exists;
    }

    mapping(uint => Vehicle) public vehicles;
    uint public vehicleCount;

    function registerVehicle(string memory _brand) public {
        vehicleCount++;
        vehicles[vehicleCount] = Vehicle(_brand, msg.sender, true);
    }

    function transferVehicle(uint _id, address _newOwner) public {
        require(vehicles[_id].exists, "Vehicle does not exist.");
        require(vehicles[_id].owner == msg.sender, "You are not the owner.");

        vehicles[_id].owner = _newOwner;
    }

    function getVehicleOwner(uint _id) public view returns (address) {
        require(vehicles[_id].exists, "Vehicle does not exist.");
        return vehicles[_id].owner;
    }
}

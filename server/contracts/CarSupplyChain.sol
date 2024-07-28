pragma solidity ^0.8.0;

contract CarSupplyChain {
    struct Car {
        uint256 id;
        string model;
        address manufacturer;
        address supplier;
        address dealer;
        uint256 timestamp;
    }

    mapping(uint256 => Car) public cars;
    uint256 public carCount;

    function registerCar(string memory _model) public {
        carCount++;
        cars[carCount] = Car(carCount, _model, msg.sender, address(0), address(0), block.timestamp);
    }

    function transferOwnership(uint256 _id, address _newOwner) public {
        Car storage car = cars[_id];
        require(msg.sender == car.supplier || msg.sender == car.dealer, "Not authorized");
        if (msg.sender == car.supplier) {
            car.dealer = _newOwner;
        }
    }
}

const VehicleSupplyChain = artifacts.require('VehicleSupplyChain');

module.exports = function (deployer) {
	deployer.deploy(VehicleSupplyChain);
};

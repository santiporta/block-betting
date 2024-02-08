const { bscScanService } = require("./bscscan-service");

exports.getSmartContractData = async (address, action) => {
  const service = bscScanService();
  const result = await service.get("", { params: { module: "contract", action, address } });
  return result.data;
};

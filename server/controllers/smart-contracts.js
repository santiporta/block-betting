const { getSmartContractData } = require("../services/smart-contract-service");

exports.handleGetAbiSmartContract = async (req, res) => {
  try {        
    console.log(req.params)
    const data = await getSmartContractData(req.params.smartContractId, 'getabi')
    return res.status(200).json(data);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Internal server error");
  }
};


exports.handleGetSourceCodeSmartContract = async (req, res) => {
  try {        
    console.log(req.params)
    const data = await getSmartContractData(req.params.smartContractId, 'getsourcecode')
    return res.status(200).json(data);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Internal server error");
  }
};

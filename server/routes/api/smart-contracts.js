const express = require('express');
const router = express.Router();
const validateToken = require('../../middleware/auth');
const { handleGetAbiSmartContract, handleGetSourceCodeSmartContract } = require('../../controllers/smart-contracts');

router.get('/:smartContractId/abi', validateToken, handleGetAbiSmartContract);
router.get('/:smartContractId/sourcecode', validateToken, handleGetSourceCodeSmartContract);

module.exports = router;
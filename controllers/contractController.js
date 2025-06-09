// controllers/contractController.js
const { getContract } = require('../fabric/gateway');

exports.createContractBatch = async (req, res) => {
  try {
    const contract = await getContract();
    const batchJSON = JSON.stringify(req.body);
    const result = await contract.submitTransaction('CreateContractBatch', batchJSON);
    res.json({ message: 'Batch created', result: result.toString() });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.adminRaisesInvoiceToAgency = async (req, res) => {
  try {
    const { batchID, invoice } = req.body;
    const contract = await getContract();
    const result = await contract.submitTransaction('AdminRaisesInvoiceToAgency', batchID, JSON.stringify(invoice));
    res.json({ message: 'Invoice raised to agency', result: result.toString() });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.agencyUpdatesPayment = async (req, res) => {
  try {
    const { batchID, payment } = req.body;
    const contract = await getContract();
    const result = await contract.submitTransaction('AgencyUpdatesPayment', batchID, JSON.stringify(payment));
    res.json({ message: 'Agency payment updated', result: result.toString() });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.adminApprovesAgencyPayment = async (req, res) => {
  try {
    const { batchID } = req.body;
    const contract = await getContract();
    const result = await contract.submitTransaction('AdminApprovesAgencyPayment', batchID);
    res.json({ message: 'Agency payment approved', result: result.toString() });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.adminUpdatesPaymentToContractor = async (req, res) => {
  try {
    const { batchID, contractorID, payment } = req.body;
    const contract = await getContract();
    const result = await contract.submitTransaction('AdminUpdatesPaymentToContractor', batchID, contractorID, JSON.stringify(payment));
    res.json({ message: 'Payment to contractor updated', result: result.toString() });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.contractorApprovesPayment = async (req, res) => {
  try {
    const { batchID, contractorID } = req.body;
    const contract = await getContract();
    const result = await contract.submitTransaction('ContractorApprovesPayment', batchID, contractorID);
    res.json({ message: 'Contractor approved payment', result: result.toString() });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.contractorRaisesInvoiceToAdmin = async (req, res) => {
  try {
    const { batchID, contractorID, invoice } = req.body;
    const contract = await getContract();
    const result = await contract.submitTransaction('ContractorRaisesInvoiceToAdmin', batchID, contractorID, JSON.stringify(invoice));
    res.json({ message: 'Invoice raised by contractor', result: result.toString() });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.contractorUpdatesMilestoneStatus = async (req, res) => {
  try {
    const { batchID, milestoneNo, status } = req.body;
    const contract = await getContract();
    const result = await contract.submitTransaction('ContractorUpdatesMilestoneStatus', batchID, milestoneNo.toString(), status);
    res.json({ message: 'Milestone status updated', result: result.toString() });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.adminApprovesMilestone = async (req, res) => {
  try {
    const { batchID, milestoneNo } = req.body;
    const contract = await getContract();
    const result = await contract.submitTransaction('AdminApprovesMilestone', batchID, milestoneNo.toString());
    res.json({ message: 'Milestone approved by admin', result: result.toString() });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getBatchStatus = async (req, res) => {
  try {
    const { batchID } = req.params;
    const contract = await getContract();
    const result = await contract.evaluateTransaction('GetBatchStatus', batchID);
    res.json({ status: result.toString() });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

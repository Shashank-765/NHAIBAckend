// routes/contractRoutes.js
const express = require('express');
const router = express.Router();
const contractController = require('../controllers/contractController');

// Batch creation
router.post('/api2/batch', contractController.createContractBatch);

// Invoices
router.post('/invoice/admin-to-agency', contractController.adminRaisesInvoiceToAgency);
router.post('/invoice/contractor-to-admin', contractController.contractorRaisesInvoiceToAdmin);

// Payments
router.post('/payment/agency-update', contractController.agencyUpdatesPayment);
router.post('/payment/admin-approve-agency', contractController.adminApprovesAgencyPayment);
router.post('/payment/admin-to-contractor', contractController.adminUpdatesPaymentToContractor);
router.post('/payment/contractor-approve', contractController.contractorApprovesPayment);

// Milestones
router.post('/milestone/update', contractController.contractorUpdatesMilestoneStatus);
router.post('/milestone/approve', contractController.adminApprovesMilestone);

// Status
router.get('/batch/:batchID/status', contractController.getBatchStatus);

module.exports = router;

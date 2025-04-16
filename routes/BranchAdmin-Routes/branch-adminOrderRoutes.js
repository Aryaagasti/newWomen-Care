const express = require("express");
const router = express.Router();

const { getAllBranchOrders, getOrderBranchDetails, getOrderStatus, assignDelivery } = require("../../controllers/branchAdmin-Controllers/branchOrderController");

//✅ Order Routes
router.get("/all-branch-orders", getAllBranchOrders);
router.get("/branch-order-details/:OrderId", getOrderBranchDetails);
router.get("/order-status", getOrderStatus);
router.put("/assignDelivery/:id", assignDelivery);

module.exports = router;
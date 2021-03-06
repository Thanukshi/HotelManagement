const routes = require("express").Router();
const CustomeRoutes = require("../../controller/customer");
const AuthMiddle = require("../../middlewares/auth");

routes.post("/register-customer", CustomeRoutes.registerCustomer);

routes.post("/activate-email", CustomeRoutes.activateEmail);

routes.post("/login-customer", CustomeRoutes.CustomerLogin);

routes.get("/customer-details", AuthMiddle, CustomeRoutes.getCustomerDetails);

module.exports = routes;

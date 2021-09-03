const routes = require("express").Router();
const CustomerMainRoute = require("./CustomerRoutes");
const MenuListMainRoute = require("./MenuItemRoutes");
const EmployeeMainRoute = require("./EmployeeRoutes");
const RoomMainRoute = require("./RoomsRoutes");
const ParkingMainRoute = require("./ParkingRoutes");
const ScheduleMainRoute = require("./GymScheduleRoutes");

routes.use("/customer", CustomerMainRoute);

routes.use("/menulist", MenuListMainRoute);

routes.use("/employee", EmployeeMainRoute);

routes.use("/rooms", RoomMainRoute);

routes.use("/parking", ParkingMainRoute);

routes.use("/parking", ParkingMainRoute);

routes.use("/gym-schedule", ScheduleMainRoute);

module.exports = routes;

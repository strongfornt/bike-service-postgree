"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const customer_routes_1 = require("../modules/customers/customer.routes");
const bike_route_1 = require("../modules/bikes/bike.route");
const service_routes_1 = require("../modules/ServiceManagement/service.routes");
const router = (0, express_1.Router)();
const modulesRoutes = [
    {
        path: '/customers',
        route: customer_routes_1.CustomerRoutes
    },
    {
        path: '/bikes',
        route: bike_route_1.bikeRoutes
    },
    {
        path: '/services',
        route: service_routes_1.ServiceRoute
    }
];
modulesRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;

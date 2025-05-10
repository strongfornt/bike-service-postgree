import { Router } from "express";
import { CustomerRoutes } from "../modules/customers/customer.routes";
import { bikeRoutes } from "../modules/bikes/bike.route";
import { ServiceRoute } from "../modules/ServiceManagement/service.routes";

const router = Router();

const modulesRoutes = [
    {
        path:'/customers',
        route:CustomerRoutes
    },
    {
        path:'/bikes',
        route:bikeRoutes
    },
    {
        path:'/services',
        route:ServiceRoute
    }
];

modulesRoutes.forEach((route) => router.use(route!.path, route!.route));

export default router;

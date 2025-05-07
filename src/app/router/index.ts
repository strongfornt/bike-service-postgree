import { Router } from "express";
import { CustomerRoutes } from "../modules/customers/customer.routes";
import { bikeRoutes } from "../modules/bikes/bike.route";

const router = Router();

const modulesRoutes = [
    {
        path:'/customers',
        route:CustomerRoutes
    },
    {
        path:'/bikes',
        route:bikeRoutes
    }
];

modulesRoutes.forEach((route) => router.use(route!.path, route!.route));

export default router;

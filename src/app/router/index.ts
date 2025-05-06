import { Router } from "express";
import { CustomerRoutes } from "../modules/customers/customer.routes";

const router = Router();

const modulesRoutes = [
    {
        path:'/customers',
        route:CustomerRoutes
    }
];

modulesRoutes.forEach((route) => router.use(route!.path, route!.route));

export default router;

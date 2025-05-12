"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const router_1 = __importDefault(require("./app/router"));
const not_found_1 = __importDefault(require("./app/middlewares/not.found"));
const globalError_1 = __importDefault(require("./app/middlewares/globalError"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)({ origin: true, credentials: true }));
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send({
        Message: "Bike service..",
    });
});
//applications routes
app.use('/api', router_1.default);
// // global error handlers
app.use(not_found_1.default);
app.use(globalError_1.default);
exports.default = app;

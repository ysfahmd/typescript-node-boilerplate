"use strict";
// This is the barebones of a TypeScript + Express.js back-end. Customize and configure to your liking.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
// Lookup 'cors' documentation to properly set up.
app.use((0, cors_1.default)());
app.get('/where', (req, res) => {
    res.json({
        message: 'is the money'
    });
});
app.listen(1337, () => console.log('EnTrack server up and running!'));

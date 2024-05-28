"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var getMyList_1 = __importDefault(require("./src/handlers/getMyList"));
var addToMyList_1 = __importDefault(require("./src/handlers/addToMyList"));
var removeFromList_1 = __importDefault(require("./src/handlers/removeFromList"));
var app = (0, express_1.default)();
// Apply middleware (e.g., body parsing, logging) if needed
app.use(express_1.default.json()); // Example middleware
// Mount routers on appropriate paths
app.use('/users', getMyList_1.default);
app.use('/users', addToMyList_1.default);
app.use('/users', removeFromList_1.default);
// Define the port the server should listen on
var PORT = process.env.PORT || 3000;
// Start the server and listen on the specified port
app.listen(PORT, function () {
    console.log("Server is running on port ".concat(PORT));
});

import express from 'express';
import getMyListRouter from './src/handlers/getMyList';
import addToMyListRouter from './src/handlers/addToMyList';
import removeFromListRouter from './src/handlers/removeFromList';

const app = express();

// Apply middleware (e.g., body parsing, logging) if needed
app.use(express.json()); // Example middleware

// Mount routers on appropriate paths
app.use('/users', getMyListRouter);
app.use('/users', addToMyListRouter);
app.use('/users', removeFromListRouter);



// Define the port the server should listen on
const PORT = process.env.PORT || 3000;

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
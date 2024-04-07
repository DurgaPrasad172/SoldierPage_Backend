// Import necessary packages
const express = require('express');
const cors = require('cors');
const path = require('path');

// Create an instance of express app
const app = express();

// Define the port number
const PORT = 3111;

// Use CORS middleware to allow cross-origin requests
app.use(cors());

// Sample data for the soldier's profile
const dataTable = [
  { tool: 'weapons', have: 134, total: 185 },
  { tool: 'kits', have: 46, total: 64 },
  { tool: 'vehicles', have: 77, total: 182 },
  { tool: 'medals', have: 11, total: 54 },
  { tool: 'assignments', have: 21, total: 110 },
  { tool: 'Dog tags', have: 357, total: 720 },
  { tool: 'battlepacks', have: undefined, total: undefined },
];

// Sample data for dominance stats
const dominanceTable = [
    { tool: 'wins', have: '44%' },
    { tool: 'score/min', have: 592 },
    { tool: 'kills/min', have: '0.60'},
];

// Sample data for vehicles
const vehicles = [
    { category: 'top vehicle', name: 'Main Battle Tank', killsScore: '33 Kills', image: 'soldier__tank-white.png' },
    { category: 'top primary', name: 'ACW-R', killsScore: '496 Kills', image: 'acw-white.png' },
    { category: 'top class', name: 'ENGINEER', killsScore: '828,514 Score', image: 'Vector.png' },
    { category: 'top sidearm', name: 'M9', killsScore: '112 Kills', image: 'm9-white.png' },
];

// Serve images from the images directory
app.use('/images', express.static(path.join(__dirname, 'images')));

// Provide API endpoints to get the data
app.get('/api/vehicles', (req, res) => {
    res.json(vehicles);
});

app.get('/api/datatable', (req, res) => {
    res.json(dataTable);
});

app.get('/api/dominanceTable', (req, res) => {
    res.json(dominanceTable);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at Port: ${PORT}`);
});

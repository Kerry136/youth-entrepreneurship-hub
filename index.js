const express = require('express');
const path = require('path');
const { sequelize } = require('./models'); // Sequelize instance
const mentorRoutes = require('./routes/mentors');
const fundingRoutes = require('./routes/funding');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/mentors', mentorRoutes);
app.use('/api/funding', fundingRoutes);

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
    console.log(`Server running on port ${PORT}`);
    try {
        await sequelize.sync(); // Ensure database is synced
        console.log('Database connected and models synced.');
    } catch (err) {
        console.error('Database connection error:', err);
    }
});

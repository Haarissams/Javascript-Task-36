const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const attendanceRoutes = require('./routes/attendanceRoutes');
const codekataRoutes = require('./routes/codekataRoutes');
const companyDriveRoutes = require('./routes/companyDriveRoutes');
const mentorRoutes = require('./routes/mentorRoutes');
const taskRoutes = require('./routes/taskRoutes');
const topicRoutes = require('./routes/topicRoutes');
const userRoutes = require('./routes/userRoutes');


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('MongoDB connected');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

connectDB();

// Routes
app.use('/api/attendance', attendanceRoutes);
app.use('/api/codekata', codekataRoutes);
app.use('/api/company-drives', companyDriveRoutes);
app.use('/api/mentors', mentorRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/topics', topicRoutes);
app.use('/api/users', userRoutes);


// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

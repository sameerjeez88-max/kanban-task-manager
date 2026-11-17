/**
 * @project Task Management & Kanban Board REST API
 * @author Rana Yasir Mahy Ud Din
 * @website https://ranayasir.unaux.com/
 * @github https://github.com/Sameerjeez88-max
 * @copyright 2026 Rana Yasir Mahy Ud Din. All Rights Reserved.
 */

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const taskRoutes = require('./src/routes/taskRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// API Routes
app.use('/api', taskRoutes);

const PORT = process.env.PORT || 5004;
app.listen(PORT, () => {
  console.log(`========================================================`);
  console.log(`Kanban Task Manager API running on http://localhost:${PORT}`);
  console.log(`Developed by: Rana Yasir Mahy Ud Din`);
  console.log(`========================================================`);
});
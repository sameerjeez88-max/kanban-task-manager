/**
 * @project Task Management & Kanban Board REST API
 * @author Rana Yasir Mahy Ud Din (https://ranayasir.unaux.com/)
 */

// In-memory tasks database store
const tasks = [
  {
    id: 1,
    title: 'Design UI Wireframes',
    description: 'Create dark-mode Figma wireframes for the SaaS dashboard.',
    status: 'todo', // todo, in-progress, done
    priority: 'High',
    createdAt: '2026-11-17 14:00'
  },
  {
    id: 2,
    title: 'Setup Database Schema',
    description: 'Configure MongoDB / MySQL relationships for user records.',
    status: 'in-progress',
    priority: 'Medium',
    createdAt: '2026-11-17 14:30'
  },
  {
    id: 3,
    title: 'Deploy API to Production',
    description: 'Deploy the Node.js backend to AWS EC2 instance.',
    status: 'done',
    priority: 'High',
    createdAt: '2026-11-17 11:15'
  }
];

module.exports = { tasks };
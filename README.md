# 📋 Task Management & Kanban Board REST API

[![Node.js](https://img.shields.io/badge/Node.js-v18%2B-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-v4.21-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v3.4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

An enterprise-grade **Task Management & Kanban Board REST API** built with Node.js, Express, multi-stage workflow organization (To Do, In Progress, Completed), priority tagging, and a responsive dark-mode project dashboard styled with **Tailwind CSS**.

---

## 📋 Table of Contents
1. [Core Features & Highlights](#-core-features--highlights)
2. [Tech Stack & Architecture](#-tech-stack--architecture)
3. [Project Folder Structure](#-project-folder-structure)
4. [API Endpoints Reference](#-api-endpoints-reference)
5. [Local Installation & Setup](#-local-installation--setup)
6. [Testing the Application](#-testing-the-application)
7. [Author & Developer](#-author--developer)

---

## 🌟 Core Features & Highlights

* **Kanban Workflow Columns:** Multi-stage task organization allowing seamless transitions across To Do, In Progress, and Completed states.
* **Priority Level Tagging:** Color-coded priority badges (Low, Medium, High) for effective task prioritization.
* **Interactive Modal Forms:** Clean popup interface for creating and configuring new project tasks dynamically.
* **Real-Time DOM Updates:** Instant state synchronization between client UI interactions and backend REST endpoints.
* **Clean Code Architecture:** Modular separation of routing logic, in-memory data store, and server configuration.

---

## 🛠️ Tech Stack & Architecture

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend UI** | HTML5 & Tailwind CSS | Responsive dark-mode Kanban grid and interactive task cards |
| **Backend Runtime** | Node.js & Express.js | REST routing, CRUD task management, and server handling |

---

## 📂 Project Folder Structure

```text
kanban-task-manager/
├── public/
│   └── index.html             # Tailwind CSS Kanban board dashboard UI
├── src/
│   ├── routes/
│   │   └── taskRoutes.js      # CRUD task management endpoints
│   └── data/
│       └── store.js           # In-memory database store for tasks
├── server.js                  # Main entry point & Express static bindings
├── package.json               # Dependencies and scripts manifest
├── .env                       # Environment variables configuration
├── .gitignore                 # Git ignore exclusions
└── README.md                  # Comprehensive technical documentation

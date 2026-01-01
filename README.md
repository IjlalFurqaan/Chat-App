# 💬 Real-Time Chat Application

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Node.js](https://img.shields.io/badge/Node.js-20.x-green.svg)
![React](https://img.shields.io/badge/React-18.x-blue.svg)
![MongoDB](https://img.shields.io/badge/MongoDB-Latest-green.svg)

A modern, full-stack real-time chat application featuring authentication, instant messaging, and a sleek user interface. Built with the **MERN** stack (MongoDB, Express, React, Node.js) and **Socket.io**.

## ✨ Features

*   **Real-time Messaging:** Instant delivery of messages using Socket.io.
*   **Secure Authentication:** JWT-based signup and login system.
*   **Modern UI:** Built with **Tailwind CSS** for a responsive and clean design.
*   **Database:** Persistent storage with MongoDB.
*   **State Management:** Efficient frontend state handling.

## 🛠️ Tech Stack

**Backend:**
*   Node.js & Express.js
*   MongoDB & Mongoose
*   Socket.io (Real-time communication)
*   JWT (Authentication)
*   Bcrypt (Password Hashing)

**Frontend:**
*   React.js (Vite)
*   Tailwind CSS (Styling)
*   Socket.io Client

## 🚀 Getting Started

### Prerequisites

*   Node.js installed
*   MongoDB installed locally or a MongoDB Atlas URI

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/IjlalFurqaan/Chat-App.git
    cd Chat-App
    ```

2.  **Install Dependencies:**
    *   **Root (Backend):**
        ```bash
        npm install
        ```
    *   **Frontend:**
        ```bash
        npm install --prefix Frontend
        ```

3.  **Environment Setup:**
    *   Copy `.env.example` to `.env` in the root directory:
        ```bash
        cp .env.example .env
        ```
    *   Update `.env` with your credentials:
        ```env
        PORT=5000
        MONGO_DB_URI=your_mongodb_connection_string
        JWT_SECRET=your_super_secret_key
        NODE_ENV=development
        ```

### Running the App

You can run the backend and frontend separately (for now):

1.  **Start Backend:**
    ```bash
    npm run server
    ```
    *Server runs on http://localhost:5000*

2.  **Start Frontend:**
    ```bash
    cd Frontend
    npm run dev
    ```
    *Client runs on http://localhost:5173*

## 🔮 Future Improvements

*   [ ] Docker Support
*   [ ] Group Chats
*   [ ] Image/File Sharing
*   [ ] User Status (Online/Offline)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
# KOTO.

> **Chat without the cognitive debris.**  
> A neuro-inclusive, real-time messaging platform designed for focus and emotional clarity.

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Node.js](https://img.shields.io/badge/Node.js-20.x-green.svg)
![React](https://img.shields.io/badge/React-18.x-blue.svg)
![Socket.io](https://img.shields.io/badge/Socket.io-Real--Time-white.svg)

---

## 🏗️ Architecture & Engineering Philosophy

Koto is built on the **MERN** stack (MongoDB, Express, React, Node.js), but it deviates from standard boilerplate by prioritizing **client-side intelligence** and **accessibility-first design**.

### System Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                        CLIENT LAYER                              │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │  React 18 + Vite (Frontend)                                │ │
│  │  • Zustand (State Management)                              │ │
│  │  • Tailwind CSS + DaisyUI (Styling)                        │ │
│  │  • TensorFlow.js (Client-Side Sentiment Analysis)          │ │
│  └────────────────────────────────────────────────────────────┘ │
│           │                                      ▲               │
│           │ HTTP/REST                            │ WebSocket     │
│           ▼                                      │               │
└───────────────────────────────────────────────────────────────────┘
            │                                      │
            │                                      │
┌───────────▼──────────────────────────────────────┼───────────────┐
│                     SERVER LAYER                 │               │
│  ┌─────────────────────────────┐    ┌───────────▼───────────┐   │
│  │  Express REST API           │    │  Socket.io Server     │   │
│  │  • JWT Authentication       │    │  • Real-Time Events   │   │
│  │  • RESTful Endpoints        │    │  • Room Management    │   │
│  │  • Middleware Stack         │    │  • Message Broadcasting│  │
│  └─────────────┬───────────────┘    └───────────────────────┘   │
│                │                                                 │
│                │ Mongoose ODM                                    │
│                ▼                                                 │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │           MongoDB Atlas (Database)                      │    │
│  │  • Users Collection                                     │    │
│  │  • Messages Collection                                  │    │
│  │  • Conversations Collection                             │    │
│  └─────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────┘

                    Data Flow Architecture
    
User Types Message → Client Sentiment Analysis → Optimistic UI Update
                                    ↓
                        Socket.io Emit to Server
                                    ↓
                    Server Validates & Saves to MongoDB
                                    ↓
                Socket.io Broadcast to Room Participants
                                    ↓
                    Recipients Receive Real-Time Update
```

### Core Technical Pillars

1.  **Real-Time Bi-Directional Communication:**
    *   Leverages `socket.io` for millisecond-latency message delivery.
    *   Implements **Optimistic UI** updates via Zustand stores to make the app feel instant even on slow networks.

2.  **Client-Side AI (Edge Intelligence):**
    *   **Sentiment Texture:** Uses a lightweight heuristic (simulating TensorFlow.js logic) to analyze message sentiment *as the user types*. This happens entirely in the browser, ensuring **zero latency** and **100% privacy** (keystrokes are not sent to the server for analysis).

3.  **Neuro-Inclusive UX (Zen Mode):**
    *   A dedicated "Zen Mode" toggles CSS classes to strip away non-essential UI elements (timestamps, avatars, decorative gradients), reducing cognitive load for users with ADHD or sensory processing sensitivity. Achieved via high-performance CSS transforms rather than React render cycles to maintain 60fps.

---

## ✨ Standout Features

### 1. Visual Sentiment Topology
Instead of ambiguous texts, Koto visualizes the *tone* of your message before you send it.
*   **Happy/Positive:** Soft, organic borders with calming green hues.
*   **Angry/Negative:** Jagged, sharp borders with alert red cues.
*   **Technical Implementation:** Real-time string analysis hooked into React state, driving dynamic Tailwind utility classes.

### 2. Zen Mode (Cognitive Shield)
A single toggle that strictly adheres to **WCAG 2.2 AA** guidelines for distraction minimization.
*   **Mechanism:** Global state controls a `.zen-mode` class on the root container.
*   **Effect:** CSS Descendant selectors (`.zen-mode .avatar { display: none }`) instantly purge visual noise without expensive DOM re-renders.

### 3. "Kashmir" Aesthetic
A bespoke design system moved away from the "Silicon Valley Blue" standard.
*   **Palette:** Sumi Ink (`#1c1c1c`), Bamboo (`#d4a373`), Matcha (`#a3b18a`).
*   **Glassmorphism:** Heavy use of `backdrop-filter: blur()` to create depth without clutter.

---

## 🛠️ Technology Stack

| Layer | Technology | Rationale |
| :--- | :--- | :--- |
| **Frontend** | React 18 (Vite) | High-performance Virtual DOM & fast HMR. |
| **Styling** | Tailwind CSS + DaisyUI | Utility-first CSS for rapid UI iteration & consistent design tokens. |
| **State** | Zustand | Minimalist, hook-based state management (simpler & faster than Redux). |
| **Backend** | Node.js + Express | Non-blocking I/O ideal for real-time concurrency. |
| **Database** | MongoDB + Mongoose | Flexible schema design for evolving message data structures. |
| **Real-Time** | Socket.io | Robust WebSocket wrapper with auto-reconnection & fallback strategies. |
| **Auth** | JWT (JSON Web Tokens) | Stateless, secure authentication flow stored in LocalStorage. |

---

## 🚀 Getting Started

### Prerequisites
*   Node.js v18+
*   MongoDB Instance (Local or Atlas)

### Installation

1.  **Clone the Monorepo:**
    ```bash
    git clone https://github.com/IjlalFurqaan/Chat-App.git
    cd Chat-App
    ```

2.  **Install Dependencies (Root + Frontend):**
    ```bash
    npm install
    npm install --prefix Frontend
    ```

3.  **Configuration:**
    *   Create a `.env` file in the root directory:
        ```env
        PORT=5000
        MONGO_DB_URI=your_mongodb_connection_string
        JWT_SECRET=your_super_secret_key
        NODE_ENV=development
        ```

4.  **Launch (Concurrent Mode):**
    *   This command boots both the Express API and the Vite Dev Server:
    ```bash
    npm run dev
    ```

---

## 🎯 Project Vision

*"I built Koto to prove that chat apps don't have to be noisy. They can be calm, intelligent, and beautiful."*

Koto represents a commitment to creating digital spaces that respect cognitive diversity and prioritize mental clarity over engagement metrics.

---

**© 2026 Koto Messaging.** *Built with code, coffee, and focus.*
# Fullstack App - Next.js + Nest.js + JSON Storage

Simple User CRUD application with Next.js frontend and Nest.js backend using JSON file storage (db.json).

## Project Structure

```
fullstack-app/
├── client/          # Next.js frontend (port 3000)
├── backend/         # Nest.js backend (port 3001)
├── db.json          # JSON database file
└── README.md
```

## Setup Instructions

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Start the backend server:
```bash
npm run start:dev
```

Backend will run on http://localhost:3001

### Frontend Setup

1. Navigate to client directory:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```

3. Start the frontend server:
```bash
npm run dev
```

Frontend will run on http://localhost:3000

## API Endpoints

- `GET http://localhost:3001/users` - Get all users
- `GET http://localhost:3001/users/:id` - Get single user
- `POST http://localhost:3001/users` - Create user (body: { name, email })
- `PUT http://localhost:3001/users/:id` - Update user (body: { name?, email? })
- `DELETE http://localhost:3001/users/:id` - Delete user

## Database

- JSON file storage at `backend/db.json`
- User model: id, name, email, createdAt, updatedAt
- Data persists in db.json file (can be committed to GitHub)

## Running the Application

1. Terminal 1 - Start backend:
```bash
cd backend
npm run start:dev
```

2. Terminal 2 - Start frontend:
```bash
cd client
npm run dev
```

3. Open http://localhost:3000 in your browser

# LearnHub

Light-theme LearnHub LMS with a React frontend, Express/MongoDB backend, authentication, dynamic courses, dashboard and AI Tutor endpoint.

## 1. Backend

```bash
cd server
npm install
```

Create `.env` from `.env.example` and set your MongoDB connection.

```bash
npm run seed
npm run dev
```

Backend: http://localhost:5000

## 2. Frontend

```bash
cd client
npm install
npm run dev
```

Frontend: http://localhost:5173

## Notes

- Courses are loaded from MongoDB through `/api/courses`.
- The seed file adds 8 sample courses.
- The AI Tutor endpoint is a safe placeholder until an AI provider/API key is connected.
- Replace `.env.example` with a real `server/.env`; never commit secrets.

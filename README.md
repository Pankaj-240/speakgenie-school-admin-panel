# SpeakGenie – School Admin Panel (Frontend Task)

This project is my implementation of the **School Admin Panel** frontend task shared by the SpeakGenie team. The goal was to convert the provided PDF design into a working React + Tailwind CSS application.

---

## 🛠 Tech Stack

- **React** (Vite)
- **React Router DOM** – for page routing
- **Tailwind CSS** – for styling
- **Lucide React** – for icons
- **Recharts** – for charts (dashboard & analytics)

---

## 🔗 Live Demo

▶ Hosted Link: Coming Soon

---

## 📂 Project Structure

```txt
speakgenie-school-admin-panel/
│
├─ src/
│  ├─ components/
│  │   └─ Sidebar.jsx
│  ├─ pages/
│  │   ├─ Dashboard/
│  │   │   ├─ Dashboard.jsx
│  │   │   └─ components/...
│  │   ├─ Leaderboard/
│  │   │   ├─ Leaderboard.jsx
│  │   │   └─ components/...
│  │   ├─ Students/
│  │   │   └─ Students.jsx
│  │   ├─ Analytics/
│  │   │   ├─ Analytics.jsx
│  │   │   └─ components/...
│  │   └─ Settings/
│  │       ├─ Settings.jsx
│  │       └─ components/...
│  ├─ App.jsx
│  └─ main.jsx
│
├─ package.json
└─ README.md
```

---

## ✨ Features Implemented

### 📊 Dashboard
- School overview with welcome section
- KPI cards for Students, Classes, Performance
- Enrollment bar chart
- Performance donut chart
- Top champions grid

### 🏆 Leaderboard
- Champion podium UI
- Search + filter UI (frontend functionality)
- Ranking list with accuracy & points
- Highlight cards for top metrics

### 🎓 Students Page
- Student cards with avatar, XP, accuracy
- Search & class filter UI

### 📈 Analytics Page
- Summary stats display
- Performance distribution pie chart
- Skill-based progress bars
- Engagement trend bar chart

### ⚙ Settings Page
- Profile update section
- Language & timezone preferences
- Notification management switches
- Data export & backup actions

---

## How to Run Locally

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev
```

Then open the app in browser:
👉 http://localhost:5173/

---

## 📝 Task Information

**Assigned by:** SpeakGenie Team  
**Purpose:** Convert PDF UI into fully functional frontend project  
**Submission Type:** Interview Task

---

## 👤 Developer

Pankaj Bisht

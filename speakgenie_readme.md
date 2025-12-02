# 🎓 SpeakGenie – School Admin Panel

> A modern, responsive admin dashboard for managing school performance metrics, student data, leaderboards, and analytics.

This project is my implementation of the **School Admin Panel** frontend task shared by the SpeakGenie team. The goal was to convert the provided PDF design into a fully functional React + Tailwind CSS application.

---

## 🚀 Live Demo

🔗 **[View Live Application](#)** *(Coming Soon)*

---

## 📸 Screenshots

*Add screenshots of your application here*

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React (Vite)** | Frontend framework with fast build tooling |
| **React Router DOM** | Client-side routing and navigation |
| **Tailwind CSS** | Utility-first CSS framework for styling |
| **Lucide React** | Beautiful & consistent icon library |
| **Recharts** | Composable charting library for data visualization |

---

## ✨ Features Implemented

### 📊 Dashboard
- School overview with personalized welcome section
- Key Performance Indicator (KPI) cards displaying:
  - Total Students
  - Active Classes
  - Average Performance
- Interactive enrollment bar chart showing monthly trends
- Performance donut chart with percentage breakdown
- Top champions grid showcasing high achievers

### 🏆 Leaderboard
- Eye-catching champion podium UI (1st, 2nd, 3rd place)
- Search functionality for finding specific students
- Class filter for targeted leaderboard views
- Comprehensive ranking list with:
  - Student accuracy percentages
  - Point totals
  - Rank badges
- Highlight cards displaying top metrics and achievements

### 🎓 Students Page
- Student profile cards featuring:
  - Avatar images
  - XP (experience points)
  - Accuracy metrics
- Real-time search capability
- Class-based filtering system
- Responsive grid layout

### 📈 Analytics Page
- Summary statistics dashboard
- Performance distribution pie chart
- Skill-based progress bars showing:
  - Reading comprehension
  - Speaking fluency
  - Vocabulary mastery
  - Grammar accuracy
- Student engagement trend bar chart
- Time-based performance analysis

### ⚙️ Settings Page
- Profile management section
  - Name and email updates
  - Profile picture upload
- Preferences configuration:
  - Language selection
  - Timezone settings
- Notification management:
  - Email notifications toggle
  - Push notifications toggle
  - SMS alerts toggle
- Data management:
  - Export data functionality
  - Backup & restore options
  - Account deletion (with confirmation)

---

## 📂 Project Structure

```
speakgenie-school-admin-panel/
│
├── src/
│   ├── components/
│   │   └── Sidebar.jsx              # Main navigation sidebar
│   │
│   ├── pages/
│   │   ├── Dashboard/
│   │   │   ├── Dashboard.jsx        # Main dashboard page
│   │   │   └── components/          # Dashboard-specific components
│   │   │       ├── KPICard.jsx
│   │   │       ├── EnrollmentChart.jsx
│   │   │       └── TopChampions.jsx
│   │   │
│   │   ├── Leaderboard/
│   │   │   ├── Leaderboard.jsx      # Leaderboard page
│   │   │   └── components/
│   │   │       ├── Podium.jsx
│   │   │       └── RankingList.jsx
│   │   │
│   │   ├── Students/
│   │   │   └── Students.jsx         # Students management page
│   │   │
│   │   ├── Analytics/
│   │   │   ├── Analytics.jsx        # Analytics dashboard
│   │   │   └── components/
│   │   │       ├── StatCard.jsx
│   │   │       └── SkillProgress.jsx
│   │   │
│   │   └── Settings/
│   │       ├── Settings.jsx         # Settings & preferences
│   │       └── components/
│   │           ├── ProfileSection.jsx
│   │           └── NotificationToggles.jsx
│   │
│   ├── App.jsx                      # Main app component with routes
│   ├── main.jsx                     # Application entry point
│   └── index.css                    # Global styles & Tailwind imports
│
├── public/                          # Static assets
├── package.json                     # Dependencies and scripts
├── vite.config.js                   # Vite configuration
├── tailwind.config.js               # Tailwind CSS configuration
└── README.md                        # Project documentation
```

---

## 🚦 Getting Started

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v16 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/speakgenie-school-admin-panel.git
   cd speakgenie-school-admin-panel
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   
   Navigate to: `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

The optimized production build will be created in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

---

## 📋 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create optimized production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality checks |

---

## 🎨 Design Highlights

- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, intuitive interface following current design trends
- **Consistent Styling**: Tailwind CSS utility classes for maintainable styling
- **Interactive Charts**: Dynamic data visualizations using Recharts
- **Smooth Navigation**: Seamless page transitions with React Router
- **Icon System**: Cohesive iconography using Lucide React

---

## 📝 Task Information

| Detail | Information |
|--------|-------------|
| **Assigned By** | SpeakGenie Team |
| **Purpose** | Convert PDF UI design into fully functional frontend project |
| **Submission Type** | Interview Task |
| **Timeline** | *Add your timeline here* |

---

## 🔮 Future Enhancements

- [ ] Backend integration with REST API
- [ ] User authentication and authorization
- [ ] Real-time data updates with WebSockets
- [ ] Advanced filtering and sorting options
- [ ] Export reports to PDF/Excel
- [ ] Dark mode support
- [ ] Multi-language support (i18n)
- [ ] Performance optimizations
- [ ] Unit and integration tests

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](#).

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is created as part of an interview task for SpeakGenie.

---

## 👤 Developer

**Pankaj Bisht**

- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- Email: your.email@example.com

---

## 🙏 Acknowledgments

- SpeakGenie Team for the opportunity and design specifications
- React and Vite communities for excellent documentation
- Tailwind CSS for the amazing utility-first framework
- Recharts for beautiful, composable charts

---

<div align="center">

**⭐ If you found this project interesting, please consider giving it a star! ⭐**

Made with ❤️ by Pankaj Bisht

</div>
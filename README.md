# 🚀 NextJs Projects

A collection of modern **Next.js 16** projects built with **React 19**, **TypeScript**, and **Tailwind CSS v4**.

---

## 📁 Projects

### 1. 🎓 Student Directory

> A campus directory app to browse students, departments, and academic specializations.

**Features:**
- Browse all students with search & filter
- View individual student profiles
- Explore departments and their specializations
- Nested dynamic routing (`/departments/[dept]/[specialization]`)
- Custom 404 page
- About page

**Routes:**
| Route | Description |
|---|---|
| `/` | Students listing page |
| `/students/[id]` | Individual student profile |
| `/departments` | All departments |
| `/departments/[dept]` | Department detail |
| `/departments/[dept]/[specialization]` | Specialization detail |
| `/about` | About page |

---

### 2. 🌍 Travel Destination Explorer

> A spatial travel catalogue to explore curated destinations organized by geographic region and terrain.

**Features:**
- Browse destinations with search & filter
- Detailed destination pages with geographic data
- Region-based exploration with continent → country → subregion hierarchy
- Trip planner page
- Cartographic terrain-validated data (WGS84 format)
- Custom 404 page
- About page

**Routes:**
| Route | Description |
|---|---|
| `/` | Destinations catalogue |
| `/destinations/[id]` | Destination detail page |
| `/regions` | Browse by regions |
| `/regions/[continent]/[country]/[subregion]` | Specific subregion |
| `/planner` | Trip planner |
| `/about` | About page |

---

## 🛠️ Tech Stack

| Technology | Version |
|---|---|
| Next.js | 16.4.2 |
| React | 19.3.0 |
| TypeScript | 5.x |
| Tailwind CSS | 4.x |

---

## ⚡ Getting Started

Each project runs independently. Navigate to the project folder and follow these steps:

```bash
# 1. Go to a project
cd student-directory
# or
cd travel-destination-explorer

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev
```

The app will be available at **http://localhost:3000**

---

## 📂 Project Structure

```
NextJs-Projects/
├── student-directory/
│   ├── src/
│   │   ├── app/            # App router pages
│   │   ├── components/     # Reusable UI components
│   │   ├── data/           # Student data
│   │   └── types/          # TypeScript types
│   └── package.json
│
├── travel-destination-explorer/
│   ├── src/
│   │   ├── app/            # App router pages
│   │   ├── components/     # Reusable UI components
│   │   ├── data/           # Travel destination data
│   │   └── types/          # TypeScript types
│   ├── public/             # Static images & assets
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## 👤 Author

**Ronit Kumar Soni**

- GitHub: [@RonitkumarSoni](https://github.com/RonitkumarSoni)

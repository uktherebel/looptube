# LoopTube MERN Project - Complete Folder Structure

## Project Root Directory

```
looptube/
├── server/                          # Backend - Express.js & Node.js
│   ├── config/
│   │   ├── database.js             # MongoDB connection
│   │   ├── jwt.js                  # JWT configuration
│   │   └── cloudinary.js           # Media upload config
│   ├── models/
│   │   ├── User.js                 # User authentication model
│   │   ├── LoopMark.js             # Video segment model
│   │   └── Playlist.js             # Playlist container model
│   ├── routes/
│   │   ├── auth.js                 # Auth routes
│   │   ├── loopMarks.js            # Loop mark CRUD
│   │   └── playlists.js            # Playlist CRUD
│   ├── middleware/
│   │   ├── auth.js                 # JWT verification
│   │   └── errorHandler.js         # Global error handling
│   ├── controllers/
│   │   ├── authController.js       # Auth logic
│   │   ├── loopMarkController.js   # Loop mark logic
│   │   └── playlistController.js   # Playlist logic
│   ├── utils/
│   │   ├── validators.js           # Input validation
│   │   └── responseHandler.js      # Response formatting
│   ├── .env
│   ├── .env.example
│   ├── .gitignore
│   ├── server.js
│   ├── index.js
│   ├── package.json
│   └── README.md
│
├── client/                          # Frontend - React & Vite
│   ├── src/
│   │   ├── components/
│   │   │   ├── auth/
│   │   │   │   ├── Login.jsx
│   │   │   │   └── Register.jsx
│   │   │   ├── layout/
│   │   │   │   ├── Header.jsx
│   │   │   │   ├── Navigation.jsx
│   │   │   │   └── ProtectedRoute.jsx
│   │   │   ├── loopMarks/
│   │   │   │   ├── Dashboard.jsx
│   │   │   │   ├── LoopMarkList.jsx
│   │   │   │   ├── LoopMarkCard.jsx
│   │   │   │   └── LoopMarkForm.jsx
│   │   │   ├── player/
│   │   │   │   ├── YouTubePlayer.jsx
│   │   │   │   └── PlayerPage.jsx
│   │   │   └── playlists/
│   │   │       ├── PlaylistList.jsx
│   │   │       ├── PlaylistForm.jsx
│   │   │       └── PlaylistDetail.jsx
│   │   ├── context/
│   │   │   └── AuthContext.jsx     # Auth state
│   │   ├── services/
│   │   │   └── api.js              # API instance
│   │   ├── styles/
│   │   │   ├── index.css
│   │   │   ├── Dashboard.css
│   │   │   ├── LoopMarkList.css
│   │   │   ├── LoopMarkCard.css
│   │   │   ├── LoopMarkForm.css
│   │   │   ├── YouTubePlayer.css
│   │   │   ├── PlayerPage.css
│   │   │   ├── PlaylistList.css
│   │   │   ├── PlaylistForm.css
│   │   │   ├── PlaylistDetail.css
│   │   │   └── PlaylistsPage.css
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── PlayerPage.jsx
│   │   │   └── PlaylistsPage.jsx
│   │   ├── hooks/
│   │   │   ├── useAuth.js
│   │   │   └── useFetch.js
│   │   ├── utils/
│   │   │   └── constants.js
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── main.jsx
│   │   └── index.html
│   ├── public/
│   │   ├── favicon.ico
│   │   └── logo.png
│   ├── .env
│   ├── .env.example
│   ├── .gitignore
│   ├── vite.config.js
│   ├── package.json
│   └── README.md
│
├── docs/
│   ├── API.md
│   ├── ARCHITECTURE.md
│   ├── SETUP.md
│   ├── DEPLOYMENT.md
│   └── CONTRIBUTING.md
├── .github/
│   └── workflows/
│       └── tests.yml
├── .gitignore
├── package.json
├── docker-compose.yml
├── Dockerfile
├── README.md
└── LICENSE
```

## Technology Stack

- **Backend:** Node.js, Express.js, MongoDB, Mongoose, JWT
- **Frontend:** React 18, Vite, Axios, React Router
- **Styling:** CSS3 with responsive design
- **Authentication:** JWT tokens
- **API:** RESTful with JSON responses

## Key Features

✅ User authentication with JWT
✅ YouTube video segment looping
✅ Loop mark creation/editing/deletion
✅ Playlist management with reordering
✅ Responsive UI design
✅ Error handling and validation
✅ Protected routes
✅ Loading and error states
✅ Professional styling system
✅ Auto-redirect on auth errors

## Statistics

- **Backend Files:** ~20
- **Frontend Components:** 15+
- **CSS Files:** 10+
- **Total Lines of Code:** ~2,282
- **Supported Features:** Authentication, Loop marks, Playlists, YouTube player

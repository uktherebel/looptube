# LoopTube - MERN YouTube Segment Looper

A full-stack MERN (MongoDB, Express, React, Node.js) application for creating and managing YouTube video segments with playlist functionality. Loop specific parts of YouTube videos and organize them into reusable playlists.

## Features

✅ **YouTube Video Looping** - Create loop marks for specific video segments with precise start/end times
✅ **User Authentication** - Secure JWT-based authentication system
✅ **Loop Mark Management** - Create, edit, view, and delete video segments
✅ **Playlist Management** - Organize loop marks into playlists with reordering support
✅ **Responsive UI** - Modern React interface with professional styling
✅ **Protected Routes** - Secure endpoints and UI components
✅ **Error Handling** - Comprehensive error management and validation

## Technology Stack

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT (JSON Web Tokens)
- **Validation:** Custom input validators

### Frontend
- **Library:** React 18
- **Build Tool:** Vite
- **HTTP Client:** Axios
- **Routing:** React Router
- **Styling:** CSS3 with responsive design

### Architecture
- RESTful API design
- Modular component structure
- Separation of concerns (Models, Routes, Controllers, Middleware)
- Context API for state management

## Project Structure

See [FOLDER_STRUCTURE.md](./FOLDER_STRUCTURE.md) for detailed directory organization.

```
looptube/
├── server/          # Express backend
├── client/          # React frontend
├── docs/            # Documentation
└── README.md        # This file
```

## Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Backend Setup

```bash
cd server
npm install
cp .env.example .env
# Configure .env with your MongoDB URI and JWT secret
npm run dev
```

### Frontend Setup

```bash
cd client
npm install
cp .env.example .env
# Configure .env with your API base URL
npm run dev
```

## Environment Variables

### Server (.env)
```
MONGODB_URI=mongodb://localhost:27017/looptube
JWT_SECRET=your-secret-key-here
PORT=5000
NODE_ENV=development
```

### Client (.env)
```
VITE_API_BASE_URL=http://localhost:5000/api
VITE_APP_NAME=LoopTube
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Create new account
- `POST /api/auth/login` - User login
- `GET /api/auth/verify` - Verify JWT token

### Loop Marks
- `GET /api/loopMarks` - Get all user's loop marks
- `GET /api/loopMarks/:id` - Get specific loop mark
- `POST /api/loopMarks` - Create new loop mark
- `PUT /api/loopMarks/:id` - Update loop mark
- `DELETE /api/loopMarks/:id` - Delete loop mark

### Playlists
- `GET /api/playlists` - Get all user's playlists
- `GET /api/playlists/:id` - Get specific playlist
- `POST /api/playlists` - Create new playlist
- `PUT /api/playlists/:id` - Update playlist
- `DELETE /api/playlists/:id` - Delete playlist
- `POST /api/playlists/:id/items` - Add item to playlist
- `DELETE /api/playlists/:id/items/:itemId` - Remove item from playlist
- `PUT /api/playlists/:id/reorder` - Reorder playlist items

## Development

### Running Tests
```bash
cd server
npm test

cd client
npm test
```

### Building for Production
```bash
# Backend
cd server
npm run build

# Frontend
cd client
npm run build
```

## Project Statistics

- **Total Lines of Code:** ~2,282
- **Backend Files:** ~20
- **Frontend Components:** 15+
- **CSS Files:** 10+
- **API Endpoints:** 15+

## Color Scheme

- **Primary:** #667eea (Blue)
- **Success:** #48bb78 (Green)
- **Danger:** #f56565 (Red)
- **Background:** #f5f5f5 (Light Gray)

## Key Features in Detail

### YouTube Segment Looping
Create precise video segments with start and end timestamps. The YouTube IFrame API integration allows seamless playback looping with auto-pause functionality.

### Playlist Management
Organize multiple loop marks into logical playlists. Supports reordering, adding/removing items, and quick access to favorite video segments.

### User Authentication
Secure JWT-based authentication system with password hashing and protected routes. Each user's data is isolated and secure.

### Responsive Design
Modern, mobile-friendly interface built with React and CSS3. Adapts seamlessly to different screen sizes.

## File Organization

For a complete breakdown of the folder structure, see [FOLDER_STRUCTURE.md](./FOLDER_STRUCTURE.md).

## Contributing

This is a portfolio project. For contribution guidelines, see [CONTRIBUTING.md](./docs/CONTRIBUTING.md).

## License

MIT License - See [LICENSE](./LICENSE) file for details.

## Author

**Usama Khalid** (@uktherebel)

## Support

For issues and questions, please open an issue on GitHub.

---

**Built with ♥ using MERN Stack**

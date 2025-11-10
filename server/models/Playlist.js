const mongoose = require('mongoose');

const playlistSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: [true, 'Playlist name required'],
    trim: true
  },
  description: String,
  loopMarks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'LoopMark'
  }],
  isPublic: {
    type: Boolean,
    default: false
  },
  color: {
    type: String,
    default: '#1DB954'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Playlist', playlistSchema);

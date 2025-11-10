const mongoose = require('mongoose');

const loopMarkSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  videoId: {
    type: String,
    required: [true, 'Video ID required']
  },
  videoTitle: String,
  startTime: {
    type: Number,
    required: [true, 'Start time required'],
    min: 0
  },
  endTime: {
    type: Number,
    required: [true, 'End time required'],
    min: 0
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: String,
  tags: [String],
  playlistIds: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Playlist'
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('LoopMark', loopMarkSchema);

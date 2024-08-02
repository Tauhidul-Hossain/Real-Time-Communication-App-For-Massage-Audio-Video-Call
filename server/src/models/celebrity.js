const mongoose = require('mongoose');

const celebritySchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true }, // e.g., Actor, Musician, etc.
    bio: { type: String },
    rating: { type: Number, default: 0 },
    profileImage: { type: String }, // URL to the profile image
    reviews: [
        {
            userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
            comment: String,
            rating: Number,
            date: { type: Date, default: Date.now },
        }
    ],
    // Add more fields as necessary
});

const Celebrity = mongoose.model('Celebrity', celebritySchema);

module.exports = Celebrity;

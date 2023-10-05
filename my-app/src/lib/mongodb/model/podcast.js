import mongoose from "mongoose";

const Schema = mongoose.Schema;
const podcastSchema = new Schema({
    url: {
        type: String,
        required: true
    }
})

// prevent overwrite
module.exports = module.exports = mongoose.models.Podcast || mongoose.model('Podcast', podcastSchema);
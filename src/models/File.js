const mongoose = require('mongoose');

const File = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    },
},
    {
        timeStamps: true,
        toObject: { virtuals: true},
        toJSON: { virtuals: true}
    }
);
File.virtual('url').get(function () {
    const url = process.env.URL || 'http://localhost:3333'
    return `${url}/files/${encodeURIComponent(this.path)}`
});

module.exports = mongoose.model('File', File);
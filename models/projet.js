const mongoose = require('mongoose');

    const UserSchema = new mongoose.Schema({
        NomDuProjet: String,
        Description: String,
        Technologie: String,
        DateDébut: Date,
        DateFin: Date
    });

    module.exports = mongoose.model('Projet', UserSchema);
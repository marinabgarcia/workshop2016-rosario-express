'use strict';

const band = require('../models/BandModel').instance;

class BandController {

    getList (req, res) {
        band.getList()
            .then(documents => res.json(documents))
            .catch(error => res.json({error: error.message}));
    }
}
exports.BandController = BandController;
exports.instance = new BandController();
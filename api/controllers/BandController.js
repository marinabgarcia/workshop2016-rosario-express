'use strict';

const band = require('../models/BandModel').instance;

class BandController {

    /* getList */
    getList (req, res) {
        band.getList()
            .then(documents => res.json(documents))
            .catch(error => res.json({error: error.message}));
    }

    /** */
	getBandByID(req, res) {
        console.log("Se pidio una banda por el id");
        return "{id:" + res.id+ "}";
    }

    /** */
	getBandArtistByIDBand(req, res) {
        console.log("Se pidio una banda por el id");
        return "{id:" + res.id+ "}";
    }


}
exports.BandController = BandController;
exports.instance = new BandController();
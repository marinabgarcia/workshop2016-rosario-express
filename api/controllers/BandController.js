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
        band.getBandByID(req.params.bandId)
        .then(documents => res.json(documents || {}))
            .catch(error => res.json({error: error.message}));
    }



    /** */
	getArtistsByIDBand(req, res) {
        band.getArtistsByIDBand(req.params.bandId)
        .then(documents => res.json(documents || {}))
            .catch(error => res.json({error: error.message}));
    }

 /** */
	getAlbumsByIDBand(req, res) {
        band.getAlbumsByIDBand(req.params.bandId)
        .then(documents => res.json(documents || {}))
            .catch(error => res.json({error: error.message}));
    }
    


}
exports.BandController = BandController;
exports.instance = new BandController();
'use strict';

const dataBase = require('../../database/Database').instance;
const docTypes = require('../../database/docTypes');

class TrackModel {

    getList () {
        return dataBase.find({docType: docTypes.TRACK})
    }

    getTrackByID (idTrack){
    	return dataBase.findOne({_id: idTrack, docType: docTypes.TRACK})
    } 
}
module.exports.TrackModel = TrackModel;
module.exports.instance = new TrackModel();
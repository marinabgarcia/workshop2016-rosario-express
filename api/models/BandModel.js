'use strict';

const dataBase = require('../../database/Database').instance;
const docTypes = require('../../database/docTypes');


class BandModel {

    getList () {
        return dataBase.find({docType: docTypes.BAND})
    }


	/** */
	getBandByID(bandId) {
		console.log("Se va a traer la banda para el id: " + bandId);
	    return dataBase.findOne({_id: bandId, docType: docTypes.BAND}); 
    }

    getArtistsByIDBand(bandId){
    	return new Promise((resolve, reject) => {
    		this.getBandByID(bandId)
    		.then(function(band){
    			return dataBase.find({_id:{$in:band.artists}, docType: docTypes.ARTIST} );
    		})
    		.then(function(artists){

    			resolve(artists);
			})
			.catch(function(error){
				reject(error);
			})
		})

    	

    	return null;
    }

	getBandByID(bandId) {
		console.log("Se va a traer la banda para el id: " + bandId);
	    return dataBase.findOne({_id: bandId, docType: docTypes.BAND}); 
    }

    /** */
    getAlbumsByIDBand(bandId){
    	return new Promise((resolve, reject) => {
    		this.getBandByID(bandId)
    		.then(function(band){
    			return dataBase.find({_id:{$in:band.albums}, docType: docTypes.ALBUM} );
    		})
    		.then(function(albums){

    			resolve(albums);
			})
			.catch(function(error){
				reject(error);
			})
		})

    	

    	return null;
    }
    
}
module.exports.BandModel = BandModel;
module.exports.instance = new BandModel();
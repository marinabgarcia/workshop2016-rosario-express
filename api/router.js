const router = require('express').Router();
const colors = require('colors/safe');
const trackController = require('./controllers/TrackController').instance; //Sample controller
const bandController = require('./controllers/BandController').instance;

// Specific router middleware that shows the request timestamp
router.use((req, res, next) => {
    console.log(`${colors.green('Requesting: ')} ${req.method}  ${req.path}  -> Time: `, Date.now());
    next();
});

// API Routes
router.get('/tracks', trackController.getList); //Sample route

/*Ruta: /bands
    Método: GET
    Descripción: Retorna una lista de bandas
*/
router.get('/bands', bandController.getList);

/*Ruta: /bands/:bandId
    Método: GET
    Descripción: Retorna una banda en particular
*/
router.get('/bands/:bandId', function(req, res, next) { bandController.getBandByID(req.params.bandId) });

/*Ruta: /bands/:bandId/artists
    Método: GET
    Descripción: Retorna los artistas pertenecientes a una banda
*/
router.get('/bands/:bandId/artists', function(req, res, next) { bandController.getArtistsByIDBand(req.params.bandId) });

/*Ruta: /bands/:bandId/albums
    Método: GET
    Descripción: Retorna la lista de los albumnes de una banda
 */
router.get('/bands/:bandId/albums', function(req, res, next) { bandController.getAlbumsByIDBand(req.params.bandId) });

/*Ruta: /tracks/:trackId
   Método: GET
   Descripción: Retorna los datos de un track en particular
*/
router.get('/tracks/:trackId', function(req, res, next) { trackController.getTrackByID(req.params.trackId) });

/*Ruta: /tracks/:trackId/comments
    Método: GET
    Descripción: Retorna los comentarios asignados a un track en particular
*/
router.get('/tracks/:trackId', function(req, res, next) { trackController.getCommentsByIDTrack(req.params.trackId) });

/*Ruta: /comments
    Método: POST
    Descripción: Agrega un comentario a un track
*/
router.post('/tracks/:trackId', function(req, res, next) { trackController.addComment(req.params.trackId) });

module.exports = router;

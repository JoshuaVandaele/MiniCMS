// Importer les modules nécessaires
const express = require('express');
const morgan = require('morgan');
const ejs = require('ejs');
const path = require('path');

//Affichage du logo dans les logs
require('./modules/initLogs.js')();

//Controlleur
const backEndController = require('./modules/backEndController.js');

// Créer une instance d'Express
const app = express();
server = require("http").createServer(app);

// Configuration du moteur de template EJS
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Middleware pour l'enregistrement des journaux avec Morgan
app.use(morgan('dev'));

// Routes
app.use(express.static("views/static/"));

app.get('/', (req, res) => {
  backEndController(req, res, 0);
});

app.get('/:pageID', (req, res) => {
  backEndController(req, res, parseInt(req.params.pageID, 10));//Everything is managed there
});

app.get('/img/:template/:imgName', (req, res) => {
  const { template, imgName } = req.params;

  if( !( /^(?!.*\.\.)[a-zA-Z0-9.\-_]{1,64}$/.test(template) && /^(?!.*\.\.)[a-zA-Z0-9.\-_]{1,64}$/.test(imgName) ) ){
    res.status(404).render('404.ejs');
    return;
  }

  const imagePath = path.join(__dirname, 'views', template, 'img', imgName);

  //Send picture
  //TODO : Add 404
  res.sendFile(imagePath);
});

// Démarrer le serveur sur le port 3000
const PORT = process.env.PORT || 3000;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});

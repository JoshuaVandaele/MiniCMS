// Importer les modules nécessaires
const express = require('express');
const morgan = require('morgan');
const ejs = require('ejs');

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
  // Utiliser EJS pour rendre une vue (par exemple, views/index.ejs)
  res.render('index.ejs', { title: 'Mon Serveur Express' });
});

app.get('/:pageID', (req, res) => {
  backEndController(req, res, parseInt(req.params.pageID, 10));//Everything is managed there
});

// Démarrer le serveur sur le port 3000
const PORT = process.env.PORT || 3000;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});

var throng = require('throng');
var WORKERS = process.env.WEB_CONCURRENCY || 1;
var PORT = process.env.PORT || 3000;

throng({
	  workers: WORKERS,
	  lifetime: Infinity,
	  start: start
	});

function start() {
	 
	var express = require('express');
	var exphbs  = require('express-handlebars');
	var HandlebarsIntl = require('handlebars-intl');
	var path = require('path');
	var fs = require("fs");
	
	var bodyParser = require('body-parser');
	
	//Authentication module.
	var auth = require('http-auth');
	var digest = auth.digest({
	    realm: "Private area",
	    file: __dirname + "/.htpasswd"
	});
	
	
	
	var app = express();
	app.use(auth.connect(digest));
	app.set('port', PORT);
	app.set('default locale', 'it-IT');
	
	global.js_path="/dist/js";
	global.images_path="/dist/images";
	global.css_path="/dist/css";
	
	var hbs = exphbs.create({
	  defaultLayout: 'main',
	  extname: '.hbs',
	  layoutsDir: "views/layouts/",
	  partialsDir: "views/partials/",
	  // Specify helpers which are only registered on this instance.
	  helpers: {
	    js_path: global.js_path,
	    images_path: global.images_path,
	    css_path: global.css_path
	  },
	
	});
	
	HandlebarsIntl.registerWith(hbs.handlebars);
	app.use(require('./middleware/intl'));
	
	app.use(bodyParser.json()); // support json encoded bodies
	app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
	
	
	var dati = require('./data/dati.js');
	
	
	
	// Esportare excel dal sito, convertire in csv (modificando i campi con accento) e convertire in JSOn con http://www.convertcsv.com/csv-to-json.htm
	
	var contents = fs.readFileSync("./data/invitati.json");
	global.invitati = JSON.parse(contents);
	//console.log(global.invitati);
	/*
	isInvitatoValid = checkInviato("Norata", "Fabio", invitati);
	console.log("Norata Fabio isInvitatoValid="+isInvitatoValid);
	
	isInvitatoValid = checkInviato("Norata", "Francesco", invitati);
	console.log("Norata Francesco isInvitatoValid="+isInvitatoValid);
	*/
	
	function getContext(theme_color) {
	  return {
	    intl: {locales: 'it-IT'},
	    wedding_date: new Date(2017,5,10,16,0), // Num mese -1
	    title: "Fabio & Elena",
	    color_theme: theme_color,
	    our_story: dati.our_story(theme_color),
	    guests: dati.guests,
	    events: dati.events(theme_color),
	    gallery: dati.gallery(theme_color),
	  };
	}
	
	app.engine('.hbs', hbs.engine);
	app.set('view engine', '.hbs');
	app.use("/dist", express.static(path.join(__dirname, 'dist')));
	
	app.get('/', function (req, res) {
	    res.render('index', getContext("my-custom-style"));
	});
	
	app.post('/checkinvitato', function (req, res) {
	//	console.log(req.body);
	  res.send(checkInviato(req.body.surname, req.body.name));
	});
	
	app.listen(app.get('port'), function() {
	    console.log('App is running, server is listening on port ', app.get('port'));
	});
	
	function checkInviato(cognome, nome) {
	//	console.log(cognome+" "+nome);
	    var i, len = global.invitati.length;
	
	    for (i = 0; i < len; i++) {
	        cognomeFound = (global.invitati[i] && global.invitati[i].hasOwnProperty("COGNOME") && invitati[i]["COGNOME"].toUpperCase()===cognome.toUpperCase());
	        nomeFound = (global.invitati[i] && global.invitati[i].hasOwnProperty("NOME") && invitati[i]["NOME"].toUpperCase()===nome.toUpperCase());
	        if (cognomeFound & nomeFound) return true;
	    }
	    return false;
	}
}
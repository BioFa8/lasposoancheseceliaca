var express = require('express');
var exphbs  = require('express-handlebars');
var HandlebarsIntl = require('handlebars-intl');
var path = require('path');
var fs = require("fs");

var app = express();
app.set('port', (process.env.PORT || 3000));
app.set('default locale', 'it-IT');

var js_path= "/dist/js";
var images_path= "/dist/images";
var css_path= "/dist/css";

var hbs = exphbs.create({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: "views/layouts/",
  partialsDir: "views/partials/",
  // Specify helpers which are only registered on this instance.
  helpers: {
    js_path: js_path,
    images_path: images_path,
    css_path: css_path
  },

});

HandlebarsIntl.registerWith(hbs.handlebars);
app.use(require('./middleware/intl'));

var our_story = function(theme_color) {
  return [
    {
      date: "02.04.2014",
      image: images_path+"/"+theme_color+"/port2.jpg",
      title:"Il giorno che ci incontrammo",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
    },
    {
      date: "15.11.2014",
      image: images_path+"/"+theme_color+"/port3.jpg",
      youtube: "http://www.youtube.com/embed/hEowkXOP_Wg?rel=0",
      title:"La nostra prima partita",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
    },
    {
      date: "01.01.2015",
      image: images_path+"/"+theme_color+"/port1.jpg",
      title:"Finalmente outing",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
    },
    {
      date: "12.08.2016",
      image: images_path+"/"+theme_color+"/port4.jpg",
      title:"Il nostro primo vero viaggio",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
    },
    {
      date: "05.11.2016",
      image: images_path+"/"+theme_color+"/port5.jpg",
      title:"La proposta",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
    },
    /*
    {
      date: "03.02.2015",
      image: images_path+"/"+theme_color+"/port6.jpg",
      title:"Bridesmaids",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
    },*/
  ];
};

var guests = [
  {
    image: {
      src: images_path+"/br1.jpg",
      alt: "Kame"
    },
    title: "<span>Testimone Sposo</span> Daniele",
    nickname: "Kame"
  },
  {
    image: {
      src: images_path+"/br2.jpg",
      alt: "Query"
    },
    title: "<span>Testimone Sposa</span> Fabiana",
    nickname: "Query"
  },
  {
    image: {
      src: images_path+"/br5.jpg",
      alt: "Fede"
    },
    title: "<span>Testimone Sposa</span> Federica",
    nickname: "Sorellona"
  },
  {
    image: {
      src: images_path+"/br3.jpg",
      alt: "Giannone"
    },
    title: "<span>Testimone Sposo</span> Giovanni",
    nickname: "Giannone"
  },
  {
    image: {
      src: images_path+"/br4.jpg",
      alt: "CoCamion"
    },
    title: "<span>Testimone Sposo</span> Renato",
    nickname: "CoCamion"
  },
  {
    image: {
      src: images_path+"/br6.jpg",
      alt: "Saruz"
    },
    title: "<span>Testimone Sposa</span> Sara",
    nickname: "Saruz"
  },
  
];

var events = function(theme_color) {
  return [
    {
      date: "03.12.2013",
      image: images_path+"/"+theme_color+"/port7.jpg",
      title:"Colosseo",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
    },
    {
      date: "03.01.2014",
      image: images_path+"/"+theme_color+"/port8.jpg",
      youtube: "http://www.youtube.com/embed/hEowkXOP_Wg?rel=0",
      title:"Fori Imperiali",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
    },
    {
      date: "12.05.2014",
      image: images_path+"/"+theme_color+"/port9.jpg",
      title:"Altare della Patria",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
    },
    {
      date: "24.08.2014",
      image: images_path+"/"+theme_color+"/port10.jpg",
      title:"The Proposal",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
    },
    {
      date: "10.01.2015",
      image: images_path+"/"+theme_color+"/port11.jpg",
      title:"Here comes the baby",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
    },
    {
      date: "03.02.2015",
      image: images_path+"/"+theme_color+"/port12.jpg",
      title:"Bridesmaids",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
    },
  ];
};

var gallery = function(theme_color) {
  return [
    {
      image: {
        src: images_path+"/"+theme_color+"/port1.jpg",
        alt: "Gallery 1"
      },
      where: "Hawaii",
      when: "In late August, on a family vacation to Oahu"
    },
    {
      image: {
        src: images_path+"/"+theme_color+"/port2.jpg",
        alt: "Gallery 2"
      },
      where: "New Zealand",
      when: "In Summer 2015"
    },
    {
      image: {
        src: images_path+"/"+theme_color+"/port3.jpg",
        alt: "Gallery 3"
      },
      where: "Honeymoon",
      when: "February 5, 2015 / New-York, USA"
    },
    {
      image: {
        src: images_path+"/"+theme_color+"/port4.jpg",
        alt: "Gallery 4"
      },
      where: "Honeymoon",
      when: "February 5, 2015 / New-York, USA"
    },
    {
      image: {
        src: images_path+"/"+theme_color+"/port5.jpg",
        alt: "Gallery 5"
      },
      where: "Hawaii",
      when: "In late August, on a family vacation to Oahu"
    },
    {
      image: {
        src: images_path+"/"+theme_color+"/port6.jpg",
        alt: "Gallery 6"
      },
      where: "New Zealand",
      when: "In Summer 2015"
    },
  ];
};

// Esportare excel dal sito, convertire in csv (modificando i campi con accento) e convertire in JSOn con http://www.convertcsv.com/csv-to-json.htm
/*
var contents = fs.readFileSync("invitati.json");
var invitati = JSON.parse(contents);
//console.log(invitati);
isInvitatoValid = checkInviato("Norata", "Fabio", invitati);
console.log("Norata Fabio isInvitatoValid="+isInvitatoValid);

isInvitatoValid = checkInviato("Norata", "Francesco", invitati);
console.log("Norata Francesco isInvitatoValid="+isInvitatoValid);
*/

function getContext(theme_color) {
  return {
    intl: {locales: 'it-IT'},
    wedding_date: new Date(2017,5,10), // Num mese -1
    title: "Elena & Fabio",
    color_theme: theme_color,
    our_story: our_story(theme_color),
    guests: guests,
    events: events(theme_color),
    gallery: gallery(theme_color),
  };
}

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.use("/dist", express.static(path.join(__dirname, 'dist')));

app.get('/', function (req, res) {
    res.render('index', getContext("brown"));
});

app.get('/blue', function (req, res) {
    res.render('index', getContext("blue"));
});

app.get('/red', function (req, res) {
  res.render('index', getContext("red"));
});

app.get('/pink', function (req, res) {
  res.render('index', getContext("pink"));
});

app.get('/brown', function (req, res) {
  res.render('index', getContext("brown"));
});

app.listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});

function checkInviato(cognome, nome, invitati) {
    var i, len = invitati.length;

    for (i = 0; i < len; i++) {
        cognomeFound = (invitati[i] && invitati[i].hasOwnProperty("COGNOME") && invitati[i]["COGNOME"].toUpperCase()===cognome.toUpperCase());
        nomeFound = (invitati[i] && invitati[i].hasOwnProperty("NOME") && invitati[i]["NOME"].toUpperCase()===nome.toUpperCase());
        if (cognomeFound & nomeFound) return true;
    }
    return false;
}

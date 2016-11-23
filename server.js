var express = require('express');
var exphbs  = require('express-handlebars');
var path = require('path');
var fs = require("fs");

var port = process.env.port || 8080;

var app = express();

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
    css_path: css_path,
    foo: function () { return 'FOO!'; },
    bar: function () { return 'BAR!'; }
  },

});

var our_story = function(theme_color) {
  return [
    {
      date: "03.12.2013",
      image: images_path+"/"+theme_color+"/port2.jpg",
      title:"The day we met",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
    },
    {
      date: "03.01.2014",
      image: images_path+"/"+theme_color+"/port3.jpg",
      youtube: "http://www.youtube.com/embed/hEowkXOP_Wg?rel=0",
      title:"Our first holiday",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
    },
    {
      date: "12.05.2014",
      image: images_path+"/"+theme_color+"/port1.jpg",
      title:"First dinner together",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
    },
    {
      date: "24.08.2014",
      image: images_path+"/"+theme_color+"/port4.jpg",
      title:"The Proposal",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
    },
    {
      date: "10.01.2015",
      image: images_path+"/"+theme_color+"/port5.jpg",
      title:"Here comes the baby",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
    },
    {
      date: "03.02.2015",
      image: images_path+"/"+theme_color+"/port6.jpg",
      title:"Bridesmaids",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
    },
  ];
};
var guests = [
  {
    image: {
      src: images_path+"/br1.jpg",
      alt: "Best Man"
    },
    title: "<span>Best Man</span> Maxx Frazer",
    nickname: "Best Haircut"
  },
  {
    image: {
      src: images_path+"/br2.jpg",
      alt: "Maid Of Honor"
    },
    title: "<span>Maid of Honor</span> Alina Gilman",
    nickname: "Made in Georgia"
  },
  {
    image: {
      src: images_path+"/br3.jpg",
      alt: "James"
    },
    title: "<span>Groomsman</span> James Petersen",
    nickname: "MNTN"
  },
  {
    image: {
      src: images_path+"/br4.jpg",
      alt: "Justin"
    },
    title: "<span>Groomsman</span> Justin Allen",
    nickname: "Hello Brooklyn"
  },
  {
    image: {
      src: images_path+"/br5.jpg",
      alt: "Suesen"
    },
    title: "<span>Bridesmaid</span> Suisen Cram<",
    nickname: "Yes, I’m from Iowa"
  },
  {
    image: {
      src: images_path+"/br6.jpg",
      alt: "Kate"
    },
    title: "<span>Bridesmaid</span> Kate Gaffney",
    nickname: "O-H-I-O"
  },
  {
    image: {
      src: images_path+"/br7.jpg",
      alt: "Nick"
    },
    title: "<span>Groomsman</span> Nick Barker",
    nickname: "Jimmy Nickles"
  },
  {
    image: {
      src: images_path+"/br8.jpg",
      alt: "Nate"
    },
    title: "<span>Groomsman</span> Nate Lourenco",
    nickname: "Ivan Drago"
  },
  {
    image: {
      src: images_path+"/br9.jpg",
      alt: "Madison"
    },
    title: "<span>Bridesmaid</span> Madison Le",
    nickname: "Whose Garden?"
  },
  {
    image: {
      src: images_path+"/br10.jpg",
      alt: "Lydia"
    },
    title: "<span>Bridesmaid</span> Lydia Cram",
    nickname: "Sister. Sister"
  },
];

var events = function(theme_color) {
  return [
    {
      date: "03.12.2013",
      image: images_path+"/"+theme_color+"/port7.jpg",
      title:"The day we met",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
    },
    {
      date: "03.01.2014",
      image: images_path+"/"+theme_color+"/port8.jpg",
      youtube: "http://www.youtube.com/embed/hEowkXOP_Wg?rel=0",
      title:"Our first holiday",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
    },
    {
      date: "12.05.2014",
      image: images_path+"/"+theme_color+"/port9.jpg",
      title:"First dinner together",
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

app.listen(port, function () {
  console.log('Example app listening on port 3000!');
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

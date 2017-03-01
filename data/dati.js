var our_story = function(theme_color) {
  return [
    {
      date: "02.04.2014",
      image: global.images_path+"/"+theme_color+"/dlbi.jpg",
      title:"Il giorno che ci incontrammo",
      desc: "Non ci sono foto a testimonianza di questo giorno, però ci sono delle persone, fatevelo raccontare da loro. Se volete scriveteci, vi mandiamo un messaggio in privato ^_^"
    },
    {
      date: "15.11.2014",
      image: global.images_path+"/"+theme_color+"/sco_nz.jpg",
      youtube: "https://www.youtube.com/embed/5Z9xoHf5eQc?rel=0",
      title:"La nostra prima partita",
      desc: "Cosa regalare per il primo compleanno assieme? Direi una bella partita degli All Blacks VS Scozia nella magnifica Edimburgo. Birra, patatine con cheddar appiccicoso e un sacco di freddo XD"
    },
    {
      date: "01.01.2015",
      image: global.images_path+"/"+theme_color+"/outing.jpg",
      title:"Finalmente outing",
      desc: "Vabbè l’abbiamo tenuto un pò segreto per gustarci i primi mesi, è stato un gioco ignorarci in compagnia dei colleghi, però alla fine abbiamo fatto outing."
    },
    {
      date: "12.08.2016",
      image: global.images_path+"/"+theme_color+"/ireland.jpg",
      title:"Il nostro primo vero viaggio",
      desc: "Irlanda on the road. La strada segue il paesaggio, le pecore attraversano indisturbate, il verde regna sovrano, il vento imperversa sulle scogliere... salire una piccola stradina, simile alla terra di Mordor, e trovare al di là della montagna una valle inondata dalla luce del tramonto."
    },
    {
      date: "05.11.2016",
      image: global.images_path+"/"+theme_color+"/verona.jpg",
      title:"La proposta",
      desc: "Oh Romeo, Romeo,  perché sei tu Romeo? Montecchi e Capuleti…eh no, Norata e Pisano. La bella Verona ha fatto da contorno ad una fantastica proposta."
    },
  ];
};
module.exports.our_story = our_story;

var guests = [
  {
    image: {
      src: global.images_path+"/testimoni/daniele.jpg",
      alt: "Kame"
    },
    title: "<span>Testimone Sposo</span> Daniele",
    nickname: "Kame"
  },
  {
    image: {
      src: global.images_path+"/testimoni/fabiana.jpg",
      alt: "Query"
    },
    title: "<span>Testimone Sposa</span> Fabiana",
    nickname: "Query"
  },
  {
    image: {
      src: global.images_path+"/testimoni/fede.jpg",
      alt: "Fede"
    },
    title: "<span>Testimone Sposa</span> Federica",
    nickname: "Sorellona"
  },
  {
    image: {
      src: global.images_path+"/testimoni/giovanni.jpg",
      alt: "Giannone"
    },
    title: "<span>Testimone Sposo</span> Giovanni",
    nickname: "Giannone"
  },
  {
    image: {
      src: global.images_path+"/testimoni/renato.jpg",
      alt: "CoCamion"
    },
    title: "<span>Testimone Sposo</span> Renato",
    nickname: "CoCamion"
  },
  {
    image: {
      src: global.images_path+"/testimoni/sara.jpg",
      alt: "Saruz"
    },
    title: "<span>Testimone Sposa</span> Sara",
    nickname: "Saruz"
  },
  
];
module.exports.guests = guests;

var events = function(theme_color) {
  return [
    {
      image: global.images_path+"/luna-colosseo.jpg",
      youtube: "https://www.youtube.com/embed/O6D9YA2ZHjE?rel=0",
      title:"Colosseo",
      desc: "Il Colosseo è il più grande anfiteatro del mondo, situato nel centro della città di Roma. E' il più importante anfiteatro romano, nonché il più imponente monumento della Roma antica che sia giunto fino a noi, conosciuto in tutto il mondo come simbolo della città di Roma e uno dei simboli d'Italia."
    },
    {
      image: global.images_path+"/fori-imperiali.jpg",
      youtube: "https://www.youtube.com/embed/ZFyBG5874SY?rel=0",
      title:"Fori Imperiali",
      desc: "I Fori Imperiali costituiscono una serie di piazze monumentali edificate nel corso di un secolo e mezzo (tra il 46 a.C. e il 113 d.C.) nel cuore della città di Roma da parte degli imperatori."
    },
    {
      image: global.images_path+"/vittoriano-frecce-tricolori.jpg",
      youtube: "https://www.youtube.com/embed/2G7TdtkJPos?rel=0",
      title: "Il Vittoriano",
      desc: "Il Monumento nazionale a Vittorio Emanuele II, meglio conosciuto con il nome di Vittoriano o Altare della Patria, è un monumento nazionale situato a Roma, sul Campidoglio, opera dell'architetto Giuseppe Sacconi. È uno dei simboli patri italiani."
    },
    {
      image: global.images_path+"/san-pietro.jpg",
      youtube: "https://www.youtube.com/embed/T9bUQWhoIxA?rel=0",
      title:"San Pietro",
      desc: "Piazza San Pietro è la piazza antistante la basilica di San Pietro. Posta a margine del centro storico di Roma, la piazza fa parte della Città del Vaticano ed è delimitata dal confine con lo Stato italiano; attraverso il rione Borgo che giace a est, i principali accessi sono da via di Porta Angelica o da via della Conciliazione."
    },
    {
        image: global.images_path+"/pantheon.jpg",
        youtube: "https://www.youtube.com/embed/7tbAPsEsYTs?rel=0",
        title:"Pantheon",
        desc: "Il Pantheon è un edificio della Roma antica situato nel rione Pigna nel centro storico, costruito come tempio dedicato a tutte le divinità passate, presenti e future. Fu fondato nel 27 a.C. da Marco Vipsanio Agrippa, genero di Augusto..."
	},
	{
		image: global.images_path+"/piazzanavona.jpg",
		youtube: "https://www.youtube.com/embed/zA-xaz56tGo?rel=0",
		title:"Piazza Navona",
		desc: "Piazza Navona è una delle più celebri piazze di Roma, fatta costruire dalla famiglia Pamphili. La sua forma è quella di un antico stadio: venne costruita in stile monumentale per volere di papa Innocenzo X (Giovanni Battista Pamphilj)..."
	}
  ];
};
module.exports.events = events;
            
var gallery = function(theme_color) {
  return [
    {
      image: {
        src: global.images_path+"/gallery/1_scozia.jpg",
        alt: "Edimburgo"
      },
      where: "Edimburgo",
      when: "Novembre 2014"
    },
    {
      image: {
        src: global.images_path+"/gallery/2_valbondione.jpg",
        alt: "Valbondione"
      },
      where: "Valbondione",
      when: "Capodanno 2014"
    },
    {
      image: {
        src: global.images_path+"/gallery/3_belfast.jpg",
        alt: "Belfast"
      },
      where: "Belfast",
      when: "Estate 2016"
    },
    {
      image: {
        src: global.images_path+"/gallery/4_marche.jpg",
        alt: "Matrimonio Berna"
      },
      where: "Marche",
      when: "Settembre 2015"
    },
    {
      image: {
        src: global.images_path+"/gallery/5_rovereto.jpg",
        alt: "Mercatini di Natale 2016"
      },
      where: "Rovereto",
      when: "Mercatini di Natale 2016"
    },
    {
      image: {
        src: global.images_path+"/gallery/6_casa.jpg",
        alt: "Gallery 6"
      },
      where: "Casa",
      when: "San Valentino 2016"
    },
    {
    	image: {
          src: global.images_path+"/gallery/7_edimburgo.jpg",
          alt: "Gallery 6"
        },
        where: "Edimburgo",
        when: "Novembre 2014"
    },
    {
    	image: {
	    src: global.images_path+"/gallery/8_torino.jpg",
	    alt: "Gallery 6"
	  },
	  where: "Torino",
	  when: "Viaggetto 2015"
	},
	{
	    image: {
	      src: global.images_path+"/gallery/9_taormina.jpg",
		  alt: "Gallery 6"
		},
		where: "Taormina",
		when: "Estate 2016"
	},
  ];
};
module.exports.gallery = gallery;
var our_story = function(theme_color) {
  return [
    {
      date: "02.04.2014",
      image: global.images_path+"/"+theme_color+"/port2.jpg",
      title:"Il giorno che ci incontrammo",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
    },
    {
      date: "15.11.2014",
      image: global.images_path+"/"+theme_color+"/port3.jpg",
      youtube: "https://www.youtube.com/embed/5Z9xoHf5eQc?rel=0",
      title:"La nostra prima partita",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
    },
    {
      date: "01.01.2015",
      image: global.images_path+"/"+theme_color+"/port1.jpg",
      title:"Finalmente outing",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
    },
    {
      date: "12.08.2016",
      image: global.images_path+"/"+theme_color+"/port4.jpg",
      title:"Il nostro primo vero viaggio",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
    },
    {
      date: "05.11.2016",
      image: global.images_path+"/"+theme_color+"/port5.jpg",
      title:"La proposta",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
    },
    /*
    {
      date: "03.02.2015",
      image: global.images_path+"/"+theme_color+"/port6.jpg",
      title:"Bridesmaids",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
    },*/
  ];
};
module.exports.our_story = our_story;

var guests = [
  {
    image: {
      src: global.images_path+"/br1.jpg",
      alt: "Kame"
    },
    title: "<span>Testimone Sposo</span> Daniele",
    nickname: "Kame"
  },
  {
    image: {
      src: global.images_path+"/br2.jpg",
      alt: "Query"
    },
    title: "<span>Testimone Sposa</span> Fabiana",
    nickname: "Query"
  },
  {
    image: {
      src: global.images_path+"/br5.jpg",
      alt: "Fede"
    },
    title: "<span>Testimone Sposa</span> Federica",
    nickname: "Sorellona"
  },
  {
    image: {
      src: global.images_path+"/br3.jpg",
      alt: "Giannone"
    },
    title: "<span>Testimone Sposo</span> Giovanni",
    nickname: "Giannone"
  },
  {
    image: {
      src: global.images_path+"/br4.jpg",
      alt: "CoCamion"
    },
    title: "<span>Testimone Sposo</span> Renato",
    nickname: "CoCamion"
  },
  {
    image: {
      src: global.images_path+"/br6.jpg",
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
      desc: "Il Colosseo è il più grande anfiteatro del mondo, situato nel centro della città di Roma. In grado di contenere un numero di spettatori stimato tra 50.000 e 75.000 unità, è il più importante anfiteatro romano, nonché il più imponente monumento della Roma antica che sia giunto fino a noi, conosciuto in tutto il mondo come simbolo della città di Roma e uno dei simboli d'Italia."
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
      title:"Piazza San Pietro",
      desc: "Piazza San Pietro è la piazza antistante la basilica di San Pietro. Posta a margine del centro storico di Roma, la piazza fa parte della Città del Vaticano ed è delimitata dal confine con lo Stato italiano; attraverso il rione Borgo che giace a est, i principali accessi sono da via di Porta Angelica o da via della Conciliazione."
    },
  ];
};
module.exports.events = events;
            
var gallery = function(theme_color) {
  return [
    {
      image: {
        src: global.images_path+"/"+theme_color+"/port1.jpg",
        alt: "Gallery 1"
      },
      where: "Hawaii",
      when: "In late August, on a family vacation to Oahu"
    },
    {
      image: {
        src: global.images_path+"/"+theme_color+"/port2.jpg",
        alt: "Gallery 2"
      },
      where: "New Zealand",
      when: "In Summer 2015"
    },
    {
      image: {
        src: global.images_path+"/"+theme_color+"/port3.jpg",
        alt: "Gallery 3"
      },
      where: "Honeymoon",
      when: "February 5, 2015 / New-York, USA"
    },
    {
      image: {
        src: global.images_path+"/"+theme_color+"/port4.jpg",
        alt: "Gallery 4"
      },
      where: "Honeymoon",
      when: "February 5, 2015 / New-York, USA"
    },
    {
      image: {
        src: global.images_path+"/"+theme_color+"/port5.jpg",
        alt: "Gallery 5"
      },
      where: "Hawaii",
      when: "In late August, on a family vacation to Oahu"
    },
    {
      image: {
        src: global.images_path+"/"+theme_color+"/port6.jpg",
        alt: "Gallery 6"
      },
      where: "New Zealand",
      when: "In Summer 2015"
    },
  ];
};
module.exports.gallery = gallery;
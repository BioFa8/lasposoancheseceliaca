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
      youtube: "http://www.youtube.com/embed/hEowkXOP_Wg?rel=0",
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
      date: "03.12.2013",
      image: global.images_path+"/"+theme_color+"/port7.jpg",
      title:"Colosseo",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
    },
    {
      date: "03.01.2014",
      image: global.images_path+"/"+theme_color+"/port8.jpg",
      youtube: "http://www.youtube.com/embed/hEowkXOP_Wg?rel=0",
      title:"Fori Imperiali",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
    },
    {
      date: "12.05.2014",
      image: global.images_path+"/"+theme_color+"/port9.jpg",
      title:"Altare della Patria",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
    },
    {
      date: "24.08.2014",
      image: global.images_path+"/"+theme_color+"/port10.jpg",
      title:"The Proposal",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
    },
    {
      date: "10.01.2015",
      image: global.images_path+"/"+theme_color+"/port11.jpg",
      title:"Here comes the baby",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
    },
    {
      date: "03.02.2015",
      image: global.images_path+"/"+theme_color+"/port12.jpg",
      title:"Bridesmaids",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
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
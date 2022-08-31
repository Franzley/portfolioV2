import ReelReviews from "../../img/ReelReviews.png";
import DrumKit from "../../img/DrumKit.png";

export const ProjectsArray = [
  {
    img: ReelReviews,
    title: "Reel Reviews",
    content: `This was my final project of the 4Geeks Academy bootcamp. 
        The aim was to design a website where users can search for movies, and keep track of them with a watchlist. 
        Accounts are hosted on Firebase and watchlists data stored using Firestore. 
        Movies are fetched from The Movie Database API.`,
    techs: `Used: HTML, CSS, Javascript, Bootstrap, React, Firebase, Firestore`,
    website: "https://reelreviews.vercel.app/",
    code: "https://github.com/Franzley/Movie-Website-Final-Project",
  },
  {
    img: DrumKit,
    title: "Drum Kit",
    content: `This project used standard javascript and event listeners to play tones when the displayed letters are pressed
    on the keyboard or clicked on with the screen. Each button plays a unique tone when pressed.`,
    techs: `Used: HTML, CSS, Vanilla-Javascript`,
    code: "https://github.com/Franzley/Drum-Kit",
  },
];

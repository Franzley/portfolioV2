import ReelReviews from '../../img/ReelReviews.png'
import MyTube from '../../img/MyTube.png'
import DrumKit from '../../img/DrumKit.png'
import BoxChampy from '../../img/BoxChampy.png'
import Chirper from '../../img/Chirper.png'
import Portfolio from '../../img/Portfolio.png'
import ASPJokes from '../../img/ASPJokes.png'


const reelReviewsDesc = <div>The final project during my time at 4Geeks Academy was a movie web application.
    The aim of my team was to design a movie discovery website with watch list functionality where the user can add or delete
    movies from their watch lists. Other features included the ability to search for movies which are fetched from an API.
    The web application also consisted of sign up and login pages. User accounts were managed through Firebase and database with Firestore.</div>
const youtubeEmulationDesc = ``
const twitterEmulationDesc = ``
const boxChampyDesc = ``
const drumktitDesc = ``
const portfolioDesc = ``



const projectList = [
    { name: "Reel Reviews", description: reelReviewsDesc, github: "https://github.com/Franzley/Movie-Website-Final-Project", page: "https://reelreviews.vercel.app/", media: "", value: 'ReelReviews', type: 'website', image: ReelReviews },
    { name: "Youtube Emulation Application", description: ``, github: "https://github.com/Franzley/Youtube-Clone", page: "https://mytube-sigma.vercel.app/", media: "", value: 'YoutubeEmulation', type: 'website', image: MyTube },
    { name: "Twitter Emulation Application", description: ``, github: "https://github.com/Franzley/twitter-clone", page: "https://chirpers.vercel.app/", media: "", value: 'TwitterEmulation', type: 'website', image: Chirper },
    { name: "Box Champy", description: ``, github: "", page: "https://www.figma.com/file/CZY7chIJ20SEzUKCcgln1p/Figma-Practice?type=design&node-id=0%3A1&mode=design&t=ZaQ0lIZtXxcbz7BV-1", media: "", value: 'BoxChampy', type: 'figma', image: BoxChampy },
    { name: "Drum Kit", description: ``, github: "https://github.com/Franzley/Drum-Kit", page: "https://franzley.github.io/Drum-Kit/", media: "", value: 'DrumKit', type: 'website', image: DrumKit },
    { name: "Portfolio", description: ``, github: "", page: "https://www.figma.com/file/oP42ZID9BP0yWt9aBIVkHn/Untitled?type=design&node-id=0%3A1&mode=design&t=dZCNQCJw5Gpes1Yq-1", media: "", value: 'Portfolio', type: 'figma', image: Portfolio },
    { name: "ASP.NET Jokes App", description: ``, github: "", page: "", media: "https://www.youtube.com/embed/NuqPv9HMVuA?si=UKqVY-8XWrWejx89", value: 'aspjokesapp', type: 'website', image: ASPJokes },
]
export default projectList
import ReelReviews from '../../img/ReelReviews.png'
import MyTube from '../../img/MyTube.png'
import DrumKit from '../../img/DrumKit.png'
import BoxChampy from '../../img/BoxChampy.png'
import Chirper from '../../img/Chirper.png'
import Portfolio from '../../img/Portfolio.png'
import ASPJokes from '../../img/ASPJokes.png'


const reelReviewsDesc = <span>
    At the end of my time at 4Geeks Academy, we had the opportunity to create any web application for the final project.
    My team opted to create a movie web application. Our team focused on creating a user-friendly movie discovery website featuring watch list functionality and
    allowing users to easily add or remove movies from their lists. We also implemented a movie search feature powered by data fetched from an API.
    <br />
    <br />
    In this project, my primary responsibility centered around the integration of the watch list feature. Through this experience, I familiarized myself with Firebase and Firestore.
    Specifically, User account management was handled using Firebase for authentication and Firestore for database operations.
    This experience enhanced my skills in web development, and I gained valuable insights into designing interactive and dynamic features for users.
</span>

const youtubeEmulationDesc = <span>
    I undertook the challenge of developing a full-stack web application that mirrors the appearance and functionality of YouTube.
    I utilized tools such as Material UI and React. The application's core functionalities consisted of video searching,
    channel viewing, and related videos display which were implemented using the Rapid API and YouTube V3 API. This project not only enhanced my skills in front-end development but also
    provided valuable experience in integrating third-party APIs to fetch and display dynamic content.
</span>
const twitterEmulationDesc = <span>
    I undertook the challenge of developing a full-stack web application that mirrors the appearance and functionality of Twitter.
    I utilized tools such as Material UI and React. I set up user accounts and managed messages using Google Firestore and Firebase.
    Messages can update in real-time without making users refresh the page.

</span>
const boxChampyDesc = <span>
    In order to widen my skillset, I learned how to use Figma for the creation and refinement of design mockups. This is a simple, yet clean design
    of a website that could be used by a gym to showcase their features and purpose.
</span>
const drumktitDesc = <span>
    Developed a website featuring interactive sound functionalities.
    The site allows users to trigger distinct sounds corresponding to specific keys displayed on-screen.
    Users can seamlessly interact with the application either through keyboard inputs or by directly clicking on the visualized drums.
    The project was implemented using Vanilla JavaScript, showcasing proficiency in core programming principles and front-end development.
</span>
const portfolioDesc = <span>
    Used Figma to design the current web portfolio, in order to improve my understanding of the platform.
    By integrating Figma into the design process, I could visualize how I wanted the site to appear before implementaion but had some edits in the final work.
</span>
const jokesDesc = <span>
    Engaged with ASP.NET Core to develop a web application that stores a list of jokes.
    This project allowed to understand ASP.NET Core's capabilities and efficiency in crafting web applications.
</span>



const projectList = [
    { name: "Reel Reviews", description: reelReviewsDesc, github: "https://github.com/Franzley/Movie-Website-Final-Project", page: "https://reelreviews.vercel.app/", media: "", value: 'ReelReviews', type: 'website', image: ReelReviews },
    { name: "Youtube Emulation Application", description: youtubeEmulationDesc, github: "https://github.com/Franzley/Youtube-Clone", page: "https://mytube-sigma.vercel.app/", media: "", value: 'YoutubeEmulation', type: 'website', image: MyTube },
    { name: "Twitter Emulation Application", description: twitterEmulationDesc, github: "https://github.com/Franzley/twitter-clone", page: "https://chirpers.vercel.app/", media: "", value: 'TwitterEmulation', type: 'website', image: Chirper },
    { name: "Box Champy", description: boxChampyDesc, github: "", page: "https://www.figma.com/file/CZY7chIJ20SEzUKCcgln1p/Figma-Practice?type=design&node-id=0%3A1&mode=design&t=ZaQ0lIZtXxcbz7BV-1", media: "", value: 'BoxChampy', type: 'figma', image: BoxChampy },
    { name: "Drum Kit", description: drumktitDesc, github: "https://github.com/Franzley/Drum-Kit", page: "https://franzley.github.io/Drum-Kit/", media: "", value: 'DrumKit', type: 'website', image: DrumKit },
    { name: "Portfolio", description: portfolioDesc, github: "", page: "https://www.figma.com/file/oP42ZID9BP0yWt9aBIVkHn/Untitled?type=design&node-id=0%3A1&mode=design&t=dZCNQCJw5Gpes1Yq-1", media: "", value: 'Portfolio', type: 'figma', image: Portfolio },
    { name: "ASP.NET Jokes App", description: jokesDesc, github: "", page: "", media: "https://www.youtube.com/embed/NuqPv9HMVuA?si=UKqVY-8XWrWejx89", value: 'aspjokesapp', type: 'website', image: ASPJokes },
]
export default projectList
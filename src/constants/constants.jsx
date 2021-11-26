import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
export const projects = [
  {
    title: "Todo-List",
    description:
      "Created a to-do list app using React Native and Expo for a to-do list app that allows one to add and complete tasks to keep up with their schedule.",
    image: require("../components/assets/images/Todo-List.png").default,
    tags: ["React Native", "Expo"],
    source: "https://google.com",
    visit: "https://google.com",
    id: 0,
  },
  {
    title: "Notetaking App",
    description:
      "Created a Note-Taking App using React for the frontend and Django as the backend. The notes that are typed in are immediately saved by the program. The app also shows the date the note was made.",
    image: require("../components/assets/images/Notetaking-App.png").default,
    tags: ["React", "Django"],
    source: "https://google.com",
    visit: "https://google.com",
    id: 1,
  },
  {
    title: "Air Quality Index API",
    description:
      "Created a serverless REST API using AWS Lambda to display an air quality index of the supplied city. Air Quality Index data is formatted, stored, and accessed from AWS DynamoDB.",
    image: require("../components/assets/images/AWS-AQI-API.png").default,
    tags: ["AWS Lambda", "AWS DynamoDB"],
    source: "https://google.com",
    visit: "https://google.com",
    id: 2,
  },
];
export const projects2 = [
  {
    title: "Dr. App",
    description:
      "Working on a Progressive Web App (PWA) developed for the Doctors to manage their OPD data using Angular 11 and Indexed DB for storing offline data.",
    image: require("../components/assets/images/Dr.App.png").default,
    tags: ["Angular", "IndexedDB"],
    source: "https://google.com",
    visit: "https://google.com",
    id: 3,
  },
  {
    title: "Password Generator",
    description:
      "Created a password generator with HTML, CSS, and vanilla JavaScript (ES6), and ported it to React Native to experience it on a mobile device.",
    image: require("../components/assets/images/Password-Generator.png")
      .default,
    tags: ["HTML", "CSS", "JavaScript", "React Native"],
    source: "https://google.com",
    visit: "https://google.com",
    id: 3,
  },
  {
    title: "Speed Climbing Timer",
    description:
      "Co-created a speed climbing timer with my father which is successfully being used in my training center. Raspberry Pi is used for hosting Node-RED and MQTT. ESP8266 and flex sensors are used for wireless communication.",
    image: require("../components/assets/images/SpeedClimbing-Timer.png")
      .default,
    tags: ["Raspberry PI", "Node-RED", "MQTT", "ESP8266"],
    source: "https://google.com",
    visit: "https://google.com",
    id: 3,
  },
];

export const TimeLineData = [
  { year: 2017, text: "Started my journey" },
  { year: 2018, text: "Worked as a freelance developer" },
  { year: 2019, text: "Founded JavaScript Mastery" },
  { year: 2020, text: "Shared my projects with the world" },
  { year: 2021, text: "Started my own platform" },
];

export const ContactInfo = [
  { icon: <AiFillGithub />, name: "GitHub" },
  { icon: <AiFillLinkedin />, name: "LinkedIn" },
  { icon: <AiFillTwitterSquare />, name: "Twitter" },
  { icon: <AiFillInstagram />, name: "Instagram" },
];

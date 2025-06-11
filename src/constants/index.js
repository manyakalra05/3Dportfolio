import { igdtuw, max } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    

    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
   
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
   
];

export const experiences = [
    {
        title: "High School Student",
        company_name: "Maxfort School Dwarka",
        icon: max,
        iconBg: "#accbe1",
        date: "April 2020 - March 2023",
        points: [
  "Achieved the highest marks in Physics in 12th grade CBSE board exams; awarded a trophy for academic excellence.",
  "Consistently recognized as a diligent learner; selected to present ideas to the school principal on multiple occasions.",
  "Served as a member of the Student Council, contributing to leadership and school event coordination.",
  "Secured the second-highest overall score in 10th grade CBSE board exams across the school."
],
    },
    
    {
        title: "Batch of 2027, CSE Branch",
        company_name: "IGDTUW",
        icon: igdtuw,
        iconBg: "#b7e4c7",
        date: "Aug 2023 - May 2027",
        points: [
  "Achieved outstanding academic performance with multiple subjects scoring 9 and 10 grade points across semesters.",
  "Served as an Associate of the Media Team in the Society of Women Engineers (SWE), IGDTUW, contributing to event promotion and content creation.",
  "Designed and developed several web projects using HTML, CSS, JavaScript, and React, enhancing frontend development skills through hands-on experience."
],
    },
    
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/manyakalra05',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/manya-kalra-082430291/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Interactive Clone',
        description: 'Created a working front end version of amazon, with products, purchasing and shipping, using JavaScript',
        link: 'https://manyakalra05-amazon.netlify.app/',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'A Theme toggler Portfloio',
        description: 'A beautiful portfolio web app that contains a cool meteor shower in the background!',
        link: 'https://manyakalra05-mainportfolio.netlify.app/',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Movieland',
        description: 'Find your favourite movie titles! Made by using OMDB API',
        link: 'https://manyakalra05-movieland.netlify.app/',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Razorpay Clone',
        description: 'Built an elegant UI clone of razorpay using TailwindCSS',
        link: 'https://manyakalra05-razorpay.netlify.app/',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Flower.',
        description: 'Shop For your favourite flowers, and send them to a loved one!. Havy usage of Vanilla CSS',
        link: 'https://manyakalra05-flowershop.netlify.app/',
    },
    {
        iconUrl: summiz,
        theme: 'Rock Paper Scissors',
        name: 'AI Summarizer Application',
        description: 'Test your odds at winning against a computer through a game of Rock Paper Scissors.',
        link: 'https://manyakalra05-rockpaperscissors.netlify.app/',
    }
];

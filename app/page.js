import Head from "next/head";
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import {MdOutlineMailOutline} from 'react-icons/md'
import Image from "next/image"
import surf from '../public/surf.jpg'
import football from '../public/football.jpg'
import me from '../public/me.jpg'
export default function Home() {
  return (
    <main className="bg-white px-10">
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className = "text-xl">insert</h1>
          <ul className = "flex items-center">
            <li><BsFillMoonStarsFill className="cursor-pointer text-2xl"/></li>
            <li><a className= "bg-gradient-to-r from-teal-600 to-cyan-500 text-white px-4 py-2 rounded-md ml-6"href="resume.pdf" alt="alt text"
             target = "_blank" rel="noopener noreferrer">Resume</a></li>
            <li><MdOutlineMailOutline className="cursor-pointer text-4xl ml-4"/> </li>
            <li><AiFillLinkedin className="cursor-pointer text-3xl ml-4"/> </li>
            <li><AiFillGithub className="cursor-pointer text-3xl ml-4"/> </li>

          </ul>
        </nav>
        <div className="text-center p-9 py-10">
          <h2 className="text-4xl py-2 text-cyan-500 font-semibold">Kieran Pattison</h2>
          <h3 className="text-xl py-2 text-gray-800">3<sup>rd</sup> Year Computer Science and Math at UBC</h3>
        </div>
        <div className="flex flex-row gap-10 md:" >
          <div>
            <Image src={surf} className="rounded-xl mx-auto object-cover " width={"100%"} height={"100%"} layout="responsive" />
          </div>
          <div>
            <Image src={football} className="rounded-xl mx-auto object-cover " width={"100%"} height={"100%"} layout="responsive"/>
          </div>
        </div>
        <div className="text-center p-9 py-10">
          <p className="text-lg py-2 text-gray-800 leading-8">I love to learn, solve problems, and talk about ideas. With my diverse skillset,
           I hope to make a lasting impact on the world. My professional/academic interests include topics in computer science, mathematics, finance,
           data science and probability. I'm also a former varsity football player and enjoy surfing and hiking in my free time. Feel free to contact me 
           by email or on LinkedIn! Below you'll find some of my projects, skills, problem solutions, and book reviews.
          </p>
        </div>
        <div className="text-3xl text-center py-5">
          <h2 className="text-cyan-500 font-semibold">Personal Projects</h2>
        </div>
        <div>
          <div className=" bg-cyan-600 shadow-2xl  p-10 rounded-xl my-10">
            <h3 className="text-gray-100 font-medium text-xl text-center pb-2"> IMC Prosperity Challenge </h3>
            <p className="py-2 text-gray-100">Participated in a global simulated trading competition hosted by IMC, placed top 5% of the contestants (11,578)
by achieving an 80% return on investment. Lead a team of three to develop multiple trading strategies using technical and fundamental analysis
in Python, and created a profit and loss visualizer using the Matplotlib library. Learned the importance of diversification, risk management and adaptation to changing market conditions.</p>
            <h4 className="text-gray-100 text-lg">Tools Used:  Python, Matplotlib, Pandas</h4>
          </div>
          <div className=" bg-cyan-600 shadow-2xl  p-10 rounded-xl my-10">
            <h3 className="text-gray-100 font-medium text-xl text-center pb-2">  Course Checker </h3>
            <p className="py-2 text-gray-100">Used Python to create a bot that monitors seat openings in specified UBC courses and then utilized Twilio’s API to send SMS notifications to 
            the user. Checked courses using Python cookies, requests and regex to request the page and then efficiently find the required seat information. Simulated real browser traffic by
            using specific request headers</p>
            <h4 className="text-gray-100 text-lg">Tools Used:  Python, Regex, Requests, Cookies</h4>
          </div>
          <div className=" bg-cyan-600 shadow-2xl  p-10 rounded-xl my-10">
            <h3 className="text-gray-100 font-medium text-xl text-center pb-2">  Student-Athlete Scheduler </h3>
            <p className="py-2 text-gray-100">Created a Scheduling application using Java and its Swing GUI toolkit. The app, specifically designed for myself and other student athletes,
             helped to manage workouts, assignments and exams by giving a visual breakdown of the week and displaying a task list. Designed the app using design patterns, abstraction and
             inheritance to organize class hierarchy and reduce code repetition. Stored states with JSON object persistence and tested each part of the design using JUnit unit tests.</p>
          </div>
          <div className=" bg-cyan-600 shadow-2xl  p-10 rounded-xl my-10">
            <h3 className="text-gray-100 font-medium text-xl text-center pb-2">  Spaceship Game LAN </h3>
            <p className="py-2 text-gray-100">Coded a spaceship shooting game with programmed enemies and obstacles using Python and PYFLTK. Later modified it to use UDP protocol to
            play over classroom LAN against classmates.</p>
          </div>
        </div>
      </section>
    </main>
    
    
  );
}
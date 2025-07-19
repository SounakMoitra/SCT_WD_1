import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './Navbar'

const TYPEWRITER_TITLES = [
  'Full Stack Developer',
  'Backend Developer',
  'AI Engineering Enthusiast',
  'DevOps Explorer',
];

function Typewriter() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;
    if (typing) {
      if (displayed.length < TYPEWRITER_TITLES[index].length) {
        timeout = setTimeout(() => {
          setDisplayed(TYPEWRITER_TITLES[index].slice(0, displayed.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 1200);
      }
    } else {
      timeout = setTimeout(() => {
        setDisplayed('');
        setTyping(true);
        setIndex((prev) => (prev + 1) % TYPEWRITER_TITLES.length);
      }, 600);
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, index]);

  return (
    <span className="text-blue-400 text-xl typewriter-font font-mono h-8 inline-block">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <main className="pt-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen text-white">
        <section id="about" className="max-w-3xl mx-auto py-16 px-4 text-center">
          <img src="/src/assets/DevPic.png" alt="Sounak Moitra" className="mx-auto mb-4 w-44 h-44 object-cover rounded-full shadow-lg border-4 border-gray-700" />
          <h2 className="text-4xl font-extrabold mb-2">Sounak Moitra</h2>
          <Typewriter />
          <p className="text-gray-300 text-lg mt-6">
            Hey there! I'm a Full Stack Developer with a strong focus on backend systems, AI applications and Cloud-Native architectures. I love building impactful products-from real-time apps to collaborative tools and AI agents. 
            Currently expanding my skills in AI Engineering, LLMs and agent frameworks.
          </p>
        </section>
        <section id="projects" className="max-w-4xl mx-auto py-16 px-4">
          <h2 className="text-2xl font-bold mb-8">Projects</h2>
          <div className="space-y-8">
            <div className="bg-gray-800 rounded-lg shadow-lg p-6">
              <div className="flex flex-col sm:flex-row sm:items-center mb-2 sm:space-x-3 space-y-2 sm:space-y-0">
                <h3 className="text-xl font-semibold">Real-Time Chat Application</h3>
                <div className="flex flex-wrap items-center gap-3 sm:ml-2 justify-center sm:justify-start">
                  <img src="/React.png" alt="ReactJS" className="h-7 w-7 tech-icon" />
                  <img src="/Node.js.png" alt="NodeJS" className="h-7 w-7 tech-icon" />
                  <img src="/Express.png" alt="ExpressJS" className="h-7 w-7 tech-icon" />
                  <img src="/MongoDB.png" alt="MongoDB" className="h-7 w-7 tech-icon" />
                  <img src="/Tailwind CSS.png" alt="Tailwind CSS" className="h-7 w-7 tech-icon" />
                  <img src="/Socket.io.png" alt="SocketIO" className="h-7 w-7 tech-icon" />
                </div>
              </div>
              <ul className="space-y-1 mt-2">
                <li className="flex items-start gap-2 text-gray-300"><span className="mt-1 text-blue-400">&#11088;</span>Built a full-stack chat platform supporting real-time, bi-directional communication using Socket.IO and dynamic room-based architecture.</li>
                <li className="flex items-start gap-2 text-gray-300"><span className="mt-1 text-blue-400">&#11088;</span>Designed RESTful APIs for authentication, message persistence, and user management using JWT and MongoDB.</li>
                <li className="flex items-start gap-2 text-gray-300"><span className="mt-1 text-blue-400">&#11088;</span>Implemented online/offline presence indicators, and optimized frontend state management for user experience.</li>
                <li className="flex items-start gap-2 text-gray-300"><span className="mt-1 text-blue-400">&#11088;</span>Followed a modular backend architecture with clear separation of concerns and error handling for scalability and maintainability.</li>
              </ul>
            </div>
            <div className="bg-gray-800 rounded-lg shadow-lg p-6">
              <div className="flex flex-col sm:flex-row sm:items-center mb-2 sm:space-x-3 space-y-2 sm:space-y-0">
                <h3 className="text-xl font-semibold">Real-Time Multiplayer Game</h3>
                <div className="flex flex-wrap items-center gap-3 sm:ml-2 justify-center sm:justify-start">
                  <img src="/React.png" alt="ReactJS" className="h-7 w-7 tech-icon" />
                  <img src="/Node.js.png" alt="NodeJS" className="h-7 w-7 tech-icon" />
                  <img src="/Socket.io.png" alt="SocketIO" className="h-7 w-7 tech-icon" />
                </div>
              </div>
              <ul className="space-y-1 mt-2">
                <li className="flex items-start gap-2 text-gray-300"><span className="mt-1 text-blue-400">&#11088;</span>Developed a real-time multiplayer game engine with Socket.IO, enabling two-player interactions with game state synchronization and room-based matchmaking.</li>
                <li className="flex items-start gap-2 text-gray-300"><span className="mt-1 text-blue-400">&#11088;</span>Designed game logic, state validation, and turn management with React hooks and socket events.</li>
                <li className="flex items-start gap-2 text-gray-300"><span className="mt-1 text-blue-400">&#11088;</span>Managed backend communication with a lightweight, event-driven architecture supporting low-latency updates and disconnection handling.</li>
              </ul>
            </div>
            <div className="bg-gray-800 rounded-lg shadow-lg p-6">
              <div className="flex flex-col sm:flex-row sm:items-center mb-2 sm:space-x-3 space-y-2 sm:space-y-0">
                <h3 className="text-xl font-semibold">Dynamic News Portal</h3>
                <div className="flex flex-wrap items-center gap-3 sm:ml-2 justify-center sm:justify-start">
                  <img src="/Node.js.png" alt="NodeJS" className="h-7 w-7 tech-icon" />
                  <img src="/Express.png" alt="ExpressJS" className="h-7 w-7 tech-icon" />
                  <img src="/HTML5.png" alt="HTML5" className="h-7 w-7 tech-icon" />
                  <img src="/CSS3.png" alt="CSS3" className="h-7 w-7 tech-icon" />
                  <img src="/JavaScript.png" alt="JavaScript" className="h-7 w-7 tech-icon" />
                  <img src="/Azure.png" alt="Azure App Service" className="h-7 w-7 tech-icon" />
                </div>
              </div>
              <ul className="space-y-1 mt-2">
                <li className="flex items-start gap-2 text-gray-300"><span className="mt-1 text-blue-400">&#11088;</span>Developed a full-stack news application fetching live news from the NewsAPI using Axios and Express server-side routing.</li>
                <li className="flex items-start gap-2 text-gray-300"><span className="mt-1 text-blue-400">&#11088;</span>Deployed the application on App Service, implementing environment-based config and HTTPS setup.</li>
                <li className="flex items-start gap-2 text-gray-300"><span className="mt-1 text-blue-400">&#11088;</span>Built a secure, CORS-enabled API layer for keyword-based article search with real-time UI updates.</li>
                <li className="flex items-start gap-2 text-gray-300"><span className="mt-1 text-blue-400">&#11088;</span>Ensured cross-browser compatibility and production-ready code through modular design.</li>
              </ul>
            </div>
          </div>
        </section>
        <div className="flex justify-center mt-4 mb-12">
          <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-lg font-semibold transition-colors border-2 border-blue-400 rounded-lg px-4 py-2">
            Browse more
            <img src="/GitHub.png" alt="GitHub" className="h-7 w-7" />
          </a>
        </div>
        <section id="tech-stack" className="max-w-4xl mx-auto py-16 px-4">
          <h2 className="text-2xl font-bold mb-8">Tech Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-2 text-blue-400">Languages</h3>
              <div className="flex flex-wrap items-center gap-3">
                <img src="/JavaScript.png" alt="JavaScript" className="h-8 w-8 tech-icon" />
                <img src="/TypeScript.png" alt="TypeScript" className="h-8 w-8 tech-icon" />
                <img src="/Python.png" alt="Python" className="h-8 w-8 tech-icon" />
                <img src="/Java.png" alt="Java" className="h-8 w-8 tech-icon" />
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-2 text-blue-400">Libraries/Frameworks</h3>
              <div className="flex flex-wrap items-center gap-3">
                <img src="/React.png" alt="ReactJS" className="h-8 w-8 tech-icon" />
                <img src="/Redux.png" alt="Redux" className="h-8 w-8 tech-icon" />
                <img src="/Next.js.png" alt="NextJS" className="h-8 w-8 tech-icon" />
                <img src="/Node.js.png" alt="NodeJS" className="h-8 w-8 tech-icon" />
                <img src="/FastAPI.png" alt="FastAPI" className="h-8 w-8 tech-icon" />
                <img src="/Express.png" alt="ExpressJS" className="h-8 w-8 tech-icon" />
                <img src="/Tailwind CSS.png" alt="Tailwind CSS" className="h-8 w-8 tech-icon" />
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-2 text-blue-400">Databases</h3>
              <div className="flex flex-wrap items-center gap-3">
                <img src="/MySQL.png" alt="MySQL" className="h-8 w-8 tech-icon" />
                <img src="/MongoDB.png" alt="MongoDB" className="h-8 w-8 tech-icon" />
                <img src="/PostgresSQL.png" alt="PostgreSQL" className="h-8 w-8 tech-icon" />
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-2 text-blue-400">Tools/Others</h3>
              <div className="flex flex-wrap items-center gap-3">
                <img src="/AWS.png" alt="AWS" className="h-8 w-8 tech-icon" />
                <img src="/Azure.png" alt="Azure" className="h-8 w-8 tech-icon" />
                <img src="/Google Cloud.png" alt="Google Cloud" className="h-8 w-8 tech-icon" />
                <img src="/Git.png" alt="Git" className="h-8 w-8 tech-icon" />
                <img src="/Linux.png" alt="Linux" className="h-8 w-8 tech-icon" />
                <img src="/Docker.png" alt="Docker" className="h-8 w-8 tech-icon" />
                <img src="/Appwrite.png" alt="Appwrite" className="h-8 w-8 tech-icon" />
                <img src="/Postman.png" alt="Postman" className="h-8 w-8 tech-icon" />
              </div>
            </div>
          </div>
        </section>
        <section id="achievements" className="max-w-4xl mx-auto py-16 px-4">
          <h2 className="text-2xl font-bold mb-8">Achievements & Extracurricular Activities</h2>
          <ul className="space-y-4 mt-2">
            <li className="flex items-start gap-2 text-gray-300"><span className="mt-1 text-blue-400">&#10003;</span><span><span className="text-blue-400 font-semibold">Microsoft Certified: Azure Fundamentals (AZ-900)</span> — Demonstrated foundational knowledge of cloud concepts, services, and governance tools applicable to distributed computing environments.</span></li>
            <li className="flex items-start gap-2 text-gray-300"><span className="mt-1 text-blue-400">&#10003;</span><span><span className="text-blue-400 font-semibold">Best Paper and Presenter Award at WIN 6.0 – International Conference on Web 6.0 and Industry 6.0 (2025)</span> for presenting “An AI Tool for Text-to-Image Generation using Stable Diffusion Model”.</span></li>
            <li className="flex items-start gap-2 text-gray-300"><span className="mt-1 text-blue-400">&#10003;</span><span>Led organization of multiple college-level coding contests, enhancing leadership, collaboration, and project management skills.</span></li>
            <li className="flex items-start gap-2 text-gray-300"><span className="mt-1 text-blue-400">&#10003;</span><span><span className="text-blue-400 font-semibold">Team Leader - Smart India Hackathon 2024 (College Qualified)</span> — Led development of an AI-powered mobile app to translate spoken language into Indian Sign Language (ISL) and vice versa.</span></li>
            <li className="flex items-start gap-2 text-gray-300"><span className="mt-1 text-blue-400">&#10003;</span><span>Completed <span className="text-blue-400 font-semibold">Google Cloud Study Jam 2023</span> — including Google Cloud Computing Fundamentals and Generative AI course, gaining expertise in cloud-native development and emerging technologies.</span></li>
          </ul>
        </section>
        <section id="contact" className="max-w-3xl mx-auto py-16 px-4">
          <h2 className="text-2xl font-bold mb-8">Contact</h2>
          <form className="bg-gray-800 rounded-lg shadow-lg p-6 space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-1">Name</label>
              <input type="text" id="name" name="name" className="w-full px-3 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-1">Email</label>
              <input type="email" id="email" name="email" className="w-full px-3 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-300 mb-1">Message</label>
              <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 rounded bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400" required></textarea>
            </div>
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded transition-colors duration-200">Send</button>
          </form>
          <div className="mt-8 text-gray-400 text-center">
            Or email me at <a href="mailto:your.email@example.com" className="text-blue-400 underline">your.email@example.com</a>
          </div>
        </section>
      </main>
    </>
  )
}

export default App

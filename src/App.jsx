import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">

        <header className="navbar">
          <div className="logo">Your name</div>
          <nav>
            <a href="#">Home</a>
            <a href="#">projects</a>
            <a href="#">Articals</a>
            <a href="#">Contact</a>
          </nav>
        </header>
        <h1 className="title">Frontend Developer</h1>

        <div className='main-grid'>

          <div className="box">
            <h3>project</h3>
            <ul>
              <li>HTML only Portfolio</li>
              <li>Calculator</li>
              <li>Quzi App</li>
              <li>Countdown Timer</li>
              <li>Product Upcoming Page</li>
            </ul>
          </div>


          <div className="box">
            <h3>work Experience</h3>
            <p>roadmap.sh</p>
            <p>solved all the frontend projects</p>
            <a href="#">Visit my Profile</a>
            <hr></hr>
            <p>OpenSource work</p>
            <p>Contributed to 50 OpenSource projects. Made my own projects with 200 GitHub Stars. </p>
            <a href="#">Visit my GitHub Profile</a>
          </div>

          <div className="boxs">
            <h3>Education</h3>
            <p>Graduated with 3.76 out of 4 CGPA. Won Acme Hackathon. Organized 30 sessions.</p>
            <h4>Courses I took:</h4>
            <ul>
              <li>Object Oriented Progrgramming</li>
              <li>Data Structures and Algorithms</li>
              <li>Web Engineering</li>
              <li>Artificial Intelligence</li>
              <li>Human Computer Interaction</li>
              <li>Computer Graphics</li>
              <li>Database Management Systems</li>
              <li>Distributed Database Systems</li>
              <li>Discreet Mathematics</li>
            </ul>
          </div>
        </div>


        <div className="reviews">
          <h3>Reviews from my Teachers</h3>
        </div>

        <div className="review-cards">
          <div className="card">
            <p>John doe was a brilliant student; always stood out with his assignments.</p>
            <span>Jane Doe Assistant professor</span>
          </div>

          <div className="card">
            <p>John doe was a brilliant student; always stood out with his assignments.</p>
            <span>Jane Doe Assistant professor</span>
          </div>

          <div className="card">
            <p>John doe was a brilliant student; always stood out with his assignments.</p>
            <span>Jone Doe
               Assisstant professor</span>

          </div>
        </div>


        <footer className="footer">
          @all right reserved 2025
        </footer>
      </div>

    </>
  )
}

export default App

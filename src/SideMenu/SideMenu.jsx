import { useState } from 'react'


function SideMenu() {
    const [count, setCount] = useState(0)

    return (
        <>

            <div className="container2">

                <header className="navbar2">
                    <div className="logo">Your name</div>
                    <nav>
                        <a href="#">Home</a>
                        <a href="#">projects</a>
                        <a href="#">Articals</a>
                        <a href="#">Contact</a>
                    </nav>
                </header>
                <h1 className="title2">Frontend Developer</h1>

                <div className='main-section'>

                    <div className="generalBox">
                        <h3>project</h3>   
                      

                        <div className='box2'>
                            <ul>
                                <li>HTML only Portfolio</li>
                                <li>Calculator</li>
                                <li>Quzi App</li>
                                <li>Countdown Timer</li>
                                <li>Product Upcoming Page</li>
                            </ul>
                        </div>


                        <div className="general2box">
                            <h3>work Experience</h3>
                          
                            <div className='generalBlue2Box'>
                                <div className='boxes2'>
                                    <p>roadmap.sh</p>
                                    <p>solved all the frontend projects</p>
                                    <a href="#">Visit my Profile</a>
                                    <hr></hr>
                                    <p>OpenSource work</p>
                                    <p>Contributed to 50 OpenSource projects. Made my own projects with 200 GitHub Stars. </p>
                                    <a href="#">Visit my GitHub Profile</a>
                                </div>
                            </div>                        

        
                            <div className='generalBluebox3'></div>
                            <div className="boxs2">
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
                    </div>

                    <div className="reviews2">
                        <h3>Reviews from my Teachers</h3>
                    </div>

                    <div className="review-cards2">
                        <div className="card3">
                            <p>John doe was a brilliant student; always stood out with his assignments.</p>
                            <span>Jane Doe Assistant professor</span>
                        </div>
                    </div>

                    <footer className="footer">
                        @all right reserved 2025
                    </footer>
                </div>
            </div>

        </>
    )
}

export default SideMenu

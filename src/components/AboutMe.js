import React from 'react'
import author from "../resources/aboutMe.jpg"

const AboutMe = () => {
    return (
      <div id="about" className="container py-5">
        <div className="row">
          <div className="col-lg-6 col-xm-12">
            <div className="photo-wrap mb-5">
              <img className="profile-img" src={author} alt="author .../" />
            </div>
          </div>
          <div className="col-lg-6 col-xm-12">
            <h1 className="about-heading"> about me </h1>
            <p>
              Hello! My name is Mohamed Moussa, I am a Software Engineer based
              out of New York City interested in contributing to create advanced
              next-generation software. I enjoy being challenged and engaged
              with tasks that require ingenuity and as a result I tend to
              develop application to increase automation in my daily life.
              <br></br> <br></br>I am currently attending Rutgers New Brunswick
              completing a double major in Applied Physics and Computer Science
              with an intended graduation date of August 2021. I have taken a
              diverse number of courses at Rutgers, through which I have
              developed essential skills in debugging,testing, and an in-depth
              understanding of Software Architecture
              <br></br>
              <br></br>
              Technology is a major aspect in my life, when I am not developing applications I enjoy building and fixing PCS along with reguarly checking the latest technology news.
              I am also into fitness,sports, and trying new hobbies.{" "}
            </p>
          </div>
        </div>
      </div>
    );
}

export default AboutMe

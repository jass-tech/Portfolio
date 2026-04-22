import React from "react";
import "../styles/Home.css";
import profile from "../profile.png";

function Home() {

return(

<div className="home">

<div className="profile-section">

<img src={profile} alt="profile" className="profile"/>

<h1>Jashitha Batula</h1>

<p className="tagline">
AI Engineering Student | Machine Learning Enthusiast
</p>

</div>


<div className="section">

<h2>About Me</h2>

<p>
I am an Artificial Intelligence Engineering student at Mahindra University.
I enjoy solving complex problems and building intelligent systems using
machine learning and data science.
</p>

</div>


<div className="section">

<h2>Research Interests</h2>

<ul>
<li>Artificial Intelligence</li>
<li>Machine Learning</li>
<li>Natural Language Processing</li>
<li>Prompt Engineering</li>
</ul>

</div>


<div className="section">

<h2>Personal Details</h2>

<p>Name: Jashitha Batula</p>
<p>Phone: +91 83319 76630</p>
<p>Email: jashithabattula@gmail.com</p>
<p>College Email: se23uari018@mahindrauniversity.edu</p>

</div>


<div className="section">

<h2>Skills</h2>

<div className="skills">

<span>C</span>
<span>Python</span>
<span>C++</span>
<span>Java</span>
<span>React</span>
<span>SQL</span>
<span>Node.js</span>
<span>Git</span>

</div>

</div>

</div>

)

}

export default Home
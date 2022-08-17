import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Section from './Section.js';
import {projects} from './Projects.js';

import { KojiProjectsSection } from './KojiProjects';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import resume from './BRollinsResumeCurrent.pdf';


const aboutMeSection = [{
	header:"About me",
	body: 
		<div>
			<p>Hi! I'm a new graduate currently located in San Jose, California <i>(but open to relocation!)</i> who is looking for new opportunities.</p>
			<p>Below, you'll find some of my personal projects, as well as some freelance work I've done.</p>
			<p>While you're here, check out my <a href={resume}>resume</a> and <a href="https://github.com/maz222">github</a> as well. Feel free to reach out!</p>
		</div>
}];

const skillsSection = [{
	header:"Skills",
	body: 
	<div id="skillsContainer">
		<div id="skills">
			<div>
				<i class="fa-brands fa-html5"></i>
				<p>HTML</p>
			</div>
			<div>
				<i class="fa-brands fa-css3-alt"></i>
				<p>CSS</p>
			</div>
			<div>
				<i class="fa-brands fa-square-js"></i>
				<p>JavaScript</p>
			</div>
			<div>
				<i class="fa-brands fa-react"></i>
				<p>React</p>
			</div>
			<div>
				<i class="fa-brands fa-node-js"></i>
				<p>NodeJS</p>
			</div>
			<div>
				<i class="fa-brands fa-python"></i>
				<p>Python</p>
			</div>
			<div>
				<i class="fa-brands fa-java"></i>
				<p>Java</p>
			</div>
		</div>
		<p><i>Also MongoDB, Express, Mongoose, Styled Components, Bootstrap</i></p>
	</div>

}];

const projectSection = [{
	header: "Personal Projects",
	body :
		<div>
			{projects.map((project,index) => {
				return project
			})}
		</div>
}]

const kojiSection = [{
	header:"Koji Freelance Projects",
	body : 
		<div>
			{KojiProjectsSection}
		</div>
}]

function App() {
	return (
		<Container className="App" fluid>
			<Row className="col-md-10 offset-md-1 col-sm-12">
				<h3 id="nameHeader">Ben Rollins</h3>
			</Row>
			<Row className="col-md-10 offset-md-1 col-sm-12">
				<Section items={aboutMeSection} />
			</Row>
			<Row className="col-md-10 offset-md-1 col-sm-12">
				<Section items={skillsSection} />
			</Row>
			<Row className="col-md-10 offset-md-1 col-sm-12">
				<Section items={projectSection} />
			</Row>
			<Row className="col-md-10 offset-md-1 col-sm-12">
				<Section items={kojiSection} />
			</Row>
		</Container>
	);
}

export default App;

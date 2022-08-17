import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image'
import Section from './Section';

import './ProjectStyling.css';

import colorCaddy1 from './Pics/ColorCaddy1.png';
import colorCaddy2 from './Pics/ColorCaddy2.png';
import colorCaddy3 from './Pics/ColorCaddy3.png';
import manga1 from './Pics/Manga1.png';
import manga2 from './Pics/Manga2.png';
import manga3 from './Pics/Manga3.png';
import uniqlone1 from './Pics/Uniqlone1.png';
import uniqlone2 from './Pics/Uniqlone2.png';
import uniqlone3 from './Pics/Uniqlone3.png';
import segmentation1 from './Pics/SLIDE1.png';


function Project(props) {
    const project = 		
        [{header:props.projectData.title,
            body:
        <div className='project'>
            <Carousel>
                {props.projectData.images.map((image,index) => {
                    return(
                        <Carousel.Item>
                            <Image src={image} fluid/>							
                        </Carousel.Item>
                    );	
                })}
            </Carousel>
            <p className='description'>{props.projectData.description}</p>
            <div className='tools'>
                <p>Tools:</p>
                <p><b>{props.projectData.tools}</b></p>
            </div>
            <div className='links'>
            {props.projectData.liveLink ? <a href={props.projectData.liveLink} className='liveLink'>Live Project</a> : null}
            <a href={props.projectData.githubLink} className='githubLink'>GitHub Repo</a>
            </div>
        </div>
        }]
	return(
        <Section items={project}/>
	);
}

const mangaTranslator = {
    title:"Manga Translator",
    images:[manga1, manga2, manga3],
    description:`An image translator made using Google's Cloud Vision and Microsoft's Bing Translate. Uses both to detect text in given images and translate the text into english.
    Users can upload and browse multiple images and translations. Simply upload a photo, and then click on the various text boxes to see the translated text. Inlcudes a set of demo images.`,
    tools:"React, React Router, NodeJS, Express, Axios, Styled Components",
    liveLink:"https://translate-manga.herokuapp.com/",
    githubLink:"https://github.com/maz222/MangaTranslatorPublic"
}; 

const uniqlone = {
    title:"Uniqlone",
    images:[uniqlone1,uniqlone2,uniqlone3],
    description:`A sample ecommerce page based on Uniqlo's online store. Users can browse and search items that are stored on a noSQL MongoDB data base, and add/remove them from their cart.
    The cart persists between sessions using local storage, and the product data is pulled using a REST API. The page itself uses responsive design and Bootstrap to work seamlessly across desktop and mobile devices.`,
    tools:"React, React Router, React Bootstrap, NodeJS, MongoDB, Mongoose, Express, Axios",
    liveLink:"",
    githubLink:""
};

const colorCaddy = {
    title:"Color Caddy",
    images:[colorCaddy1,colorCaddy2,colorCaddy3],
    description:`A single page application for generating custom schemes. Users input a color, and the app suggests additional colors based on various color schemes (Complementary, Analgous, Triadic, etc).
    Users can also click on each color to quickly copy it to their dashboard in a format of their choosing (rgb, hsl, hex), for use in other apps or designs.`,
    tools:"React, NodeJS",
    liveLink:"https://color-caddy.herokuapp.com/#",
    githubLink:"https://github.com/maz222/Color-Caddy-React"
}

const segmentationEngine = {
    title:"Image Segmentation Engine (WIP)",
    images:[segmentation1],
    description:`A work in progress image segmentation editor. Users can place (and delete) points to form line segments and polygons on top of an image to define objects
    within the image. The image can be moved around the canvas, zoomed in/out, and have the brightness/contrast adjusted. Layers can be dragged and reordered along the z-dimension
    to render behind/in front of others. Uses a WebGL HTML5 canvas for rendering, on top of a React based UI. Working on adding bezier curves to mimic the "pen tool" found in Photoshop/Illustrator.`,
    tools:"React, NodeJS, Express, Axios, Styled Components, WebGL",
    githubLink:"https://github.com/maz222/Fancy-Box-Machine"
}

export const projects = [
    <Project projectData={mangaTranslator}/>,
    <Project projectData={segmentationEngine}/>,
    <Project projectData={uniqlone}/>,
    <Project projectData={colorCaddy}/>
];
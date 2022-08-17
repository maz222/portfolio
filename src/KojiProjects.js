import Accordion from 'react-bootstrap/Accordion';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';


import './KojiStyling.css';

import lightsOut from './Pics/LightsOut.jpg';
import picross from './Pics/Picross.jpg';
import tap1 from './Pics/TapAndMatch.jpg';
import tap2 from './Pics/TapAndMatch2.jpg';
import vine1 from './Pics/VineLine1.jpg';
import vine2 from './Pics/VineLine2.jpg';
import bubble1 from './Pics/Bubble1.jpg';
import bubble2 from './Pics/Bubble2.jpg';


function KojiProjects(props) {
	return(
		<div id="kojiProjects">
			<Carousel>
				{props.images.map((image,index) => {
					return(
						<Carousel.Item>
							<Image fluid src={image} className="projectImage"/>							
						</Carousel.Item>
					);	
				})}
			</Carousel>
            <div className='description'>
                <p>A series of javascript based browser games made for <a href="https://withkoji.com/">Koji</a>.</p>
                <p>Each game integrates with the Koji platform, allowing users to customize the assets to their liking.</p>
                <p>Koji hired freelance developers to develop simple browser games, and paid a flat fee for each once they were approved.</p>
                <p>Made with a combination of React and <a href="https://p5js.org/">P5.js</a></p>
                <p style={{fontSize:'.9em'}}><i>*Koji has since pivoted their business model and discontinued the freelance program. Some formatting on the Koji website may have changed.</i></p>
            </div>
            <Accordion>
                <Accordion.Item eventKey={0}>
                    <Accordion.Header>
                        Links
                    </Accordion.Header>
                    <Accordion.Body className='kojiLinks'>
                        {props.links.map((l,index) => {
                            return(
                                <Row className='kojiLink'>
                                    <p className='col-md-3 col-sm-6'>{l.title}</p>
                                    <div className='col-md-3 col-sm-3'><a href={l.koji} >Koji</a></div>
                                    <div className='col-md-3 col-sm-3'><a href={l.github}>Github</a></div>
                                </Row>
                            )
                        })}
                    </Accordion.Body>
                </Accordion.Item>
		</Accordion>
		</div>
	);
}

const kojiLinks = [
    {title:"Vine Line",koji:"https://withkoji.com/~maz2/vine-line-1",github:"https://github.com/maz222/Koji-Vine-Line-Game"},
    {title:"Lights Out",koji:"https://withkoji.com/~maz2/lights-out",github:"https://github.com/maz222/Koji-Lights-Out"},
    {title:"Tap and Match",koji:"https://withkoji.com/~maz2/tap-match",github:"https://github.com/maz222/Koji-Tap-And-Match"},
    {title:"Picross",koji:"https://withkoji.com/~maz2/picross-1",github:"https://github.com/maz222/Koji-Picross-Game"},
    {title:"Bubble Shooter",koji:"https://withkoji.com/~maz2/bubble-pop",github:"https://github.com/maz222/Koji-Bubble-Shooter"}
];

const kojiImages = [
    lightsOut,
    picross,
    tap1,tap2,
    vine1,vine2,
    bubble1,bubble2
]

export var KojiProjectsSection = <KojiProjects images={kojiImages} links={kojiLinks}></KojiProjects>;
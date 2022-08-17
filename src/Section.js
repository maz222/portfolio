import Accordion from 'react-bootstrap/Accordion';

export default function Section(props) {
	return(
		<Accordion className="accordion-flush">
			{props.items.map((item,index) => {
				return(
					<Accordion.Item eventKey={index}>
						<Accordion.Header>
							{item.header}
						</Accordion.Header>
						<Accordion.Body>
							{item.body}
						</Accordion.Body>
					</Accordion.Item>
				);
			})}
		</Accordion>
	);
}
import '../../css/generic.css';
import React, { useState } from 'react';

const Accordion = ({ items }) => {
	const [activeIndex, setActiveIndex] = useState(0);

	const renderedItem = items.map((item, index) => {
		const active = activeIndex === index ? '' : 'collapse';
		return (
			<div key={item.title} className="card">
				<div
					className="card-header c-pointer"
					onClick={() => setActiveIndex(index)}
				>
					<h4 className="card-title">{item.title}</h4>
				</div>
				<div className={`card-body ${active}`}>
					<p className="card-text">{item.content}</p>
				</div>
			</div>
		)
	});

	return (
		<React.Fragment>
			{renderedItem}
		</React.Fragment>
	);
}

export default Accordion;
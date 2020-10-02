import React from 'react';

const Link = ({ href, className, activeLink, onActiveLinkChange, children }) => {
	const onClick = (event) => {
		if (event.metaKey || event.ctrlKey) {
			return;
		}
		event.preventDefault();
		window.history.pushState({}, '', href);

		const navEvent = new PopStateEvent('popstate');
		window.dispatchEvent(navEvent);
		onActiveLinkChange(href);
	};

	return (
		<a
			onClick={onClick}
			href={href}
			className={`${className} ${activeLink === href ? 'active' : ''}`}
		>
			{children}
		</a>
	);
};

export default Link;
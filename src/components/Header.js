import '../css/generic.css';
import React, { useState } from 'react';
import Link from './Link';

const Header = () => {
	const [activeLink, setActiveLink] = useState('/');

	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3">
			<div className="container">
				<a href="/" className="navbar-brand">React Apps</a>
				<button
					className="navbar-toggler"
					data-toggle="collapse"
					data-target="#navReact"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div id="navReact" className="collapse navbar-collapse">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<Link href="/"
								className="nav-link"
								activeLink={activeLink}
								onActiveLinkChange={setActiveLink}
							>
								Accordion
							</Link>
						</li>
						<li className="nav-item">
							<Link href="/pics"
								className="nav-link"
								activeLink={activeLink}
								onActiveLinkChange={setActiveLink}
							>
								Picture Browser
							</Link>
						</li>
						<li className="nav-item">
							<Link href="/videos-with-classes"
								className="nav-link"
								activeLink={activeLink}
								onActiveLinkChange={setActiveLink}
							>
								Videos With Classes
							</Link>
						</li>
						<li className="nav-item">
							<Link href="/wikipedia-search"
								className="nav-link"
								activeLink={activeLink}
								onActiveLinkChange={setActiveLink}
							>
								Wikipedia Search
							</Link>
						</li>
						<li className="nav-item">
							<Link href="/translate"
								className="nav-link"
								activeLink={activeLink}
								onActiveLinkChange={setActiveLink}
							>
								Translate
							</Link>
						</li>
						<li className="nav-item">
							<Link href="/videos-with-hooks"
								className="nav-link"
								activeLink={activeLink}
								onActiveLinkChange={setActiveLink}
							>
								Videos With Hooks
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Header;
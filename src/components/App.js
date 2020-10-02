import React from 'react';
import Route from './Route';
import Header from './Header';
import Pics from './pics/Pics';
import VideosWithClasses from './videos_with_classes/VideosWithClasses';
import Search from './wikipedia_search/Search';
import Accordion from './accordion/Accordion';
import Translate from './translate/Translate';
import VideosWithHooks from './videos_with_hooks/VideosWithHooks';

const items = [
	{
		title: 'What is React?',
		content: 'React is a frontend javascript framework'
	},
	{
		title: 'Why use React?',
		content: 'React is a JS favourite library among engineers'
	},
	{
		title: 'How do you use React?',
		content: 'You use React by creating components and classes'
	}
];

export default () => {

	return (
		<React.Fragment>
			<Header />
			<div className="container py-3">
				<Route path="/">
					<Accordion items={items} />
				</Route>
				<Route path="/pics">
					<Pics />
				</Route>
				<Route path="/videos-with-classes">
					<VideosWithClasses />
				</Route>
				<Route path="/wikipedia-search">
					<Search />
				</Route>
				<Route path="/translate">
					<Translate />
				</Route>
				<Route path="/videos-with-hooks">
					<VideosWithHooks />
				</Route>
			</div>
		</React.Fragment>
	);
}
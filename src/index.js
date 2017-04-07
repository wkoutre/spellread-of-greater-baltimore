// React tooling
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
// styles
import './css/style.css';
// Components
import Landing from './components/Landing';
import Header from './components/Header';
import Footer from './components/Footer';
// import App from './components/App';
import NotFound from './components/NotFound';
import WhySpellReadWorks from './components/WhySpellReadWorks';
import Research from './components/Research';
import SuccessStories from './components/SuccessStories';
import ParentResources from './components/ParentResources';
import Contact from './components/Contact';
import DyslexiaFacts from './components/DyslexiaFacts';

const componentFinder = (page='home') => {
	
	switch(page) {
		case('home'):
			return Landing;
		case('dyslexia-facts'):
			return DyslexiaFacts
		case ('why-spellread-works'):
			return WhySpellReadWorks;
		case('research-and-media'):
			return Research;
		case('success-stories'):
			return SuccessStories;
		case('parent-resources'):
			return ParentResources;
		case('contact'):
			return Contact;
		default:
			return NotFound;
	}
}

const PathRendered = (props) => {
	
	const pageName = props.match.params.pageName;
	const Comp = componentFinder(pageName);
	
	return (
		<div>
			<Header />
			<Comp />
			<Footer />	
		</div>
	)
}

class Root extends React.Component {

	render() {
    document.addEventListener("touchstart", function(){}, true);
		return (
			<BrowserRouter>
				<Route path="/:pageName?" render={PathRendered}/>
			</BrowserRouter>
		)
	}
}

Landing.contextTypes = {
	router: React.PropTypes.object
}

NotFound.contextTypes = {
	router: React.PropTypes.object
}

Header.contextTypes = {
	router: React.PropTypes.object
}

render(<Root />, document.querySelector('#root'))

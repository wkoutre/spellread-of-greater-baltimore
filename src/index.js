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
			<Comp />
	)
}

class Root extends React.Component {

	// toggleHeaderDisplay = () => {
	// 	const navLinks = document.getElementById("nav-ul").children;

	// 	for (let i = 1; i < navLinks.length; i++){
	// 		navLinks[i].style.display = navLinks[i].style.display === 'none' ? 'flex' : 'none';
	// 	}
	// }

	// mobileCheck = () => {
	// 	console.log('bro, changing orientation!');
	// 	const showChildren = () => {
	// 		const navUl = document.getElementById("nav-ul");
	// 		const height = document.getElementById("nav-ul").style.height;
	// 		const navLinks = document.getElementById("nav-ul").children;

	// 		if (navLinks[1].style.display === 'none')
	// 			setTimeout(this.toggleHeaderDisplay, 300);
	// 		else
	// 			this.toggleHeaderDisplay();

	// 		 if (height !== '75vh')
	// 			navUl.style.height = '75vh';
	// 		 else
	// 			navUl.style.height = '3.5vh';
	// 		// console.log('classList', navUl.classList);
	// 	}
		
	// 	const navLinks = document.getElementById("nav-ul").children;
	// 	const width = screen.width;

	// 	if (width < 1025) {
	// 		// give all nav links hide/show capabilities on click
	// 		for (let i = 0; i < navLinks.length; i++) {
	// 			navLinks[i].addEventListener('click', () => showChildren());
	// 			// hide all children but the MENU 
	// 			if (i > 0) {
	// 				navLinks[i].style.display = 'none';
	// 			}
	// 		}
	// 	}
	// }

	toggleFullScreen = () => {
		  var doc = window.document;
		  var docEl = doc.documentElement;

		  var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
		  var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

		  if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
		    requestFullScreen.call(docEl);
		  }
		  else {
		    cancelFullScreen.call(doc);
		  }
		}

	render() {
    		document.addEventListener("touchstart", function(){}, true);

		return (
			<BrowserRouter>
				<div>
					<Header />
					<Route path="/:pageName?" render={PathRendered}/>
					<Footer />
				</div>
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

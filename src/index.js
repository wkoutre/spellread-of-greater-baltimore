// React tooling
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
// Firebase
import * as firebase from 'firebase'
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
let defaultDatabase, defaultApp;

class Root extends React.Component {

	componentWillMount() {
		 const config = {
		    apiKey: "AIzaSyATCj9PgrozINdOPK6ThC7qJn2vt6C9KeY",
		    authDomain: "spellread-6d601.firebaseapp.com",
		    databaseURL: "https://spellread-6d601.firebaseio.com",
		    projectId: "spellread-6d601",
		    storageBucket: "spellread-6d601.appspot.com",
		    messagingSenderId: "737105076515"
		  };

		  defaultApp = firebase.initializeApp(config);
		  defaultDatabase = firebase.database();
		  console.log(defaultDatabase);
	}

	PathRendered = (props) => {
		const pageName = props.match.params.pageName;
		const Comp = this.componentFinder(pageName);
		
		return <Comp />
	}

	componentFinder = (page='home') => {
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
					<Route path="/:pageName?" render={this.PathRendered}/>
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

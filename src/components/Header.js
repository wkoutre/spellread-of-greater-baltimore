import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../css/images/spell-read-logo.png';
import { footerDisplayOff } from './helpers'

let titles = ['Home', 'What is Dyslexia?', 'Why SpellRead Works', 'Research & Media', 'Success Stories', 'Parent Resources', 'Contact Us'];

let links = ["", "dyslexia-facts", "why-spellread-works", "research-and-media", "success-stories", "parent-resources", "contact"];

const isMobile = navigator.userAgent.search(/mobile/i) > -1;

if (isMobile) {
	titles = ['MENU', ...titles]
	links = ['menu', ...links]
}

const logo = <img className="header-logo" src={Logo} alt={"SpellRead logo"}/> 

class Header extends React.Component {

	// menuDropdown = (i) => {
	//  return 'party';
	//  const navUl = document.querySelectorAll('.nav-wrapper');
	//  console.log(navUl);
	// }
	headerDisplayOff = () => {
		const navLinks = document.getElementById("nav-ul").children;

		for (let i = 1; i < navLinks.length; i++){
			navLinks[i].style.display = 'none';
		}
	}

	toggleHeaderDisplay = () => {
		const navLinks = document.getElementById("nav-ul").children;

		for (let i = 1; i < navLinks.length; i++){
			navLinks[i].style.display = navLinks[i].style.display === 'none' ? 'flex' : 'none';
		}
	}

	mobileCheck = () => {
		const showChildren = () => {
			const navUl = document.getElementById("nav-ul");
			const height = document.getElementById("nav-ul").style.height;
			const navLinks = document.getElementById("nav-ul").children;

			if (navLinks[1].style.display === 'none'){
				setTimeout(this.toggleHeaderDisplay, 300);
			}
			else {
				this.toggleHeaderDisplay();
			}
			
			 navUl.style.height = height !== '75vh' ? '75vh' : '3.5vh';
		}
		
		const navLinks = document.getElementById("nav-ul").children;

		if (isMobile) {
			// give all nav links hide/show capabilities on click
			for (let i = 0; i < navLinks.length; i++){
				navLinks[i].addEventListener('click', showChildren);
				navLinks[i].addEventListener('click', footerDisplayOff);

				// hide all children but the MENU 
				if (i > 0) {
					navLinks[i].style.display = 'none';
					// navLinks[i].style.opacity = 0;
				}
			}
		}
	}

	componentDidMount() {
		this.mobileCheck();
	}

	linkMaker = (title, i) => {
		let style;

		if (!isMobile){
			title = title === 'Home' ? logo : title;
			style = `${links[i]}-header`
		} else {
			style = `${links[i]}-header`
		}
		// styling the active path (manually... without using React's activeClassName)
		if (links[i].length > 0 && this.context.router.route.location.pathname.match(links[i])) {
			style += ` active`;
			return (
			<li 
			key={title}
			>
				<Link
				to={`/${links[i]}`}
				><span className={style}>{title}</span>
				</Link>
			</li>
			)
		} else {
			if (links[i] === 'menu') {
				console.log(links[i]);
				return (
					<li 
						key={title}
						id="menu"
						>SITE NAVIGATION
					</li>
				)
			} else {
				return (
					<li 
					key={title}
					>
						<Link
						to={`/${links[i]}`}
						><span className={style}>{title}</span></Link>
					</li>
				)
			}
		}
	}

	render() {
		const navStyle = isMobile ? {"height": "3.5vh"} : {"height": "auto"}
		return (
			<header className="header">
				<nav role="navigation">
					<div className="nav-wrapper">
						<ul id="nav-ul" style={navStyle}>
							{titles.map(this.linkMaker)}
						</ul>
					</div>
				</nav>
			</header>
		)
	}
		
}

export default Header;

// onClick={this.menuDropdown(i)}

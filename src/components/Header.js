import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../css/images/spell-read-logo.png';

const titles = ['Home', 'What is Dyslexia?', 'Why SpellRead Works', 'Research & Media', 'Success Stories', 'Parent Resources', 'Contact'];

const links = ["", "dyslexia-facts", "why-spellread-works", "research-and-media", "success-stories", "parent-resources", "contact"];

if (screen.width < 768){
	titles = ['MENU', ...titles]
	links = ['menu', ...links]
}

const logo = <img className="header-logo" src={Logo} alt={"SpellRead logo"}/> 

class Header extends React.Component {

	// menuDropdown = (i) => {
	// 	return 'party';
	// 	const navUl = document.querySelectorAll('.nav-wrapper');
	// 	console.log(navUl);
	// }

	componentDidMount() {
		const showChildren = () => {
			const navUl = document.getElementById("nav-ul");
			const height = document.getElementById("nav-ul").style.height;

			navUl.style.height = height !== '50vh' ? '50vh' : '0';
			// console.log('classList', navUl.classList);
		}

		const navLinks = document.getElementById("nav-ul").children;
		const navMenu = navLinks[0];
		const width = screen.width;
		// console.log(navMenu)
		if (width < 768){
			for (let i = 0; i < navLinks.length; i++){
				navLinks[i].addEventListener('click', () => showChildren());
			}
		}
	}

	linkMaker = (title, i) => {
		const width = screen.width;
		let style;

		if (width > 767){
			title = title === 'Home' ? logo : title;
			style = `${links[i]}-header`
		} else {
			if (i > 0)
				style = `${links[i]}-header noDisplay`
			else
				style = `${links[i]}-header displayMe`
		}
		// styling the active path (manually... without using React's activeClassName)
		if (links[i].length > 0 && this.context.router.route.location.pathname.match(links[i])) {
			style += ` active`;
			return (
			<li 
			key={title}
			>
				<Link
				className={style}
				to={`/${links[i]}`}
				>{title}
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
						>MENU
					</li>
				)
			} else {
				return (
					<li 
					key={title}
					>
						<Link
						className={style}
						to={`/${links[i]}`}
						>{title}</Link>
					</li>
				)
			}
		}
	}

	render() {
		return (
			<header className="header">
				<nav role="navigation">
					<div className="nav-wrapper">
						<ul id="nav-ul">
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

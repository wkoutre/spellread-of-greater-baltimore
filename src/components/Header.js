import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../css/images/spell-read-logo.png';

const titles = ['Home', 'What is Dyslexia?', 'Why SpellRead Works', 'Research & Media', 'Success Stories', 'Parent Resources', 'Contact'];
const links = ["", "dyslexia-facts", "why-spellread-works", "research-and-media", "success-stories", "parent-resources", "contact"];

const logo = <img className="header-logo" src={Logo} alt={"SpellRead logo"}/> 

class Header extends React.Component {

	linkMaker = (title, i) => {
	title = title === 'Home' ? logo : title;

	if (links[i].length > 0 && this.context.router.route.location.pathname.match(links[i])) {
		return (
			<li key={title}>
				<Link className={`active ${links[i]}-header`} to={`/${links[i]}`}>{title}</Link>
			</li>
		)
	} else {
		return (
			<li key={title}>
				<Link className={`${links[i]}-header`} to={`/${links[i]}`}>{title}</Link>
			</li>
		)
	}
}
	render() {
		return (
			<header className="header">
				<nav role="navigation">
					<div className="nav-wrapper">
						<ul>
							{titles.map(this.linkMaker)}
						</ul>
					</div>
				</nav>
			</header>
		)
	}
		
}

export default Header;

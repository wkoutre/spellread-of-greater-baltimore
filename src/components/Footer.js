import React from 'react';
import MyLink from './MyLink';
import { facebook, linkedin, sections, address, office, fax, copyright, linkInfo } from './content/_footer';

const linkMaker = (sectionTitle) => {
	let items;
	let count = 0;

	if (sectionTitle === "Social Media")
		items = [facebook, linkedin];
	if (sectionTitle === "Contact")
		items = [office, fax];
	if (sectionTitle === "")
		items = [copyright]
	if (sectionTitle === "Address")
		items = [address]

	return (
		<div className="footer-section" key={`footer-item-${sectionTitle}`}>
			{sectionTitle !== "" && <h4 className={'footer-title'}>{sectionTitle}</h4>}
			{items.map(i => {
				const id = typeof i === 'string' ? i.split(' ')[0] : i;

				return <div id={id} key={`${i}-${count++}`}>{i}</div>
			})}
		</div>
	)
}

const Footer = () => {
	let linkNavBar = linkInfo.map( (link, i) => {
  		return <li key={`${link}-${i}`}><MyLink text={link[0]} link={link[1]} /></li>
  	});

	return (
		<footer className="footer">
			<div>
				<div className="nav-links">
					<h4 className={'footer-title'}>Links to Research</h4>
					<ul>
						{linkNavBar}
					</ul>
				</div>
				{sections.map(linkMaker)}	
			</div>
		</footer>
	)
}

export default Footer;

// let linkNavBar = linkInfo.map( (link, i) => {
//   		return <li key={`${link}-${i}`}><MyLink text={link[0]} link={link[1]} /></li>
//   	});

import React from 'react';
import MyLink from './MyLink';
import { facebook, linkedin, sections, address, office, fax, copyright, linkInfo } from './content/_footer';
import { headerDisplayOff } from './helpers'
const isMobile = navigator.userAgent.search(/mobile/i) > -1

class Footer extends React.Component {

  componentDidMount() {
    // function to give everything in footer to show/hide upon clicking
    const showChildren = () => {
      const footerDiv = document.getElementById("footer-div");
      const height = document.getElementById("footer-div").style.height;
      const footerDivKids = document.getElementById("footer-div").children;

      if (footerDivKids[1].style.display === 'none')
        setTimeout(this.toggleFooterDisplay, 400);
      else
        this.toggleFooterDisplay();

       footerDiv.style.height = height !== '75vh' ? '75vh' : '5.5vh'

    }

    const footerDiv = document.getElementById("footer-div");
    const footerDivKids = footerDiv.children;

    if (isMobile){
      this.toggleFooterDisplay();
      for (let i = 0; i < footerDivKids.length; i++) {
        footerDivKids[i].addEventListener('click', showChildren);
        footerDivKids[i].addEventListener('click', headerDisplayOff);
        // hide all children but the INFO
        if (i < footerDivKids.length - 1){
          footerDivKids[i].style.display = 'none';
          // footerDiv[i].style.opacity = 0;
        }
      }
    }
  }

  toggleFooterDisplay = () => {
    const footerLinks = document.getElementById("footer-div").children;

    for (let i = 0; i < footerLinks.length - 1; i++){
      footerLinks[i].style.display = footerLinks[i].style.display === 'none' ? 'flex' : 'none';
    }
  }

  linkMaker = (sectionTitle) => {
  let items;
  let count = 0;

  if (sectionTitle === "Social Media")
    items = [facebook, linkedin];
  if (sectionTitle === "Contact")
    items = [office, fax];
  if (sectionTitle === ""){
    items = !isMobile ? [copyright] : ['INFORMATION']
  }
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

	render() {
    let linkNavBar = linkInfo.map( (link, i) => {
      return <li key={`${link}-${i}`}><MyLink text={link[0]} link={link[1]} /></li>
    });

    let style = {"height": "5vh"}
    
    return (
    <footer className="footer">
      <div id="footer-div" style={style}>
        <div className="nav-links">
          <h4 className={'footer-title'}>Links to Research</h4>
          <ul>
            {linkNavBar}
          </ul>
        </div>
        {sections.map(this.linkMaker)} 
      </div>
    </footer>
  )

  }
}

export default Footer;

// let linkNavBar = linkInfo.map( (link, i) => {
//   		return <li key={`${link}-${i}`}><MyLink text={link[0]} link={link[1]} /></li>
//   	});

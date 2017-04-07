import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../css/images/spell-read-logo.png';

let titles = ['Home', 'What is Dyslexia?', 'Why SpellRead Works', 'Research & Media', 'Success Stories', 'Parent Resources', 'Contact'];

let links = ["", "dyslexia-facts", "why-spellread-works", "research-and-media", "success-stories", "parent-resources", "contact"];

if (screen.width < 768){
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

  componentDidMount() {
    const showChildren = () => {
      const navUl = document.getElementById("nav-ul");
      const height = document.getElementById("nav-ul").style.height;
      const navLinks = document.getElementById("nav-ul").children;

      if (navLinks[1].style.display === 'none')
        setTimeout(this.toggleHeaderDisplay, 300);
      else
        this.toggleHeaderDisplay();

       if (height !== '75vh')
        navUl.style.height = '75vh';
       else
        navUl.style.height = '3.5vh';
      // console.log('classList', navUl.classList);
    }
    
    const navLinks = document.getElementById("nav-ul").children;
    const width = screen.width;

    if (width < 768){
      // give all nav links hide/show capabilities on click
      for (let i = 0; i < navLinks.length; i++){
        navLinks[i].addEventListener('click', () => showChildren());
        // hide all children but the MENU 
        if (i > 0){
          navLinks[i].style.display = 'none';
          // navLinks[i].style.opacity = 0;
        }
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
    const width = screen.width;
    const navStyle = width < 768 ? {"height": "3.5vh"} : {"height": "auto"}
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

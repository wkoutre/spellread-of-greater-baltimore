import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
// import { Link } from 'react-router-dom';
// import Header from './Header';
// import Footer from './Footer';
import {headerArray, dataArray, buttonArray } from './content/_why_spellread_works_content';


class WhySpellReadWorks extends React.Component {
  constructor() {
    super();
    this.state = {
      current: 0,
      texts: dataArray,
      headers: headerArray,
      buttons: buttonArray,
      buttonContent: "",
      totalSlides: []
    }
  }

  componentDidMount() {
    this.handleClick();
  }

  handleClick = () => {
    // console.log('handling click');
    let localCurrent = this.state.current;
    // localCurrent = localCurrent === this.state.texts.length - 1 ? 0 : localCurrent + 1;
    localCurrent += 1;

    this.setState({
      current: localCurrent
    });

    this.contentHandler();
  }

  contentHandler = () => {
    const content = this.state.texts[this.state.current];
    const match = content.match(/(png)|(svg)/);   
    const header = this.state.headers[this.state.current]
    const dataToRender = match ? <img src={content} alt={content}/> :  <p>{content}</p>;

    /* update this with PNGs... or learn how to use SVG */

      let newTotalSlides = [...this.state.totalSlides];
      let newButtonContent = this.state.buttons[this.state.current];

      newTotalSlides.push(
             <div
          key={content}
          className="why-sr-works-content">
          <div>
              <h5>{header}</h5>
              {dataToRender}
          </div>
            
          </div>
      )

      this.setState({
          totalSlides: newTotalSlides,
          buttonContent: newButtonContent
      })
    }

  // buttonContentHandler = () => {
  //   const buttonContent = this.state.buttons[this.state.current];

  //   return `Next: ${buttonContent}`;
  // }

  render() {

    const nextButton = <button 
                className="btn-why-sr-works bottom-item"
                onClick={this.handleClick}>
                  {`Next: ${this.state.buttonContent}`}
                </button>

      const exploreSite = <p className="bottom-text bottom-item">For more information, please click around the site, explore the resources linked at the bottom, and get in touch!</p>

    return (
          <CSSTransitionGroup
          component="div"
          transitionName="slideInRight"
          transitionAppear={true}
          transitionAppearTimeout={1500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          className="page-wrapper why-spellread-works-wrapper">
            <div className="why-spellread-works">
                {this.state.totalSlides}
            {this.state.current < this.state.headers.length ?
              nextButton :
              exploreSite}
              </div>
        </CSSTransitionGroup>
    )
  }
}

export default WhySpellReadWorks;



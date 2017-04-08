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
      current: 1,
      totalSlides: []
    }
  }

  componentDidMount() {
    let slides = [];
    let show;
    for (let i = 0; i < 6; i++){
    	if (screen.width > 767)
    		 show = i === 0 ? "why-sr-works-content show" : "why-sr-works-content hide";
    	else
    		show = "why-sr-works-content show";
      const content = dataArray[i];
      const match = content.match(/(png)|(svg)/);   
      const header = headerArray[i];
      const dataToRender = match ? <img src={content} alt={content}/> :  <p>{content}</p>;
      const div = (
            <div
              key={content}
              className={show}
              id={`why-sr-works-${i}`}>
              <div>
                <h5>{header}</h5>
                {dataToRender}
              </div>
          </div>
        )
      slides.push(div);
    }

    this.setState({
      totalSlides: slides
    })
  }

  contentHandler = () => {
    /* update this with PNGs... or learn how to use SVG */
    const localCurrent = this.state.current + 1;
    let element = document.getElementById(`why-sr-works-${this.state.current}`);
    element.className += " show";

    this.setState({
          current: localCurrent
      })
    }

  render() {

    const nextButton = <button 
                className="btn-why-sr-works"
                onClick={this.contentHandler}>
                  <span>{`Next: ${buttonArray[this.state.current-1]}`}</span>
                </button>

      const exploreSite = <p className="bottom-text bottom-item">For more information, please click around the site, explore the resources linked at the bottom, and get in touch!</p>

    return (
          <CSSTransitionGroup
          component="div"
          transitionName="fadeIn"
          transitionAppear={true}
          transitionAppearTimeout={1500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          className="page-wrapper why-spellread-works-wrapper">
            <div className="why-spellread-works">
                {this.state.totalSlides}
            {this.state.current < headerArray.length ?
              nextButton :
              exploreSite}
              </div>
        </CSSTransitionGroup>
    )
  }
}

export default WhySpellReadWorks;



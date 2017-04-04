import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import { content, buttonArray, headers } from './content/_research';

class Research extends React.Component {
  constructor() {
    super();
    this.state = {
      current: 0,
      content: content,
      buttons: buttonArray,
      headers: headers
    }
  }

  handleClick = () => {
    let localCurrent = this.state.current;
    localCurrent = localCurrent === this.state.content.length - 1 ? 0 : localCurrent + 1;

    this.setState({
      current: localCurrent
    });
  }

  contentHandler = () => {
    const content = this.state.content[this.state.current];
    const contentType = content[0];
    const dataToRender = content[1];
    const header = this.state.headers[this.state.current]

    return (
    	<div className="research-content" key={contentType}>
    		<h1>{header}</h1>
    		<div>
    			{dataToRender}
    		</div>
    	</div>
    	)
    }

  buttonContentHandler = () => {
    const buttonContent = this.state.buttons[this.state.current];

    return buttonContent;
  }

  render() {

    return (
          <CSSTransitionGroup
          component="div"
          transitionName="slideInRight"
          transitionAppear={true}
          transitionAppearTimeout={1500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          className="page-wrapper research-wrapper">
            <div className="research">
                {this.contentHandler()}
                <button 
                className="next-btn"
                onClick={this.handleClick}>
                  {this.buttonContentHandler()}
                </button>
              </div>
        </CSSTransitionGroup>
    )
  }
}

export default Research

// <h1 key={"research"}><span>{this.state.headers[this.state.current]}</span></h1>

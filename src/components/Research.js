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

  render() {
    const contentToRender = (

      <div
        className="research-content"
        key={this.state.content[this.state.current][0]}>
        <h2>{this.state.headers[this.state.current]}</h2>
        <div>
          {this.state.content[this.state.current][1]}
        </div>
      </div>
    )

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
                {contentToRender}
                <button 
                className="next-btn"
                onClick={this.handleClick}>
                  <span>{this.state.buttons[this.state.current]}</span>
                </button>
              </div>
        </CSSTransitionGroup>
    )
  }
}

export default Research

// <h1 key={"research"}><span>{this.state.headers[this.state.current]}</span></h1>

import React from 'react'
import { successes } from './content/_successStories.js';
import CSSTransitionGroup from 'react-addons-css-transition-group';

class SuccessStories extends React.Component {
	constructor() {
		super();
		this.state = {
			current: 0,
			count: 0,
			names: [],
			stories: [],
			currentNames: [],
			currentStories: []
		}
	}

	componentDidMount() {
		const names = Object.keys(successes);

		/*
			ONLY CHROME AND FIREFOX SUPPORT OBJECT.VALUES
			const stories = Object.values(successes);
		*/

		const stories = names.reduce( (arr, cur) => {
			return arr.concat(successes[cur]);
		}, []);
		
		this.setState({
			count: Object.keys(successes).length,
			current: 3,
			names: names,
			stories: stories,
			currentNames: names.slice(0, 4),
			currentStories: stories.slice(0, 4)
		})
	}

  scrollToTop = () => {
    const successWrapper = document.getElementsByClassName("success-wrapper");
    const successContent = document.getElementsByClassName("success-content");
    successWrapper[0].scrollTop = successContent[0].scrollHeight;

    const smoothScroll = () => {
      // console.log('hello');
      successWrapper[0].scrollTop -= 50;
    }
    let stop = setInterval(smoothScroll, 1);
    setTimeout(() => clearInterval(stop), 400);
  }

	changeStories = () => {
		let names = [], stories = [];
		let newCurrent = this.state.current;

		for (let i = 0; i < 4; i++){
			newCurrent = newCurrent + 1 < this.state.count ? newCurrent + 1 : 0;
			names.push(this.state.names[newCurrent]);
			stories.push(this.state.stories[newCurrent]);
		}

		// console.log(newCurrent);

		this.setState({
			current: newCurrent,
			currentNames: names,
			currentStories: stories
		})

    this.scrollToTop();
	}

	render() {

		let mappedStories = this.state.currentStories.map( (s, i) => {
			return (
				<div key={s} className="story-container">
					<h2>{this.state.currentNames[i]}</h2>
					<p>{s}</p>
				</div>
			)
		});

		return (
			<CSSTransitionGroup
          component="div"
          transitionName="fadeIn"
          transitionAppear={true}
          transitionAppearTimeout={1500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          className="page-wrapper success-wrapper">
				<div className="success-content">
					{mappedStories}
				</div>
				<button onClick={() => this.changeStories()}><span>More Stories</span></button>
			</CSSTransitionGroup>
		)
	}
}

export default SuccessStories;

import React from 'react'
import { successes } from './content/_successStories.js';

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
		const stories = Object.values(successes);
		// console.log(names);

		this.setState({
			count: Object.keys(successes).length,
			current: 3,
			names: Object.keys(successes),
			stories: Object.values(successes),
			currentNames: names.slice(0, 4),
			currentStories: stories.slice(0, 4)
		})
	}

	changeStories = () => {
		// const name1 = this.state.names[this.state.current],
		// 		name2 = this.state.names[this.state.current + 1],
		// 		story1 = this.state.stories[this.state.current],
		// 		story2 = this.state.stories[this.state.current + 1]
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
	}

	displayStories = () => {

		let localStories = this.state.currentStories.map( (s, i) => {
			return (
					<div key={s} className="story-container">
						<h2>{this.state.currentNames[i]}</h2>
						<p>{s}</p>
					</div>
					)
		});

		return (
			<div className="success-content">
				{localStories}
			</div>
		)
	}

	render() {
		// console.log(this.displayStories());

		return (
			<div className="page-wrapper research-wrapper">
			{this.displayStories()}
			<button onClick={() => this.changeStories()}><span>More Stories</span></button>
			</div>
		)
	}
}

export default SuccessStories;

// 3 columns of success stories per page with an clickable arrow to load in 3 more
// There are 14 total so... don't forget to account for the end of the cycle, letting the user know it's about to start over
// Also the option to view them all at once on a separate page

import React, { Component } from 'react';

class Balloon extends Component {
	constructor(props) {
		super(props);

		this.props = {
			color: '',
			minSize: '',
			pumpRate: ''
		}

		this.state = {
			currentSize: props.minSize,
			currentPumpRate: props.pumpRate
		}

		this.pumpBalloon = this.pumpBalloon.bind(this);

	}

	pumpBalloon() {
		this.setState((state, props) => {
			if (this.state.currentSize < 50) {
				return {currentSize: state.currentSize + state.currentPumpRate};
			} else {
				alert("Pop!");
				return {currentSize: props.minSize};
			}
		})}

				render() {
					return (
						<div>
						<p 
						style={{
							backgroundColor: this.props.color,
							width: this.state.currentSize
						}}
						>
						Doot
						</p>
						<button onClick={this.pumpBalloon}>Pump!</button>
						</div>
						)
				}
			}

			export default Balloon;
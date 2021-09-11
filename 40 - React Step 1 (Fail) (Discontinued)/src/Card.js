import React, { Component } from 'react'
import './Card.css';

class Card extends Component {
	render() {
		return (
			<div>
				<img src='https://robohash.org/Khawelad+?set=set2' alt="Jane Doe" />
				<h2>{this.props.name}</h2>
				<p>{this.props.email}</p>
			</div>
		);
	};
};

export default Card;
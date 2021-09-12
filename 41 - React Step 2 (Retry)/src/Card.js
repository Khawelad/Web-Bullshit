import React from 'react';
import './Card.css';

class Card extends React.Component {
	render() {
		return (
			<div className='card'>
				<img src={`https://robohash.org/${this.props.id}?set=set5`} alt={this.props.name} />
				<h2>{this.props.name}</h2>
				<p>{this.props.email}</p>
			</div>
		)
	}
}

export default Card;
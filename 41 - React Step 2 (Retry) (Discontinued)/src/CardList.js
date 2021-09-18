import React from 'react';
import Card from './Card';
import { Robots } from './Robots';

const CardList = () => {
	const CardsArray = Robots.map((user, i) => {
		return <Card name={Robots[i].name} email={Robots[i].email} id={Robots[i].id} />
	});
	return (
		<div className="wrapper">
			{CardsArray}
		</div>
	);
}

export default CardList;
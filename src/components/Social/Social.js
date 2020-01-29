import React from 'react';
import './Social.css';

import { Link } from 'react-router-dom';

export default function Social(props) {
	return (
		<li>
			<Link to={props.url} className='link-underline'>
				<img
					className='social-logo'
					src={require(`../../images/${props.img}`)}
					alt={props.name}
				/>
				{`> ${props.name}`}
			</Link>
		</li >
	)
}
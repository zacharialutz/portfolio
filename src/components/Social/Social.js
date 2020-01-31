import React from 'react';
import './Social.css';

// import { Link } from 'react-router-dom';

export default function Social(props) {
	return (
		<li>
			<a
				href={props.url}
				className='link-underline'
				target='_blank'
				rel='noopener noreferrer'
			>
				<img
					className='social-logo'
					src={require(`../../images/${props.img}`)}
					alt={props.name}
				/>
				{`> ${props.name}`}
			</a>
		</li >
	)
}
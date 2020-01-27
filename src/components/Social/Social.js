import React from 'react';
import './Social.css'

export default function Social(props) {
	return (
		<li>
			<a
				class='social-link'
				href={props.url}
			>
				<img
					class='social-logo'
					src={require(`../../images/${props.img}`)}
					alt={props.name}
				/>
				> {props.name}
			</a>
		</li>
	)
}
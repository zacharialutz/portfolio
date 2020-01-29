import React from 'react';
import './ProjectItem.css';

import { Link } from 'react-router-dom';

export default function ProjectItem(props) {
	return (
		<div className='project-item'>
			<h3>{props.name}</h3>
			<img
				className='screenshot'
				// src={require(`../../images/${props.img}`)}
				alt={`screenshot of ${props.name}`}
			/>
			<p className='recenter'>
				{props.desc}
			</p>
			<p className='recenter'>
				{props.credit}
			</p>
			<p className='narrow-type'>
				{props.tech}
			</p>
			<div className='project-links'>
				<Link to={props.liveUrl}>
					<span className='live-link project-btn'>> Live App</span>
				</Link>
				<Link to={props.clientGit}>
					<span className='github-link project-btn'>> Client GitHub</span>
				</Link>
				<Link to={props.serverGit}>
					<span className='github-link project-btn'>> Server GitHub</span>
				</Link>
			</div>
		</div>
	)
}
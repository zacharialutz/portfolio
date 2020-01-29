import React from 'react';
import './ProjectItem.css';

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
				<a
					href={props.liveUrl}
					target='_blank'
					rel='noopener noreferrer'
				>
					<span className='live-link project-btn'>> Live App</span>
				</a>
				<a
					href={props.clientGit}
					target='_blank'
					rel='noopener noreferrer'
				>
					<span className='github-link project-btn'>> Client GitHub</span>
				</a>
				<a
					href={props.serverGit}
					target='_blank'
					rel='noopener noreferrer'
				>
					<span className='github-link project-btn'>> Server GitHub</span>
				</a>
			</div>
		</div>
	)
}
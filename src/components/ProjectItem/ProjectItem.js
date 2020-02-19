import React from 'react';
import './ProjectItem.css';

export default function ProjectItem(props) {
	return (
		<div className='project-item'>
			<h3>{props.name}</h3>
			<img
				className='screenshot'
				src={require(`../../images/${props.img}`)}
				alt={`screenshot of ${props.name}`}
			/>
			<p className='recenter'>
				{props.desc}
			</p>
			<p className='narrow-type'>
				{props.tech}
			</p>
			<div className='project-links'>
				<a
					className='live-link project-btn'
					href={props.liveUrl}
					target='_blank'
					rel='noopener noreferrer'
				>
					> Live App
				</a>
				<a
					className='github-link project-btn'
					href={props.clientGit}
					target='_blank'
					rel='noopener noreferrer'
				>
					> Client GitHub
				</a>
				<a
					className='github-link project-btn'
					href={props.serverGit}
					target='_blank'
					rel='noopener noreferrer'
				>
					> Server GitHub
				</a>
			</div>
		</div>
	)
}
import React from 'react';
import './ProjectItem.css';

export default function ProjectItem(props) {
	return (
		<div className='project-item'>
			<h3>{props.name}</h3>
			{props.role && <h4>{props.role}</h4>}
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
				{props.liveUrl &&
					<a
						className='live-link project-btn'
						href={props.liveUrl}
						target='_blank'
						rel='noopener noreferrer'
					>
						> Live App
					</a>
				}
				{props.clientGit &&
					<a
						className='github-link project-btn'
						href={props.clientGit}
						target='_blank'
						rel='noopener noreferrer'
					>
						> Client GitHub
					</a>
				}
				{props.serverGit &&
					<a
						className='github-link project-btn'
						href={props.serverGit}
						target='_blank'
						rel='noopener noreferrer'
					>
						> Server GitHub
					</a>
				}
				{props.steamUrl &&
					<a
						className='live-link project-btn'
						href={props.steamUrl}
						target='_blank'
						rel='noopener noreferrer'
					>
						> Steam Page
					</a>
				}
			</div>
		</div>
	)
}
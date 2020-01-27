import React from 'react';
import './ProjectItem.css'

export default function ProjectItem(props) {
	return (
		<div>
			<h3>{props.name}</h3>
			<img
				class='screenshot'
				// src={require(`../../images/${props.img}`)}
				alt={`screenshot of ${props.name}`}
			/>
			<p class='recenter'>
				{props.desc}
			</p>
			<p class='recenter'>
				{props.credit}
			</p>
			<p class='narrow-type'>
				{props.tech}
			</p>
			<div class='project-links'>
				<a
					class='live-link'
					href={props.liveUrl}
				>
					> Live App
				</a>
				<a
					class='github-link'
					href={props.clientGit}
				>
					> Client GitHub
				</a>
				<a
					class='github-link'
					href={props.serverGit}
				>
					> Server GitHub
				</a>
			</div>
		</div>
	)
}
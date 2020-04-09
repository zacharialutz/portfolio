import React from 'react';
import STORE from '../../store';
import './Projects.css'

import ProjectItem from '../ProjectItem/ProjectItem';

export default function Projects() {
	const bookmark_organizer = STORE.projects.bookmark_organizer;

	return (
		<section id='projects'>
			<h2>&nbsp;PROJECTS&nbsp;</h2>
			<ProjectItem
				name={bookmark_organizer.name}
				img={bookmark_organizer.img}
				role={bookmark_organizer.role}
				desc={bookmark_organizer.desc}
				tech={bookmark_organizer.tech}
				liveUrl={bookmark_organizer.liveUrl}
				clientGit={bookmark_organizer.clientGit}
				serverGit={bookmark_organizer.serverGit}
			/>
			<ProjectItem
				name={'Calliope: The Muse of Writing'}
				img={'screenshot_calliope.png'}
				desc={'Automatically generate paragraph-length stories with the click of a button using a system that pulls and arranges nouns, verbs, and adjectives from a database of thousands of words. It can help prompt ideas for writing or artwork, or provide entertainment on its own.'}
				tech={'HTML5, CSS3, JavaScript, React, Node, Express, PostgreSQL'}
				liveUrl={'https://calliope.now.sh/'}
				clientGit={'https://github.com/zacharialutz/calliope_client'}
				serverGit={'https://github.com/zacharialutz/calliope_server'}
			/>
			<ProjectItem
				name={'Aerobots VR: Robotic Aerial Combat'}
				img={'screeenshot_aerobots-vr.png'}
				role={'Art Director'}
				desc={'Fly with complete freedom as one of six different robot characters and battle your opponents admist a near-future cyberpunk dystopia in this fast-paced multiplayer shooter built from the ground up for virtual reality. Created by Northwoods Interactive.'}
				tech={'Unreal Engine 4'}
				steamUrl={'https://store.steampowered.com/app/967750/Aerobots_VR'}
			/>
		</section>
	)
}
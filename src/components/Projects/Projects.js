import React from 'react';
import './Projects.css'

import ProjectItem from '../ProjectItem/ProjectItem';

export default function Projects() {
	return (
		<section id='projects'>
			<h2>&nbsp;PROJECTS&nbsp;</h2>
			<ProjectItem
				name={'Bookmark Organizer'}
				img={'screenshot_bookmark-organizer.png'}
				desc={'Reorganize, search, filter, and access your bookmarks without having to go through the poor user experience of built-in browser bookmark managers.'}
				tech={'HTML5, CSS3, JavaScript, React, Node, Express, PostgreSQL'}
				liveUrl={'https://bookmark-organizer.now.sh'}
				clientGit={'https://github.com/thinkful-ei-heron/Group5-Capstone3-Client'}
				serverGit={'https://github.com/thinkful-ei-heron/Group5-Capstone3-Server'}
			/>
			<ProjectItem
				name={'Calliope'}
				img={'screenshot_calliope.png'}
				desc={'Automatically generate paragraph-length stories with nouns, verbs, and adjectives pulled from a database of thousands of words. It can help prompt ideas for writing or artwork, and be quite entertaining in general.'}
				tech={'HTML5, CSS3, JavaScript, React, Node, Express, PostgreSQL'}
				liveUrl={'https://calliope.now.sh/'}
				clientGit={'https://github.com/zacharialutz/calliope_client'}
				serverGit={'https://github.com/zacharialutz/calliope_server'}
			/>
			<ProjectItem
				name={'Spaced Repetition'}
				img={'screenshot_spaced-repetition.png'}
				desc={'Use the spaced repetition technique to learn twenty Latin vocabulary words.'}
				tech={'HTML5, CSS3, JavaScript, React, Node, Express, PostgreSQL'}
				liveUrl={'https://gz-spaced-repetition-app.now.sh/'}
				clientGit={'https://github.com/thinkful-ei-heron/spaced-repetition_Zac-Glaiza_client'}
				serverGit={'https://github.com/thinkful-ei-heron/spaced-repetition_Zac-Glaiza_server'}
			/>
		</section>
	)
}
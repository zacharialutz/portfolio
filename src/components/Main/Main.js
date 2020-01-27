import React from 'react';
import './Main.css'

import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

export default function Main() {
	return(
		<>
			<About />
			<Projects />
			<Contact />
		</>
	)
}
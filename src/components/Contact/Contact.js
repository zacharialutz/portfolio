import React from 'react';
import './Contact.css'

import Social from '../Social/Social';

export default function Contact() {
	return (
		<section id='contact'>
			<h2>&nbsp;CONTACT&nbsp;</h2>
			<address>
				<h3>Write me at:</h3>
				<a
					class='contact-info'
					href='mailto:zacharia.lutz@gmail.com'
				>
					zacharia.lutz@gmail.com
			</a>
			</address>

			<h3>Find me at:</h3>
			<ul className='social-list'>
				<Social
					name={'LinkedIn'}
					url={'https://www.linkedin.com/in/zacharia-lutz'}
					img={'logo-LinkedIn.png'}
				/>
				<Social
					name={'GitHub'}
					url={'https://github.com/zacharialutz'}
					img={'logo-GitHub.png'}
				/>
			</ul>
		</section>
	)
}
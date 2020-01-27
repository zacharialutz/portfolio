import React from 'react';
import './Footer.css'

import { Link } from 'react-router-dom';

export default function Footer() {
	return (
		<footer>
			<p>Copyright <span class='narrow-type'>&copy;</span> 2019 Zacharia Lutz. All Rights Reserved.</p>
			<p>
				<Link to={'/info'}>
					About this Application
				</Link>
			</p>
		</footer>
	)
}
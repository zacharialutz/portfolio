import React from 'react';
import './Nav.css'

import { Link } from 'react-router-dom';

export default function Nav() {
	return(
		<nav>
			<Link to='/' className='btn-nav'>
				About
			</Link>
			<Link to='/' className='btn-nav'>
				Projects
			</Link>
			<Link to='/' className='btn-nav'>
				Contact
			</Link>
		</nav>
	)
}
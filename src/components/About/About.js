import React from 'react';
import './About.css'

export default class About extends React.Component {
	state = { open: false }

	toggleOpen = () => {
		const other = !this.state.open;
		this.setState({ open: other })
	}

	render() {
		return (
			<section id='about' className='paragraph'>
				<p></p>
				<p>&emsp;&emsp;I believe creativity is a lifestyle. I also believe everything I do ought to be done well and with intention.
					Using contemporary tools and practices, I produce web applications that dissolve the boundaries between art and design.</p>
				{this.state.open
					? <>
						<p>&emsp;&emsp;I’ve studied engineering, archaeology, history, and oil painting. I’ve worked a diverse assortment of jobs,
							from live music videography to running the security control center at an art museum. But ultimately I’ve found that
							software development is my perfect blend of both creative and analytical pursuits. And as a result of this path,
							I’ve developed a robust array of skills and experiences to call upon for accomplishing project goals.</p>
						<p>&emsp;&emsp;I grew up surrounded by computers, an effect of my father’s career in information technology.
							He taught me from an early age how to use them, how to understand them, how to explore their capabilities.
							I’ve pursued many other interests throughout the years, but my love and fascination for these abstract machines
							has never faded.</p>
						<p>&emsp;&emsp;It is web development in particular which fascinates me because of its unprecedented potential to transcend barriers
							of all kinds. Global connection and immediate communication have become our ways of moving through the world,
							while sites and apps continuously shape and guide our lives on a personal level. As an artist, designer, and developer,
							I’m honored and excited to be engaging in that process.</p>
						<a
							href='#about'
							className='more-link'
							onClick={this.toggleOpen}
						>
							Show Less
						</a>
					</>
					: <a
						href='#about'
						className='more-link'
						onClick={this.toggleOpen}
					>
						Show More
					</a>
				}

			</section>
		)
	}
}
import React, { useState } from 'react'

function FindSelection(): Element {
	const body: Element = document.body
	const selection: Element = body.querySelector('.menu')
	return selection
}

function MenuIcon(): React.ReactElement {

	const [checkboxState, setCheckboxState] = useState(1)
	function validate(): undefined {
		if (checkboxState == 0) {
			setCheckboxState(1);
			FindSelection().className = 'menu disabled';
		}
			else if (checkboxState == 1) {
			setCheckboxState(0);
			FindSelection().className = 'menu enabled';
			}
			console.log("Pressed button state now at: ", checkboxState)
	}

	return (
		<>
			<div className="menuIcon">
				<input className="menuIconCheckbox" type="checkbox" onChange={validate} />
				<div>
					<span></span>
					<span></span>
				</div>
			</div>
		</>
	)
}

function AboutMeButton(): React.ReactElement {
	return(
		<a className='SidebarButton' href='/about'>
			<p className='link'>
				About me
			</p>
		</a>
	)
}

function ResumeButton(): React.ReactElement {
	return(
		<a className='SidebarButton' href='/error'>
			<p className='link'>
				Resume
			</p>
		</a>
	)
}

function HomeButton(): React.ReactElement {
	return(
		<a className='SidebarButton' href='/'>
			<p className='link'>
				Home
			</p>
		</a>
	)
}

function Sidebar(): React.ReactElement {
	return (
		<>
			<nav>
				<MenuIcon />
				<div className='menu'>
					<ResumeButton />
					<AboutMeButton />
					<HomeButton />
				</div>
			</nav>
		</>
	)
}

export default Sidebar

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
	render() {
		return (
			<div>
				<nav className="blue">
					<div className="nav-wrapper">
						<a href="/" className="brand-logo center">Combat</a>
						<a data-target="main-menu" className="sidenav-trigger show-on-large"><i className="fas fa-bars"></i></a>
						<ul className="right hide-on-small-only">
							<li><Link to="/"><i className="fas fa-dove"></i> Models</Link></li>
							<li><Link to="/shelves/"><i className="fas fa-box-open"></i>Shelves</Link></li>
							<li><Link to="/about"><i className="fas fa-info-circle"></i>About</Link></li>
						</ul>
					</div>
				</nav>

				<ul className="sidenav" id="main-menu">
					<li><Link to="/"><i className="fas fa-dove"></i>Models</Link></li>
					<li><Link to="/models/add"><i className="fas fa-plus"></i>Add Model</Link></li>
					<li><Link to="/shelves/"><i className="fas fa-box-open"></i>Shelves</Link></li>
					<li><Link to="/shelves/add"><i className="fas fa-plus"></i>Add Shelf</Link></li>
					<li><Link to="/about"><i className="fas fa-info-circle"></i>About</Link></li>
				</ul>
			</div>
		)
	}
}

export default Navbar;
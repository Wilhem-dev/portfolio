import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Propos from './components/Propos'
import Experience from './components/Experience'
import Projet from "./components/Projet";
import Passion from './components/Passion'
import Contact from './components/Contact'
function App() {
	return (
		<div className="App">
			<Navbar />
			
			<main>
				<section id="home" className="section">
					<Header />
				</section>
				<section id="about" className="section">
					<Propos />
				</section>
				<section id="experience" className="section">
					<Experience />
				</section>
				<section id="projects" className="section">
					<Projet />
				</section>
				<section id="passion" className="section">
					<Passion />
				</section>
				<section id="contact" className="section">
					<Contact />
				</section>
			</main>
		</div>
	)
}

export default App

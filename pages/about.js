import React from 'react'
import Link from 'next/link'
import Head from '../components/head'

const About = () => (
	<div>
		<Head title="About" />

		<div className="hero">
			<h1 className="title">About page!</h1>
			<p className="description">
				To get started, edit <code>pages/about.js</code> and save to reload.
			</p>
		</div>

		<style jsx>{`
			.hero {
				width: 100%;
				color: #333;
			}
			.title {
				margin: 0;
				width: 100%;
				padding-top: 80px;
				line-height: 1.15;
				font-size: 48px;
			}
			.title,
			.description {
				text-align: center;
			}
		`}</style>
	</div>
)

export default About

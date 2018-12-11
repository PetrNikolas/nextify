/*
In production the stylesheet is compiled to .next/static/style.css and served from /_next/static/style.css
You have to include it into the page using either next/head or a custom _document.js, as is being done in this file.
*/
import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document'
import Nav from '../components/nav'
import PageFooter from '../components/footer'
import { Layout } from 'antd'

const { Content } = Layout

export default class MyDocument extends Document {
	render() {
		return (
			<html>
				<Head>
					<meta charSet="UTF-8" />
					<meta name='viewport' content='width=device-width, initial-scale=1' />
					<link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
					<link rel="apple-touch-icon" href="/static/touch-icon.png" />
					<link rel="mask-icon" href="/static/favicon-mask.svg" color="#067df7" />
					<link rel="icon" href="/static/favicon.ico" />

					<link rel="stylesheet" href="/_next/static/css/styles.chunk.css" />
				</Head>
				<body>
					<Layout className="layout">
						<Nav />

				    <Content style={{ padding: '24px 50px 10px 50px' }}>
				      <div className="layout--content" style={{ background: '#fff', padding: 24, minHeight: 580 }}>
								<Main />

								<NextScript />
							</div>
				    </Content>

				    <PageFooter />
				  </Layout>
				</body>
			</html>
		)
	}
}

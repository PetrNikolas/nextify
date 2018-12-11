/*
In production the stylesheet is compiled to .next/static/style.css and served from /_next/static/style.css
You have to include it into the page using either next/head or a custom _document.js, as is being done in this file.
*/
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
					<meta name='viewport' content='width=device-width, initial-scale=1' />
					<meta charSet='utf-8' />

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

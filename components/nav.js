import React from 'react'
import Link from 'next/link'
import { Layout, Menu } from 'antd'

const { Header } = Layout

const links = [{ href: 'https://github.com/PetrNikolas/nextify', label: 'Download from Github' }].map(link => {
	link.key = 3
	return link
})

const Nav = () => (
	<div>
		<Header style={{ height: '64px', background: '#fff', boxShadow: '0 3px 20px rgba(0,0,0,.1)' }}>
			<div className="logo">Nextify</div>

			<Menu
				mode="horizontal"
				defaultSelectedKeys={['1']}
				style={{ lineHeight: '63px' }}
			>
				<Menu.Item key="1">
					<Link prefetch href="/">
						<a>Home</a>
					</Link>
				</Menu.Item>

				<Menu.Item key="2">
					<Link prefetch href="/about">
						<a>About</a>
					</Link>
				</Menu.Item>

				{links.map(({ key, href, label }) => (
					<Menu.Item key={key}>
						<Link href={href}>
							<a>{label}</a>
						</Link>
					</Menu.Item>
				))}
			</Menu>
		</Header>

		<style jsx>{`
			.logo {
			  width: 120px;
			  height: 31px;
			  margin: 8px 24px 16px 0;
			  float: left;
				font-size: 32px;
				color: #002300;
			}
		`}</style>
	</div>
)

export default Nav

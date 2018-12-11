import React from 'react'
import Link from 'next/link'
import { Layout } from 'antd'

const { Footer } = Layout

const PageFooter = () => (
	<div>
    <Footer style={{ textAlign: 'center' }}>
      Nextify ©2018 Created by <Link href="https://www.petrnikolas.com/"><a>Petr Nikolas</a></Link>
    </Footer>
	</div>
)

export default PageFooter

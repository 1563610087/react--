import React from "react";
import './index.scss'
import { NavLink } from 'react-router-dom';
import { headerLinks } from '@/common/js/commonData.js'
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
class Header extends React.Component {

	render() {
		return (
			<header className='header'>
				<div className='content'>
					<div className='header-l'>
						<div className='logo'></div>
						<ul>
							{
								headerLinks.map((item, index) => {
									return <li key={index}><NavLink to={item.link} >{item.title}</NavLink></li>
								})
							}
						</ul>
					</div>
					<div className='header-r'>
						<Input size="large" placeholder="音乐/视频" prefix={<SearchOutlined />} className='search'/>
					</div>
				</div>
			</header>
		)
	}

}

export default Header
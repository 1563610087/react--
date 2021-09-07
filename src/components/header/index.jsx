import React from "react";
import './index.scss'
import { NavLink} from 'react-router-dom';
import {headerLinks} from '@/common/js/commonData.js'
class Header extends React.Component {

	render() {
		return (
			<header className='header'>
				<div className='content'>
					<div className='header-l'>
						<div className='logo'></div>
						<ul>
							{
								headerLinks.map(item=>{
									return <li><NavLink  to="/index" >首页列表项目 </NavLink></li>
								})
							}
						</ul>
					</div>
					<div className='header-r'>
						2
					</div>
				</div>
			</header>
		)
	}

}

export default Header
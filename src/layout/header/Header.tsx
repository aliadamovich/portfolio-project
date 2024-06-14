
import { Nav } from "../../components/nav/Nav";
import { Icon } from "../../components/icon/Icon";
import {S} from './Header_Styles';
import React from "react";

const menuIconsData = [
	{ id: 'home', name: 'Home', svg: 'm-1' },
	{ id: 'services', name: 'Services', svg: 'm-2' },
	{ id: 'education', name: 'Education', svg: 'm-3' },
	{ id: 'work', name: 'Work', svg: 'm-4' },
	{ id: 'blog', name: 'Blog', svg: 'm-5' },
	{ id: 'contact', name: 'Contact', svg: 'm-6' },
]

export const Header: React.FC = () => {

	return(
		<S.Header>

			<S.DarkMode>
				<Icon iconId="moon" width="30" height="30" viewBox="0 0 30 30" fill='currentColor'/>
			</S.DarkMode>
			<Nav menuIcons={menuIconsData}/>

		</S.Header>
	)
}

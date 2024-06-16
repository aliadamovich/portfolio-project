
import { Nav } from "../../components/nav/Nav";
import { Icon } from "../../components/icon/Icon";
import {S} from './Header_Styles';
import React from "react";



export const Header: React.FC = () => {
	
	return(
		<S.Header>

			<S.DarkMode >
				<Icon iconId="moon" width="30" height="30" viewBox="0 0 30 30" fill='currentColor'/>
			</S.DarkMode>
			<Nav/>

		</S.Header>
	)
}

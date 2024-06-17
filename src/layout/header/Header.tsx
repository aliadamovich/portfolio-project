
import { Nav } from "../../components/nav/Nav";
import { Icon } from "../../components/icon/Icon";
import {S} from './Header_Styles';
import React from "react";


export const Header: React.FC<{ onBtnClick?: () => void, isDarkMode: boolean }> = (props: { onBtnClick?: () => void, isDarkMode: boolean }) => {

	return(
		<S.Header>

			<S.DarkMode onClick={props.onBtnClick} isDarkMode={props.isDarkMode} >
				<Icon iconId="moon" width="30" height="30" viewBox="0 0 30 30" fill='currentColor'/>
			</S.DarkMode>
			<Nav/>

		</S.Header>
	)
}

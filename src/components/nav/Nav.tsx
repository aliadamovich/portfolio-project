import { SvgLink } from "../svg-link/SvgLink";
import {S} from './Nav_Styles';

export const Nav: React.FC<{ menuIcons: { id: string, name: string, svg: string }[] }> = (props: { menuIcons: {id: string, name: string, svg: string}[]}) => {
	return(
		<S.Menu>
			<ul>
				{
					props.menuIcons.map((el)=> {
					return <li key={el.id}>
									<SvgLink href='#{el.id}' secondary 
													iconId={el.svg}
													width="18" height="18" viewBox="0 0 18 18" 
													fill='currentColor' />
													<S.ToolTip>{el.name}</S.ToolTip> 
								</li>
				})
				}
			</ul>
		</S.Menu>
	)
}




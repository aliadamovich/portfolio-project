import { SvgLink } from "../svg-link/SvgLink";
import {S} from './Nav_Styles';

const menuIconsData = [
	{ id: 'home', name: 'Home', svg: 'm-1' },
	{ id: 'services', name: 'Services', svg: 'm-2' },
	{ id: 'education', name: 'Education', svg: 'm-3' },
	{ id: 'work', name: 'Work', svg: 'm-4' },
	{ id: 'blog', name: 'Blog', svg: 'm-5' },
	{ id: 'contact', name: 'Contact', svg: 'm-6' },
]

export const Nav: React.FC = () => {

	return(
		<S.Menu>
			<ul>
				{
					menuIconsData.map((el)=> {
					return <>
						<SvgLink 
														href={el.id}
														secondary 
														iconId={el.svg}
														width="18" height="18" viewBox="0 0 18 18" 
														fill='currentColor' 
														name={el.name}
														key={el.id}/>
						{/* <S.ToolTip>{el.name}</S.ToolTip>  */}
					</>
				})
				}
			</ul>
		</S.Menu>
	)
}




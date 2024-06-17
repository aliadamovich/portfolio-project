import styled from "styled-components"

const Blog = styled.section`
`

const BlogCardBody = styled.article`
	background-color: ${props => props.theme.colors.sectionsBg};
	transition: all 0.3s ease 0s;

	&:hover{
	box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
}
`
const ImgWrapper = styled.div`
	position: relative;
	padding: 0 0 97% 0;
	img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		object-fit: cover;
	}
`
const Content = styled.div`
	padding: 25px 25px 18px;
	
	a > span{
		font-family: 'Inter';
		text-transform: capitalize;
		font-size: 18px;
		font-weight: 500;
	}
`
const Title = styled.h3`
	max-width: 100%;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`
const Text = styled.p`
	margin-bottom: 25px;
	max-width: 100%;
	overflow: hidden;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2; 
`

export const S = {
	Blog,
	BlogCardBody,
	ImgWrapper,
	Content,
	Title,
	Text
}
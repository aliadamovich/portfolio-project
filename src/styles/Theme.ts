import { DefaultTheme } from "styled-components";

export const theme: CustomTheme = {
	colors: {
		mainBg: '#f5f5f5',
		sectionsBg: '#FFF',
		headerBg: '#fafafa',
		accent: ' #ffb400',

		mainFont: '#767676',
		boldFont: '#2b2b2b',
		iconBg: '#f0f0f6',
		scroll: '#cfcfcf'
	},

	media: {
		first: 'screen and (max-width: 1350px)',
		smallScreen: 'screen and (max-width: 1120px)',
		tablet: 'screen and (max-width: 768px)',
		mobile: 'screen and (max-width: 576px)',
	}
}

export const darkTheme: CustomTheme = {
	colors: {
		mainBg: '#1f1f1f',
		sectionsBg: '#2b2b2b',
		headerBg: '#3a3a3a',
		accent: '#ffb400',
		scroll:'#b0b0b0',
		mainFont: '#b0b0b0',
		boldFont: '#ffffff',
		iconBg: '#4a4a4a',
	},
	media: {
		first: 'screen and (max-width: 1350px)',
		smallScreen: 'screen and (max-width: 1120px)',
		tablet: 'screen and (max-width: 768px)',
		mobile: 'screen and (max-width: 576px)',
	}
};

export interface CustomTheme extends DefaultTheme {
    colors: {
        mainBg: string;
        sectionsBg: string;
        headerBg: string;
        accent: string;
        mainFont: string;
        boldFont: string;
        iconBg: string;
				scroll: string
    };
    media: {
        first: string;
        smallScreen: string;
        tablet: string;
        mobile: string;

    };
}
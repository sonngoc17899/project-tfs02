import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

const opts = {
	theme: {
		themes: {
			light: {
				primary: '#4BA2EB',
				red: '#EB625B',
				red_darken_1: '#D94232',
				red_lighten_2: '#FF0000',
				yellow: '#E4AF18',
				yellow_lighten_1: '#E5DE2A',
				blue: '#5B97EB',
				blue_sky: '#5BD1EB',
				blue_info : '#4C67B5',
				blue_darken_1: '#344F8D',
				green_darken_1: '#23B968',
				orange: '#EB845B',
				purple: '#9E5BEB',
				green: '#74E482',
				black_opacity_1: '#dbdbdb', //#000 opacity 0.1
				black_opacity_2: '#cdcdcd', //#000 opacity 0.2
				black_opacity_3: '#b3b3b3', //#000 opacity 0.3
				black_opacity_4: '#999999', //#000 opacity 0.4
				black_opacity_5: '#808080', //#000 opacity 0.5
				black_opacity_7: '#4D4D4D', //#000 opacity 0.7
				gray_lighten_2: '#939393',
				gray_darken_1: '#4A4A4A',
				white_darken_1: '#F7F7F7',
				white_darken_3_opacity_4: '#F0F0F0', //E2E2E2 opacity 0.4
				white_darken_6: '#F9F9F9',
				white_darken_7: '#F4F4F4',
			},
		},
	},
	icons: {
		iconfont: 'mdiSvg'
	}
}


export default new Vuetify({opts});

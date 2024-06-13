const pathSrc = './src';
const pathBuild = './build';

const paths = {
	root: pathBuild,

	pug: {
		src: `${pathSrc}/pug/pages/*/*.{pug,html}`,
		watch: `${pathSrc}/pug/**/*.{pug,html}`,
		dest: pathBuild,
	},

	scss: {
		src: `${pathSrc}/scss/*.{scss,sass}`,
		watch: `${pathSrc}/**/*.{scss,sass}`,
		dest: `${pathBuild}/css`,
	},

	js: {
		src: `${pathSrc}/js/**/*.js`,
		watch: `${pathSrc}/**/*.js`,
		dest: `${pathBuild}/js`,
	},

	img: {
		src: `${pathSrc}/img/**/*.{jpg,png,webp,avif,jpeg,gif,svg}`,
		watch: `${pathSrc}/img/**/*.{jpg,png,webp,avif,jpeg,gif,svg}`,
		dest: `${pathBuild}/img`,
	},

	sprite: {
		src: `${pathSrc}/icons/**/*.svg`,
		watch: `${pathSrc}/icons/**/*.svg`,
		dest: `${pathBuild}/icons`,
	},

	icon: {
		src: `${pathSrc}/icons/**/*`,
		watch: `${pathSrc}/icons/**/*`,
		dest: `${pathBuild}/icons/`,
	},

	video: {
		src: `${pathSrc}/video/**/*`,
		watch: `${pathSrc}/video/**/*`,
		dest: `${pathBuild}/video/`,
	},

	audio: {
		src: `${pathSrc}/audio/**/*`,
		watch: `${pathSrc}/audio/**/*`,
		dest: `${pathBuild}/audio/`,
	},

	font: {
		src: `${pathSrc}/fonts/**/*.{woff,woff2,eot,ttf,otf,otc,ttc,svg}`,
		watch: `${pathSrc}/fonts/**/*.{woff,woff2,eot,ttf,otf,otc,ttc,svg}`,
		dest: `${pathBuild}/fonts`,
	},
};

export default paths;

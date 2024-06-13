import gulp from 'gulp';
import siteMap from 'gulp-sitemap';
import paths from '../paths';

export default async function createSiteMap() {
	gulp.src(`${paths.pug.dest}/*.html`, {
		read: false,
	})
		.pipe(siteMap({
			siteUrl: 'https://valaam.ru',
		}))
		.pipe(gulp.dest(paths.pug.dest));
}

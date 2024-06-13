/* eslint-disable global-require */
import gulp from 'gulp';
import gulpPug from 'gulp-pug';
import flatten from 'gulp-flatten';
import cached from 'gulp-cached';
import path from 'path';
import paths from '../paths';
import { bs } from './serverInit';

const pugSrcPath = '../../src/pug';

function pugErrorsHandler(err) {
	console.error(err);
	this.emit('end');
}

export default async function pugCompile() {
	gulp.src(paths.pug.src)
		.pipe(
			gulpPug({
				pretty: true,
				basedir: path.join(__dirname, pugSrcPath),
				data: {
					// data: require('../../src/data/menu.json'),
				},
			}).on('error', pugErrorsHandler),
		)
		.pipe(cached(gulpPug))
		.pipe(flatten())
		.pipe(gulp.dest(paths.pug.dest))
		.pipe(bs.stream());
}

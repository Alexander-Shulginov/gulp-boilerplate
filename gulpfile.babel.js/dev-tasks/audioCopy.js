import gulp from 'gulp';
import newer from 'gulp-newer';
import paths from '../paths';
import { bs } from './serverInit';

export default async function audioCopy() {
	gulp.src(paths.audio.src)
		.pipe(newer(paths.audio.dest))
		.pipe(gulp.dest(paths.audio.dest))
		.pipe(bs.stream());
}

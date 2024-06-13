import gulp from 'gulp';
import newer from 'gulp-newer';
import paths from '../paths';
import { bs } from './serverInit';

export default async function videoCopy() {
	gulp.src(paths.video.src)
		.pipe(newer(paths.video.dest))
		.pipe(gulp.dest(paths.video.dest))
		.pipe(bs.stream());
}

import del from 'del';
import paths from '../paths';

// export default () => del(paths.root);
export default () => del([`${paths.root}/**`]);

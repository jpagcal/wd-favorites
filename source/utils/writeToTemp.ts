import fs, {PathLike} from 'fs';
import path from 'path';

/**
 * Writes the selected directory
 * in "@root/output/cwd.txt"
 *
 * @param dir
 */
const writeToTemp = (dir: string) => {
	try {
		const tempPath: PathLike = path.join(
			import.meta.dirname,
			'/../../output/cwd.txt',
		);
		fs.writeFileSync(tempPath, dir);
	} catch (error: any) {
		if (error instanceof Error) {
			console.error(error);
		}
	}
};

export default writeToTemp;

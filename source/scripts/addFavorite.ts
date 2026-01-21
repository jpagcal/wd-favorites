import fs from 'fs';
import path from 'path';

export const favoritesPath = path.join(
	import.meta.dirname,
	'../../favorites.txt',
);
export const readAndAppend = 'as+';

export default function addFavorite(path: string) {
	try {
		const fileDescriptor: number = fs.openSync(favoritesPath, readAndAppend);
		fs.writeSync(fileDescriptor, `${path}\n`, null, 'utf-8');
	} catch (error: any) {
		console.error(error);
	}
}

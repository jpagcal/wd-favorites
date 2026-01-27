import fs from 'fs';
import {favoritesPath, readAndAppend} from '../constants/constants.js';
import getFavorites from '../utils/getFavorites.js';

export default async function addFavorite(path: string) {
	try {
		const favorites: string[] = await getFavorites();

		if (favorites.includes(path)) {
			throw new Error(
				`Error: Path ${path} already exists in list of favorites.`,
			);
		}
		const fileDescriptor: number = fs.openSync(favoritesPath, readAndAppend);
		fs.writeSync(fileDescriptor, `${path}\n`, null, 'utf-8');
	} catch (error: any) {
		if (error instanceof Error) {
			console.error(error.message);
		}
	}
}

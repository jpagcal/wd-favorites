import fs from 'fs/promises';
import {favoritesPath} from 'source/constants/constants.js';

const getFavorites = async (): Promise<string[]> => {
	let favorites: string[] = [];

	const file = await fs.open(favoritesPath);

	for await (const path of file.readLines()) {
		favorites.push(path);
	}

	return favorites;
};

export default getFavorites;

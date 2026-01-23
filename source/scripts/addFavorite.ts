import fs from 'fs';
import {favoritesPath, readAndAppend} from '../constants/constants.js';

export default function addFavorite(path: string) {
	try {
		const fileDescriptor: number = fs.openSync(favoritesPath, readAndAppend);
		fs.writeSync(fileDescriptor, `${path}\n`, null, 'utf-8');
	} catch (error: any) {
		console.error(error);
	}
}

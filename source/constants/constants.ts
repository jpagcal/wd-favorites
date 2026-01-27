import path from 'path';

export const favoritesPath = path.join(
	import.meta.dirname,
	'../../favorites.txt',
);
export const readAndAppend = 'as+';
export const showCursor = '\x1b[?25h';

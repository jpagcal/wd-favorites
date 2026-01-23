#!/usr/bin/env node
import clear from 'clear';
import {render} from 'ink';
import addFavorite from './scripts/addFavorite.js';
import App from './app.js';

const flag: string | undefined = process.argv[2];

switch (flag) {
	case 'cwd':
		addFavorite(process.cwd());
		clear();
		break;
	case 'add':
		let pathToBeAdded: string;

		if (typeof process.argv[3] === 'string') {
			pathToBeAdded = process.argv[3];
			addFavorite(pathToBeAdded);
			clear();
		}
		break;
	default:
		clear();
		render(<App />);
		break;
}

import {useState, useEffect} from 'react';
import getFavorites from '../utils/getFavorites.js';
import Hook from './hook.interface.js';

const useFavorites = (): Hook => {
	const [data, setData] = useState<any>(null);
	const [error, setError] = useState<Error | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		const updateState = async () => {
			try {
				setData(await getFavorites());
			} catch (error: any) {
				setError(error);
			} finally {
				setIsLoading(false);
			}
		};

		updateState();
	}, []);

	return {isLoading, error, data};
};

export default useFavorites;

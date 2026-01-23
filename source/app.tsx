import {Box, Text, useInput} from 'ink';
import useFavorites from './hooks/useFavorites.hook.js';
import Hook from './hooks/hook.interface.js';
import StyledBox from './components/StyledBox.js';
import {useState} from 'react';

export default function App() {
	const favoritesState: Hook = useFavorites();
	const [index, setIndex] = useState<number>(0);

	const cycleDown = () => {
		setIndex((index + 1) % favoritesState.data.length);
	};

	const cycleUp = () => {
		setIndex(
			(((index - 1) % favoritesState.data.length) +
				favoritesState.data.length) %
				favoritesState.data.length,
		); // real mod function
	};

	useInput((_input, key) => {
		if (key.downArrow) {
			cycleDown();
		} else if (key.upArrow) {
			cycleUp();
		}
	});

	if (favoritesState.isLoading) {
		return (
			<StyledBox>
				<Text>Loading...</Text>
			</StyledBox>
		);
	}

	if (favoritesState.error) {
		return (
			<StyledBox>
				<Text bold dimColor>
					{`There was a problem loading favorites. Error: ${favoritesState.error}`}
				</Text>
			</StyledBox>
		);
	}

	return (
		<StyledBox>
			<Box flexDirection="column" gap={0}>
				{(favoritesState.data as Array<string>).map((favorite, itemIndex) => (
					<Text
						key={itemIndex}
						bold={index === itemIndex}
						dimColor={!(index === itemIndex)}
					>
						{favorite}
					</Text>
				))}
			</Box>
		</StyledBox>
	);
}

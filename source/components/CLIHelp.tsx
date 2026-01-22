import {Box, Text} from 'ink';

export default function CLIHelp() {
	return (
		<Box
			flexDirection="column"
			borderStyle="bold"
			padding={2}
			borderDimColor
			gap={1}
		>
			<Text bold color="blackBright">
				Improper usage.
			</Text>
			<Text>Adding the current directory: wd-favorites</Text>
		</Box>
	);
}

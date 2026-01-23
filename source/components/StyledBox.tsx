import {Box} from 'ink';
import React from 'react';

interface StyledBoxProps {
	children: React.ReactNode;
}

const StyledBox = ({children}: StyledBoxProps) => {
	return (
		<Box
			flexDirection="column"
			padding={2}
			borderStyle="round"
			borderDimColor
			gap={2}
		>
			{children}
		</Box>
	);
};

export default StyledBox;

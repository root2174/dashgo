import { Button } from '@chakra-ui/react'

interface PaginationItemProps {
	isCurrent?: boolean
	pageNumber: number
}

export function PaginationItem({
	isCurrent = false,
	pageNumber
}: PaginationItemProps) {
	if (isCurrent) {
		return (
			<Button
				size="sm"
				fontSize="xs"
				w="4"
				colorScheme="pink"
				disabled
				_disabled={{
					bgcolor: 'pink.500',
					cursor: 'default'
				}}
			>
				{pageNumber}
			</Button>
		)
	}

	return (
		<Button
			size="sm"
			fontSize="xs"
			w="4"
			colorScheme="pink"
			bgColor="gray.700"
			_hover={{
				bg: 'gray.500'
			}}
		>
			{pageNumber}
		</Button>
	)
}

import { Button, Flex, Stack, FormLabel, FormControl } from '@chakra-ui/react'
import Head from 'next/head'

import { Input } from '../components/Form/Input'

export default function SignIn() {
	return (
		<>
			<Head>
				<title>Sign In</title>
			</Head>
			<Flex w="100vw" h="100vh" align="center" justify="center">
				<Flex
					as="form"
					w="100%"
					maxW={360}
					bg="gray.800"
					p="8"
					borderRadius={8}
					flexDir="column"
				>
					<Stack spacing={4}>
						<Input
							name="email"
							type="email"
							label="E-mail"
							placeholder="john.doe@email.com"
						/>

						<Input
							name="password"
							type="password"
							label="Senha"
							placeholder="*********"
						/>
					</Stack>
					<Button type="submit" mt="6" colorScheme="pink">
						Entrar
					</Button>
				</Flex>
			</Flex>
		</>
	)
}

import { Button, Flex, Stack } from '@chakra-ui/react'
import Head from 'next/head'

import { Input } from '../components/Form/Input'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

type SignInFormData = {
	email: string
	password: string
}

const signInFormSchema = yup.object().shape({
	email: yup.string().email().required('Email is required'),
	password: yup.string().required('Password is required')
})

export default function SignIn() {
	const { register, handleSubmit, formState } = useForm({
		resolver: yupResolver(signInFormSchema)
	})

	const handleSignIn: SubmitHandler<SignInFormData> = async (data) => {
		await new Promise((resolve) => setTimeout(resolve, 1000))
		console.log(data)
	}

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
					onSubmit={handleSubmit(handleSignIn)}
				>
					<Stack spacing={4}>
						<Input
							name="email"
							type="text"
							label="E-mail"
							error={formState.errors.email}
							placeholder="john.doe@email.com"
							{...register('email')}
						/>

						<Input
							name="password"
							type="password"
							label="Senha"
							placeholder="*********"
							error={formState.errors.password}
							{...register('password')}
						/>
					</Stack>
					<Button
						type="submit"
						mt="6"
						colorScheme="pink"
						size="lg"
						isLoading={formState.isSubmitting}
					>
						Entrar
					</Button>
				</Flex>
			</Flex>
		</>
	)
}

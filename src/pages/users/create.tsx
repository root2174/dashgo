import {
	Box,
	Button,
	Divider,
	Flex,
	Heading,
	HStack,
	SimpleGrid,
	VStack
} from '@chakra-ui/react'
import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import { Input } from '../../components/Form/Input'
import Link from 'next/link'

import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

type CreateUserFormData = {
	name: string
	email: string
	password: string
	password_confirmation: string
}

const createUserFormSchema = yup.object().shape({
	name: yup.string().required('Email is required'),
	email: yup.string().email().required('Email is required'),
	password: yup.string().required('Password is required'),
	password_confirmation: yup
		.string()
		.oneOf([null, yup.ref('password')], 'Passwords must match')
})

export default function CreateUser() {
	const { register, handleSubmit, formState } = useForm({
		resolver: yupResolver(createUserFormSchema)
	})

	const handleCreateUser: SubmitHandler<CreateUserFormData> = async (data) => {
		await new Promise((resolve) => setTimeout(resolve, 1000))
		console.log(data)
	}
	return (
		<Box>
			<Header />

			<Flex w="100%" my="6" maxWidth={1400} mx="auto" px="6">
				<Sidebar />
				<Box
					as="form"
					onSubmit={handleSubmit(handleCreateUser)}
					flex="1"
					borderRadius={8}
					p={['6', '8']}
					bg="gray.800"
				>
					<Heading size="lg" fontWeight="normal">
						Criar Usuário
					</Heading>
					<Divider my="6" borderColor="gray.700" />
					<VStack spacing="8">
						<SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
							<Input
								name="name"
								label="Nome completo"
								{...register('name')}
								error={formState.errors.name}
							/>
							<Input
								name="email"
								label="E-mail"
								{...register('email')}
								error={formState.errors.email}
							/>
						</SimpleGrid>

						<SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
							<Input
								name="password"
								label="Senha"
								type="password"
								{...register('password')}
								error={formState.errors.password}
							/>
							<Input
								name="password_confirmation"
								label="Confirmação da senha"
								type="password"
								{...register('password_confirmation')}
								error={formState.errors.password_confirmation}
							/>
						</SimpleGrid>
					</VStack>

					<Flex mt="8" justify="flex-end">
						<HStack spacing="4">
							<Link href="/users" passHref>
								<Button as="a" colorScheme="whiteAlpha">
									Cancelar
								</Button>
							</Link>
							<Button
								colorScheme="pink"
								type="submit"
								isLoading={formState.isSubmitting}
							>
								Salvar
							</Button>
						</HStack>
					</Flex>
				</Box>
			</Flex>
		</Box>
	)
}

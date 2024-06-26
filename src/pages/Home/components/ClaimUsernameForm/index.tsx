import { Button, TextInput, Text } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { Form, FormAnnotation } from './styles'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const claimUsernameFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'Digite um nome de usuario valido.' })
    .regex(/^([a-z\\-]+)$/i, {
      message: 'usuario apenas pode letras e hifens.',
    })
    .transform((value) => value.toLowerCase()),
})

type ClaimUsernameFormData = z.infer<typeof claimUsernameFormSchema>

export function ClaimUsernameForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ClaimUsernameFormData>({
    resolver: zodResolver(claimUsernameFormSchema),
  })

  async function handleClaimUsername(data: ClaimUsernameFormData) {
    console.log(data)
  }

  return (
    <>
      <Form as="form" onSubmit={handleSubmit(handleClaimUsername)}>
        <TextInput
          size="sm"
          prefix="ignite.com/"
          placeholder="seu-usuario"
          {...register('username')}
          crossOrigin=""
        />
        <Button size="sm" type="submit">
          Reservar
          <ArrowRight />
        </Button>
      </Form>

      <FormAnnotation>
        <Text size="sm">
          {errors.username
            ? errors.username.message
            : 'Digite o nome do usuario desejado'}
        </Text>
      </FormAnnotation>
    </>
  )
}

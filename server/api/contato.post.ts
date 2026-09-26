import { Resend } from 'resend'

type ContactBody = {
  nome?: string
  email?: string
  mensagem?: string
}

export default defineEventHandler(async (event) => {
  const body = await readBody<ContactBody>(event)

  const nome = String(body.nome || '').trim()
  const email = String(body.email || '').trim()
  const mensagem = String(body.mensagem || '').trim()

  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  if (!nome || !email || !mensagem) {
    throw createError({
      statusCode: 400,
      message: 'Preencha todos os campos antes de enviar a mensagem.'
    })
  }

  if (!emailValido) {
    throw createError({
      statusCode: 400,
      message: 'Informe um endereço de e-mail válido.'
    })
  }

  const config = useRuntimeConfig()

  if (!config.resendApiKey) {
    console.error('RESEND_API_KEY não configurada.')

    throw createError({
      statusCode: 500,
      message: 'O serviço de envio de mensagens não está configurado.'
    })
  }

  const resend = new Resend(config.resendApiKey)

  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'miqueiasfirmino.dev@gmail.com',
      subject: 'Nova mensagem — Despertar da Consciência Financeira',
      replyTo: email,
      text: `
Nome: ${nome}
E-mail: ${email}

Mensagem:
${mensagem}
      `.trim()
    })

    if (error) {
      console.error('Erro Resend:', error)

      throw createError({
        statusCode: 500,
        message: 'Não foi possível enviar sua mensagem no momento. Tente novamente mais tarde.'
      })
    }

    console.log('E-mail enviado:', data?.id)

    return {
      sucesso: true,
      mensagem: 'Mensagem enviada com sucesso.'
    }
  } catch (error) {
    console.error('Erro ao enviar mensagem:', error)

    throw createError({
      statusCode: 500,
      message: 'Não foi possível enviar sua mensagem no momento. Tente novamente mais tarde.'
    })
  }
})

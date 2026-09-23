import { questionBank } from '../../data/quiz'

export default defineEventHandler((event) => {
  const query = getQuery(event)
  const nivel = String(query.nivel || '')

  if (!['facil', 'medio', 'dificil'].includes(nivel)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Nível de quiz inválido.'
    })
  }

  return {
    nivel,
    perguntas: questionBank[nivel as keyof typeof questionBank]
  }
})

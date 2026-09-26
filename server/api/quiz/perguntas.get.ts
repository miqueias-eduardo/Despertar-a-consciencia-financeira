import { questionBank } from '../../data/quiz/index'

export default defineEventHandler((event) => {
  const query = getQuery(event)
  const nivel = String(query.nivel || '')

  if (!['facil', 'medio', 'dificil'].includes(nivel)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Nível de quiz inválido.'
    })
  }

  const perguntas = questionBank[nivel as keyof typeof questionBank]

  const perguntasSelecionadas = [...perguntas]
    .sort(() => Math.random() - 0.5)
    .slice(0, 5)

  return {
    nivel,
    perguntas: perguntasSelecionadas
  }
})

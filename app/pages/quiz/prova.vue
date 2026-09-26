<template>
  <main class="quiz-test">
    <div class="quiz-shell">
      <header class="quiz-header">
        <NuxtLink class="exit-link" to="/quiz">
          <span aria-hidden="true">←</span>
          Sair do quiz
        </NuxtLink>


        <h1>{{ levelMeta.title }}</h1>

        <p class="quiz-header-level">
          Nível: {{ levelMeta.difficulty }}
        </p>
      </header>

      <!-- Carregamento -->
      <section v-if="loading" class="question-card loading-card">
        <p class="loading-text">Carregando questões...</p>
      </section>

      <!-- Erro -->
      <section v-else-if="error" class="question-card error-card">
        <p class="eyebrow">Quiz Financeiro</p>

        <h2>Não foi possível carregar as questões.</h2>

        <p class="error-text">
          {{ error }}
        </p>

        <NuxtLink class="primary-button" to="/quiz">
          Voltar aos níveis
        </NuxtLink>
      </section>

      <!-- Quiz -->
      <template v-else-if="questions.length && !finished">
        <div class="quiz-progress">
          <div class="quiz-progress-labels">
            <span>
              Questão {{ currentIndex + 1 }} de {{ totalQuestions }}
            </span>

            <span>{{ progressPercent }}%</span>
          </div>

          <div class="quiz-progress-track">
            <div
              class="quiz-progress-fill"
              :style="{ width: progressPercent + '%' }"
            ></div>
          </div>
        </div>

        <Transition name="question-fade" mode="out-in">
          <section
            class="question-card"
            :key="currentIndex"
          >
            <h2 class="question-text">
              {{ currentQuestion.question }}
            </h2>

            <fieldset
              class="question-options"
              :class="{ 'is-locked': answered }"
            >
              <legend class="visually-hidden">
                Alternativas da questão {{ currentIndex + 1 }}
              </legend>

              <label
                v-for="(option, index) in currentQuestion.options"
                :key="index"
                class="option"
                :class="optionClass(index)"
              >
                <input
                  type="radio"
                  name="quiz-answer"
                  class="option-input"
                  :checked="selectedAnswer === index"
                  :disabled="answered"
                  @change="handleAnswer(index)"
                />

                <span class="option-letter">
                  {{ optionLetter(index) }}
                </span>

                <span class="option-text">
                  {{ option }}
                </span>

                <span class="option-status" aria-hidden="true">
                  <svg
                    v-if="
                      answered &&
                      index === currentQuestion.correctIndex
                    "
                    viewBox="0 0 20 20"
                    class="icon-check"
                  >
                    <path
                      d="M4 10.5l4 4 8-9"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <svg
                    v-else-if="
                      answered &&
                      index === selectedAnswer
                    "
                    viewBox="0 0 20 20"
                    class="icon-cross"
                  >
                    <path
                      d="M5 5l10 10M15 5L5 15"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </span>
              </label>
            </fieldset>

            <Transition name="feedback-fade">
              <div
                v-if="answered"
                class="feedback"
                :class="
                  isCorrect
                    ? 'feedback--correct'
                    : 'feedback--incorrect'
                "
              >
                <p class="feedback-title">
                  {{
                    isCorrect
                      ? 'Resposta correta.'
                      : 'Resposta incorreta.'
                  }}
                </p>

                <p class="feedback-text">
                  {{ currentQuestion.explanation }}
                </p>
              </div>
            </Transition>
          </section>
        </Transition>

        <div class="quiz-actions">
          <button
            type="button"
            class="primary-button"
            :disabled="!answered"
            @click="goNext"
          >
            {{ isLastQuestion ? 'Ver resultado' : 'Próxima questão' }}
          </button>
        </div>
      </template>

      <!-- Resultado -->
      <section v-else-if="finished" class="result-card">
        <p class="eyebrow">Resultado</p>

        <h2>Quiz concluído</h2>

        <div
          class="score-ring"
          :style="{ '--score-percent': resultPercent }"
        >
          <div class="score-ring-inner">
            <span class="score-ring-value">
              {{ resultPercent }}%
            </span>

            <span class="score-ring-label">
              acertos
            </span>
          </div>
        </div>

        <p class="result-count">
          {{ correctCount }} de {{ totalQuestions }} questões corretas
        </p>

        <p class="result-message">
          {{ resultMessage }}
        </p>

        <div class="result-actions">
          <button
            type="button"
            class="primary-button"
            @click="restart"
          >
            Tentar novamente
          </button>

          <NuxtLink class="text-link" to="/quiz">
            Voltar aos níveis
          </NuxtLink>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
import { computed, ref, watch } from 'vue'

const route = useRoute()

const levelMetaMap = {
  facil: {
    title: 'Iniciante',
    difficulty: 'Iniciante'
  },

  medio: {
    title: 'Intermediário',
    difficulty: 'Intermediário'
  },

  dificil: {
    title: 'Avançado',
    difficulty: 'Avançado'
  }
}

const levelSlug = computed(() => {
  const value = String(route.query.nivel || '')

  if (['facil', 'medio', 'dificil'].includes(value)) {
    return value
  }

  return 'facil'
})

const levelMeta = computed(() => {
  return levelMetaMap[levelSlug.value]
})

const questions = ref([])
const loading = ref(true)
const error = ref('')

const currentIndex = ref(0)
const selectedAnswer = ref(null)
const answered = ref(false)
const answersLog = ref([])
const finished = ref(false)

const totalQuestions = computed(() => {
  return questions.value.length
})

const currentQuestion = computed(() => {
  return questions.value[currentIndex.value]
})

const isLastQuestion = computed(() => {
  return currentIndex.value === totalQuestions.value - 1
})

const isCorrect = computed(() => {
  if (!currentQuestion.value) return false

  return (
    selectedAnswer.value ===
    currentQuestion.value.correctIndex
  )
})

const progressPercent = computed(() => {
  if (!totalQuestions.value) return 0

  return Math.round(
    ((currentIndex.value + 1) / totalQuestions.value) * 100
  )
})

async function loadQuestions() {
  loading.value = true
  error.value = ''

  try {
    const response = await $fetch('/api/quiz/perguntas', {
      query: {
        nivel: levelSlug.value
      }
    })

    questions.value = response.perguntas

    currentIndex.value = 0
    selectedAnswer.value = null
    answered.value = false
    answersLog.value = []
    finished.value = false
  } catch (err) {
    console.error(err)

    questions.value = []
    error.value =
      'Verifique sua conexão ou tente acessar o quiz novamente.'
  } finally {
    loading.value = false
  }
}

function optionLetter(index) {
  return String.fromCharCode(65 + index)
}

function optionClass(index) {
  if (!answered.value) return ''

  if (index === currentQuestion.value.correctIndex) {
    return 'option--correct'
  }

  if (index === selectedAnswer.value) {
    return 'option--incorrect'
  }

  return 'option--muted'
}

function handleAnswer(index) {
  if (answered.value) return

  selectedAnswer.value = index
  answered.value = true

  answersLog.value.push({
    correct:
      index === currentQuestion.value.correctIndex
  })
}

function goNext() {
  if (!answered.value) return

  if (isLastQuestion.value) {
    finished.value = true
    return
  }

  currentIndex.value += 1
  selectedAnswer.value = null
  answered.value = false
}

const correctCount = computed(() => {
  return answersLog.value.filter(
    (answer) => answer.correct
  ).length
})

const resultPercent = computed(() => {
  if (!totalQuestions.value) return 0

  return Math.round(
    (correctCount.value / totalQuestions.value) * 100
  )
})

const resultMessage = computed(() => {
  const percent = resultPercent.value

  if (percent >= 80) {
    return 'Você já domina muito bem esse conteúdo. Que tal explorar o próximo nível?'
  }

  if (percent >= 50) {
    return 'Você está no caminho certo. Revisar alguns pontos pode ajudar a fixar ainda mais o conteúdo.'
  }

  return 'Vale a pena revisitar esse conteúdo com calma antes de tentar novamente.'
})

function restart() {
  currentIndex.value = 0
  selectedAnswer.value = null
  answered.value = false
  answersLog.value = []
  finished.value = false
}

watch(
  levelSlug,
  () => {
    loadQuestions()
  },
  { immediate: true }
)

useHead(() => ({
  title: `Prova — ${levelMeta.value.title} — Despertar da Consciência Financeira`
}))
</script>

<style scoped>
.quiz-test {
  padding: clamp(28px, 5vw, 52px) 20px 64px;
}

.quiz-shell {
  max-width: 860px;
  margin: 0 auto;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Cabeçalho */

.quiz-header {
  margin-bottom: clamp(28px, 4vw, 40px);
}

.exit-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 18px;
  color: var(--ink-soft);
  font-family: 'DM Sans', sans-serif;
  font-size: .88rem;
  font-weight: 600;
  text-decoration: none;
  transition: color .15s ease;
}

.exit-link:hover,
.exit-link:focus-visible {
  color: var(--green-deep);
}

.eyebrow {
  margin: 0 0 10px;
  color: var(--green);
  font-family: 'DM Sans', sans-serif;
  font-size: .8rem;
  font-weight: 700;
  letter-spacing: .12em;
  text-transform: uppercase;
}

.quiz-header h1 {
  margin: 0 0 6px;
  color: var(--green-deep);
  font-family: 'Fraunces', Georgia, serif;
  font-size: clamp(1.6rem, 2.6vw, 2.1rem);
  line-height: 1.15;
  letter-spacing: -.02em;
}

.quiz-header-level {
  margin: 0;
  color: var(--ink-soft);
  font-family: 'DM Sans', sans-serif;
  font-size: .95rem;
}

/* Progresso */

.quiz-progress {
  margin-bottom: clamp(26px, 4vw, 36px);
}

.quiz-progress-labels {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 9px;
  color: var(--ink-soft);
  font-family: 'DM Sans', sans-serif;
  font-size: .85rem;
  font-weight: 600;
}

.quiz-progress-track {
  height: 8px;
  border-radius: 999px;
  background: var(--line);
  overflow: hidden;
}

.quiz-progress-fill {
  height: 100%;
  border-radius: inherit;
  background: var(--green);
  transition: width .3s ease;
}

/* Card da pergunta / resultado */

.question-card,
.result-card {
  padding: clamp(30px, 5vw, 46px) clamp(24px, 5vw, 42px);
  border: 1px solid var(--line);
  border-radius: var(--radius-xl);
  background: var(--paper);
  box-shadow: var(--shadow);
}

.question-text {
  margin: 0 0 clamp(24px, 3vw, 32px);
  color: var(--green-deep);
  font-family: 'Fraunces', Georgia, serif;
  font-weight: 600;
  font-size: clamp(1.6rem, 3vw, 2.3rem);
  line-height: 1.28;
}

.question-options {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
  margin: 0;
  padding: 0;
  border: 0;
  min-width: 0;
}

.question-options.is-locked .option {
  pointer-events: none;
}

.option {
  position: relative;
  display: flex;
  align-items: center;
  gap: 14px;
  min-width: 0;
  padding: 16px 18px;
  border: 1px solid var(--line);
  border-radius: var(--radius-md);
  background: var(--paper-strong);
  cursor: pointer;
  transition: border-color .18s ease, box-shadow .18s ease, background .18s ease;
}

.option:hover {
  border-color: #b9d3c5;
  box-shadow: var(--shadow);
}

.option:focus-within {
  border-color: var(--green);
  box-shadow: 0 0 0 3px rgba(23, 130, 91, .16);
}

.option-input {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.option-letter {
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--green-soft);
  color: var(--green-deep);
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  font-size: .85rem;
}

.option-text {
  flex: 1;
  min-width: 0;
  color: var(--ink);
  font-family: 'DM Sans', sans-serif;
  font-size: .97rem;
  line-height: 1.5;
}

.option-status {
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 20px;
  height: 20px;
}

.icon-check,
.icon-cross {
  width: 18px;
  height: 18px;
}

.icon-check {
  color: var(--green-dark);
}

.icon-cross {
  color: var(--coral);
}

.option--correct {
  border-color: var(--green);
  background: var(--green-soft);
}

.option--correct .option-letter {
  background: var(--green);
  color: #fff;
}

.option--incorrect {
  border-color: var(--coral);
  background: rgba(223, 134, 108, .12);
}

.option--incorrect .option-letter {
  background: var(--coral);
  color: #fff;
}

.option--muted {
  opacity: .65;
}

/* Feedback */

.feedback {
  margin-top: clamp(20px, 3vw, 28px);
  padding: 16px 20px;
  border-radius: var(--radius-md);
  border: 1px solid;
}

.feedback--correct {
  border-color: #c5ddce;
  background: var(--green-soft);
}

.feedback--correct .feedback-title {
  color: var(--green-deep);
}

.feedback--incorrect {
  border-color: rgba(223, 134, 108, .35);
  background: rgba(223, 134, 108, .1);
}

.feedback--incorrect .feedback-title {
  color: #9a4b34;
}

.feedback-title {
  margin: 0 0 4px;
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  font-size: .95rem;
}

.feedback-text {
  margin: 0;
  color: var(--ink-soft);
  font-family: 'DM Sans', sans-serif;
  font-size: .92rem;
  line-height: 1.6;
}

/* Ações */

.quiz-actions {
  display: flex;
  justify-content: flex-end;
  margin-top: clamp(22px, 3vw, 30px);
}

.primary-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-height: 50px;
  padding: 12px 22px;
  border: 1px solid var(--green);
  border-radius: 12px;
  background: var(--green);
  color: #fff;
  font-family: 'DM Sans', sans-serif;
  font-weight: 750;
  cursor: pointer;
  box-shadow: 0 12px 25px rgba(23, 130, 91, .2);
  transition: transform .2s ease, box-shadow .2s ease, background .2s ease, opacity .2s ease;
}

.primary-button::after {
  content: '→';
  font-size: 1.05rem;
  transition: transform .2s ease;
}

.primary-button:hover:not(:disabled) {
  transform: translateY(-2px);
  background: var(--green-dark);
  box-shadow: 0 16px 30px rgba(23, 130, 91, .25);
}

.primary-button:hover:not(:disabled)::after {
  transform: translateX(3px);
}

.primary-button:disabled {
  opacity: .45;
  cursor: not-allowed;
  box-shadow: none;
}

/* Resultado */

.result-card {
  text-align: center;
}

.result-card h2 {
  margin: 0 0 clamp(20px, 3vw, 28px);
  color: var(--green-deep);
  font-family: 'Fraunces', Georgia, serif;
  font-size: clamp(1.9rem, 3.4vw, 2.6rem);
  line-height: 1.1;
}

.score-ring {
  width: 148px;
  height: 148px;
  margin: 0 auto clamp(20px, 3vw, 26px);
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: conic-gradient(
    var(--green) calc(var(--score-percent) * 1%),
    var(--line) 0
  );
}

.score-ring-inner {
  width: 112px;
  height: 112px;
  border-radius: 50%;
  background: var(--paper);
  box-shadow: inset 0 0 0 1px var(--line);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.score-ring-value {
  color: var(--green-deep);
  font-family: 'Fraunces', Georgia, serif;
  font-size: 1.7rem;
  line-height: 1;
}

.score-ring-label {
  margin-top: 4px;
  color: var(--ink-soft);
  font-family: 'DM Sans', sans-serif;
  font-size: .72rem;
  letter-spacing: .08em;
  text-transform: uppercase;
}

.result-count {
  margin: 0 0 8px;
  color: var(--green-deep);
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
}

.result-message {
  max-width: 480px;
  margin: 0 auto clamp(24px, 3vw, 32px);
  color: var(--ink-soft);
  font-family: 'DM Sans', sans-serif;
  line-height: 1.65;
}

.result-actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
}

.text-link {
  color: var(--ink-soft);
  font-family: 'DM Sans', sans-serif;
  font-size: .92rem;
  font-weight: 600;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: color .15s ease, border-color .15s ease;
}

.text-link:hover,
.text-link:focus-visible {
  color: var(--green-deep);
  border-color: var(--green-deep);
}

/* Carregamento / erro */

.loading-card {
  text-align: center;
}

.loading-text {
  margin: 0;
  color: var(--ink-soft);
}

.error-card h2 {
  margin: 0 0 12px;
  color: var(--green-deep);
  font-family: 'Fraunces', Georgia, serif;
  font-size: clamp(1.7rem, 3vw, 2.3rem);
}

.error-text {
  max-width: 600px;
  margin: 0 0 24px;
  color: var(--ink-soft);
  line-height: 1.7;
}

/* Transições */

.question-fade-enter-active,
.question-fade-leave-active {
  transition: opacity .25s ease, transform .25s ease;
}

.question-fade-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.question-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

.feedback-fade-enter-active,
.feedback-fade-leave-active {
  transition: opacity .22s ease, transform .22s ease;
}

.feedback-fade-enter-from,
.feedback-fade-leave-to {
  opacity: 0;
  transform: translateY(6px);
}

/* Responsividade */

@media (max-width: 640px) {
  .question-options {
    grid-template-columns: 1fr;
  }

  .quiz-actions {
    justify-content: stretch;
  }

  .quiz-actions .primary-button {
    width: 100%;
  }

  .result-actions {
    width: 100%;
  }

  .result-actions .primary-button {
    width: 100%;
  }
}

/* Movimento reduzido */

@media (prefers-reduced-motion: reduce) {
  .primary-button,
  .option,
  .quiz-progress-fill {
    transition: none;
  }

  .question-fade-enter-active,
  .question-fade-leave-active,
  .feedback-fade-enter-active,
  .feedback-fade-leave-active {
    transition: none;
  }

  .primary-button:hover:not(:disabled) {
    transform: none;
  }
}
</style>

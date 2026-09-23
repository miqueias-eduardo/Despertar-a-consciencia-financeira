<template>
  <main class="quiz-page">
    <section>
      <p class="eyebrow">APRENDIZADO</p>
      <h1>Quiz Financeiro</h1>
      <p class="quiz-intro">Escolha um nível para continuar.</p>

      <div class="quiz-container">
        <NuxtLink
          v-for="(level, index) in levels"
          :key="level.slug"
          class="level-card"
          :to="`/quiz/prova?nivel=${level.slug}`"
          :style="{ '--card-delay': `${index * 90}ms` }"
        >
          <div class="level-card-media">
            <img :src="level.image" :alt="level.label" loading="lazy" />
            <span class="level-card-order">Nível {{ index + 1 }}</span>
          </div>

          <div class="level-card-body">
            <h2>{{ level.label }}</h2>
            <p class="level-card-description">{{ level.description }}</p>

            <div class="level-card-topics">
              <span v-for="topic in level.topics" :key="topic" class="topic-item">
                {{ topic }}
              </span>
            </div>

            <div class="level-card-difficulty">
              <span class="difficulty-dots" aria-hidden="true">
                <i v-for="n in 3" :key="n" :class="{ filled: n <= level.difficulty }"></i>
              </span>
              <span class="sr-only">Nível de dificuldade: {{ level.difficultyLabel }}</span>
              <span class="level-card-context">{{ level.context }}</span>
            </div>
          </div>
        </NuxtLink>
      </div>
    </section>
  </main>
</template>

<script setup>
const imageEasy = '/images/level-easy.webp'
const imageMedium = '/images/level-medium.webp'
const imageHard = '/images/level-hard.webp'

const levels = [
  {
    slug: 'facil',
    label: 'Iniciante',
    description:
      'Reforce conhecimentos sobre organização do dinheiro e entenda melhor as decisões financeiras do dia a dia.',
    topics: ['Orçamento', 'Receitas e despesas', 'Planejamento'],
    context: 'Para quem quer revisar ou testar os conhecimentos básicos.',
    difficulty: 1,
    difficultyLabel: 'Fácil',
    image: imageEasy
  },
  {
    slug: 'medio',
    label: 'Intermediário',
    description:
      'Teste seus conhecimentos com situações que envolvem planejamento, consumo e escolhas financeiras.',
    topics: ['Consumo', 'Planejamento', 'Decisões financeiras'],
    context: 'Para quem já conhece os conceitos básicos e quer aplicá-los.',
    difficulty: 2,
    difficultyLabel: 'Médio',
    image: imageMedium
  },
  {
    slug: 'dificil',
    label: 'Avançado',
    description:
      'Analise situações mais complexas e relacione diferentes conceitos financeiros para chegar à melhor decisão.',
    topics: ['Análise financeira', 'Investimentos', 'Planejamento'],
    context: 'Para quem quer aprofundar os conhecimentos e a aplicá-los questões mais complexas.',
    difficulty: 3,
    difficultyLabel: 'Difícil',
    image: imageHard
  }
]

useHead({ title: 'Quiz — Despertar da Consciência Financeira' })
</script>

<style scoped>
.quiz-page > section {
  max-width: 1180px;
  margin: 0 auto;
}

.quiz-page h1 {
  color: var(--green-deep);
  font-family: 'Fraunces', Georgia, serif;
  font-size: clamp(2.8rem, 5vw, 5rem);
  line-height: 1;
  letter-spacing: -.04em;
}

.quiz-intro {
  margin-top: 13px;
  color: var(--ink-soft);
  font-size: 1.05rem;
}

.quiz-container {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 28px;
  margin-top: 48px;
}

.level-card {
  position: relative;
  min-width: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  background: var(--paper);
  box-shadow: var(--shadow);
  color: inherit;
  text-decoration: none;
  animation: card-in .55s ease both;
  animation-delay: var(--card-delay, 0ms);
  transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
}

.level-card:hover,
.level-card:focus-visible {
  transform: translateY(-6px);
  border-color: #b6d2c3;
  box-shadow: var(--shadow-hover);
}

.level-card:focus-visible {
  outline: 2px solid var(--green);
  outline-offset: 5px;
}

.level-card::after {
  content: '→';
  position: absolute;
  right: 22px;
  bottom: 22px;
  width: 46px;
  height: 46px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: var(--green-soft);
  color: var(--green-deep);
  font-size: 1.1rem;
  font-weight: 800;
  transition: transform .2s ease, background .2s ease;
}

.level-card:hover::after,
.level-card:focus-visible::after {
  transform: translateX(4px) scale(1.04);
  background: #cce6d7;
}

.level-card-media {
  position: relative;
  overflow: hidden;
}

.level-card-media img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  display: block;
  transition: transform .5s ease;
}

.level-card:hover .level-card-media img,
.level-card:focus-visible .level-card-media img {
  transform: scale(1.045);
}

.level-card-order {
  position: absolute;
  top: 14px;
  left: 14px;
  padding: 6px 13px;
  border-radius: 999px;
  background: rgba(255, 253, 248, .92);
  box-shadow: 0 6px 16px rgba(11, 73, 53, .18);
  color: var(--green-deep);
  font-family: 'DM Sans', sans-serif;
  font-size: .7rem;
  font-weight: 700;
  letter-spacing: .08em;
  text-transform: uppercase;
}

.level-card-body {
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 12px;
  padding: 26px 28px 82px;
}

.level-card-body h2 {
  margin: 0;
  color: var(--green-deep);
  font-family: 'Fraunces', Georgia, serif;
  font-size: 1.55rem;
  line-height: 1.18;
}

.level-card-description {
  margin: 0;
  color: var(--ink-soft);
  font-size: .98rem;
  line-height: 1.62;
}

.level-card-topics {
  display: flex;
  flex-wrap: wrap;
  gap: 5px 0;
  margin: 0;
  color: var(--green-dark);
  font-size: .86rem;
  font-weight: 600;
}

.topic-item {
  position: relative;
}

.topic-item:not(:last-child) {
  margin-right: 22px;
}

.topic-item:not(:last-child)::after {
  content: '•';
  position: absolute;
  right: -14px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--line);
  font-size: .7rem;
}

.level-card-difficulty {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: auto;
  padding-top: 14px;
  border-top: 1px solid var(--line);
}

.difficulty-dots {
  display: inline-flex;
  flex-shrink: 0;
  gap: 5px;
}

.difficulty-dots i {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--line);
}

.difficulty-dots i.filled {
  background: var(--green);
}

.level-card:hover .difficulty-dots i.filled,
.level-card:focus-visible .difficulty-dots i.filled {
  background: var(--green-dark);
}

.level-card-context {
  color: var(--ink-soft);
  font-size: .85rem;
  line-height: 1.5;
}

.sr-only {
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

@keyframes card-in {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 980px) {
  .quiz-container {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .level-card-body {
    padding: 24px 24px 76px;
  }
}

@media (max-width: 620px) {
  .quiz-page > section {
    max-width: none;
  }

  .quiz-page h1 {
    font-size: clamp(2.5rem, 11vw, 3.4rem);
  }

  .quiz-container {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-top: 36px;
  }

  .level-card {
    border-radius: 20px;
  }

  .level-card-media img {
    aspect-ratio: 16 / 10;
  }

  .level-card-body {
    gap: 10px;
    padding: 22px 22px 72px;
  }

  .level-card-body h2 {
    font-size: 1.35rem;
  }

  .level-card::after {
    right: 18px;
    bottom: 18px;
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .level-card {
    animation: none;
    transition: none;
  }

  .level-card:hover,
  .level-card:focus-visible {
    transform: none;
  }

  .level-card-media img {
    transition: none;
  }

  .level-card:hover .level-card-media img,
  .level-card:focus-visible .level-card-media img {
    transform: none;
  }

  .level-card::after,
  .level-card:hover::after,
  .level-card:focus-visible::after {
    transition: none;
    transform: none;
  }
}
</style>

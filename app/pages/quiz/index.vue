<template>
  <main class="quiz-page">
    <section>
      <p class="eyebrow">APRENDIZADO</p>
      <h1>Quiz Financeiro</h1>
      <p class="quiz-intro">Escolha um nível para continuar.</p>

      <div class="quiz-container">
        <NuxtLink
          v-for="level in levels"
          :key="level.slug"
          class="level-card"
          :to="`/quiz/prova?nivel=${level.slug}`"
        >
          <img :src="level.image" :alt="level.label" />
          <h2>{{ level.label }}</h2>
          <span>{{ level.description }}</span>
        </NuxtLink>
      </div>
    </section>
  </main>
</template>

<script setup>
const imageEasy = '/images/8.png'
const imageMedium = '/images/6.png'
const imageHard = '/images/5.png'


const levels = [
  { slug: 'facil', label: 'Modo Fácil', description: 'Conceitos básicos', image: imageEasy },
  { slug: 'medio', label: 'Modo Médio', description: 'Aplicação dos conceitos', image: imageMedium },
  { slug: 'dificil', label: 'Modo Difícil', description: 'Desafios maiores', image: imageHard },
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
  gap: 24px;
  margin-top: 48px;
}

.level-card {
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 420px;
  border: 1px solid var(--line);
  border-radius: 24px;
  background: var(--paper);
  box-shadow: var(--shadow);
  text-decoration: none;
  transition: transform .22s ease, box-shadow .22s ease, border-color .22s ease;
}

.level-card::after {
  content: '→';
  position: absolute;
  right: 20px;
  bottom: 20px;
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: var(--green-soft);
  color: var(--green-deep);
  font-size: 1.1rem;
  font-weight: 800;
  transition: transform .2s ease, background .2s ease;
}

.level-card:hover {
  transform: translateY(-7px);
  border-color: #b6d2c3;
  box-shadow: var(--shadow-hover);
}

.level-card:hover::after {
  transform: translateX(4px);
  background: #cce6d7;
}

.level-card:focus-visible {
  transform: translateY(-3px);
}

.level-card img {
  width: 100%;
  aspect-ratio: 1.55;
  object-fit: cover;
  display: block;
}

.level-card h2 {
  padding: 24px 24px 5px;
  color: var(--green-deep);
  font-family: 'Fraunces', Georgia, serif;
  font-size: 1.5rem;
  line-height: 1.2;
}

.level-card span {
  padding: 0 24px 66px;
  color: var(--muted);
  font-size: .94rem;
  line-height: 1.55;
}

@media (max-width: 980px) {
  .quiz-container {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .level-card {
    min-height: 390px;
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
    gap: 18px;
    margin-top: 36px;
  }

  .level-card {
    min-height: 0;
    border-radius: 21px;
  }

  .level-card img {
    aspect-ratio: 1.7;
  }

  .level-card h2 {
    padding: 21px 21px 5px;
  }

  .level-card span {
    padding: 0 21px 62px;
  }
}
</style>

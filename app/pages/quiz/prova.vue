<template>
  <main class="quiz-test">
    <section class="content-card">
      <p class="eyebrow">QUIZ</p>
      <h1>Prova</h1>
      <p>
        Esta tela foi criada como base para a próxima etapa. As perguntas,
        pontuação e feedback ainda serão implementados.
      </p>
      <NuxtLink class="primary-button" to="/quiz">Voltar aos níveis</NuxtLink>
    </section>
  </main>
</template>

<script setup>
const route = useRoute()

useHead(() => ({
  title: `Prova ${route.query.nivel ? `— ${route.query.nivel}` : ''} — Despertar da Consciência Financeira`,
}))
</script>

<style scoped>
.quiz-test .content-card {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: clamp(44px, 6vw, 68px) clamp(28px, 7vw, 78px);
  border: 1px solid var(--line);
  border-radius: var(--radius-xl);
  background: var(--paper);
  box-shadow: var(--shadow);
}

.quiz-test h1 {
  margin-bottom: 14px;
  color: var(--green-deep);
  font-family: 'Fraunces', Georgia, serif;
  font-size: clamp(2.5rem, 4.5vw, 3.9rem);
  line-height: 1.04;
  letter-spacing: -.035em;
}

.quiz-test .content-card > p:not(.eyebrow) {
  max-width: 760px;
  margin-bottom: 24px;
  color: var(--ink-soft);
  line-height: 1.8;
}

.primary-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-height: 50px;
  padding: 12px 19px;
  border: 1px solid var(--green);
  border-radius: 12px;
  background: var(--green);
  color: #fff;
  box-shadow: 0 12px 25px rgba(23, 130, 91, .2);
  font-weight: 750;
  text-decoration: none;
  transition: transform .2s ease, box-shadow .2s ease, background .2s ease;
}

.primary-button::after {
  content: "→";
  font-size: 1.05rem;
  transition: transform .2s ease;
}

.primary-button:hover {
  transform: translateY(-2px);
  background: var(--green-dark);
  box-shadow: 0 16px 30px rgba(23, 130, 91, .25);
}

.primary-button:hover::after {
  transform: translateX(3px);
}

@media (max-width: 620px) {
  .quiz-test .content-card {
    padding: 38px 24px;
    border-radius: 22px;
  }

  .quiz-test h1 {
    font-size: clamp(2.35rem, 11vw, 3.25rem);
  }

  .quiz-test .content-card > p:not(.eyebrow) {
    line-height: 1.75;
  }

  .primary-button {
    width: 100%;
  }
}
</style>

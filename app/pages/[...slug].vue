<script setup>

definePageMeta({
  hideNav: true
})

useSeoMeta({
  title: 'Página não encontrada · Despertar da Consciência Financeira',
  description: 'O endereço acessado não corresponde a uma página disponível no momento.',
  robots: 'noindex, nofollow'
})
</script>

<template>
  <main class="not-found">
    <span class="not-found__digits" aria-hidden="true">404</span>

    <div class="not-found__content">


      <h1>Página não encontrada</h1>
      <p class="lead">
        O endereço que você acessou não corresponde a uma página disponível no momento.
      </p>
      <p class="hint">
        Verifique se o endereço foi digitado corretamente ou volte para a página inicial para
        continuar navegando.
      </p>

      <NuxtLink class="primary-button" to="/">Voltar para o início</NuxtLink>
    </div>
  </main>
</template>

<style scoped>
.not-found {
  position: relative;
  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  padding: 40px 24px;
  text-align: center;
  background: var(--canvas-green);
}


.not-found__digits {
  position: absolute;
  top: 8%;
  left: 50%;
  transform: translateX(-50%);
  font-family: 'Fraunces', Georgia, serif;
  font-weight: 700;
  font-size: clamp(5.5rem, 16vw, 11rem);
  line-height: 1.25;
  color: var(--green);
  opacity: .8;
  white-space: nowrap;
  user-select: none;
  pointer-events: none;
}

.not-found__content {
  position: relative;
  z-index: 1;
  max-width: 480px;
  width: 100%;
}


.not-found h1 {
  font-family: 'Fraunces', Georgia, serif;
  font-size: clamp(1.9rem, 3.6vw, 2.5rem);
  line-height: 1.15;
  color: var(--green-deep);
  margin: clamp(32px, 9vh, 72px) 0 16px;
}

.lead {
  font-family: 'DM Sans', sans-serif;
  font-size: 1.05rem;
  line-height: 1.6;
  color: var(--ink);
  margin: 0 0 10px;
}

.hint {
  font-family: 'DM Sans', sans-serif;
  font-size: .95rem;
  line-height: 1.6;
  color: var(--ink-soft);
  margin: 0 0 32px;
}

.primary-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-height: 50px;
  padding: 12px 19px;
  border-radius: 12px;
  font-weight: 750;
  text-decoration: none;
  transition: transform .2s ease, box-shadow .2s ease, background .2s ease;
  border: 1px solid var(--green);
  background: var(--green);
  color: #fff;
  box-shadow: 0 12px 25px rgba(23, 130, 91, .2);
}
.primary-button::after { content: "→"; font-size: 1.05rem; transition: transform .2s ease; }
.primary-button:hover { transform: translateY(-2px); background: var(--green-dark); box-shadow: 0 16px 30px rgba(23, 130, 91, .25); }
.primary-button:hover::after { transform: translateX(3px); }

@media (max-width: 640px) {

  .not-found__digits { top: 20%; }
  .not-found__content { max-width: 100%; }
}

@media (max-height: 650px) {
  .not-found {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .not-found__digits {
    top: 8%;
    font-size: clamp(5rem, 14vw, 9rem);
  }

  .not-found h1 {
    margin-bottom: 12px;
  }

  .hint {
    margin-bottom: 20px;
  }
}
</style>

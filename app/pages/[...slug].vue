<template>
  <main class="not-found">
    <section class="content-card">
      <h1>Página não encontrada</h1>
      <p>A rota acessada ainda não existe nesta versão do projeto.</p>
      <NuxtLink class="primary-button" to="/">Voltar para o início</NuxtLink>
    </section>
  </main>
</template>

<style scoped>
.not-found { text-align: center; }
.not-found .content-card { max-width: 900px; margin: 0 auto; padding: 60px 72px; border: 1px solid var(--line); border-radius: var(--radius-xl); background: var(--paper); box-shadow: var(--shadow); }
.not-found h1 { font-family: 'Fraunces', Georgia, serif; font-size: clamp(3rem, 8vw, 6rem); line-height: .95; color: var(--green); }
.not-found p { margin: 16px 0; color: var(--ink-soft); }

.primary-button { display: inline-flex; align-items: center; justify-content: center; gap: 12px; min-height: 50px; padding: 12px 19px; border-radius: 12px; font-weight: 750; text-decoration: none; transition: transform .2s ease, box-shadow .2s ease, background .2s ease; }
.primary-button { border: 1px solid var(--green); background: var(--green); color: #fff; box-shadow: 0 12px 25px rgba(23, 130, 91, .2); }
.primary-button::after { content: "→"; font-size: 1.05rem; transition: transform .2s ease; }
.primary-button:hover { transform: translateY(-2px); background: var(--green-dark); box-shadow: 0 16px 30px rgba(23, 130, 91, .25); }
.primary-button:hover::after { transform: translateX(3px); }
@media (max-width: 640px) { .not-found .content-card { padding: 38px 24px; border-radius: 22px; } }

</style>

<template>
  <main class="contact-page">
    <section class="contact-card">
      <p class="eyebrow">PROJETO EM DESENVOLVIMENTO</p>
      <h1>Contato</h1>
      <p class="muted">
        A interface já está preparada, mas o envio da mensagem ainda não possui
        um backend conectado.
      </p>

      <form @submit.prevent="handleSubmit">
        <label for="nome">Nome</label>
        <input id="nome" v-model="form.nome" type="text" placeholder="Seu nome" required />

        <label for="email">E-mail</label>
        <input id="email" v-model="form.email" type="email" placeholder="Seu e-mail" required />

        <label for="mensagem">Mensagem</label>
        <textarea
          id="mensagem"
          v-model="form.mensagem"
          placeholder="Escreva sua mensagem aqui..."
          required
        />

        <button type="submit">Enviar</button>
      </form>

      <p v-if="submitted" class="notice">
        Formulário preenchido. O envio real ainda será implementado.
      </p>

      <div class="social-links">
        <span>WhatsApp (configurar)</span>
        <span>E-mail (configurar)</span>
        <span>GitHub (configurar)</span>
        <span>LinkedIn (configurar)</span>
      </div>
    </section>
  </main>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({ nome: '', email: '', mensagem: '' })
const submitted = ref(false)

function handleSubmit() {
  submitted.value = true
}
useHead({ title: 'Contato — Despertar da Consciência Financeira' })
</script>

<style scoped>
.contact-card {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: clamp(44px, 6vw, 68px) clamp(28px, 7vw, 78px);
  border: 1px solid var(--line);
  border-radius: var(--radius-xl);
  background: var(--paper);
  box-shadow: var(--shadow);
}

.contact-card h1 {
  margin-bottom: 14px;
  color: var(--green-deep);
  font-family: 'Fraunces', Georgia, serif;
  font-size: clamp(2.5rem, 4.5vw, 3.9rem);
  line-height: 1.04;
  letter-spacing: -.035em;
}

.contact-card .muted {
  max-width: 760px;
  margin-bottom: 22px;
  color: var(--ink-soft);
  line-height: 1.8;
}

.contact-card form {
  display: grid;
  gap: 9px;
  margin-top: 34px;
}

.contact-card label {
  margin-top: 10px;
  color: var(--green-deep);
  font-size: .86rem;
  font-weight: 750;
}

.contact-card input,
.contact-card textarea {
  width: 100%;
  min-width: 0;
  padding: 14px 15px;
  border: 1px solid var(--line);
  border-radius: 12px;
  outline: none;
  background: #fff;
  color: var(--ink);
  transition: border-color .18s ease, box-shadow .18s ease;
}

.contact-card input:focus,
.contact-card textarea:focus {
  border-color: #8ebba8;
  box-shadow: 0 0 0 4px rgba(23,130,91,.08);
}

.contact-card textarea {
  min-height: 170px;
  resize: vertical;
}

.contact-card form button {
  min-height: 50px;
  margin-top: 11px;
  border: 0;
  border-radius: 12px;
  background: var(--green);
  color: #fff;
  font-weight: 750;
  box-shadow: 0 10px 22px rgba(23,130,91,.17);
  transition: background .18s ease, transform .18s ease;
}

.contact-card form button:hover {
  background: var(--green-dark);
  transform: translateY(-1px);
}

.notice {
  margin-top: 18px;
  padding: 13px 15px;
  border: 1px solid #c5ddce;
  border-radius: 12px;
  background: var(--green-soft);
  color: var(--green-deep);
  line-height: 1.55;
}

.social-links {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
  margin-top: 32px;
}

.social-links span {
  min-width: 0;
  padding: 13px;
  border: 1px solid var(--line);
  border-radius: 11px;
  background: #fff;
  color: var(--ink-soft);
  font-size: .82rem;
  line-height: 1.4;
  text-align: center;
}

@media (max-width: 820px) {
  .social-links {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 620px) {
  .contact-card {
    padding: 38px 24px;
    border-radius: 22px;
  }

  .contact-card h1 {
    font-size: clamp(2.35rem, 11vw, 3.25rem);
  }

  .contact-card .muted {
    line-height: 1.75;
  }

  .social-links {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 380px) {
  .contact-card {
    padding-left: 19px;
    padding-right: 19px;
  }
}
</style>

<template>
  <main class="contact-page">
    <section class="contact-card">
      <p class="eyebrow">Fale conosco</p>
      <h1>Entre em contato</h1>
      <p class="muted">
        Tem alguma dúvida, sugestão ou comentário sobre o conteúdo do projeto?
        Envie uma mensagem pelo formulário abaixo.
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

        <button type="submit" class="submit-button">Enviar mensagem</button>
      </form>

      <div class="contact-channels">
        <p class="contact-channels__label">Outros canais</p>
        <nav class="channel-list" aria-label="Outros canais de contato">
        <a
            v-for="channel in channels"
            :key="channel.label"
            :href="channel.href || undefined"
            class="channel-link"
          >
            <component :is="channel.icon" class="channel-icon" />
            <span>{{ channel.label }}</span>
          </a>
        </nav>
      </div>
    </section>

    <Transition name="modal-fade">
      <div v-if="submitted" class="modal-overlay">
        <div
          class="modal-box"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
          aria-describedby="contact-modal-text"
        >
          <RiCheckboxCircleFill class="modal-icon" aria-hidden="true" />
          <h2 id="contact-modal-title" class="modal-title">Mensagem Enviada!</h2>
          <p id="contact-modal-text" class="modal-text">Obrigado por entrar em contato.</p>
          <button type="button" class="modal-close" @click="closeModal">Fechar</button>
        </div>
      </div>
    </Transition>
  </main>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { RiMailLine, RiGithubFill, RiCheckboxCircleFill } from '@remixicon/vue'

const form = reactive({ nome: '', email: '', mensagem: '' })
const submitted = ref(false)

function handleSubmit() {
  submitted.value = true
}

function closeModal() {
  submitted.value = false
}

useHead({ title: 'Contato — Despertar da Consciência Financeira' })

const githubUrl = 'https://github.com/miqueias-eduardo/Despertar-a-consciencia-financeira';

const channels = [
  { label: 'E-mail', href: 'mailto:miqueiasfirmino.dev@gmail.com', icon: RiMailLine },
  { label: 'GitHub', href: githubUrl, icon: RiGithubFill }
]

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

.eyebrow {
  margin: 0 0 14px;
  color: var(--green);
  font-family: 'DM Sans', sans-serif;
  font-size: .8rem;
  font-weight: 700;
  letter-spacing: .12em;
  text-transform: uppercase;
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
  gap: 10px;
  margin-top: 34px;
}

.contact-card label {
  margin-top: 14px;
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
  font-family: 'DM Sans', sans-serif;
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

.submit-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 50px;
  margin-top: 12px;
  border: 1px solid var(--green);
  border-radius: 12px;
  background-color: var(--green);
  color: #fff;
  font-weight: 750;
  box-shadow: 0 10px 22px rgba(23,130,91,.17);
  transition: background-color .18s ease, transform .18s ease, box-shadow .18s ease;
}
.submit-button::after {
  content: "→";
  font-size: 1.02rem;
  transition: transform .18s ease;
}
.submit-button:hover {
  background-color: var(--green-dark);
  transform: translateY(-1px);
  box-shadow: 0 14px 26px rgba(23,130,91,.22);
}
.submit-button:hover::after {
  transform: translateX(3px);
}

.contact-channels {
  margin-top: 30px;
  padding-top: 16px;
  border-top: 1px solid var(--line);
}

.contact-channels__label {
  margin: 0 0 10px;
  color: var(--muted);
  font-family: 'DM Sans', sans-serif;
  font-size: 1.28rem;
  font-weight: 500;
  letter-spacing: .15em;
  text-transform: uppercase;
}

.channel-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.channel-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  padding: 3px 0;
  color: var(--ink-soft);
  font-size: 1.15rem;
  letter-spacing: .06em;
  font-weight: 500;
  text-decoration: none;
  transition: color .15s ease, transform .45s ease;
}
.channel-link:hover {
  color: var(--green-deep);
  transform:scale(1.05);
}

.channel-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 60;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  background: rgba(24, 51, 42, .45);
  backdrop-filter: blur(4px);
}

.modal-box {
  width: min(93vw, 34rem);
  padding: clamp(1.75rem, 4vw, 2.95rem) clamp(1.5rem, 5vw, 2.5rem);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  background: var(--paper);
  box-shadow: var(--shadow-hover);
  text-align: center;
}

.modal-icon {
  width: clamp(2.75rem, 6vw, 3.5rem);
  height: clamp(2.75rem, 6vw, 3.5rem);
  margin: 0 auto 1rem;
  color: var(--green);
  display: block;
  animation: modal-icon-pop .5s cubic-bezier(.34, 1.56, .64, 1) .1s both;
}

.modal-title {
  margin: 0 0 .5rem;
  color: var(--green-deep);
  font-family: 'Fraunces', Georgia, serif;
  font-size: clamp(1.4rem, 3vw, 1.8rem);
  line-height: 1.2;
}

.modal-text {
  margin: 0 0 1.5rem;
  color: var(--ink-soft);
  font-family: 'DM Sans', sans-serif;
  font-size: clamp(.95rem, 1.6vw, 1.05rem);
  line-height: 1.6;
}

.modal-close {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 3rem;
  padding: .75rem 1.75rem;
  border: 1px solid var(--green);
  border-radius: 12px;
  background-color: var(--green);
  color: #fff;
  font-family: 'DM Sans', sans-serif;
  font-weight: 750;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0 10px 22px rgba(23, 130, 91, .17);
  transition: background-color .18s ease, transform .18s ease, box-shadow .18s ease;
}
.modal-close:hover,
.modal-close:focus-visible {
  background-color: var(--green-dark);
  transform: translateY(-1px);
  box-shadow: 0 14px 26px rgba(23, 130, 91, .22);
}
.modal-close:focus-visible {
  outline: 2px solid var(--green-dark);
  outline-offset: 2px;
}

@keyframes modal-icon-pop {
  0% { transform: scale(.6); opacity: 0; }
  60% { transform: scale(1.08); opacity: 1; }
  100% { transform: scale(1); opacity: 1; }
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity .28s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active .modal-box,
.modal-fade-leave-active .modal-box {
  transition: transform .28s ease, opacity .28s ease;
}
.modal-fade-enter-from .modal-box,
.modal-fade-leave-to .modal-box {
  transform: translateY(1rem) scale(.97);
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  .modal-fade-enter-active,
  .modal-fade-leave-active,
  .modal-fade-enter-active .modal-box,
  .modal-fade-leave-active .modal-box,
  .modal-icon {
    transition: none;
    animation: none;
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
}

@media (max-width: 380px) {
  .contact-card {
    padding-left: 19px;
    padding-right: 19px;
  }

  .channel-link {
    font-size: .84rem;
  }

  .modal-box {
    padding: 1.5rem 1.25rem;
  }
}
</style>

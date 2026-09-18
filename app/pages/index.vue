<template>
  <main class="home">
    <section class="home-hero">
      <div class="home-hero-copy">
        <p class="eyebrow">EDUCAÇÃO FINANCEIRA</p>
        <h1>Olá! Seja bem-vindo ao Despertar da Consciência Financeira.</h1>
        <p>
          Este site tem como objetivo promover a educação financeira, ajudando
          você a melhorar sua situação econômica e conquistar mais autonomia
          sobre seu dinheiro.
        </p>

        <NuxtLink class="primary-button" to="/educacao-financeira/orcamento">
          Começar pelo orçamento
        </NuxtLink>
      </div>

      <div class="home-hero-art" aria-hidden="true">
        <div class="art-circle art-circle-one"></div>
        <div class="art-circle art-circle-two"></div>
        <div class="art-paper">
          <span class="art-paper-title"></span>
          <span class="art-paper-line"></span>
          <span class="art-paper-line short"></span>
          <span class="art-bar one"></span>
          <span class="art-bar two"></span>
          <span class="art-bar three"></span>
          <span class="art-coin coin-one" aria-hidden="true"></span>
          <span class="art-coin coin-two" aria-hidden="true"></span>
        </div>
      </div>
    </section>

    <section class="home-learning">
      <div class="section-heading">
        
        <h2>O que você vai aprender?</h2>
        <p class="section-lead">
          Cinco pilares que se conectam entre si e guiam sua jornada dentro do
          Despertar da Consciência Financeira.
        </p>
      </div>

      <ul class="learning-list">
        <li>
          <span class="learning-icon">
            <RiWallet3Line />
          </span>
          <h3>Organização financeira</h3>
          <p>
            Aprenda a estruturar seu orçamento pessoal, entender para onde vai
            o seu dinheiro e criar uma base sólida para as próximas etapas.
          </p>
        </li>

        <li>
          <span class="learning-icon">
            <RiLineChartLine />
          </span>
          <h3>Economia e investimentos</h3>
          <p>
            Descubra estratégias práticas para economizar no dia a dia e dar
            os primeiros passos rumo a investimentos mais conscientes.
          </p>
        </li>

        <li>
          <span class="learning-icon">
            <RiScales3Line />
          </span>
          <h3>Dívidas e endividamento</h3>
          <p>
            Entenda como as dívidas se formam, como lidar com elas de forma
            organizada e como evitar o endividamento no futuro.
          </p>
        </li>

        <li>
          <span class="learning-icon">
            <RiFlagLine />
          </span>
          <h3>Planejamento e metas</h3>
          <p>
            Transforme sonhos e objetivos em planos financeiros concretos, com
            etapas claras para acompanhar sua evolução.
          </p>
        </li>

        <li>
          <span class="learning-icon">
            <RiRepeatLine />
          </span>
          <h3>Hábitos financeiros</h3>
          <p>
            Desenvolva uma mentalidade mais consciente sobre o dinheiro e
            construa hábitos que sustentem sua saúde financeira a longo prazo.
          </p>
        </li>
      </ul>
    </section>

    <section class="home-start">
      <div>
        <p class="eyebrow">Continue avançando</p>
        <h2>Continue sua jornada financeira</h2>
        <p>
          Explore os conteúdos de educação financeira, investimentos e
          empreendedorismo e avance pelos temas de acordo com seus objetivos.
          Quando quiser colocar seus conhecimentos à prova, você também pode
          acessar o quiz.
        </p>
      </div>

      <div class="home-start-actions">
        <NuxtLink class="primary-button" to="/educacao-financeira/orcamento">
          Explorar conteúdos
        </NuxtLink>
        <NuxtLink class="text-button" to="/quiz">
          Fazer o quiz
        </NuxtLink>
      </div>
    </section>
  </main>
</template>

<script setup>
import {
  RiWallet3Line,
  RiLineChartLine,
  RiScales3Line,
  RiFlagLine,
  RiRepeatLine
} from '@remixicon/vue'

useHead({ title: 'Início — Despertar da Consciência Financeira' })
</script>

<style scoped>
.home {
  padding-top: clamp(34px, 5vw, 60px);
}

.home-hero {
  position: relative;
  min-height: 560px;
  display: grid;
  grid-template-columns: minmax(0, 1.12fr) minmax(380px, .88fr);
  align-items: stretch;
  overflow: hidden;
  border-radius: var(--radius-xl);
  background: var(--paper);
  border: 1px solid var(--line);
  box-shadow: var(--shadow);
}

.home-hero::before {
  content: '';
  position: absolute;
  width: 480px;
  height: 480px;
  left: -270px;
  bottom: -340px;
  border: 1px solid rgba(23, 130, 91, .12);
  border-radius: 50%;
  pointer-events: none;
}

.home-hero-copy {
  position: relative;
  z-index: 2;
  align-self: center;
  max-width: 790px;
  padding: 78px clamp(38px, 5vw, 78px);
}

.home-hero h1 {
  max-width: 750px;
  margin-bottom: 25px;
  color: var(--green-deep);
  font-family: 'Fraunces', Georgia, serif;
  font-size: clamp(2.8rem, 4.6vw, 5.1rem);
  line-height: .99;
  letter-spacing: -.045em;
}

.home-hero h1::after {
  content: '';
  display: block;
  width: 88px;
  height: 5px;
  margin-top: 27px;
  border-radius: 99px;
  background: var(--gold);
}

.home-hero-copy > p:not(.eyebrow) {
  max-width: 650px;
  margin-bottom: 27px;
  color: var(--ink-soft);
  font-size: 1.08rem;
  line-height: 1.75;
}

.primary-button,
.text-button {
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
}

.primary-button {
  border: 1px solid var(--green);
  background: var(--green);
  color: #fff;
  box-shadow: 0 12px 25px rgba(23, 130, 91, .2);
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

.home-hero-art {
  position: relative;
  min-height: 560px;
  overflow: hidden;
  background: var(--green-deep);
}

.home-hero-art::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 75% 28%, rgba(168, 207, 84, .22), transparent 25%),
    radial-gradient(circle at 20% 80%, rgba(230, 182, 79, .16), transparent 28%);
}

.art-circle {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,.13);
}

.art-circle-one {
  width: 390px;
  height: 390px;
  right: -115px;
  top: -95px;
}

.art-circle-two {
  width: 260px;
  height: 260px;
  left: -105px;
  bottom: -110px;
  background: rgba(168,207,84,.08);
}

.art-paper {
  position: absolute;
  width: min(285px, 55%);
  height: 355px;
  left: 50%;
  top: 50%;
  transform: translate(-42%, -50%) rotate(5deg);
  padding: 45px 38px;
  border-radius: 18px;
  background: #fffdf4;
  box-shadow: 22px 28px 0 rgba(5, 48, 34, .22), 0 28px 60px rgba(0,0,0,.2);
}

.art-paper::before {
  content: '';
  position: absolute;
  width: 80px;
  height: 8px;
  top: 20px;
  left: 38px;
  border-radius: 99px;
  background: var(--lime);
}

.art-paper-title {
  display: block;
  width: 150px;
  height: 13px;
  border-radius: 99px;
  background: var(--green-deep);
}

.art-paper-line {
  display: block;
  width: 190px;
  max-width: 100%;
  height: 6px;
  margin-top: 16px;
  border-radius: 99px;
  background: #dbe1d8;
}

.art-paper-line.short {
  width: 125px;
  margin-top: 9px;
}

.art-bar {
  position: absolute;
  bottom: 55px;
  width: 35px;
  border-radius: 7px 7px 2px 2px;
  background: var(--green);
}

.art-bar.one { left: 42px; height: 70px; }
.art-bar.two { left: 90px; height: 112px; background: var(--lime); }
.art-bar.three { left: 138px; height: 88px; background: var(--gold); }

.art-coin {
  position: absolute;
  display: grid;
  place-items: center;
  width: 47px;
  height: 47px;
  border-radius: 50%;
  font-weight: 800;
  box-shadow: 0 8px 20px rgba(0,0,0,.12);
}

.coin-one {
  right: 35px;
  top: 60px;
  background: var(--gold);
  color: #6b4d14;
}

.coin-one::before {
  content: "";
  width: 12px;
  height: 12px;
  border: 2px solid rgba(107,77,20,.55);
  border-radius: 50%;
}

.coin-two {
  left: -24px;
  top: 105px;
  background: var(--lime);
  color: var(--green-deep);
}

.coin-two::before {
  content: "";
  width: 16px;
  height: 3px;
  border-radius: 99px;
  background: rgba(11,73,53,.5);
  box-shadow: 0 -5px 0 rgba(11,73,53,.5), 0 5px 0 rgba(11,73,53,.5);
}

.home-learning {
  padding: clamp(70px, 8vw, 105px) 0 40px;
}

.section-heading {
  max-width: 640px;
  margin: 0 auto clamp(40px, 5vw, 56px);
  text-align: center;
}

.section-heading h2,
.home-start h2 {
  color: var(--green-deep);
  font-family: 'Fraunces', Georgia, serif;
  font-size: clamp(2rem, 3.5vw, 3rem);
  line-height: 1.05;
}

.section-lead {
  margin-top: 14px;
  color: var(--ink-soft);
  font-size: 1.02rem;
  line-height: 1.7;
}

.learning-list {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
  list-style: none;
}

.learning-list li {
  min-height: 240px;
  padding: 30px 26px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  background: rgba(255,253,248,.72);
  box-shadow: var(--shadow);
  transition: transform .2s ease, background .2s ease, border-color .2s ease, box-shadow .2s ease;
  animation: learning-card-in .5s ease both;
}

.learning-list li:nth-child(1) { animation-delay: .05s; }
.learning-list li:nth-child(2) { animation-delay: .15s; }
.learning-list li:nth-child(3) { animation-delay: .25s; }
.learning-list li:nth-child(4) { animation-delay: .35s; }
.learning-list li:nth-child(5) { animation-delay: .45s; }

.learning-list li:hover {
  transform: translateY(-4px);
  background: #fff;
  border-color: #b9d3c5;
  box-shadow: var(--shadow-hover);
}

.learning-list h3 {
  margin: 0 0 10px;
  color: var(--green-deep);
  font-family: 'Fraunces', Georgia, serif;
  font-size: 1.28rem;
  line-height: 1.15;
}

.learning-list p {
  margin: 0;
  color: var(--ink-soft);
  font-size: .93rem;
  line-height: 1.6;
}

.learning-icon {
  display: grid;
  place-items: center;
  width: 47px;
  height: 47px;
  margin-bottom: 20px;
  border-radius: 14px;
  background: var(--green-soft);
  color: var(--green-dark);
  flex-shrink: 0;
}

.learning-icon svg {
  width: 22px;
  height: 22px;
}

.learning-list li:nth-child(3n+2) .learning-icon {
  background: var(--gold-soft);
  color: #8a6116;
}

.learning-list li:nth-child(3n+3) .learning-icon {
  background: var(--green-soft2);
  color: var(--green-deep);
}

@keyframes learning-card-in {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}

.home-start {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 35px;
  margin-top: 70px;
  padding: 42px clamp(30px, 5vw, 54px);
  border-radius: 24px;
  background: var(--green-deep);
  color: #fff;
  box-shadow: var(--shadow);
}

.home-start::after {
  content: '';
  position: absolute;
  width: 230px;
  height: 230px;
  right: -75px;
  top: -105px;
  border-radius: 50%;
  border: 42px solid rgba(168,207,84,.15);
  animation: start-orbit-pulse 9s ease-in-out infinite;
}

.home-start > div,
.home-start > a {
  position: relative;
  z-index: 1;
}

.home-start > div {
  animation: start-fade-in .55s ease both;
}

.home-start h2 {
  color: #fff;
  margin-bottom: 9px;
}

.home-start p:not(.eyebrow) {
  max-width: 720px;
  color: rgba(255,255,255,.76);
}

.home-start-actions {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  flex-shrink: 0;
  animation: start-fade-in .55s ease .12s both;
}

.text-button {
  flex: 0 0 auto;
  border: 1px solid rgba(255,255,255,.25);
  color: #fff;
  background: rgba(255,255,255,.08);
}

.text-button::after {
  content: "→";
  font-size: 1.02rem;
  transition: transform .2s ease;
}

.text-button:hover {
  transform: translateY(-2px);
  background: rgba(255,255,255,.15);
}

.text-button:hover::after {
  transform: translateX(3px);
}

@keyframes start-fade-in {
  from { opacity: 0; transform: translateY(14px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes start-orbit-pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.06); opacity: .85; }
}

@media (max-width: 1080px) {
  .home-hero {
    grid-template-columns: minmax(0, 1fr) minmax(320px, .75fr);
  }

  .home-hero-copy {
    padding-left: 52px;
    padding-right: 36px;
  }
}

@media (max-width: 820px) {
  .home-hero {
    grid-template-columns: 1fr;
  }

  .home-hero-copy {
    padding: 58px 42px 52px;
  }

  .home-hero-art {
    min-height: 390px;
  }

  .learning-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .home-start {
    align-items: flex-start;
    flex-direction: column;
  }

  .home-start-actions {
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .home-start-actions .primary-button,
  .home-start-actions .text-button {
    flex: 1 1 200px;
  }
}

@media (max-width: 640px) {
  .home-hero {
    border-radius: 24px;
  }

  .home-hero-copy {
    padding: 44px 26px 42px;
  }

  .home-hero h1 {
    font-size: clamp(2.45rem, 11vw, 3.35rem);
  }

  .home-hero-copy > p:not(.eyebrow) {
    font-size: 1rem;
    line-height: 1.72;
  }

  .home-hero-art {
    min-height: 330px;
  }

  .art-paper {
    width: 220px;
    height: 275px;
    padding: 35px 28px;
  }

  .art-paper::before {
    left: 28px;
    width: 65px;
  }

  .art-paper-title {
    width: 120px;
    height: 11px;
  }

  .art-bar {
    bottom: 42px;
    width: 28px;
  }

  .art-bar.one { left: 31px; height: 55px; }
  .art-bar.two { left: 69px; height: 88px; }
  .art-bar.three { left: 107px; height: 70px; }

  .coin-one {
    right: 24px;
    top: 43px;
  }

  .home-learning {
    padding-top: 68px;
  }

  .learning-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .learning-list li {
    padding: 22px 20px;
  }

  .learning-icon {
    width: 42px;
    height: 42px;
    margin-bottom: 16px;
  }

  .home-start {
    margin-top: 50px;
    padding: 32px 26px;
    border-radius: 21px;
  }
}

@media (max-width: 430px) {
  .learning-list {
    grid-template-columns: 1fr;
  }

  .home-hero-art {
    min-height: 290px;
  }

  .art-paper {
    transform: translate(-42%, -50%) rotate(4deg) scale(.88);
  }
}

@media (prefers-reduced-motion: reduce) {
  .learning-list li,
  .home-start::after,
  .home-start > div,
  .home-start-actions {
    animation: none;
  }
}
</style>

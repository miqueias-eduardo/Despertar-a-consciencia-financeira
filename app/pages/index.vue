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
      </div>

      <ul class="learning-list">
        <li><span>💰</span> Como organizar seu orçamento pessoal</li>
        <li><span>📈</span> Estratégias para economizar e investir com inteligência</li>
        <li><span>🏦</span> Como lidar com dívidas e evitar o endividamento</li>
        <li><span>🎯</span> Planejamento financeiro para alcançar metas e sonhos</li>
        <li><span>🧠</span> Mentalidade e hábitos financeiros mais conscientes</li>
      </ul>
    </section>

    <section class="home-start">
      <div>
        <h2>🚀 Comece agora!</h2>
        <p>
          Navegue pelos módulos no menu acima ou comece pelo orçamento pessoal.
          A ideia é construir o projeto aos poucos, então algumas funcionalidades
          ainda estão em desenvolvimento.
        </p>
      </div>
    </section>
  </main>
</template>

<script setup>
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
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 30px;
  margin-bottom: 28px;
}

.section-heading h2,
.home-start h2 {
  color: var(--green-deep);
  font-family: 'Fraunces', Georgia, serif;
  font-size: clamp(2rem, 3.5vw, 3rem);
  line-height: 1.05;
}

.learning-list {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 15px;
  list-style: none;
}

.learning-list li {
  min-height: 178px;
  padding: 21px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid var(--line);
  border-radius: 18px;
  background: rgba(255,253,248,.72);
  color: var(--ink-soft);
  font-size: .91rem;
  font-weight: 600;
  transition: transform .2s ease, background .2s ease, border-color .2s ease;
}

.learning-list li:nth-child(2) { transform: translateY(18px); }
.learning-list li:nth-child(4) { transform: translateY(10px); }

.learning-list li:hover {
  transform: translateY(-4px);
  background: #fff;
  border-color: #b9d3c5;
}

.learning-list li:nth-child(2):hover { transform: translateY(14px); }
.learning-list li:nth-child(4):hover { transform: translateY(6px); }

.learning-list span {
  display: grid;
  place-items: center;
  width: 47px;
  height: 47px;
  margin-bottom: 25px;
  border-radius: 14px;
  background: var(--green-soft);
  font-size: 1.25rem;
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
}

.home-start > div,
.home-start > a {
  position: relative;
  z-index: 1;
}

.home-start h2 {
  color: #fff;
  margin-bottom: 9px;
}

.home-start p:not(.eyebrow) {
  max-width: 720px;
  color: rgba(255,255,255,.76);
}

.text-button {
  flex: 0 0 auto;
  border: 1px solid rgba(255,255,255,.25);
  color: #fff;
  background: rgba(255,255,255,.08);
}

.text-button:hover {
  transform: translateY(-2px);
  background: rgba(255,255,255,.15);
}

@media (max-width: 1080px) {
  .home-hero {
    grid-template-columns: minmax(0, 1fr) minmax(320px, .75fr);
  }

  .home-hero-copy {
    padding-left: 52px;
    padding-right: 36px;
  }

  .learning-list {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .learning-list li:nth-child(2),
  .learning-list li:nth-child(4) {
    transform: none;
  }

  .learning-list li:hover,
  .learning-list li:nth-child(2):hover,
  .learning-list li:nth-child(4):hover {
    transform: translateY(-4px);
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

  .home-start {
    align-items: flex-start;
    flex-direction: column;
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
    min-height: 155px;
    padding: 18px;
  }

  .learning-list span {
    width: 42px;
    height: 42px;
    margin-bottom: 20px;
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

  .learning-list li {
    min-height: 130px;
  }

  .home-hero-art {
    min-height: 290px;
  }

  .art-paper {
    transform: translate(-42%, -50%) rotate(4deg) scale(.88);
  }
}
</style>

<template>
  <header class="site-header">
    <div class="nav-shell">
      <NuxtLink to="/" class="brand-link" aria-label="Desperte a consciência financeira">
        <span class="brand-mark" aria-hidden="true">
          <span></span><span></span><span></span>
        </span>
        <span class="brand-copy">
          <strong>DESPERTE A CONSCIÊNCIA FINANCEIRA</strong>
        </span>
      </NuxtLink>

      <button
        class="menu-toggle"
        type="button"
        aria-label="Abrir menu"
        :aria-expanded="menuOpen"
        @click="toggleMenu"
      >
        <span></span><span></span><span></span>
      </button>

      <nav class="navbar" :class="{ 'is-open': menuOpen }" aria-label="Navegação principal">
        <NuxtLink to="/" class="nav-link" @click="closeMenu">
          <RiHome5Line class="nav-icon" size="16" /> Home
        </NuxtLink>

        <div class="nav-group">
          <button
            type="button"
            class="nav-group-trigger"
            :aria-expanded="activeGroup === 'finance'"
            @click="toggleGroup('finance')"
          >
            <span><RiBookOpenLine class="nav-icon" size="16" /> Educação Financeira</span>
            <span class="group-arrow" aria-hidden="true">⌄</span>
          </button>
          <div v-if="activeGroup === 'finance'" class="submenu">
            <NuxtLink v-for="item in financeLinks" :key="item.to" :to="item.to" @click="closeMenu">
              {{ item.label }}
            </NuxtLink>
          </div>
        </div>

        <div class="nav-group">
          <button
            type="button"
            class="nav-group-trigger"
            :aria-expanded="activeGroup === 'investment'"
            @click="toggleGroup('investment')"
          >
            <span><RiFundsFill class="nav-icon" size="16" /> Investimentos</span>
            <span class="group-arrow" aria-hidden="true">⌄</span>
          </button>
          <div v-if="activeGroup === 'investment'" class="submenu">
            <NuxtLink v-for="item in investmentLinks" :key="item.to" :to="item.to" @click="closeMenu">
              {{ item.label }}
            </NuxtLink>
          </div>
        </div>

        <div class="nav-group">
          <button
            type="button"
            class="nav-group-trigger"
            :aria-expanded="activeGroup === 'entrepreneur'"
            @click="toggleGroup('entrepreneur')"
          >
            <span><RiBarChartFill class="nav-icon" size="16" /> Empreendedorismo</span>
            <span class="group-arrow" aria-hidden="true">⌄</span>
          </button>
          <div v-if="activeGroup === 'entrepreneur'" class="submenu">
            <NuxtLink v-for="item in entrepreneurLinks" :key="item.to" :to="item.to" @click="closeMenu">
              {{ item.label }}
            </NuxtLink>
          </div>
        </div>

        <NuxtLink to="/quiz" class="nav-link nav-link-accent" @click="closeMenu">
          <RiQuestionLine class="nav-icon" size="16" /> Quiz Financeiro
        </NuxtLink>
        <NuxtLink to="/contato" class="nav-link" @click="closeMenu">
          <RiMailLine class="nav-icon" size="16" /> Contato
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import {
  RiHome5Line,
  RiBookOpenLine,
  RiFundsFill,
  RiBarChartFill,
  RiQuestionLine,
  RiMailLine,
} from '@remixicon/vue'

const menuOpen = ref(false)
const activeGroup = ref(null)

const financeLinks = [
  { label: 'Orçamento pessoal', to: '/educacao-financeira/orcamento' },
  { label: 'Controle de gastos', to: '/educacao-financeira/controle-de-gastos' },
  { label: 'Sair das dívidas', to: '/educacao-financeira/endividamento' },
  { label: 'Planejamento financeiro', to: '/educacao-financeira/planejamento' },
]

const investmentLinks = [
  { label: 'Introdução', to: '/investimentos/conceitos-basicos' },
  { label: 'Rentabilidade', to: '/investimentos/rentabilidade' },
  { label: 'Liquidez', to: '/investimentos/liquidez' },
  { label: 'Imposto de renda', to: '/investimentos/imposto-de-renda' },
  { label: 'Segurança', to: '/investimentos/seguranca' },
  { label: 'Renda fixa', to: '/investimentos/renda-fixa' },
  { label: 'Renda variável', to: '/investimentos/renda-variavel' },
  { label: 'Declaração', to: '/investimentos/declaracao' },
]

const entrepreneurLinks = [
  { label: 'O que é empreendedorismo', to: '/empreendedorismo' },
  { label: 'Ideias de negócio', to: '/empreendedorismo/ideias-de-negocio' },
  { label: 'Planejamento de negócio', to: '/empreendedorismo/planejamento-de-negocio' },
  { label: 'Dinheiro no negócio', to: '/empreendedorismo/dinheiro-no-negocio' },
  { label: 'Vendas', to: '/empreendedorismo/vendas' },
  { label: 'Crescimento do negócio', to: '/empreendedorismo/crescimento-do-negocio' },
  { label: 'Riscos', to: '/empreendedorismo/riscos' },
  { label: 'Mentalidade empreendedora', to: '/empreendedorismo/mentalidade' },
]

function toggleMenu() {
  menuOpen.value = !menuOpen.value
  if (!menuOpen.value) activeGroup.value = null
}

function toggleGroup(group) {
  activeGroup.value = activeGroup.value === group ? null : group
}

function closeMenu() {
  menuOpen.value = false
  activeGroup.value = null
}
</script>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(255, 253, 248, .95);
  border-bottom: 1px solid rgba(216, 223, 213, .9);
  backdrop-filter: blur(14px);
}

.nav-shell {
  position: relative;
  width: min(calc(100% - 48px), var(--content));
  min-height: 82px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 28px;
}

.brand-link {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
  flex: 0 1 auto;
  color: var(--ink);
  text-decoration: none;
}

.brand-mark {
  position: relative;
  width: 44px;
  height: 44px;
  flex: 0 0 44px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 3px;
  padding: 9px 9px 8px;
  overflow: hidden;
  border-radius: 14px 14px 14px 6px;
  background: var(--green);
  box-shadow: 0 8px 22px rgba(23, 130, 91, .2);
}

.brand-mark::after {
  content: '';
  position: absolute;
  width: 22px;
  height: 22px;
  top: -7px;
  right: -7px;
  border-radius: 50%;
  background: var(--lime);
}

.brand-mark span {
  position: relative;
  z-index: 1;
  width: 5px;
  border-radius: 5px 5px 2px 2px;
  background: #fff;
}

.brand-mark span:nth-child(1) { height: 9px; opacity: .75; }
.brand-mark span:nth-child(2) { height: 16px; }
.brand-mark span:nth-child(3) { height: 23px; opacity: .9; }

.brand-copy strong {
  display: block;
  max-width: 190px;
  font-size: .76rem;
  line-height: 1.15;
  letter-spacing: .045em;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 3px;
  min-width: 0;
}

.nav-link,
.nav-group-trigger {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  min-height: 44px;
  padding: 8px 11px;
  border: 0;
  border-radius: 12px;
  color: var(--green);
  background: transparent;
  font: inherit;
  font-size: .82rem;
  font-weight: 650;
  text-decoration: none;
  white-space: nowrap;
  transition: background-color .2s ease, color .2s ease;
}

.nav-link:hover,
.nav-link.router-link-active,
.nav-group-trigger:hover,
.nav-group-trigger[aria-expanded='true'] {
  background-color: var(--green-soft);
  color: var(--green-deep);
}


.nav-group { position: relative; }
.nav-group-trigger { cursor: pointer; }
.nav-group-trigger > span:first-child { display: inline-flex; align-items: center; gap: 6px; }
.group-arrow { color: var(--muted); transition: transform .2s ease; }
.nav-group-trigger[aria-expanded='true'] .group-arrow { transform: rotate(180deg); }
.nav-icon { flex: 0 0 auto; color:var(--green-dark)}

.submenu {
  position: absolute;
  top: calc(100% + 9px);
  left: 0;
  z-index: 60;
  width: 270px;
  padding: 8px;
  background: var(--paper-strong);
  border: 1px solid var(--line);
  border-radius: 17px;
  box-shadow: var(--shadow-hover);
}

.submenu a {
  display: block;
  padding: 10px 12px;
  border-radius: 10px;
  color: var(--green-deep);
  font-size: .82rem;
  line-height: 1.35;
  text-decoration: none;
}

.submenu a:hover,
.submenu a.router-link-active {
  background: var(--green-soft);
  color: var(--green-deep);
}

.menu-toggle {
  display: none;
  width: 44px;
  height: 44px;
  flex: 0 0 44px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: var(--paper-strong);
}

.menu-toggle span {
  display: block;
  width: 19px;
  height: 2px;
  margin: 4px auto;
  background: var(--ink);
  border-radius: 99px;
}

@media (max-width: 1180px) {
  .nav-shell { gap: 16px; }
  .nav-link, .nav-group-trigger { padding-left: 8px; padding-right: 8px; font-size: .78rem; }
  .brand-copy strong { max-width: 165px; }
}

@media (max-width: 1040px) {
  .nav-shell { min-height: 74px; }
  .menu-toggle { display: block; }
  .navbar {
    position: absolute;
    top: calc(100% + 1px);
    left: 0;
    right: 0;
    display: none;
    padding: 12px 8px 12px 8px;
    border-bottom: 1px solid var(--line);
    background: rgba(255, 253, 248, .99);
    box-shadow: var(--shadow-hover);
  }
  /*cores para diferenciar os itens do navbar*/
  .navbar.is-open {  display: flex; gap: 4px; flex-direction: column; min-width: 100%;  }

  .nav-link, .submenu, .nav-group,  .nav-group-trigger {
    min-width: 100%;
    max-width: 100%;
  }

  .submenu {
    position: static;
    width: 100%;
    text-align: center;
    margin: 2px 0 7px;
    box-shadow: none;
    background: var(--canvas-green);
  }

}

@media (max-width: 640px) {
  .nav-shell { width: min(calc(100% - 24px), var(--content)); }
  .brand-copy strong { max-width: 170px; font-size: .68rem; }
  .navbar { padding-left: 12px; padding-right: 12px; }
  .submenu a { padding: 9px 12px; }
}
</style>

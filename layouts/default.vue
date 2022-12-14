<template>
  <div id="app">
    <header class="h-header">
      <nav class="h-navbar">
        <h-btn icon to="/">
          <img width="50" src="/icon.png" alt="health freak icon" />
        </h-btn>

        <ul class="nav-list rounded-lg border-4 border-black">
          <li class="nav-list-item">
            <nuxt-link
              class="nav-list-item__link"
              exact-active-class="nav-list-item__link--active"
              exact
              to="/"
            >
              {{ $t('Home') }}
            </nuxt-link>
          </li>
          <li class="nav-list-item">
            <nuxt-link
              class="nav-list-item__link"
              exact-active-class="nav-list-item__link--active"
              exact
              to="/search"
            >
              {{ $t('Search') }}
            </nuxt-link>
          </li>
          <li class="nav-list-item">
            <nuxt-link
              class="nav-list-item__link"
              exact-active-class="nav-list-item__link--active"
              exact
              to="/about"
            >
              {{ $t('About') }}
            </nuxt-link>
          </li>
        </ul>

        <h-btn
          rounded
          color="app dark"
          outlined
          target="_blank"
          href="https://ideato.ir/mostafa7904"
        >
          {{ $t('Donate') }}
        </h-btn>
      </nav>

      <div class="w-full flex sm:hidden justify-between items-center">
        <h-btn icon @click="toggleDrawer()">
          <i class="ri-menu-5-line ri-2x"></i>
        </h-btn>
        <h-btn icon to="/">
          <img width="50" src="/icon.png" alt="health freak icon" />
        </h-btn>
      </div>

      <h-navigation-drawer v-model="drawer">
        <template #prepend>
          <h-btn class="mt-5 mr-2" icon @click="toggleDrawer()">
            <i class="ri-close-line ri-2x"></i>
          </h-btn>
        </template>
      </h-navigation-drawer>
    </header>

    <h-main>
      <nuxt />
    </h-main>

    <footer class="h-footer">
      <div class="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1">
        <div>
          <div class="h-footer__title">
            {{ $t('Health Freak') }}
          </div>
          <div style="max-width: 34ch" class="text-sm opacity-75">
            {{ $t('health freak description') }}
          </div>
          <div class="mt-2">
            <h-btn icon target="_blank" href="https://linkedin.com">
              <i class="ri-linkedin-line"></i>
            </h-btn>
            <h-btn icon target="_blank" href="https://instagram.com">
              <i class="ri-instagram-line"></i>
            </h-btn>
            <h-btn icon target="_blank" href="https://twitter.com">
              <i class="ri-twitter-line"></i>
            </h-btn>
          </div>
          <a
            v-for="locale in $i18n.locales"
            :key="locale.code"
            class="mx-1"
            href="#"
            @click.prevent.stop="changeLang(locale)"
          >
            {{ locale.code }}
          </a>
        </div>
        <div
          v-for="(items, key) of footerItems"
          :key="key"
          class="flex flex-col mt-12 sm:mt-6 md:mt-0"
        >
          <span class="h-footer__title">{{ $t(key) }}</span>
          <a
            v-for="(item, itemIndex) in items"
            :key="itemIndex"
            :href="item.href"
            class="h-footer__link"
          >
            {{ $t(item.title) }}
          </a>
        </div>
      </div>

      <div
        class="flex sm:flex-row flex-col sm:justify-between justify-center items-center mt-6"
      >
        <span class="text-xs">
          &copy; {{ new Date().getFullYear() }} {{ $t('All rights reserved') }}
        </span>
        <span class="text-xs sm:mt-0 mt-1">
          {{ $t('Made by Ideato team') }}
        </span>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { LocaleObject } from '@nuxtjs/i18n'

export default Vue.extend({
  name: 'DefaultLayout',
  data: () => ({
    footerItems: {
      About: [
        {
          title: 'Home',
          href: '/'
        },
        {
          title: 'Search',
          href: '/search'
        },
        {
          title: 'About',
          href: '/about'
        }
      ],
      Recipes: [
        {
          title: 'High protein',
          href: '/search?protein=gt:45'
        },
        {
          title: 'Vegan',
          href: '/search?vegan=1'
        },
        {
          title: 'Keto',
          href: '/search?keto=1'
        },
        {
          title: 'Energy',
          href: '/search?calories=gt:800'
        }
      ],
      Contact: [
        {
          title: 'Contact us',
          href: '/contact-us'
        },
        {
          title: 'Help',
          href: '/help'
        }
      ]
    },
    drawer: false
  }),
  head() {
    return this.$nuxtI18nHead({ addSeoAttributes: true })
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer
    },
    changeLang(locale: LocaleObject) {
      this.$i18n.setLocale(locale.code)
      document.documentElement.setAttribute('lang', locale.code)
      document.location.reload()
    }
  }
})
</script>

<style lang="scss">
@import '~/assets/variables.scss';

#app {
  position: relative;
  flex: 1 1 auto;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 100%;
  color: black;
  overflow-x: hidden;
}

.h-header {
  position: relative;
  display: flex;
  padding: $main-padding;
  top: $header-top;
  left: 0;
  right: 0;
  height: 68px;
  min-height: 68px;
  width: 100%;
  @media screen and (max-width: #{map-get($display-breakpoints, "md")}) {
    padding: $main-mobile-padding;
  }
}

.h-navbar {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: #{map-get($display-breakpoints, "sm")}) {
    display: none;
  }
}

.nav-list {
  display: flex;
  flex: 0.5;
  list-style-type: none;
  align-items: center;
  justify-content: space-between;
  padding: 15px 8px;
  @media screen and (max-width: #{map-get($display-breakpoints, "md")}) {
    flex: 0.8;
  }
}

.nav-list-item {
  &__link {
    padding: 8px 15px;
    border-radius: 4px;
    &--active {
      background: #{$h-primary};
      color: white;
      text-decoration: none !important;
    }
  }
}

.website-name {
  font-weight: 600;
  @media screen and (max-width: #{map-get($display-breakpoints, "md")}) {
    display: none;
  }
}

.h-footer {
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 50px 50px 30px 50px;
  background-color: #f8f9fa;
  border-radius: 4px;
  &__title {
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 24px;
  }
  &__link {
    opacity: 0.75;
    font-size: 0.83rem;
    &:not(:last-child) {
      margin-bottom: 8px;
    }
    &:hover {
      opacity: 1;
      text-decoration: none;
    }
  }
}
</style>

<i18n>
{
  "en": {
    "Home": "Home",
    "Search": "Search",
    "About": "About",
    "Donate": "Donate",
    "General" : "General",
    "All rights reserved": "All rights reserved",
    "Made by Ideato team": "Made by Ideato team",
    "Contact": "Contact",
    "Contact us": "Contact us",
    "Help": "Help",
    "Health Freak": "Health Freak",
    "Recipes":"Recipes",
    "High protein": "High protein",
    "Vegan":"Vegan",
    "Keto":"Keto",
    "Energy":"Energy",
    "health freak description": "Health Freak is your friendly healthy food partner, a website that helps you find healthy recipes"
  },
  "fa": {
    "Home": "????????",
    "Search": "??????????",
    "About": "????????????",
    "Donate": "??????????",
    "General": "??????????",
    "All rights reserved": "?????????? ???????? ?????????? ??????",
    "Made by Ideato team": "?????????? ???????? ?????? ???????? ?????? Ideato",
    "Contact": "????????",
    "Contact us": "???????? ???? ????",
    "Help": "??????",
    "Health Freak": "?????? ????????",
    "Recipes":"?????????????? ??????",
    "High protein": "?????????????? ????????",
    "Vegan":"????????",
    "Keto":"????????",
    "Energy":"???? ??????????",
    "health freak description": "?????? ???????? ?????????????? ?????? ???? ???? ?????? ?????? ?????????? ???????????? ?????????????? ?????? ???? ???????? ????????"
  }
}
</i18n>

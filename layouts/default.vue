<template>
  <div id="app">
    <header class="h-header">
      <nav class="h-navbar">
        <h-btn to="/">
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
              Home
            </nuxt-link>
          </li>
          <li class="nav-list-item">
            <nuxt-link
              class="nav-list-item__link"
              exact-active-class="nav-list-item__link--active"
              exact
              to="/search"
            >
              Search
            </nuxt-link>
          </li>
          <li class="nav-list-item">
            <nuxt-link
              class="nav-list-item__link"
              exact-active-class="nav-list-item__link--active"
              exact
              to="/about"
            >
              About
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
          Donate
        </h-btn>
      </nav>
    </header>
    <h-main>
      <nuxt />
    </h-main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "defaultLayout",
  data: () => ({}),
});
</script>

<style lang="scss">
@import "~/assets/variables.scss";

#app {
  position: relative;
  padding: 50px;
  flex: 1 1 auto;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 100%;
  color: black;

  @media screen and (max-width: 768px) {
    padding: 10px;
  }
}

.h-header {
  position: relative;
  top: 0;
  left: 0px;
  right: 0px;
  height: 76px;
  min-height: 76px;
  width: 100%;
  margin-top: 0px;
  padding: 0 15px;
  display: flex;
}

.h-navbar {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.nav-list {
  display: flex;
  flex: 0.5;
  list-style-type: none;
  align-items: center;
  justify-content: space-between;
  padding: 15px 8px;
  @media screen and (max-width: 768px) {
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
  // &:nth-child(even) {
  //   margin: 0 100px;
  // }
}

.website-name {
  font-weight: 600;
  @media screen and (max-width: 768px) {
    display: none;
  }
}
</style>

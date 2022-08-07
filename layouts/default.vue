<template>
  <div id="app">
    <header class="h-header">
      <nav class="h-navbar">
        <h-btn class="">
          <img width="50" src="/icon.png" alt="health freak icon" />
          <span class="website-name"> Health Freak </span>
        </h-btn>

        <div class="rounded-lg border-4 border-black">
          <ul class="nav-list">
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
        </div>

        <h-btn color="purple lighten-1" href="https://ideato.ir/mostafa7904">
          Donate
        </h-btn>
      </nav>
    </header>
    <nuxt />
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
#app {
  display: flex;
  position: relative;
  padding: 50px;
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
  list-style-type: none;
  align-items: center;
  justify-content: center;
  padding: 15px;
}

.nav-list-item {
  &__link {
    padding: 8px 15px;
    border-radius: 4px;
    &--active {
      background: #f65d5f;
      color: white;
      text-decoration: none !important;
    }
  }
  &:nth-child(even) {
    margin: 0 100px;
  }
}

.website-name {
  @media screen and (max-width: 768px) {
    display: none;
  }
}
</style>

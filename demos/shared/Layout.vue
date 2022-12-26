<template>
  <layout-container>
    <layout-aside class="HelloWorld-sidebar">
      <router-link class="HelloWorld-brand" :to="{ name: 'root' }">Kokiri</router-link>
      <ul class="HelloWorld-menu">
        <li :key="item.name" v-for="item in menuItems">
          <router-link :to="{ name: item.name }">{{ item.meta.text }}</router-link>
        </li>
      </ul>
    </layout-aside>
    <layout-container>
      <layout-header>
        <router-link :to="{ path: '/controls/' }">控件</router-link>
      </layout-header>
      <layout-main>
        <router-view />
      </layout-main>
    </layout-container>
  </layout-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import { LayoutContainer, LayoutHeader, LayoutMain, LayoutAside } from 'kokiri';

@Component({
  components: {
    LayoutContainer,
    LayoutHeader,
    LayoutMain,
    LayoutAside,
  },
})
export default class DemoLayout extends Vue {
  private get menuItems(): any[] {
    return this.$router.options
      .routes!.filter(({ name }) => name === 'kokiri')[0]
      .children!.filter(({ path }) => path !== '/');
  }
}
</script>

<style lang="scss" scoped>
.HelloWorld {
  &-brand,
  &-menu {
    padding-left: 24px;
  }

  &-brand,
  &-menu a {
    color: #fff;
  }

  &-brand {
    font-size: 20px;
    font-weight: bold;
    line-height: 48px;
    text-decoration: none;
  }

  &-menu {
    margin-top: 24px;
  }
}
</style>

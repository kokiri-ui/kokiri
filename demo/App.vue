<template>
  <buds-app>
    <layout-container class="Page">
      <layout-header class="Page-header">
        <router-link :to="{ name: 'home' }">Buds for Vue</router-link>
      </layout-header>
      <layout-container class="Page-container">
        <layout-sidebar class="Page-sidebar" width="250">
          <ss-menu>
            <ss-menu-item :flag="item.key" :key="item.key" @click="gotoPage(item)" v-for="item in menuItems">
              {{ item.text }}
            </ss-menu-item>
          </ss-menu>
        </layout-sidebar>
        <layout-content class="Page-content">
          <box class="Page-main">
            <box class="Page-body">
              <router-view />
            </box>
          </box>
        </layout-content>
      </layout-container>
    </layout-container>
  </buds-app>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import {
  App as BudsApp,
  Box,
  LayoutContainer,
  LayoutHeader,
  LayoutContent,
  LayoutSidebar,
  SsMenu,
  SsMenuItem,
} from '../src';

@Component({
  components: {
    BudsApp,
    Box,
    LayoutContainer,
    LayoutHeader,
    LayoutContent,
    LayoutSidebar,
    SsMenu,
    SsMenuItem,
  },
})
export default class HelloBuds extends Vue {
  private menuItems: any[] = [
    { key: 'home', text: 'Home' },
    { key: 'button', text: 'Button' },
    { key: 'box', text: 'Box' },
    { key: 'flex', text: 'Flex' },
    { key: 'panel', text: 'Panel' },
  ];

  private gotoPage(menuItem: any): void {
    (this as any).$router.push({ name: menuItem.key });
  }
}
</script>

<style lang="scss" scoped>
.Page {
  &-header {
    position: relative;
    z-index: 2;
  }

  &-container {
    background-color: #fafafa;
  }

  &-sidebar {
    border-right: 1px solid #e6e6e6;
  }

  &-content {
    height: 100%;
    display: flex;
    flex-flow: column;
  }

  &-main {
    position: relative;
    z-index: 1;
    flex-grow: 1;
  }

  &-body {
    padding: 16px;
    overflow: auto;
    @include stretch;
  }
}
</style>

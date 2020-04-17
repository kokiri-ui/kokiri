<template>
  <ss-layout-container class="Page">
    <ss-layout-header class="Page-header">
      <router-link :to="{ name: 'home' }">Buds for Vue</router-link>
    </ss-layout-header>
    <ss-layout-container class="Page-container">
      <ss-layout-sidebar class="Page-sidebar" width="250">
        <ss-menu>
          <ss-menu-item :flag="item.key" :key="item.key" @click="gotoPage(item)" v-for="item in menuItems">{{
            item.text
          }}</ss-menu-item>
        </ss-menu>
      </ss-layout-sidebar>
      <ss-layout-content class="Page-content">
        <div class="Page-main">
          <div class="Page-body">
            <router-view />
          </div>
        </div>
      </ss-layout-content>
    </ss-layout-container>
  </ss-layout-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { SsLayoutContainer, SsLayoutHeader, SsLayoutSidebar, SsLayoutContent, SsMenu, SsMenuItem } from '../src';

const docRoot = document.documentElement;
const APP_CLASSNAME = 'is-buds';

function addRootClass() {
  if (docRoot.className.indexOf(APP_CLASSNAME) > -1) {
    return;
  }

  docRoot.className = docRoot.className ? `${docRoot.className} ${APP_CLASSNAME}` : APP_CLASSNAME;
}

@Component({
  components: {
    SsLayoutContainer,
    SsLayoutHeader,
    SsLayoutSidebar,
    SsLayoutContent,
    SsMenu,
    SsMenuItem,
  },
})
export default class HelloBuds extends Vue {
  private menuItems: any[] = [
    { key: 'home', text: 'Home' },
    { key: 'button', text: 'Button' },
  ];

  private gotoPage(menuItem: any): void {
    (this as any).$router.push({ name: menuItem.key });
  }

  public created(): void {
    addRootClass();
  }

  public mounted(): void {
    addRootClass();
  }

  public updated(): void {
    addRootClass();
  }

  public destroyed(): void {
    docRoot.className = docRoot.className.replace(APP_CLASSNAME, '');
  }
}
</script>

<style lang="scss">
html.is-buds {
  height: 100%;

  body {
    height: 100%;
    margin: 0;
  }
}
</style>

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

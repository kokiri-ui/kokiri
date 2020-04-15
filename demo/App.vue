<template>
  <ss-layout-container>
    <ss-layout-sidebar>Sidebar</ss-layout-sidebar>
    <ss-layout-container>
      <ss-layout-header>Header</ss-layout-header>
      <ss-layout-content>Hello, Buds!</ss-layout-content>
      <ss-layout-footer>Footer</ss-layout-footer>
    </ss-layout-container>
  </ss-layout-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { SsLayoutContainer, SsLayoutHeader, SsLayoutContent, SsLayoutSidebar, SsLayoutFooter } from '../src';

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
    SsLayoutContent,
    SsLayoutSidebar,
    SsLayoutFooter,
  },
})
export default class HelloBuds extends Vue {
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

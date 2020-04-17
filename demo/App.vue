<template>
  <ss-layout-container>
    <ss-layout-content>
      <h1>Hello, Buds!</h1>
      <button-demo />
    </ss-layout-content>
  </ss-layout-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { SsLayoutContainer, SsLayoutContent } from '../src';
import { ButtonDemo } from './blocks';

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
    SsLayoutContent,
    ButtonDemo,
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

<template>
  <div>Hello, Buds!</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

const docRoot = document.documentElement;
const APP_CLASSNAME = 'is-buds';

function addRootClass() {
  if (docRoot.className.indexOf(APP_CLASSNAME) > -1) {
    return;
  }

  docRoot.className = docRoot.className ? `${docRoot.className} ${APP_CLASSNAME}` : APP_CLASSNAME;
}

@Component
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

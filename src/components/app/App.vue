<template>
  <box :class="$style.App">
    <slot />
  </box>
</template>

<script lang="ts">
import { CreateElement, VNode } from 'vue';
import { Component } from 'vue-property-decorator';

import { IAppComponent } from '../../typing/interfaces/app';
import { BudsComponent } from '../basic/BudsComponent';
import { Box } from '../box';

const docRoot = document.documentElement;
const docBody = document.body;

@Component({
  // @ts-ignore
  abstract: true,
  name: 'BudsApp',
  components: {
    Box,
  },
})
export default class App extends BudsComponent implements IAppComponent {
  private addHostClassName(): void {
    const hostClassName = this.$style.Host;
    const bodyClassName = this.$style['Host-body'];

    if (docRoot.className.indexOf(hostClassName) === -1) {
      docRoot.className = docRoot.className ? `${docRoot.className} ${hostClassName}` : hostClassName;
    }

    if (docBody.className.indexOf(bodyClassName) === -1) {
      docBody.className = docBody.className ? `${docBody.className} ${bodyClassName}` : bodyClassName;
    }
  }

  private removeHostClassName(): void {
    docRoot.className = docRoot.className.replace(this.$style.Host, '');
    docBody.className = docBody.className.replace(this.$style['Host-body'], '');
  }

  public created(): void {
    this.addHostClassName();
  }

  public mounted(): void {
    this.addHostClassName();
  }

  public updated(): void {
    this.addHostClassName();
  }

  public destroyed(): void {
    this.removeHostClassName();
  }
}
</script>

<style lang="scss" module>
.Host,
.Host-body,
.App {
  height: 100%;
  margin: 0;
}
</style>
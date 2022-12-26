<template>
  <kokiri-app class="HelloWorld">
    <router-view />
  </kokiri-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import { App as KokiriApp } from 'kokiri';

@Component({
  components: {
    KokiriApp,
  },
})
export default class HelloWorld extends Vue {}
</script>

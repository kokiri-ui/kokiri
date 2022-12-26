<template>
  <ul>
    <li :key="route.name" v-for="route in routes">
      <router-link :to="{ name: route.name }">{{ route.meta.text }}</router-link>
    </li>
  </ul>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class DemoHome extends Vue {
  private get routes(): any[] {
    return this.$router.options
      .routes!.filter(({ name }) => name === 'kokiri')[0]
      .children!.filter(({ path }) => path !== '/');
  }
}
</script>

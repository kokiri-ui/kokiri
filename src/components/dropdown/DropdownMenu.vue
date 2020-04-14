<template>
  <el-dropdown-menu>
    <slot />
  </el-dropdown-menu>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { DropdownMenu as ElDropdownMenu } from 'element-ui';

@Component({
  components: {
    ElDropdownMenu,
  },
})
export default class SsDropdownMenu extends Vue {}
</script>

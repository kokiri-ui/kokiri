<template>
  <el-breadcrumb-item>
    <slot />
  </el-breadcrumb-item>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { BreadcrumbItem as ElBreadcrumbItem } from 'element-ui';

@Component({
  components: {
    ElBreadcrumbItem,
  },
})
export default class SsBreadcrumbItem extends Vue {}
</script>

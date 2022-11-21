<template>
  <div class="SearchableTree" :class="className">
    <div class="SearchableTree-searchContainer" :class="searchContainerClassName">
      <text-input
        :class-name="['SearchableTree-search', searchClassName]"
        :value="searchKeyword"
        :placeholder="placeholder"
        clearable
        @input="handleTreeSearch"
      >
        <x-icon :class-name="searchIconClassName" :refs="resolvedSearchIcon" slot="suffix" />
      </text-input>
    </div>
    <div class="SearchableTree-treeContainer" :class="treeContainerClassName">
      <tree
        :data-source="resolvedTreeData"
        v-bind="resolvedTreeProps"
        @change="onChange"
        @select="onSelect"
        @expand="onExpand"
      />
    </div>
  </div>
</template>

<script src="./logic.ts" lang="ts"></script>

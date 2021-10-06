import Vue from 'vue';

function isRootNode($node: Vue): boolean {
  return $node === $node.$root;
}

/**
 * 判断 Vue 虚拟节点是否为指定组件
 *
 * @param vNode 虚拟节点
 * @param componentName 组件名
 */
function isSpecificComponent(vNode: any, componentName: string): boolean {
  return vNode.tag && vNode.componentOptions
    ? vNode.componentOptions.Ctor.options.name === componentName
    : false;
}

function findSpecificAncestor($self: Vue, componentName: string): Vue | null {
  let $parent: Vue = $self.$parent;

  while (!isRootNode($parent) && !isSpecificComponent($parent.$vnode, componentName)) {
    $parent = $parent.$parent;
  }

  return isRootNode($parent) ? null : $parent;
}

export { isSpecificComponent, findSpecificAncestor };

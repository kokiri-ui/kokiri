import Vue from 'vue';

type LayoutRole = 'container' | 'header' | 'footer' | 'content' | 'sidebar';

interface LayoutContainer extends Vue {
  __registerRole: ($role: Vue, role: LayoutRole) => void;
  __removeRole: (role: LayoutRole) => void;
}

export { LayoutRole, LayoutContainer };

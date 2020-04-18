import Vue, { VueConstructor } from 'vue';

interface IBaseComponent extends Vue {
  tag?: string | VueConstructor;
}

export { IBaseComponent };

import { Vue, Component } from 'vue-property-decorator';

@Component
class BudsComponent extends Vue {
  protected getComponentClassName(): string {
    return '';
  }
}

export { BudsComponent };

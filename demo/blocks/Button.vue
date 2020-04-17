<template>
  <div>
    <h1>Buttons</h1>
    <section>
      <h2>Normal buttons</h2>
      <div>
        <h3>Medium size</h3>
        <div>
          <buds-button>default</buds-button>
          <buds-button type="filled">filled</buds-button>
          <buds-button type="dashed">dashed</buds-button>
          <buds-button type="link">link</buds-button>
        </div>
        <h3>Large size</h3>
        <div>
          <buds-button size="large">default</buds-button>
          <buds-button type="filled" size="large">filled</buds-button>
          <buds-button type="dashed" size="large">dashed</buds-button>
          <buds-button type="link" size="large">link</buds-button>
        </div>
        <h3>Small size</h3>
        <div>
          <buds-button size="small">default</buds-button>
          <buds-button type="filled" size="small">filled</buds-button>
          <buds-button type="dashed" size="small">dashed</buds-button>
          <buds-button type="link" size="small">link</buds-button>
        </div>
      </div>
    </section>
    <section>
      <h2>Primary buttons</h2>
      <div>
        <h3>Medium size</h3>
        <div>
          <buds-button primary>default</buds-button>
          <buds-button type="filled" primary>filled</buds-button>
          <buds-button type="dashed" primary>dashed</buds-button>
          <buds-button type="link" primary>link</buds-button>
        </div>
        <h3>Large size</h3>
        <div>
          <buds-button size="large" primary>default</buds-button>
          <buds-button type="filled" size="large" primary>filled</buds-button>
          <buds-button type="dashed" size="large" primary>dashed</buds-button>
          <buds-button type="link" size="large" primary>link</buds-button>
        </div>
        <h3>Small size</h3>
        <div>
          <buds-button size="small" primary>default</buds-button>
          <buds-button type="filled" size="small" primary>filled</buds-button>
          <buds-button type="dashed" size="small" primary>dashed</buds-button>
          <buds-button type="link" size="small" primary>link</buds-button>
        </div>
      </div>
    </section>
    <section>
      <h2>Danger buttons</h2>
      <div>
        <h3>Medium size</h3>
        <div>
          <buds-button danger>default</buds-button>
          <buds-button type="filled" danger>filled</buds-button>
          <buds-button type="dashed" danger>dashed</buds-button>
          <buds-button type="link" danger>link</buds-button>
        </div>
        <h3>Large size</h3>
        <div>
          <buds-button size="large" danger>default</buds-button>
          <buds-button type="filled" size="large" danger>filled</buds-button>
          <buds-button type="dashed" size="large" danger>dashed</buds-button>
          <buds-button type="link" size="large" danger>link</buds-button>
        </div>
        <h3>Small size</h3>
        <div>
          <buds-button size="small" danger>default</buds-button>
          <buds-button type="filled" size="small" danger>filled</buds-button>
          <buds-button type="dashed" size="small" danger>dashed</buds-button>
          <buds-button type="link" size="small" danger>link</buds-button>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Button as BudsButton } from '../../src';

@Component({
  components: {
    BudsButton,
  },
})
export default class ButtonDemoBlock extends Vue {}
</script>

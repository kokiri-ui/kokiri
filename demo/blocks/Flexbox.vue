<template>
  <box>
    <h1>Flexbox</h1>
    <section>
      <h2>Horizontal flexbox</h2>
      <box>
        <h3>Normal</h3>
        <box>
          <flexbox>
            <buds-button>normal button</buds-button>
            <buds-button size="large" primary>large button</buds-button>
            <buds-button size="small" danger>small button</buds-button>
          </flexbox>
          <flexbox align="center" justify="center">
            <buds-button>normal button</buds-button>
            <buds-button size="large" primary>large button</buds-button>
            <buds-button size="small" danger>small button</buds-button>
          </flexbox>
          <flexbox align="end" justify="end">
            <buds-button>normal button</buds-button>
            <buds-button size="large" primary>large button</buds-button>
            <buds-button size="small" danger>small button</buds-button>
          </flexbox>
        </box>
        <h3>Reversed</h3>
        <box>
          <flexbox reverse>
            <buds-button>normal button</buds-button>
            <buds-button size="large" primary>large button</buds-button>
            <buds-button size="small" danger>small button</buds-button>
          </flexbox>
          <flexbox align="center" justify="center" reverse>
            <buds-button>normal button</buds-button>
            <buds-button size="large" primary>large button</buds-button>
            <buds-button size="small" danger>small button</buds-button>
          </flexbox>
          <flexbox align="end" justify="end" reverse>
            <buds-button>normal button</buds-button>
            <buds-button size="large" primary>large button</buds-button>
            <buds-button size="small" danger>small button</buds-button>
          </flexbox>
        </box>
      </box>
      <h2>Vertical flexbox</h2>
      <box>
        <h3>Normal</h3>
        <box>
          <flexbox direction="vertical">
            <buds-button>normal button</buds-button>
            <buds-button size="large" primary>large button</buds-button>
            <buds-button size="small" danger>small button</buds-button>
          </flexbox>
          <flexbox direction="vertical" align="center" justify="center">
            <buds-button>normal button</buds-button>
            <buds-button size="large" primary>large button</buds-button>
            <buds-button size="small" danger>small button</buds-button>
          </flexbox>
          <flexbox direction="vertical" align="end" justify="end">
            <buds-button>normal button</buds-button>
            <buds-button size="large" primary>large button</buds-button>
            <buds-button size="small" danger>small button</buds-button>
          </flexbox>
        </box>
        <h3>Reversed</h3>
        <box>
          <flexbox direction="vertical" reverse>
            <buds-button>normal button</buds-button>
            <buds-button size="large" primary>large button</buds-button>
            <buds-button size="small" danger>small button</buds-button>
          </flexbox>
          <flexbox direction="vertical" align="center" justify="center" reverse>
            <buds-button>normal button</buds-button>
            <buds-button size="large" primary>large button</buds-button>
            <buds-button size="small" danger>small button</buds-button>
          </flexbox>
          <flexbox direction="vertical" align="end" justify="end" reverse>
            <buds-button>normal button</buds-button>
            <buds-button size="large" primary>large button</buds-button>
            <buds-button size="small" danger>small button</buds-button>
          </flexbox>
        </box>
      </box>
    </section>
  </box>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Box, Flexbox, Button as BudsButton } from '../../src';

@Component({
  components: {
    Box,
    Flexbox,
    BudsButton,
  },
})
export default class FlexboxDemoBlock extends Vue {}
</script>
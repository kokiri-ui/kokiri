<template>
  <box>
    <h1>Flex</h1>
    <section>
      <h2>Horizontal flex</h2>
      <box>
        <h3>Normal</h3>
        <box>
          <flex>
            <buds-button>normal button</buds-button>
            <buds-button size="large" primary>large button</buds-button>
            <buds-button size="small" danger>small button</buds-button>
          </flex>
          <flex align="center" justify="center">
            <buds-button>normal button</buds-button>
            <buds-button size="large" primary>large button</buds-button>
            <buds-button size="small" danger>small button</buds-button>
          </flex>
          <flex align="end" justify="end">
            <buds-button>normal button</buds-button>
            <buds-button size="large" primary>large button</buds-button>
            <buds-button size="small" danger>small button</buds-button>
          </flex>
        </box>
        <h3>Reversed</h3>
        <box>
          <flex reverse>
            <buds-button>normal button</buds-button>
            <buds-button size="large" primary>large button</buds-button>
            <buds-button size="small" danger>small button</buds-button>
          </flex>
          <flex align="center" justify="center" reverse>
            <buds-button>normal button</buds-button>
            <buds-button size="large" primary>large button</buds-button>
            <buds-button size="small" danger>small button</buds-button>
          </flex>
          <flex align="end" justify="end" reverse>
            <buds-button>normal button</buds-button>
            <buds-button size="large" primary>large button</buds-button>
            <buds-button size="small" danger>small button</buds-button>
          </flex>
        </box>
      </box>
      <h2>Vertical flex</h2>
      <box>
        <h3>Normal</h3>
        <box>
          <flex direction="vertical">
            <buds-button>normal button</buds-button>
            <buds-button size="large" primary>large button</buds-button>
            <buds-button size="small" danger>small button</buds-button>
          </flex>
          <flex direction="vertical" align="center" justify="center">
            <buds-button>normal button</buds-button>
            <buds-button size="large" primary>large button</buds-button>
            <buds-button size="small" danger>small button</buds-button>
          </flex>
          <flex direction="vertical" align="end" justify="end">
            <buds-button>normal button</buds-button>
            <buds-button size="large" primary>large button</buds-button>
            <buds-button size="small" danger>small button</buds-button>
          </flex>
        </box>
        <h3>Reversed</h3>
        <box>
          <flex direction="vertical" reverse>
            <buds-button>normal button</buds-button>
            <buds-button size="large" primary>large button</buds-button>
            <buds-button size="small" danger>small button</buds-button>
          </flex>
          <flex direction="vertical" align="center" justify="center" reverse>
            <buds-button>normal button</buds-button>
            <buds-button size="large" primary>large button</buds-button>
            <buds-button size="small" danger>small button</buds-button>
          </flex>
          <flex direction="vertical" align="end" justify="end" reverse>
            <buds-button>normal button</buds-button>
            <buds-button size="large" primary>large button</buds-button>
            <buds-button size="small" danger>small button</buds-button>
          </flex>
        </box>
      </box>
    </section>
  </box>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Box, Flex, Button as BudsButton } from '../../src';

@Component({
  components: {
    Box,
    Flex,
    BudsButton,
  },
})
export default class FlexDemoBlock extends Vue {}
</script>

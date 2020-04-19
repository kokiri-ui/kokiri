<template>
  <box>
    <h1>Box</h1>
    <section>
      <h2>Box</h2>
      <box>
        <box>
          <ol>
            <li>Buds</li>
            <li>Handie</li>
            <li>???</li>
          </ol>
        </box>
      </box>
      <h2>Box with header and footer</h2>
      <box>
        <box>
          <box-header>
            <buds-text>View layer of Anti-chaos</buds-text>
            <spacer />
            <buds-button size="small">more...</buds-button>
          </box-header>
          <ol>
            <li>Buds</li>
            <li>Handie</li>
            <li>???</li>
          </ol>
          <box-footer>
            <buds-button primary>OK</buds-button>
          </box-footer>
        </box>
      </box>
    </section>
  </box>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Box, BoxHeader, BoxFooter, Text as BudsText, Spacer, Button as BudsButton } from '../../src';

@Component({
  components: {
    Box,
    BoxHeader,
    BoxFooter,
    BudsText,
    Spacer,
    BudsButton,
  },
})
export default class BoxDemoBlock extends Vue {}
</script>

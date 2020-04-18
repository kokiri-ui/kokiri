<template>
  <box>
    <h1>Panel</h1>
    <section>
      <h2>Panel with title</h2>
      <box>
        <panel title="View layer of Anti-chaos">
          <ol>
            <li>Buds</li>
            <li>Handie</li>
            <li>???</li>
          </ol>
        </panel>
      </box>
      <h2>Panel with header and footer</h2>
      <box>
        <panel>
          <panel-header>
            <buds-text>View layer of Anti-chaos</buds-text>
            <spacer />
            <buds-button size="small">more...</buds-button>
          </panel-header>
          <ol>
            <li>Buds</li>
            <li>Handie</li>
            <li>???</li>
          </ol>
          <panel-footer>
            <buds-button primary>OK</buds-button>
          </panel-footer>
        </panel>
      </box>
    </section>
  </box>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Box, Panel, PanelHeader, PanelFooter, Text as BudsText, Spacer, Button as BudsButton } from '../../src';

@Component({
  components: {
    Box,
    Panel,
    PanelHeader,
    PanelFooter,
    BudsText,
    Spacer,
    BudsButton,
  },
})
export default class PanelDemoBlock extends Vue {}
</script>

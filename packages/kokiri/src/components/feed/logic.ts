import { Component } from 'vue-property-decorator';
import { getComponentName, FeedStructuralComponent } from '@kokiri/core/dist/feed';

import { Box } from '../box';
import { Flex } from '../flex';
import { Avatar } from '../avatar';

@Component({
  name: getComponentName(),
  components: { Box, Flex, Avatar },
})
export default class Feed extends FeedStructuralComponent {}

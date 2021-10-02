import { Component } from 'vue-property-decorator';
import { getComponentName, ListItemStructuralComponent } from '@kokiri/core/dist/list';

@Component({
  name: getComponentName('listItem'),
})
export default class ListItem extends ListItemStructuralComponent {}

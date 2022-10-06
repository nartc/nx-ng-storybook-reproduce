import {Meta, moduleMetadata} from "@storybook/angular";
import {RigCoreModule} from 'chau/rig';

export default {
  title: 'Core',
  decorators: [
    moduleMetadata({
      imports: [RigCoreModule]
    })
  ]
} as Meta;

export const Default = () => ({
  template: `
    <nx-ng-storybook-core></nx-ng-storybook-core>
  `
})

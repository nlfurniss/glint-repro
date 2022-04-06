import Component from '@glint/environment-ember-loose/glimmer-component';

export interface ExampleComponentSignature {
  Args: {
    'example-arg': string;
  };
}

export default class ExampleComponent extends Component<ExampleComponentSignature> {}

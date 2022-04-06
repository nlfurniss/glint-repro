import Component from '@glint/environment-ember-loose/glimmer-component';

export interface ExampleComponentSignature {
  Args: {
    'exampleArg': string;
  };
}

export default class ExampleComponent extends Component<ExampleComponentSignature> {}

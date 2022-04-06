# glint-repro

This [commit](https://github.com/nlfurniss/glint-repro/commit/f2f9e9b25a0c4490652251d289c8b841cf00cddc#diff-914a242ea234b16c9250b91198c73155c49883d006040a778c107cd7fe829547) contains code that passes, this [commit](https://github.com/nlfurniss/glint-repro/commit/a340b6fdd30a55262d31dae8b6dcb68137afedd7#diff-914a242ea234b16c9250b91198c73155c49883d006040a778c107cd7fe829547) contains code that fails

```sh
$ yarn glint

app/components/example-component.hbs:2:20 - error TS2304: Cannot find name 'arg'.

2   You passed in {{@example-arg}}
                     ~~~~~~~~~~~

app/components/example-component.hbs:2:20 - error TS2339: Property 'example' does not exist on type '{ 'example-arg': string; }'.

2   You passed in {{@example-arg}}
                     ~~~~~~~~~~~
```

## Installation

* `git clone https://github.com/nlfurniss/glint-repro.git` this repository
* `cd glint-repro`
* `yarn install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

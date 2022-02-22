# jzet-textarea



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description                                                                                                                                                                                       | Type                   | Default     |
| ------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | ----------- |
| `appearance`  | `appearance`  | The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. | `string`               | `'primary'` |
| `disabled`    | `disabled`    | If `true`, the user cannot interact with the textarea.                                                                                                                                            | `boolean`              | `undefined` |
| `expand`      | `expand`      | Set to `"block"` for a full-width button.                                                                                                                                                         | `"block" \| "default"` | `undefined` |
| `placeholder` | `placeholder` | The placeholder for the textarea.                                                                                                                                                                 | `string`               | `undefined` |
| `rows`        | `rows`        |                                                                                                                                                                                                   | `number`               | `undefined` |
| `value`       | `value`       | The initial value. Can be updated at runtime.                                                                                                                                                     | `string`               | `undefined` |


## Events

| Event          | Description                                   | Type                      |
| -------------- | --------------------------------------------- | ------------------------- |
| `focusGained`  | Event is being emitted when input gets focus. | `CustomEvent<FocusEvent>` |
| `focusLost`    | Event is being emitted when focus gets lost.  | `CustomEvent<FocusEvent>` |
| `valueChanged` | Event is being emitted when value changes.    | `CustomEvent<string>`     |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

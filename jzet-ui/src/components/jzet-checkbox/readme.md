# jzet-checkbox



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute    | Description                                                                                                                                                                                                                                                  | Type      | Default       |
| ------------ | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ------------- |
| `appearance` | `appearance` | The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.                                                            | `string`  | `'secondary'` |
| `checked`    | `checked`    | If `true`, the checkbox is selected.                                                                                                                                                                                                                         | `boolean` | `false`       |
| `disabled`   | `disabled`   | If `true`, the user cannot interact with the checkbox.                                                                                                                                                                                                       | `boolean` | `false`       |
| `value`      | `value`      | The value of the checkbox does not mean if it's checked or not, use the `checked` property for that.  The value of a checkbox is analogous to the value of an `<input type="checkbox">`, it's only used when the checkbox participates in a native `<form>`. | `string`  | `'on'`        |


## Events

| Event          | Description | Type                      |
| -------------- | ----------- | ------------------------- |
| `valueChanged` |             | `CustomEvent<MouseEvent>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

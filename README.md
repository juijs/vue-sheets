# vue-sheets

> A vue component library based on the [JUI components](http://uiplay.jui.io) available in vuejs.

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/made-with-vue.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/uses-js.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/uses-css.svg)](http://forthebadge.com)

## Installation

### NPM
```bash
npm install --save vue-sheets
```

### Browser (Legacy)
If you are using an existing JUI style, Just download `dist/vue-sheets.base.js` and include it in your HTML file:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.16/vue.js"></script>
<script src="dist/vue-sheets.base.js"></script>
<link rel="stylesheet" href="vue-sheets.classic.css" />
<!--<link rel="stylesheet" href="vue-sheets.dark.css" />-->
```

### Browser
Download the `dist/vue-sheets.classic.js` and `dist/vue-sheets.css` and include it in your HTML file:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.16/vue.js"></script>
<script src="dist/vue-sheets.classic.js"></script>
<!--<script src="dist/vue-sheets.dark.js"></script>-->
<link rel="stylesheet" href="dist/vue-sheets.css" />
```

### ES Modules

##### Plug-In

```js
import Vue from 'vue'
import VueSheets from 'vue-sheets'

Vue.use(VueSheets, { theme: 'classic' })
```

##### Components (Legacy)
If you are using an existing JUI style, You must load a non-styled view component.

```js
import Vue from 'vue'
import SheetsTable from 'vue-sheets/src/components/table'

Vue.component(SheetsTable.name, SheetsTable);
```

##### Components

```js
import Vue from 'vue'
import SheetsTable from 'vue-sheets/src/components/table.classic'
// import SheetsTable from 'vue-sheets/src/components/table.dark'

Vue.component(SheetsTable.name, SheetsTable);
```

## Implemented components

- [Table](https://codepen.io/seogi1004/pen/dgjLRd)
- [X-Table](https://codepen.io/seogi1004/pen/pQxEvy)


## Props

### Common

| Name | Type | Required | Watch | Default | Description |
| ---- | ---- | -------- | ----- | ------- | ----------- |
| tableType | String | false | false | `classic` | Table style type (**simple, simple headline, expand**) |
| tableSize | String | false | false | `normal` | Table size type (**small, large**) |
| tableEffect | String | false | false | `hover` | Table effect type (**stripeless, borderless**) |
| tableWidth | Number, String | false | false | `100%` | Table width |
| columns | Array | true | false | `undefined` | Table columns | Properties of a column object (key, name, width, sort) |


## Events

### Common

| Name | Arguments | Description |
| ---- | --------- | ----------- |
| open | index | Events that occur when an accordion content is opened |
| fold | index | Events that occur when an accordion content is closed |

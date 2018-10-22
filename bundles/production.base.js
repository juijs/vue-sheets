/* bundling type : vue-sheets + juijs-grid */

import VueSheets from '../src/main.js'

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VueSheets);
}
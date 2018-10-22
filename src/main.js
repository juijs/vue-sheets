export default {
    install: function (Vue, options) {
        const SheetsTheme = (!options || !options.theme) ? `` : `.${options.theme}`;
        const SheetsTable = require(`./components/table${SheetsTheme}.vue`);

        Vue.component(SheetsTable.default.name, SheetsTable.default);
    }
}
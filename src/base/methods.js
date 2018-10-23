export default {
    methods: {
        parsingTpl: function(name) {
            let tpl = !this.$slots[name] ? "" : this.$slots[name][0].elm.innerHTML;
            tpl = tpl.split("<tr>").join(`<tr ${this.$options._scopeId}>`);
            tpl = tpl.split("<td>").join(`<td ${this.$options._scopeId}>`);
            return tpl;
        }
    }
}
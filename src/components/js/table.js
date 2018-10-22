import JUI from 'juijs-grid'
import Table from 'juijs-grid/src/components/table'

JUI.use(Table);

export default {
    name: 'sheets-table',
    props: {
        type: {
            type: String,
            required: false,
            default: 'classic' // or simple, expand
        },
        size: {
            type: String,
            required: false,
            default: 'normal' // or small, large
        },
        effect: {
            type: String,
            required: false,
            default: 'hover' // or stripeless, borderless
        },
        columns: {
            type: Array,
            required: true
        },
        data: {
            type: Array,
            required: false,
            default: null
        },
        width: {
            type: [ Number, String ],
            required: false,
            default: '100%'
        }
    },
    computed: {
        style: function() {
            return {
                width: (typeof(this.width) == "number") ? this.width+"px" : this.width
            }
        },
        keys: function() {
            return this.columns.map(column => !column.key ? null : column.key);
        },
        names: function() {
            return this.columns.map(column => column.name);
        },
        widths: function() {
            return this.columns.map(column => !column.width ? "auto" : column.width);
        }
    },
    watch: {
        data: function(newVal, oldVal) {
            if(newVal == null || newVal.length == 0) return;

            this.sheets.update(this.data);
            this.$emit("update", this.sheets.list());
        }
    },
    methods: {
        parsingTpl: function(name) {
            let tpl = !this.$slots[name] ? "" : this.$slots[name][0].elm.innerHTML;
            tpl = tpl.split("<tr>").join(`<tr ${this.$options._scopeId}>`);
            tpl = tpl.split("<td>").join(`<td ${this.$options._scopeId}>`);
            return tpl;
        }
    },
    mounted: function() {
        const self = this;

        this.sheets = JUI.create("grid.table", this.$el, {
            fields: this.keys,
            tpl: {
                row: this.parsingTpl("row")
            },
            event: {
                click: function(row, e) {
                    if(!e) return;

                    self.$emit("click", row, e);
                }
            }
        });

        if(this.data != null) {
            this.sheets.update(this.data);
        }
    }
}
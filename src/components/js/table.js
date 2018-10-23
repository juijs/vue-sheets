import JUI from 'juijs-grid'
import Table from 'juijs-grid/src/components/table'
import props from '../../base/props'
import computed from '../../base/computed'
import watch from '../../base/methods'
import methods from '../../base/methods'

JUI.use(Table);

export default {
    name: 'sheets-table',
    mixins: [ props, computed, watch, methods ],
    computed: {
        tableStyle: function() {
            return {
                width: (typeof(this.tableWidth) == "number") ? this.tableWidth + "px" : this.tableWidth
            }
        },
    },
    mounted: function() {
        const self = this;

        this.sheets = JUI.create("grid.table", this.$el, {
            fields: this.columnKeys,
            scroll: this.scroll == "scroll",
            scrollHeight: this.scrollHeight,
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
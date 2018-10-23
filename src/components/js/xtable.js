import JUI from 'juijs-grid'
import Table from 'juijs-grid/src/components/table'
import XTable from 'juijs-grid/src/components/xtable'
import props from '../../base/props'
import computed from '../../base/computed'
import watch from '../../base/methods'
import methods from '../../base/methods'

JUI.use(Table, XTable);

export default {
    name: 'sheets-xtable',
    mixins: [ props, computed, watch, methods ],
    props: {
        contentWidth: {
            type: Number,
            required: false,
            default: 0
        }
    },
    computed: {
        tableStyle: function() {
            return {
                width: (typeof(this.tableWidth) == "string" && this.tableWidth.endsWith("px")) ? parseInt(this.tableWidth) : this.tableWidth
            }
        },
    },
    mounted: function() {
        const self = this;

        this.sheets = JUI.create("grid.xtable", this.$el, {
            fields: this.columnKeys,
            buffer: this.scroll,
            width: this.contentWidth,
            scrollWidth: this.tableStyle.width,
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
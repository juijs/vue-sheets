import JUI from 'juijs-grid'
import TableComp from 'juijs-grid/src/components/table'
import props from '../../base/props'
import computed from '../../base/computed'
import watch from '../../base/watch'
import methods from '../../base/methods'

JUI.use(TableComp);

export default {
    name: 'sheets-table',
    mixins: [ props, computed, watch, methods ],
    props: {
        dragRow: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    computed: {
        tableStyle: function() {
            return {
                width: (typeof(this.tableWidth) == 'number') ? this.tableWidth + 'px' : this.tableWidth
            }
        },
        columnEdits: function() {
            return this.columns.map(column => column.edit ? column.key : null).filter(key => key != null);
        }
    },
    mounted: function() {
        const self = this;

        const options = {
            fields: this.columnKeys,
            scroll: this.scroll == 'scroll',
            scrollHeight: this.scrollHeight,
            resize: this.resize,
            sort: this.columnSorts,
            sortIndex: this.sortKey,
            sortOrder: this.sortOrder,
            moveRow: this.dragRow,
            editRow: this.columnEdits.length > 0 ? this.columnEdits : false,
            tpl: this.createTplOptions(),
            event: {
                click: function(obj, e) {
                    if(!e) return;
                    self.$emit('click', obj, e);
                },
                rowmenu: function(obj, e) {
                    if(!e) return;
                    self.$emit('rclick', obj, e);
                },
                dblclick: function(obj, e) {
                    if(!e) return;
                    self.$emit('dblclick', obj, e);
                },
                sort: function(obj, e) {
                    if(!e) return;
                    self.setSortEffect(obj);
                    self.$emit('sort', obj, e);
                },
                expand: function(obj, e) {
                    if(!e) return;
                    self.$emit('expand', obj, e);
                },
                expandend: function(obj, e) {
                    if(!e) return;
                    self.$emit('expandend', obj, e);
                },
                move: function(obj, e) {
                    if(!e) return;
                    self.$emit('drag', obj, e);
                },
                moveend: function(obj, e) {
                    if(!e) return;
                    self.$emit('dragend', obj, e);
                },
                editstart: function(obj, e) {
                    if(!e) return;
                    self.$emit('edit', obj, e);
                    self.replaceScopedHash('.edit');
                },
                editend: function(obj, e) {
                    if(!e) return;
                    self.$emit('editend', obj, e);
                }
            }
        };

        // JUI 테이블 컴포넌트 객체 생성
        this.sheet = JUI.create('grid.table', this.$el, options);

        // 기본 데이터 갱신
        if(this.data != null) {
            this.sheet.update(this.data);
        }
    }
}
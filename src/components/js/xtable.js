import JUI from 'juijs-grid'
import TableComp from 'juijs-grid/src/components/table'
import XTableComp from 'juijs-grid/src/components/xtable'

JUI.use(TableComp, XTableComp);

export default {
    name: 'sheets-xtable',
    props: {
        scrollWidth: {
            type: Number,
            required: false,
            default: 0
        },
        scrollEvent: {
            type: Boolean,
            required: false,
            default: true
        },
        sortType: {
            type: String,
            required: false,
            default: 'single'
        },
        sortCache: {
            type: Boolean,
            required: false,
            default: false
        },
        xssFilter: {
            type: Boolean,
            required: false,
            default: false
        },
        rowHeight: {
            type: Number,
            required: false,
            default: 26
        },
        pageCount: {
            type: Number,
            required: false,
            default: 100
        },
        scrollRowIndex: {
            type: [ Number, String ],
            required: false,
            default: -1
        },
    },
    watch: {
        tableWidth: function(newVal, oldVal) {
            if(newVal == oldVal) return;

            this.sheet.scrollWidth(newVal, true);
            this.sheet.resize();
        },
        scrollWidth: function(newVal, oldVal) {
            if(newVal == oldVal) return;

            this.sheet.scrollWidth(newVal, false);
            this.sheet.resize();
        },
        scrollHeight: function(newVal, oldVal) {
            if(newVal == oldVal) return;

            this.sheet.height(newVal);
            this.sheet.resize();
        },
        scrollRowIndex: function(newVal, oldVal) {
            if(newVal == oldVal) return;

            this.sheet.scrollTop(newVal);
        },
    },
    computed: {
        tableStyle: function() {
            return {
                width: (typeof(this.tableWidth) == 'string' && this.tableWidth.endsWith('px')) ? parseInt(this.tableWidth) : this.tableWidth
            }
        },
    },
    mounted: function() {
        const self = this;

        const options = {
            fields: this.columnKeys,
            colshow: this.columnActives,
            buffer: this.scroll,
            bufferCount: this.pageCount,
            rowHeight: this.rowHeight,
            scrollHeight: this.scrollHeight,
            resize: this.resize,
            sortIndex: this.sortKey,
            sortOrder: this.sortOrder,
            sortCache: this.sortCache,
            xssFilter: this.xssFilter,
            vscrollKeydownEvent: this.scrollEvent,
            expand: this.templateExpand !== null,
            tpl: this.createTplOptions(),
            event: {
                click: function(obj, e) {
                    if(!e) return;
                    if(self.selectRowEffect) this.select(obj.index);
                    self.$emit('click', obj, e);
                    self.$emit('select', obj, e);
                },
                rowmenu: function(obj, e) {
                    if(!e) return;
                    if(self.selectRowEffect) this.select(obj.index);
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
                sortend: function(obj, e) {
                    if(!e) return;
                    self.$emit('sortend', { column: obj, rows: this.list() }, e);
                },
                msort: function(obj, e) {
                    if(!e) return;
                    self.setMultiSortEffect(obj);
                    self.$emit('sort', obj, e);
                },
                msortend: function() {
                    self.$emit('sortend', { column: null, rows: this.list() });
                },
                colshow: function(obj, e) {
                    if(!e) return;
                    self.$emit('showcolumn', obj, e);
                },
                colhide: function(obj, e) {
                    if(!e) return;
                    self.$emit('hidecolumn', obj, e);
                },
                colmenu: function(obj, e) {
                    if(!e) return;
                    self.$emit('columnmenu', obj, e);
                },
                update: function() {
                    self.$emit('update', this.list());
                },
                updateTree: function() {
                    self.$emit('update', this.list());
                },
                scroll: function() {
                    self.$emit('scroll');
                }
            }
        };

        // 가로스크롤 사용유무에 따른 옵션 처리
        if(this.scrollWidth > 0) {
            options.width = this.scrollWidth;
            options.scrollWidth = this.tableStyle.width;
        } else {
            options.width = this.tableStyle.width;
        }

        // 정렬 타입에 따른 옵션 처리
        if(this.sortType == 'single') {
            options.sort = this.columnSorts;
        } else {
            options.msort = this.columnSorts;
        }

        // JUI 테이블 컴포넌트 객체 생성
        this.sheet = JUI.create('grid.xtable', this.$el, options);

        // 모든 엘리먼트 스타일 해쉬 적용
        this.replaceScopedHash('.head,.body');

        // 기본 데이터 및 선택하기
        if(this.data != null) {
            this.sheet.update(this.data);
            this.$emit('update', this.sheet.list());

            // 로우 선택 효과 주기
            if(this.selectRowIndex !== -1) {
                this.sheet.select(this.selectRowIndex);
            }
        }
    }
}
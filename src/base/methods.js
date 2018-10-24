import $ from 'jquery'

export default {
    methods: {
        parsingTpl: function(name) {
            let tpl = !this.$slots[name] ? "" : this.$slots[name][0].elm.innerHTML;

            if(tpl != "") {
                tpl = tpl.split("<tr").join(`<tr ${this.$options._scopeId}`);
                tpl = tpl.split("<td").join(`<td ${this.$options._scopeId}`);
            }

            return tpl;
        },
        replaceScopedHash: function(selector) {
            const self = this;

            $(this.sheets.root).find(selector).each(function() {
                $(this).attr(self.$options._scopeId, true)
            });
        },
        createTplOptions: function() {
            const tpl = {};

            const tplRow = this.parsingTpl("row");
            if(tplRow != null) tpl.row = tplRow;

            const tplNone = this.parsingTpl("none");
            if(tplNone != null) tpl.none = tplNone;

            const tplExpand = this.parsingTpl("expand");
            if(tplExpand != null) tpl.expand = tplExpand;

            return tpl;
        },
        setSortEffect: function(column) {
            $(column.element).parent().find("i").remove();

            let $icon = $("<i class='icon-arrow3'></i>");
            if(column.order == "desc") {
                $icon = $("<i class='icon-arrow1'></i>");
            }

            $icon.attr(this.$options._scopeId, true);
            $icon.css({ "position": "static", "float": "right", "margin-left": "-20px" });

            $(column.element).find("i").remove();
            $(column.element).append($icon)
        },
        setMultiSortEffect: function(column) {
            $(column.element).find("i").remove();

            let $icon = null;
            if(column.order == "desc") {
                $icon = $("<i class='icon-arrow1'></i>");
            } else if(column.order == "asc") {
                $icon = $("<i class='icon-arrow3'></i>");
            }

            if($icon != null) {
                $icon.attr(this.$options._scopeId, true);
                $icon.css({ "position": "static", "float": "right", "margin-left": "-20px" });

                $(column.element).append($icon);
            }
        }
    }
}
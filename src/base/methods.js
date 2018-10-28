import $ from 'jquery'

export default {
    methods: {
        parsingTpl: function(template) {
            let tpl = !template ? '' : template;

            tpl = tpl.split("<tr").join(`<tr ${this.$options._scopeId}`);
            tpl = tpl.split("<td").join(`<td ${this.$options._scopeId}`);
            tpl = tpl.split("<i").join(`<i ${this.$options._scopeId}`);

            return tpl;
        },
        replaceScopedHash: function(selector) {
            const self = this;

            $(this.sheet.root).find(selector).each(function() {
                $(this).attr(self.$options._scopeId, true)
            });
        },
        createTplOptions: function() {
            const tpl = {};

            if(this.templateRow != null)
                tpl.row = this.parsingTpl(this.templateRow);
            if(this.templateNone != null)
                tpl.none = this.parsingTpl(this.templateNone);
            if(this.templateExpand!= null)
                tpl.expand = this.parsingTpl(this.templateExpand);

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
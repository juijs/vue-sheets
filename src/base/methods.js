import $ from 'jquery'

export default {
    methods: {
        parsingTpl: function(template) {
            const _scopeId = this.$options._scopeId;
            let tpl = !template ? '' : template;

            if(typeof(_scopeId) != "undefined") {
                tpl = tpl.split("<tr").join(`<tr ${_scopeId}`);
                tpl = tpl.split("<td").join(`<td ${_scopeId}`);
                tpl = tpl.split("<i").join(`<i ${_scopeId}`);
            }

            return tpl;
        },
        parsingTplForMenu: function(template) {
            const _scopeId = this.$options._scopeId;
            let tpl = !template ? '' : template;

            if(typeof(_scopeId) != "undefined") {
                tpl = tpl.split("<div").join(`<div ${_scopeId}`);
                tpl = tpl.split("<ul").join(`<ul ${_scopeId}`);
                tpl = tpl.split("<li").join(`<li ${_scopeId}`);
                tpl = tpl.split("<a").join(`<a ${_scopeId}`);
                tpl = tpl.split("<input").join(`<input ${_scopeId}`);
            }

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
            if(this.templateExpand != null)
                tpl.expand = this.parsingTpl(this.templateExpand);
            if(this.templateMenu != null)
                tpl.menu = this.parsingTplForMenu(this.templateMenu);

            return tpl;
        },
        setSortEffect: function(column) {
            $(column.element).parent().find("i").remove();

            let $icon = $("<i class='icon-asc'></i>");
            if(column.order == "desc") {
                $icon = $("<i class='icon-desc'></i>");
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
                $icon = $("<i class='icon-desc'></i>");
            } else if(column.order == "asc") {
                $icon = $("<i class='icon-asc'></i>");
            }

            if($icon != null) {
                $icon.attr(this.$options._scopeId, true);
                $icon.css({ "position": "static", "float": "right", "margin-left": "-20px" });

                $(column.element).append($icon);
            }
        }
    }
}
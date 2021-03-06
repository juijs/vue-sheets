export default {
    watch: {
        data: function(newVal, oldVal) {
            if(newVal == null) return;

            if(newVal.length == 0) this.sheet.reset();
            else this.sheet.update(this.data);

            this.$emit("update", this.sheet.list());
        },
        activeMenu: function(newVal, oldVal) {
            if(newVal == oldVal) return;

            if(newVal) this.sheet.showColumnMenu(this.menuLeft, this.menuTop);
            else this.sheet.hideColumnMenu();
        },
        templateRow: function(newVal, oldVal) {
            if(newVal == oldVal) return;

            this.sheet.setTpl("row", newVal);
        },
        templateNone: function(newVal, oldVal) {
            if(newVal == oldVal) return;
            
            this.sheet.setTpl("none", newVal);
        },
        selectRowIndex: function(newVal, oldVal) {
            if(newVal == oldVal) return;

            this.sheet.select(newVal);
        },
    }
}
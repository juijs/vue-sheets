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
        }
    }
}
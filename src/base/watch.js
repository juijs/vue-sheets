export default {
    watch: {
        data: function(newVal, oldVal) {
            if(newVal == null || newVal.length == 0) return;

            this.sheets.update(this.data);
            this.$emit("update", this.sheets.list());
        }
    }
}
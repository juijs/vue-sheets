export default {
    watch: {
        data: function(newVal, oldVal) {
            if(newVal == null || newVal.length == 0) return;

            this.sheet.update(this.data);
            this.$emit("update", this.sheet.list());
        }
    }
}
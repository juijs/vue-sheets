export default {
    watch: {
        data: function(newVal, oldVal) {
            if(newVal == null) return;

            if(newVal.length == 0) this.sheet.reset();
            else this.sheet.update(this.data);

            this.$emit("update", this.sheet.list());
        }
    }
}
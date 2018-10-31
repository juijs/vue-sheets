export default {
    computed: {
        columnKeys: function() {
            return this.columns.map(column => !column.key ? null : column.key);
        },
        columnNames: function() {
            return this.columns.map(column => column.name);
        },
        columnWidths: function() {
            return this.columns.map(column => !column.width ? "auto" : column.width);
        },
        columnSorts: function() {
            return this.columns.map(column => column.sort ? column.key : null).filter(key => key != null);
        }
    }
}
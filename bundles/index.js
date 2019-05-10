/* bundling type : vue + vue-uix + juijs */

import Vue from 'vue'

// import SheetsTable from '../src/components/table'
import SheetsTable from '../src/components/table.classic'
Vue.component(SheetsTable.name, SheetsTable);

// import SheetsTable from '../src/main'
// Vue.use(SheetsTable, { theme: "classic" });

window.vm = new Vue({
    el: "#app",
    data: {
        columns: [
            { key: "name", name: "이름", width: "200px" },
            { key: "age", name: "나이", edit: true, active: true },
            { key: "location", name: "지역", active: false },
        ],
        rows: [],
        datas: [
            { name: "홍재석", age: "33", location: "대한민국" }
        ],
        activeMenu: false,
        templateRow: `<tr>
            <td><!= name !></td>
            <td><!= age !></td>
            <td><i class="icon-help"></i> <!= location !></td>
        </tr>`,
        templateNone: `<tr>
                    <td class="none" colspan="3">
                        <div class="msg">No Data</div>
                    </td>
                </tr>`,
        templateMenu: `<div class="dropdown">
    <div class="anchor" style="left: 135px;"></div>
    
    <ul style="width: 150px; overflow-y: auto;">
        <! for(var i = 0; i < columns.length; i++) { !>
        <li>
        <a><input type="checkbox" />&nbsp; <!= columns[i] !></a>
        </li>
        <! } !>
    </ul>
</div>`
    },
    methods: {
        onUpdateEvent: function(rows) {
            console.log(rows);
            this.rows = rows;
        },
        onClickEvent: function(row, e) {
            console.log(row);
            this.$refs.ui.sheet.select(row.index);
        }
    },
    mounted: function() {
        console.log(this.$refs.ui.sheet);
    }
});
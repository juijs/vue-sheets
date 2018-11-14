import { mount } from 'vue-test-utils'
import SheetsTable from '@/components/table'

describe('table.js', () => {
    const wrapper = mount(SheetsTable, {
        propsData: {
            columns: [
                { key: "name", name: "이름", width: "200px" },
                { key: "age", name: "나이" },
                { key: "location", name: "지역" },
            ],
            data: [
                { name: "홍재석", age: "33", location: "대한민국" }
            ],
            templateRow: `<tr>
                <td><!= name !></td>
                <td><!= age !></td>
                <td><!= location !></td>
            </tr>`
        }
    });

    it('renders li for each item in props.items', () => {
        expect(wrapper.vm.data.length).toBe(1);
    })

    it('server render', () => {
        wrapper.vm.$nextTick(() => {
            expect(wrapper.vm.$el).toMatchSnapshot();
        });
    });
})
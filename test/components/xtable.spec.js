import { mount } from 'vue-test-utils'
import SheetsXTable from '@/components/xtable'

describe('xtable.js', () => {
    const wrapper = mount(SheetsXTable, {
        propsData: {
            columns: [
                { key: "name", name: "이름", width: "200px" },
                { key: "age", name: "나이", sort: true },
                { key: "location", name: "지역", sort: true },
            ],
            data: [
                { name: "홍재석", age: 31, location: "대한민국" },
                { name: "홍재석", age: 22, location: "대한민국2" },
                { name: "홍재석", age: 12, location: "대한민국3" },
                { name: "홍재석", age: 12, location: "대한민국3" },
                { name: "홍재석", age: 12, location: "대한민국3" },
                { name: "홍재석", age: 12, location: "대한민국3" },
                { name: "홍재석", age: 12, location: "대한민국3" },
                { name: "홍재석", age: 12, location: "대한민국3" },
                { name: "홍재석", age: 12, location: "대한민국3" }
            ],
            scrollHeight: 100,
            templateRow: `<tr>
                <td><!= name !></td>
                <td><!= age !></td>
                <td><!= location !></td>
            </tr>`,
            templateNone: `<tr>
                <td class="none" colspan="3">
                    <div class="msg">None!!!</div>
                </td>
            </tr>`
        }
    });

    it('renders li for each item in props.items', () => {
        expect(wrapper.vm.data.length).toBe(9);
    })

    it('server render', () => {
        wrapper.vm.$nextTick(() => {
            expect(wrapper.vm.$el).toMatchSnapshot();
        });
    });
})
export default {
    props: {
        tableType: {
            type: String,
            required: false,
            default: 'classic' // or simple, expand
        },
        tableSize: {
            type: String,
            required: false,
            default: 'normal' // or small, large
        },
        tableEffect: {
            type: String,
            required: false,
            default: 'hover' // or stripeless, borderless
        },
        tableWidth: {
            type: [ Number, String ],
            required: false,
            default: '100%'
        },
        columns: {
            type: Array,
            required: true
        },
        data: {
            type: Array,
            required: false,
            default: null
        },
        scroll: {
            type: String,
            required: false,
            default: 'vscroll' // or page, s-page, scroll
        },
        scrollHeight: {
            type: Number,
            required: false,
            default: 200
        },
        resize: {
            type: Boolean,
            required: false,
            default: false
        },
        sortKey: {
            type: String,
            required: false,
            default: null
        },
        sortOrder: {
            type: String,
            required: false,
            default: 'asc' // or desc
        },
        selectEffect: {
            type: Boolean,
            required: false,
            default: false
        },
        activeMenu: {
            type: Boolean,
            required: false,
            default: false
        },
        menuLeft: {
            type: Number,
            required: false,
            default: 0
        },
        menuTop: {
            type: Number,
            required: false,
            default: 0
        },
        templateRow: {
            type: String,
            required: false,
            default: null
        },
        templateNone: {
            type: String,
            required: false,
            default: null
        },
        templateExpand: {
            type: String,
            required: false,
            default: null
        },
        templateMenu: {
            type: String,
            required: false,
            default: null
        }
    }
}
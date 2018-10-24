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
        }
    }
}
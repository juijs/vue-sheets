<template src="./html/table.html"></template>

<script>
    import SheetsTable from './js/table'
    import props from '../base/props'
    import computed from '../base/computed'
    import watch from '../base/watch'
    import methods from '../base/methods'

    SheetsTable.mixins = [ props, computed, watch, methods ];
    export default SheetsTable;
</script>
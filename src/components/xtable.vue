<template src="./html/xtable.html"></template>

<script>
    import SheetsXTable from './js/xtable'
    import props from '../base/props'
    import computed from '../base/computed'
    import watch from '../base/watch'
    import methods from '../base/methods'

    SheetsXTable.mixins = [ props, computed, watch, methods ];
    export default SheetsXTable;
</script>
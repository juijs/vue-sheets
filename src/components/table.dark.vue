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

<style scoped lang="less">
    @import "~juijs-grid/src/styles/base/mixins.less";
    @import "~juijs-grid/src/styles/table.less";
    @import "~juijs-grid/src/styles/table.theme.less";
    @import "~juijs-grid/src/styles/theme/dark.less";
    @import "~juijs-ui/src/styles/base/mixins.less";
    @import "~juijs-ui/src/styles/dropdown.less";
    @import "~juijs-ui/src/styles/dropdown.theme.less";
    @import "~juijs-ui/src/styles/theme/dark.less";
</style>
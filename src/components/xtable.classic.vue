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

<style scoped lang="less">
    @import "~juijs-grid/src/styles/base/mixins.less";
    @import "~juijs-grid/src/styles/common.less";
    @import "~juijs-grid/src/styles/common.theme.less";
    @import "~juijs-grid/src/styles/table.less";
    @import "~juijs-grid/src/styles/table.theme.less";
    @import "~juijs-grid/src/styles/xtable.less";
    @import "~juijs-grid/src/styles/xtable.theme.less";
    @import "~juijs-grid/src/styles/theme/classic.less";
    @import "~juijs-ui/src/styles/base/mixins.less";
    @import "~juijs-ui/src/styles/icon.less";
    @import "~juijs-ui/src/styles/icon.theme.less";
    @import "~juijs-ui/src/styles/theme/classic.less";
</style>
<template>
<div>
<crumbs :crumbs_info="crumbs"></crumbs>
<el-select v-model="status" placeholder="全部">
  <el-option
    v-for="(item,index) in list"
    :label="item.name"
    :value="item.status"
    :key="index">
  </el-option>
</el-select>
</div>
</template>
<script>
import crumbs from '../layout/crumbs'
export default {
  data: function () {
    return {
      crumbs: {
        list: [
          {name: '促销推广', go: 0},
          {name: '限时折扣', go: 0}
        ]
      },
      list: [
        {name: '全部', status: ''},
        {name: '待支付', status: 0},
        {name: '待确认', status: 1}
      ],
      status: ''
    }
  },
  methods: {
  },
  components: {
    'crumbs': crumbs
  }
}
</script>
<style lang="less" scoped>
@import '../../style/variables.less';
</style>

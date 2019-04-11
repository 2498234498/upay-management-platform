<template>
  <div>
    

    <el-form :inline="true" :model="formInline" class="demo-form-inline">
  <el-form-item label="承兑商名称">
    <el-input width = 5 v-model="formInline.user" placeholder="承兑商名称"></el-input>
  </el-form-item>
   <el-form-item label="承兑商ID">
    <el-input width = 5 v-model="formInline.id" placeholder="承兑商ID"></el-input>
  </el-form-item>
    <el-form-item label="手机号">
    <el-input width = 5 v-model="formInline.telphone" placeholder="133333"></el-input>
  </el-form-item>
  <el-form-item label="保证金范围">
    <el-input width = 5 v-model="formInline.baillow" placeholder="10"></el-input>
  </el-form-item>
    <el-form-item label="">
    <el-input width = 5 v-model="formInline.bailhigh" placeholder="143"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">查询</el-button>
  </el-form-item>
</el-form>
<div>
      承兑商列表
    </div>
      <el-table
      :data="tableDataone"
      style="width: 100%"
      border
      :default-sort = "{prop: 'date', order: 'descending'}"
      >
      <el-table-column
        prop="acceptancesId"
        label="承兑商ID"
        sortable
       >
      </el-table-column>
      <el-table-column
        prop="acceptancesName"
        label="承兑商名称">
      </el-table-column>
      <el-table-column
        prop="recommendId"
        label="推荐ID">
      </el-table-column>
      <el-table-column
        prop="contributionCoefficient"
        label="贡献系数">
      </el-table-column>
      <el-table-column
        prop="phoneNumber"
        label="手机号">
      </el-table-column>
      <el-table-column
        prop="tencentNumber"
        label="QQ号">
      </el-table-column>
      <el-table-column
        prop="recommendRevenue"
        label="推荐收益"
        >
      </el-table-column>
      <el-table-column
        prop="freebond"
        label="可用保证金"
       >
      </el-table-column>
      <el-table-column
        prop="addbonus"
        label="累计分红"
        >
      </el-table-column>
      <el-table-column
        prop="bonusCharge"
        label="手续费比例">
      </el-table-column>
       <el-table-column
        prop="resourcenum"
        label="资源数">
      </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'AdministratorManagement',
  data () {
    return {
      formInline: {
        user: '',
        region: ''
      },
      tableDataone: [{
        acceptancesId: 101,
        acceptancesName: '王小虎',
        recommendId: 101,
        contributionCoefficient: 100,
        phoneNumber: 13800138000,
        tencentNumber: 123456,
        recommendRevenue: 10.00,
        freebond: 200.00,
        addbonus: 400.00,
        bonusCharge: 0.01,
        resourcenum: 5
      }]
    }
  }
}
</script>

<style lang='scss' scoped>

</style>

<template>

  <div>

    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="商户名称：">
        <el-input v-model="formInline.user" placeholder="请输入商户名称"></el-input>
      </el-form-item>
      <el-form-item label="商户ID：">
        <el-input v-model="formInline.user" placeholder="请输入商户ID"></el-input>
      </el-form-item>
      <el-form-item label="手机号：">
        <el-input v-model="formInline.user" placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <div>
      商户列表
    </div>
    <el-table
      :data="tableData"
      style="width: 100%"
      border
      :default-sort = "{prop: 'date', order: 'descending'}"
      >
      <el-table-column
        prop="merchantId"
        label="商户ID"
        sortable
       >
      </el-table-column>
      <el-table-column
        prop="merchantName"
        label="商户名称">
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
        :formatter="formatterRecommendRevenue">
      </el-table-column>
      <el-table-column
        prop="merchantBalance"
        label="商户余额"
        :formatter="formatterMerchantBalance">
      </el-table-column>
      <el-table-column
        prop="totalIncome"
        label="总入金额"
        :formatter="formatterTotalIncome">
      </el-table-column>
      <el-table-column
        prop="serviceCharge"
        label="手续费比例">
      </el-table-column>
      <el-table-column
        prop="name"
        label="操作"
        width = 180>
        <template slot-scope="scope">
          <el-button
            type="primary"
            size="small">
            修改
          </el-button>
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            type="danger"
            size="small">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'MerchantManagement',
  data () {
    return {
      formInline: {
        user: '',
        region: ''
      },
      tableData: [{
        merchantId: 101,
        merchantName: '王小虎',
        recommendId: 101,
        contributionCoefficient: 100,
        phoneNumber: 13800138000,
        tencentNumber: 123456,
        recommendRevenue: 10.00,
        merchantBalance: 200.00,
        totalIncome: 400.00,
        serviceCharge: 0.01
      }, {
        merchantId: 101,
        merchantName: '王小虎',
        recommendId: 101,
        contributionCoefficient: 100,
        phoneNumber: 13800138000,
        tencentNumber: 123456,
        recommendRevenue: 10.00,
        merchantBalance: 200.00,
        totalIncome: 10.00,
        serviceCharge: 0.01
      }, {
        merchantId: 101,
        merchantName: '王小虎',
        recommendId: 101,
        contributionCoefficient: 100,
        phoneNumber: 13800138000,
        tencentNumber: 123456,
        recommendRevenue: 10.00,
        merchantBalance: 200.00,
        totalIncome: 10.00,
        serviceCharge: 0.01
      }, {
        merchantId: 101,
        merchantName: '王小虎',
        recommendId: 101,
        contributionCoefficient: 100,
        phoneNumber: 13800138000,
        tencentNumber: 123456,
        recommendRevenue: 10.00,
        merchantBalance: 200.00,
        totalIncome: 10.00,
        serviceCharge: 0.01
      }]
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    },
    formatterRecommendRevenue (row) {
      return row.recommendRevenue.toFixed(2)
    },
    formatterMerchantBalance (row) {
      return row.merchantBalance.toFixed(2)
    },
    formatterTotalIncome (row) {
      return row.totalIncome.toFixed(2)
    },
    deleteRow (index, tableData) {
      this.tableData.splice(index, 1)
    }
  }
}
</script>

<style lang='scss' scoped>

</style>

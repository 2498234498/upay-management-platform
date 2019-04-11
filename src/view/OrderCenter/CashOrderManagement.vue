<template>  
  <div> 
<div>
  <el-button type="success">批量审核</el-button>
  <el-button type="info">批量驳回</el-button>
  <el-button type="success">导出</el-button>
</div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
   <el-form-item label="商户名称: ">
    <el-input width = 5 v-model="formInline.mername" placeholder="名称"></el-input>
  </el-form-item>
   <el-form-item label="订单状态: ">
    <el-select v-model="formInline.status" placeholder="状态">
      <el-option label="全部" value="李四"></el-option>
      <el-option label="已完成" value="张三"></el-option>
      <el-option label="待支付" value="张三"></el-option>
    </el-select>
  </el-form-item>
    <el-form-item label="日期: ">
    <el-input width = 50% v-model="formInline.data" placeholder="日期"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onCheck">查询</el-button>
  </el-form-item>
</el-form>
<div>
      出金订单明细表
</div>
<div>
 <el-table
      :data="tableDatathree"
      style="width: 100%"
      border
      :default-sort = "{prop: 'date', order: 'descending'}"
      >
    <el-table-column label="合计：">
    </el-table-column>
    <el-table-column 
     prop="Totalnum"
     label="100">
    </el-table-column>
    </el-table>
    </div>
      <el-table
      :data="tableDataone"
      style="width: 100%"
      border
      :default-sort = "{prop: 'date', order: 'descending'}"
      >
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
      <el-table-column
        prop="merchantID"
        label="商户订单编号"
        sortable
       >
      </el-table-column>
      <el-table-column
        prop="merchantname"
        label="商户名称">
      </el-table-column>
      <el-table-column
        prop="cashaccount"
        label="提现金额">
      </el-table-column>
      <el-table-column
        prop="servicecharge"
        label="手续费">
      </el-table-column>
      <el-table-column
        prop="accountholder"
        label="开户人">
      </el-table-column>
      <el-table-column
        prop="accountbank"
        label="开户行">
      </el-table-column>
      <el-table-column
        prop="bankaccount"
        label="银行账号"
        >
      </el-table-column>
        <el-table-column
        prop="createdata"
        label="创建时间"
        >
      </el-table-column>
              <el-table-column
        prop="orderstatus"
        label="订单状态"
        >
          </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="150">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">完成</el-button>
        <el-button type="text" size="small">取消</el-button>
      </template>
    </el-table-column>


    </el-table>

  </div>
</template>

<script>
export default {
  name: 'CashOrderManagement',
  data () {
    return {
      formInline: {
        user: '',
        region: ''
      },
      tableDatathree: [{           
      }],
      tableDataone: [{
        merchantID: 22,
        merchantname: "张三",
        cashaccount: 24.00,
        servicecharge:100.0,
        accountholder: "李二",
        accountbank: "中国银行",
        bankaccount: 55465454,
        createdata: "2019-5-6",
        orderstatus: "未支付"
      }]
    }
  }
}
</script>

<style lang='scss' scoped>

</style>

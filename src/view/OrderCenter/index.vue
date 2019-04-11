<template>
  <div>
    
<div>
  <el-button type="success">批量确认</el-button>
  <el-button type="info">批量取消</el-button>
  <el-button type="success">导出</el-button>
</div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
   <el-form-item label="订单编号: ">
    <el-input width = 5 v-model="formInline.ordernum" placeholder="编号"></el-input>
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
    <el-button type="primary" @click="onSubmit">查询</el-button>
  </el-form-item>
</el-form>
<div>
      入金订单明细表
    </div>
    <div>
 <el-table
      :data="tableDatatwo"
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
        label="商户名">
      </el-table-column>
      <el-table-column
        prop="plantformID"
        label="平台订单编号">
      </el-table-column>
      <el-table-column
        prop="cusrecharge"
        label="客户充值">
      </el-table-column>
      <el-table-column
        prop="paytype"
        label="充值通道">
      </el-table-column>
      <el-table-column
        prop="payee"
        label="收款人">
      </el-table-column>
      <el-table-column
        prop="payaccount"
        label="收款账号"
        >
      </el-table-column>
        <el-table-column
        prop="acceptances"
        label="承兑商"
        >
      </el-table-column>
              <el-table-column
        prop="orderstatus"
        label="订单状态"
        >
      </el-table-column>
        <el-table-column
        prop="createtime"
        label="创建时间"
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
  name: 'InputOrderManagement',
  data () {
    return {
      formInline: {
        user: '',
        region: ''
      },
      tableDataone: [{
        merchantID: 333,
        merchantname: '王小虎',
        plantformID: 10133333,
        cusrecharge: 100.0,
        paytype: '支付宝',
        payee: '王二黑',
        payaccount: 10333330,
        acceptances: "dd",
        orderstatus: "待支付",
        createtime: " 2019.2.3"
      }]
    }
  }
}
</script>

<style lang='scss' scoped>

</style>

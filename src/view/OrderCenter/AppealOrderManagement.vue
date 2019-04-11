<template>  
  <div> 
<div>
  <el-button type="success">批量确认</el-button>
  <el-button type="info">批量取消</el-button>
  <el-button type="success">导出</el-button>
</div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="订单编号: ">
        <el-input width = 50% v-model="formInline.orderID" placeholder="名称"></el-input>
    </el-form-item>
    <el-form-item label="商户名称: ">
        <el-input width = 50% v-model="formInline.mername" placeholder="名称"></el-input>
    </el-form-item>
      <el-form-item label="资源名称: ">
        <el-input width = 50% v-model="formInline.resourcename" placeholder="名称"></el-input>
    </el-form-item>
    <el-form-item label="申诉时间: ">
    <el-input width = 50% v-model="formInline.data" placeholder="日期"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onCheck">查询</el-button>
  </el-form-item>
</el-form>
<div >
      申诉订单明细表
</div>
    <div>
   <p>合计： 100</p>
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
        prop="platformID"
        label="平台订单号"
        sortable
       >
      </el-table-column>
      <el-table-column
        prop="merchantname"
        label="商户名称">
      </el-table-column>
      <el-table-column
        prop="recechantname"
        label="承兑商名称">
         </el-table-column>
      <el-table-column
        prop="cusrecharge"
        label="客户充值">
      </el-table-column>
       <el-table-column prop="appleimageone" label="申诉截图一" min-width="20%" > <!-- 图片的显示 -->
          <template slot-scope="scope"> 
            <img :src="scope.row.image" min-width="70" height="70" /> 
            </template>
         </el-table-column> 
  <el-table-column prop="appleimagetwo" label="申诉截图二" min-width="20%" > <!-- 图片的显示 -->
          <template slot-scope="scope"> 
            <img :src="scope.row.image" min-width="70" height="70" /> 
            </template>
         </el-table-column> 
           <el-table-column prop="appleimagethree" label="申诉截图三" min-width="20%" > <!-- 图片的显示 -->
          <template slot-scope="scope"> 
            <img :src="scope.row.image" min-width="70" height="70" /> 
            </template>
         </el-table-column> 
      <el-table-column
        prop="matchsource"
        label="匹配资源">
      </el-table-column>
      <el-table-column
        prop="appealdata"
        label="申诉创建时间">
      </el-table-column>
      <el-table-column
        prop="ordertime"
        label="订单发起时间"
        >
      </el-table-column>
        <el-table-column
        prop="status"
        label="状态"
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
  name: 'AppealOrderManagement',
  data () {
    return {
      formInline: {
        user: '',
        region: ''
      },
      tableDatathree: [{           
      }],
      tableDataone: [{
      merchantID:33,
        platformID:342,
        merchantname:"ee",
        recechantname:"王一",
        cusrecharge: 200.0,
        appleimageone: "e",
        appleimagetwo:"e",
        appleimagethree:"e",
        matchsource:" 3",
        appealdata: "20189",
        ordertime: "2019-6-23",
        status: "未支付"
      }]
    }
  }
}
</script>

<style lang='scss' scoped>

</style>

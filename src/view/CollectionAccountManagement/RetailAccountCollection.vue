<template>
<div>    
<div>
  <el-button type="success">批量开启</el-button>
  <el-button type="info">批量休息</el-button>
  <el-button type="success">导出</el-button>
</div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
   <el-form-item label="开户行: ">
    <el-select v-model="formInline.openbank" placeholder="开户行">
      <el-option label="全部" value="李四"></el-option>
      <el-option label="承兑商" value="张三"></el-option>
      <el-option label="散户" value="张三"></el-option>
    </el-select>
  </el-form-item>
   <el-form-item label="开户行: ">
    <el-input width = 5 v-model="formInline.bank" placeholder="开户行"></el-input>
  </el-form-item>
   <el-form-item label="状态: ">
    <el-select v-model="formInline.status" placeholder="状态">
      <el-option label="全部" value="李四"></el-option>
      <el-option label="开启" value="张三"></el-option>
      <el-option label="休息" value="张三"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">查询</el-button>
  </el-form-item>
</el-form>
<div>
      承兑商归集账号列表
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
        prop="openname"
        label="开户名"
        sortable
       >
      </el-table-column>
      <el-table-column
        prop="openbankname"
        label="开户行">
      </el-table-column>
      <el-table-column
        prop="bankaccount"
        label="银行账号">
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态">
      </el-table-column>
      <el-table-column
        prop="beforetime"
        label="上次启用时间">
      </el-table-column>
      <el-table-column
        prop="beforereccount"
        label="上一次收款笔数">
      </el-table-column>
      <el-table-column
        prop="beforetotalmoney"
        label="上一次收款金额"
        >
      </el-table-column>
   
    <el-table-column
      fixed="right"
      label="操作"
      width="150">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">开启</el-button>
        <el-button type="text" size="small">编辑</el-button>
        <el-button type="text" size="small">删除</el-button>
      </template>
    </el-table-column>


    </el-table>

  </div>
</template>

<script>
export default {
  name: 'RetailAccountCollection',
  data () {
    return {
      formInline: {
        user: '',
        region: ''
      },
      tableDataone: [{
        openname: 'wang',
        openbankname: '王小虎',
        bankaccount: 10133333333333333,
        status: '开启',
        beforetime: '2016-05-02',
        beforereccount: 12356,
        beforetotalmoney: 10.00,
      }]
    }
  }
}
</script>

<style lang='scss' scoped>

</style>

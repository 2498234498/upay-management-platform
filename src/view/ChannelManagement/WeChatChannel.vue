<template>
  <div>
    <div>
      <el-button type="success">批量修改</el-button>
      <el-button type="success">导出</el-button>
    </div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="承兑商名称: ">
        <el-input width="50%" v-model="formInline.rececurname" placeholder="名称"></el-input>
      </el-form-item>
      <el-form-item label="支付宝账号: ">
        <el-input width="50%" v-model="formInline.alipayaccount" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item label="状态: ">
        <el-select v-model="formInline.status" placeholder="状态">
          <el-option label="全部" value="李四"></el-option>
          <el-option label="休息中" value="张三"></el-option>
          <el-option label="待测试" value="张三"></el-option>
          <el-option label="疑似风控" value="张三"></el-option>
          <el-option label="风控中" value="张三"></el-option>
          <el-option label="已作废" value="张三"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onCheck">查询</el-button>
      </el-form-item>
    </el-form>
    <div>支付宝通道列表</div>
    <div>
      <p>合计： 100</p>
    </div>
    <el-table
      :data="tableDataone"
      style="width: 100%"
      border
      :default-sort="{prop: 'date', order: 'descending'}"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="acceptname" label="承兑商名称" sortable></el-table-column>
      <el-table-column prop="curname" label="姓名" sortable></el-table-column>
      <el-table-column prop="aliaccount" label="支付宝账号"></el-table-column>
      <el-table-column prop="currstatus" label="当前状态"></el-table-column>
      <el-table-column prop="importdata" label="导入时间"></el-table-column>
      <el-table-column prop="marginbalance" label="保证金余额"></el-table-column>
      <el-table-column prop="bonuscoff" label="分红系数"></el-table-column>
      <el-table-column prop="todayincome" label="今日入金"></el-table-column>
      <el-table-column prop="almoneyback" label="已回款"></el-table-column>
      <el-table-column prop="unmoneyback" label="未回款"></el-table-column>
      <el-table-column prop="bonus" label="分红"></el-table-column>
      <el-table-column prop="dispatchnum" label="派单次数"></el-table-column>
      <el-table-column prop="undispatchnum" label="掉单次数"></el-table-column>
      <el-table-column prop="stilllose" label="连续掉单"></el-table-column>
      <el-table-column prop="successratio" label="成功率"></el-table-column>
      <el-table-column prop="historysuccess" label="历史成功率"></el-table-column>
      <el-table-column prop="changetime" label="修改时间"></el-table-column>
      <el-table-column fixed="right" label="操作" width="150">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">编辑信息</el-button>
          <el-button type="text" size="small">修改状态</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "WeChatChannel",
  data() {
    return {
      formInline: {
        user: "",
        region: ""
      },
      tableDatathree: [{}],
      tableDataone: [
        {
          merchantID: 33,
          platformID: 342,
          merchantname: "ee",
          recechantname: "王一",
          cusrecharge: 200.0,
          appleimageone: "e",
          appleimagetwo: "e",
          appleimagethree: "e",
          matchsource: "3",
          appealdata: "20189",
          ordertime: "2019-6-23",
          status: "未支付"
        }
      ]
    };
  }
};
</script>

<style lang='scss' scoped>
</style>

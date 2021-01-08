<!--
Created by zhulixiao on 2020/4/16.
-->
<template>
  <div>
         <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
    <pl-year-range v-model="yearRange"/>
    <el-table :data="[{a: '范文芳叫哦我覅额就佛我发窘而我就foe我就发问价哦', b: 'bcd'}]" border>
      <pl-table-column label="啊" prop="a">
        <template v-slot:header>pl-table-column</template>
      </pl-table-column>
      <el-table-column label="哦" prop="b">
        <template v-slot="scope">{{scope.row}}</template>
      </el-table-column>
      <pl-table-column label="额" prop="c"></pl-table-column>
      <pl-table-column label="以" prop="d"></pl-table-column>
    </el-table>
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form ref="form" :model="formData">
        <el-form-item prop="result" label="活动名称" required>
          <pl-select
            v-model="formData.result"
            placeholder="请选择"
            multiple
            hasSelectAll
            :options="[{value: 'a', label: 'a'}, {value: 'b', label: 'b'}]"
          />
        </el-form-item>
        <el-form-item prop="yearRange" label="年份范围" required>
          <pl-year-range v-model="formData.yearRange"/>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="() => $refs.form.validate()">确 定</el-button>
      </div>
    </el-dialog>
    <br>
    <pl-button @click="dialogFormVisible = true">pl-button</pl-button>
    <el-button type="default">default</el-button>
    <el-button type="primary">primary</el-button>
    <el-button type="danger">danger</el-button>
    <el-button type="info">info</el-button>
    <el-button type="default" disabled>default disabled</el-button>
    <el-button type="primary" disabled>primary disabled</el-button>
    <el-button type="danger" disabled>danger disabled</el-button>
    <el-button type="info" disabled>info disabled</el-button>
    <el-button type="default" plain>default plain</el-button>
    <el-button type="primary" plain>primary plain</el-button>
    <el-button type="danger" plain>danger plain</el-button>
    <el-button type="info" plain>info plain</el-button>
    <el-button type="default" plain disabled>default plain d</el-button>
    <el-button type="primary" plain disabled>primary plain d</el-button>
    <el-button type="danger" plain disabled>danger plain d</el-button>
    <el-button type="info" plain disabled>info plain d</el-button>
    <br><br>
    <el-input style="width: 100px" disabled value="威锋网服务"/>
    <el-input style="width: 100px" disabled placeholder="威锋网服务"/>
    <el-input style="width: 100px" placeholder="afwef"/>
    <el-input style="width: 100px" value="afwef"/>
    <pl-select
      v-model="result"
      placeholder="请选择"
      multiple
      hasSelectAll
      :options="[{value: 'a', label: '啊'}, {value: 'b', label: '吧'}]"
    />
    <el-link>abf</el-link>
    <el-autocomplete
      class="inline-input"
      :fetch-suggestions="suggest"
      placeholder="请输入内容"
    ></el-autocomplete>
    <el-tabs type="border-card">
      <el-tab-pane label="用户管理">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
    </el-tabs>
    <el-tabs class="el-tabs--border-button">
      <el-tab-pane label="用户管理">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
    </el-tabs>
    <div style="height: 2000px"></div>
     <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import '@/assets/element-theme/index.scss';
  import PlButton from '@/components/PlButton';
  import PlTableColumn from '@/components/PlTableColumn';
  import PlSelect from '@/components/PlSelect';
  import PlYearRange from '@/components/PlYearRange';
  import Sortable from "sortablejs";

  export default {
    name: 'ElementTheme',
    components: {
      PlYearRange, PlSelect, PlTableColumn, PlButton,
    },
    data() {
      return {
        result: ['a', 'b'],
        formData: {},
        dialogFormVisible: false,
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          }]
      };
    },
    methods: {
      abc(e) {
        console.log(e);
      },
      initSort() {
        const tbody = document.querySelector(".el-table__body-wrapper tbody");
        new Sortable(tbody, options);
      },
      suggest(a, cb) {
        // eslint-disable-next-line max-len
        cb([
          { value: 1 },
          { value: 1 },
          { value: 1 },
          { value: 1 },
          { value: 1 },
          { value: 1 },
          { value: 1 },
          { value: 1 },
          { value: 1 },
        ]);
      },
    },
  };
</script>

<style lang="scss" scoped></style>

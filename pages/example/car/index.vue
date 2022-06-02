<template>
  <div class="car-container">
    <ul style="width: 100%">
      <el-table
        ref="multipleTable"
        :data="tableData"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
        >
        </el-table-column>
        <el-table-column
          label="商品"
          width="250"
        >
          <template slot-scope="scope">
            <div class="flex">
              <div><img :src="scope.row.img" alt=""></div>
              <div>{{scope.row.name}}</div>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          prop="price"
          label="单价"
        >
        </el-table-column>
        <el-table-column
          prop="number"
          label="数量"
        >
          <template slot-scope="scope">
            <el-input-number v-model="scope.row.number" @change="handleChange(scope)" :min="0"  size="small"></el-input-number>
          </template>
        </el-table-column>
        <el-table-column
          label="小计"
        >
          <template slot-scope="scope">{{ scope.row.total }}</template>
        </el-table-column>
        <el-table-column
          label="操作"
        >
          <template slot-scope="scope">
            <el-button @click="deleteShop(scope)" type="danger" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="total">总计:{{totals}}</div>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "car",
    data(){
      return {
        tableData: [
          {
            name: 'iphone12紫色',
            img:'https://img14.360buyimg.com/n0/s80x80_jfs/t1/172102/8/10639/201530/60a61e73E8c618926/79602404813e4b70.jpg.dpg',
            price: 5999,
            number:0,
            total:0
          },
          {
            name: 'iphone12紫色',
            img:'https://img14.360buyimg.com/n0/s80x80_jfs/t1/172102/8/10639/201530/60a61e73E8c618926/79602404813e4b70.jpg.dpg',
            price: 5999,
            number:0,
            total:0
          }
        ],
        multipleSelection: [],
        total:0
      }
    },
    //
    computed:{
      totals: function () {
        this.total = 0
        this.multipleSelection.map((val)=>{
          this.total +=val.price*val.number
        })
        return this.total
      }
    },
    methods:{
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      handleChange(value) {
        this.tableData[value.$index].total = value.row.price * value.row.number
      },
      deleteShop(value) {
        this.tableData.splice(value.$index,1)
      }
    }
  }

</script>

<style scoped lang="scss">
  .flex{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .car-container{
    width: 1200px;
    margin: 100px auto;
    border: 1px solid #ccc;
    background-color: #fff;
    .total{
      display: flex;
      flex-direction: row-reverse;
      width: 80%;
    }
  }

</style>

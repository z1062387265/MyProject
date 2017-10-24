<template>
  <el-row>
      <el-col :span="10" class="left">
          <div>
              <el-tooltip class="item" effect="dark" content="预览" placement="right">
                <el-button type="primary" icon="caret-right"></el-button>
              </el-tooltip>
            <el-tooltip class="item" effect="dark" content="撤回" placement="right">
              <el-button type="primary" icon="arrow-left"></el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="重做" placement="right">
              <el-button type="primary" icon="caret-right"></el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="保存" placement="right">
              <el-button type="primary" icon="caret-right"></el-button>
            </el-tooltip>
          </div>
      </el-col>
  </el-row>
</template>
<script>
export default {
  name: 'left'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
  .left{
    padding-top: 10px;
    background: #222;
    height: 100%;
  }
  .left .item{
    margin-top: 10px;
  }
  .el-tooltip{
  margin: 0;
  }
</style>

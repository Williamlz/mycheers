<template>
  <div>
    <el-row :gutter="15">
      <el-col :span="4"><div class="grid-content"></div></el-col>
      <el-col :span="7"
        ><div class="grid-content" >
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
          >
            <el-menu-item index="1" @click="go_home">首页</el-menu-item>
            <el-menu-item index="2" @click="go_novel">小说中心</el-menu-item>
            <el-menu-item index="3" @click="go_game">游戏专区</el-menu-item>
            <el-menu-item index="4" @click="go_answer">等你来答</el-menu-item>
          </el-menu>
        </div></el-col
      >
      <el-col :span="1"><div class="grid-content"></div></el-col>
      <el-col :span="6"
        ><div class="grid-content">
          <div class="demo-input-suffix">
            <el-input
              placeholder="请输入内容"
              suffix-icon="el-icon-search"
              v-model="search_input"
              @keyup.enter.native="searchEnterFun"
              style="top:10px"
            >
            </el-input>
          </div></div
      ></el-col>
      <el-col :span="5"
        ><div class="grid-content">
          <el-badge :value="10" class="item">
            <el-button size="medium">评论</el-button>
          </el-badge>
          <el-badge :value="5" class="item">
            <el-button size="medium">回复</el-button>
          </el-badge>
          <el-dropdown trigger="click" style="top:8px">
            <span class="el-dropdown-link" >
              点我查看<i class="el-icon-caret-bottom el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item class="clearfix">
                <el-button type="text">我的主页</el-button>
              </el-dropdown-item>
              <el-dropdown-item class="clearfix">
                <el-button type="text">设置</el-button>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown></div
      ></el-col>
    </el-row>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      activeIndex: "1",
      search_input: ""
    };
  },
  created: function() {},
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    go_home: {},
    go_novel: {},
    go_game: {},
    go_answer: {},
  },
  
  mounted() {
    this.username = localStorage.getItem("username");
    document.body.style.backgroundColor="rgb(202, 201, 201)";
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: rgb(202, 201, 201);
  text-align: center;
  line-height: 160px;
}

.el-container {
  margin-bottom: 40px;
}

.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.grid-content {
  border-radius: 4px;
  min-height: 42px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.item {
  margin-top: 11px;
  margin-right: 12px;
}
</style>

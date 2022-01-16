<template>
  <div class="container">
    <el-row :gutter="15" style="top:10px">
      <el-col :span="4"><div class="grid-content"></div></el-col>
      <el-col :span="7"
        ><div class="grid-content">
          <el-menu
            :default-active="$route.path"
            router
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
          >
            <el-menu-item
              v-for="(item, i) in navList"
              :key="i"
              :index="item.name"
            >
              {{ item.navItem }}
            </el-menu-item>
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
          <el-badge :value="10" class="badge_item">
            <el-button size="medium">评论</el-button>
          </el-badge>
          <el-badge :value="5" class="badge_item">
            <el-button size="medium">信息</el-button>
          </el-badge>
          <el-dropdown trigger="click" style="top:8px">
            <span class="el-dropdown-link">
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
          </el-dropdown>
        </div></el-col
      >
    </el-row>
    <el-container style="margin:auto; width:92%;">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
             卡片名称
              
            </div>
            <div  class="text item">
               "列表内容"  
            </div>
            <el-button style="float: right; padding: 3px 0" type="text"
                >操作按钮</el-button
              >
          </el-card>
      <el-main>
        
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      activeIndex: "1",
      search_input: "",
      navList: [
        { name: "/home", navItem: "首页" },
        { name: "/novel/novel_home", navItem: "小说专区" },
        { name: "/game/game_home", navItem: "游戏专区" },
        { name: "/wait_answer", navItem: "等你来答" }
      ],
      
    };
  },
  created: function() {},
  methods: {
    bold(number) {
      for (var i = 0; i < this.items.length; i++) {
        this.items[i] = false;
      }
      this.items[number] = true;
    },
    // go_home(event) {
    //   this.$router.push("/home");
    // },
    // go_novel(event) {
    //   this.$router.push("/novel/novel_home.vue");
    // },
    // go_game(event) {
    //   this.$router.push("/game/game_home");
    // },
    // go_answer(event) {},
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },

  mounted() {
    this.username = localStorage.getItem("username");
    document.body.style.backgroundColor = "rgb(202, 201, 201)";
    document.body.style.margin = "0";
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.container {
  margin: 0%;
  border: 0;
  background: white;
  height: 70px;
}
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
.badge_item {
  margin-top: 11px;
  margin-right: 12px;
}
.text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>

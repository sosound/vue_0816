<template>
  <div>
    <el-container>
      <el-container>
        <!-- 侧栏 -->
        <el-aside width="200px">
          <div class="logo"></div>
          <el-scrollbar class="scrollbar">
            <el-menu background-color="#fee140" text-color="#000" active-text-color="#fff" router>
              <template v-for="item in routerItem" :key="item.path">
                <template v-if="!item.children">
                  <el-menu-item v-if="!item.meta.hidden" :index="item.path">
                    <template #title>
                      <el-icon>
                        <component :is="item.meta.icons" />
                      </el-icon>
                      <span>{{ item.meta.title }}</span>
                    </template>
                  </el-menu-item>
                </template>
                <template v-if="item.children && item.children.length === 1">
                  <el-menu-item v-if="!item.children.meta.hidden" :index="item.children[0].path">
                    <template #title>
                      <el-icon>
                        <component :is="item.meta.icons" />
                      </el-icon>
                      <span>{{ item.children[0].meta.title }}</span>
                    </template>
                  </el-menu-item>
                </template>
                <div v-for="v in item.children" :key="v.path">
                  <template v-if="item.children && item.children.length > 1 && v.children">
                    <el-sub-menu v-if="!v.meta.hidden" :index="v.path">
                      <template #title>
                        <el-icon>
                          <component :is="v.meta.icons" />
                        </el-icon>
                        <span>{{ v.meta.title }}</span>
                      </template>
                      <template v-for="h in v.children" :key="h.path">
                        <el-menu-item v-if="!h.meta.hidden" :index="h.path">
                          <template #title>
                            <el-icon>
                              <component :is="h.meta.icons" />
                            </el-icon>
                            <span>{{ h.meta.title }}</span>
                          </template>
                        </el-menu-item>
                      </template>
                    </el-sub-menu>
                  </template>
                  <el-menu-item v-if="!v.children && !v.meta.hidden" :index="v.path">
                    <template #title>
                      <el-icon>
                        <component :is="v.meta.icons" />
                      </el-icon>
                      <span>{{ v.meta.title }}</span>
                    </template>
                  </el-menu-item>
                </div>
              </template>
            </el-menu>
          </el-scrollbar>
        </el-aside>
        <!-- 内容 -->
        <el-container>
          <!-- 顶栏 -->
          <el-header>
            <div class="left-header">
              <el-menu
                default-active="1"
                mode="horizontal"
                background-color="#fee140"
                active-text-color="#fff"
                text-color="#000"
                class="menu-header"
              >
                <el-menu-item v-for="(item, i) in headerItem" :key="i" :index="item.key">{{
                  item.title
                }}</el-menu-item>
              </el-menu>
            </div>
            <div class="header-conent">
              <el-avatar
                :size="40"
                src="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg"
                style="margin-right: 5px"
              />
              <el-dropdown>
                <div>
                  设置
                  <el-icon><ArrowDown /></el-icon>
                </div>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item>退出登录</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>
          </el-header>
          <el-main>
            <el-card class="box-card">
              <router-view />
            </el-card>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import { constantRoute, headerRouter } from '../router/router'
const routerItem: any = constantRoute
const headerItem: any = headerRouter
</script>
<style lang="scss" scoped>
.el-header {
  background: #fee140;
}
.el-main {
  background: #f5f6f7;
  height: calc(100vh - 60px);
}
.el-aside {
  background: #fee140;
  .el-menu-item:hover {
    background-color: #252424 !important;
    color: #fff;
  }
  .el-menu-item.is-active {
    background-color: #252424 !important;
    color: #fff;
  }
}
.box-card {
  height: calc(100% - 3px);
}
.scrollbar {
  width: 100%;
  height: calc(100vh - 90px);
}
.logo {
  // display: flex;
  // background: url("../assets/img/img29.jpg") no-repeat;
  // background-size: cover;
  height: 3.75rem;
  // width: 100%;
}
.el-tooltip__trigger:focus-visible {
  outline: unset;
}
.el-header {
  display: flex;
  .left-header {
    flex: 9;
    .el-menu-item:hover {
      background-color: #252424 !important;
      color: #fff;
    }
    .el-menu-item.is-active {
      background-color: #252424 !important;
      color: #fff;
    }
    .menu-header {
      background: #fee140;
    }
  }
  .header-conent {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 1;
  }
}
</style>

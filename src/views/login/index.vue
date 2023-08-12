<template>
  <div class="conment">
    <el-card class="conment-login">
      <el-form :model="form" label-width="60px">
        <el-row :gutter="24">
          <el-col :span="24">
            <el-form-item label="用户名">
              <el-input v-model="form.username" placeholder="请输入用户名" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="24">
            <el-form-item label="密码">
              <el-input
                type="password"
                v-model="form.password"
                placeholder="请输入密码"
                show-password
              />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div class="from-button">
        <el-button type="primary" class="button-width">注册</el-button>
        <el-button type="primary" class="button-width" @click="login">登录</el-button>
      </div>
    </el-card>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const form = reactive({ username: 'admin', password: '123456' })
const router = useRouter()

const login = () => {
  if (form.username == 'admin' && form.password == '123456') {
    router.push({
      name: 'layout'
    })
  }
}
</script>
<style lang="scss" scoped>
.conment {
  width: 100%;
  height: 100vh;
  background-color: #fee140;
  display: flex;
  justify-content: center;
  align-items: center;
  .conment-login {
    padding: 24px 24px;
    width: 25%;
    background-color: #252424;
    border: 1px solid #252424;
    color: #fff;
    .from-button {
      display: flex;
      margin-top: 1.25rem;
      justify-content: center;
      .button-width {
        width: 100%;
      }
    }
  }
}
</style>

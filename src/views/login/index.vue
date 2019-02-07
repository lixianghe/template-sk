<style lang="less" scoped>
.login {
  width: 100%;
  height: calc(100vh);
  background-size: cover;
  background-color: #b8e5f8;
  background-image: url('../../assets/login.png');
  display: flex;
  justify-content:center;
  align-items:Center;
  .content {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 15px 20px;
    width: 420px;
    height: 350px;
    background: rgba(250, 250, 250, 0.9);
    .title {
      color: #34495e;
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 35px;
    }
    .btn {
      width: 100%;
      margin-top: 20px;
    }
    .wordTip {
      margin-top: 0;
      text-align: left;
      color: #333333d1;
      span:first-child {
        margin-right: 12px; 
      }
    }
    /deep/.el-input__inner {
      height: 45px;
      line-height: 45px;
      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px #fff inset !important;
        -webkit-text-fill-color: #283443 !important;
      }
    }
    /deep/.icon {
      width: 18px;
      height: 18px;
    }
    /deep/.el-input__prefix {
      height: 45px;
      line-height: 50px;
    }
    /deep/.el-form-item.is-error .el-input__inner {
      border: 1px solid #dcdfe6;
    }
    /deep/.el-form-item.is-success .el-input__inner {
      border: 1px solid #dcdfe6;
    }
  }
}
</style>

<template>
  <div class="login">
    <div class="content">
      <el-form autocomplete=”off” :model="loginForm" :rules="rules" ref="loginForm" class="demo-form-inline">
        <p class="title">
          用户登录
        </p>
        <el-form-item label="" prop="account">
          <el-input  type="text" v-model="loginForm.account" placeholder="请输入账号">
            <span slot="prefix"><icon :iconName="iconNameO"></icon></span>
          </el-input>
        </el-form-item>
        <el-form-item label="" prop="password">
          <el-input type="passWord" v-model="loginForm.password" placeholder="请输入密码">
            <span slot="prefix"><icon :iconName="iconNameT"></icon></span>
          </el-input>
        </el-form-item>
        <el-form-item style="margin-bottom:10px">
          <el-button class="btn" type="primary" @click="onSubmit('loginForm')">登录</el-button>
        </el-form-item>
        <el-form-item>
          <p class="wordTip"><span>账号：admin</span><span>密码：123456</span></p>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { login } from '@/service/login/loginService';
import qs from 'qs';
export default {
  data () {
    return {
      loginForm: {},
      rules: {
          account: [
            { required: true, message: '请输入账号', trigger: 'blur' },
            { min: 2, max: 12, message: '长度在 2 到 12 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 4, max: 16, message: '长度在 4 到 16 个字符', trigger: 'blur' }
          ]
        },
        iconNameO: '#icon-icon_account',
        iconNameT: '#icon-mima1'

    };
  },
  methods: {
    onSubmit (name) {
      this.$refs[name].validate(async (valid) => {
        if (valid) {
          let params = {};
          params.account = this.loginForm.account;
          params.password = this.loginForm.password;
          try {
            const res = await login(qs.stringify(params));
            if (res.result) {
              this.$router.push({ name: 'dashboard' });
              this.$message.success({ message: '登陆成功！' });
            }
          } catch (e) {

          }
        } else {
          this.$notify.warning({
            title: '提示',
            message: '填写信息有误！'
          });
        }
      });
    }
  }
};
</script>



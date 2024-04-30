<template>
  <div id="app">
    <div class="container">
      <div class="logo">
        <img src="./assets/logo.png" />
      </div>
      <div class="title">
        <h1>KlipC线下技术交流会</h1>
      </div>
      <div class="content">
        <div class="flex">
          <div class="line"></div>
          <div>
            <h2>前言</h2>
            <h2>INTRODUCTION</h2>
          </div>
        </div>
        <div class="text">
          <h3>KlipC默默耕耘外汇跟单技术和服务已经五年有余,在T4/T5跨服务器领域已经做到了行业领先水平。通过不断提升的专业功能技术和细致完善的服务积攒了良好的线上口碑。</h3>
        </div>
      </div>
      <div class="content">
        <div class="flex">
          <div class="line"></div>
          <div>
            <h2>背景：</h2>
            <h2>backdrop</h2>
          </div>
        </div>
        <h3
          class="text"
        >越来越多KlipC用户积极提倡我们走进线下,举办线下技术交流活动,我们也在2023年底和2024年初迈出了成功的一小步。KlipC用户涵盖全球市场,汇聚行业交易明星大佬,他们掌握着前沿的市场讯息、稳定的交易技术、不同环节的圈内人脉。</h3>
      </div>
      <div class="content">
        <div class="flex">
          <div class="line"></div>
          <div>
            <h2>愿景：</h2>
            <h2>INTRODUCTION</h2>
          </div>
        </div>
        <h3
          class="text"
        >KlipC可以整合社区用户资源,构建一个更加友好的线上线下互动生态。在特定地区打造线上转线下的技术交流会,给市场带来更多讯息、技术、合作的可能性。希望各位行业用户积极参与,帮助我们选择下一场活动的地址和主题分享。</h3>
      </div>
      <div class="content">
        <h2>主办单位：</h2>
        <div class="logoBox">
          <!-- <img src="./assets/logo2x.png" /> -->
        </div>
      </div>
      <div class="form">
        <h1 class="form-title">KlipC线下技术交流会报名表</h1>
        <div class="form-tips">活动全程免费，请正确填写联系方式和所在城市，便于发送 最新活动时间和地址</div>
        <el-form
          :model="form"
          status-icon
          :rules="rules"
          ref="form"
          label-width="100px"
          class="demo-form"
        >
          <el-form-item label="姓名" prop="name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="手机" prop="phone">
            <el-input v-model="form.phone"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="form.email"></el-input>
          </el-form-item>
          <el-form-item label="所在城市" prop="city">
            <el-input v-model="form.city"></el-input>
          </el-form-item>
          <el-form-item class="buttons">
            <el-button type="primary" @click="submitForm('form')">确认报名</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="code">
        <img src="./assets/code.jpg" />
      </div>
      <div class="bottom-text">KlipC 官网：https://klipc.me/</div>
    </div>

    <div class="bg"></div>
  </div>
</template>
<script>
// import getToken from "./utils/api";
import encrypt from "./utils/encrypt.js";
import axios from "axios";
export default {
  data() {
    return {
      form: {
        name: "",
        phone: "",
        email: "",
        city: ""
      },
      baseURL1: "https://dev.klipc.com.cn",
      baseURL2: "https://master.klipc.com.cn", //测试环境
      baseURL3: "https://my.klipc.com", //正式环境
      rules: {
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        phone: [{ required: true, message: "请输入电话", trigger: "blur" }],
        email: [
          {
            type: "email",
            required: true,
            message: "请输入邮箱",
            trigger: "blur"
          },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"]
          }
        ],
        city: [
          {
            required: true,
            message: "请输入所在城市",
            trigger: "blur"
          }
        ]
      },
      // app_id: "53ae894c-dee7-468a-b79a-064957d0d131",//master
      app_id:"5b090c17-c221-4912-b850-d697b2ef89c4",
      app_secret: "e803ba2aca76615ea0ebc1983732052d",
      secret_tk: ""
    };
  },
  created() {
    this.getToken();
    // console.log(process.env.NODE_ENV);
  },

  methods: {
    getToken() {
      let _this = this;
      axios
        .post(
          process.env.NODE_ENV === "development"
            ? this.baseURL3+ "/api/platform/auth"
            : process.env.NODE_ENV === "test"
            ? this.baseURL2+ "/api/platform/auth"
            : this.baseURL3 + "/api/platform/auth",
          {
            app_id: this.app_id,
            app_secret: encrypt(this.app_secret)
          }
        )
        .then(function(res) {
          _this.secret_tk = res.data.data.token;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // getTokens() {
    //   getToken({
    //     app_id: this.app_id,
    //     app_secret: encrypt(this.app_secret)
    //   })
    //     .then(res => {
    //       console.log(res);
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // },
    submitF() {
      const data = {
        name: this.form.name,
        area_code: "+86",
        phone: this.form.phone,
        email: this.form.email,
        city: this.form.city,
        location: "CN"
      };
      const response = axios.post(     process.env.NODE_ENV === "development"
            ? this.baseURL3+ "/api/platform/enroll"
            : process.env.NODE_ENV === "test"
            ? this.baseURL2+ "/api/platform/enroll"
            : this.baseURL3 + "/api/platform/enroll",  data, {
        headers: {
          Token: this.secret_tk
        }
      });
      console.log(response.data);
      this.$message({
        message: "报名成功！",
        type: "success"
      });
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.submitF();
        } else {
          return false;
        }
      });
    }
  }
};
</script>
<style>
h1,
h2,
h3,
div,
p,
body {
  margin: 0;
  padding: 0;
}
body {
  background: #000;
  color: #fff;
}
#app {
  position: relative;
}
.container {
  width: 750px;
  margin: 0 auto;
}
.logo {
  padding: 50px 0;
  text-align: left;
}
.title {
  color: #fff;
  text-align: center;
  font-size: 36px;
  margin-bottom: 200px;
}
.bg {
  width: 100%;
  height: 700px;
  background-image: url("./assets/earth.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: 0px;
  z-index: -9;
}
.content {
  margin-top: 60px;
  position: relative;
}
.flex {
  display: flex;
}
.line {
  width: 6px;
  height: 56px;
  background: #bc1b29;
  position: absolute;
  left: -16px;
  top: 5px;
}
.text {
  margin-top: 16px;
}
.logoBox {
  margin-top: 16px;
  overflow: hidden;
  background-image: url("./assets/logo2x.png");
  /* background-position: center; */
  background-repeat: no-repeat;
  /* background-size: cover; */
  width: 600px;
  height: 200px;
}
.form {
  width: 654px;
  /* height: 744px; */
  margin: 30px auto;
  margin-top: 60px;
  padding: 60px;
  box-sizing: border-box;
  --border-radius: 20px;
  --border-width: 1px;
  --border-color: conic-gradient(
    from 135deg,
    #9e0b0b,
    rgba(255, 255, 255, 0),
    #bc1b29,
    rgba(255, 255, 255, 0),
    #bc1b29
  );

  position: relative;
  border-radius: var(--border-radius);
  backdrop-filter: blur(10px);
}
.form::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding: var(--border-width);
  border-radius: var(--border-radius);
  background: var(--border-color);
  z-index: -1;
  --mask-bg: linear-gradient(red, red);
  --mask-clip: content-box, padding-box;
  -webkit-mask-image: var(--mask-bg), var(--mask-bg);
  -webkit-mask-clip: var(--mask-clip);
  mask-composite: exclude;
  -webkit-mask-composite: destination-out;
}
.form-title {
  text-align: center;
  margin-bottom: 30px;
}
.form-tips {
  margin-bottom: 30px;
  text-align: center;
  font-size: 20px;
}
.item .el-form-item__label {
  color: #ffffff;
}
/**表单内容 */
.el-form-item {
  margin-bottom: 40px !important;
}
.el-form-item__label {
  color: #fff !important;
  text-align: left !important;
  font-size: 16px !important;
}
.el-input__inner {
  height: 42px !important;
}
.el-button--primary {
  background: #bc1b29 !important;
  font-size: 20px !important;
  border-color: #bc1b29 !important;
  padding: 16px 40px !important;
}
.buttons .el-form-item__content {
}
.code {
  width: 265px;
  height: 265px;
  margin: 0 auto;
  padding: 50px 0 20px 0;
}
.bottom-text {
  font-size: 20px;
  text-align: center;
  margin-bottom: 160px;
}
@media screen and (max-width: 750px) {
  .container {
    width: 94%;
    margin: 0 auto;
  }
  .logo {
    padding: 50px 0;
    text-align: left;
  }
  .title {
    color: #fff;
    text-align: center;
    font-size: 24px;
    margin-bottom: 0px;
  }
  .bg {
    width: 100%;
    /* height: 700px; */
    background-image: url("./assets/earth.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: 0px;
    z-index: -9;
  }

  .line {
    position: absolute;
    left: -8px;
  }

  .logoBox {
    margin-top: 16px;
    width: 240px;
    overflow: hidden;
    height: 78px;
    background-image: url("./assets/logo.png");
    background-repeat: no-repeat;
  }
  .form {
    width: 100%;
    height: 600px;
    margin: 30px auto;
    margin-top: 60px;

    padding: 24px;
    padding-top: 40px;
    box-sizing: border-box;
    --border-radius: 20px;
    --border-width: 1px;
    --border-color: conic-gradient(
      from 135deg,
      #9e0b0b,
      rgba(255, 255, 255, 0),
      #bc1b29,
      rgba(255, 255, 255, 0),
      #bc1b29
    );

    position: relative;
    border-radius: var(--border-radius);
    backdrop-filter: blur(10px);
  }
  .form-title {
    text-align: center;
    margin-bottom: 30px;
    font-size: 24px;
  }
  .form-tips {
    margin-bottom: 30px;
    text-align: center;
    font-size: 16px;
  }

  /**表单内容 */
  .el-form-item {
    margin-bottom: 30px !important;
  }
  .el-form-item__label {
    color: #fff !important;
    text-align: left !important;
    font-size: 16px !important;
  }
  .el-input__inner {
    height: 42px !important;
  }
  .el-button--primary {
    background: #bc1b29 !important;
    font-size: 20px !important;
    border-color: #bc1b29 !important;
    padding: 16px 40px !important;
  }

  .code {
    width: 265px;
    height: 265px;
    margin: 0 auto;
    padding: 50px 0 20px 0;
  }
  .bottom-text {
    font-size: 20px;
    text-align: center;
    margin-bottom: 100px;
  }
}
</style>

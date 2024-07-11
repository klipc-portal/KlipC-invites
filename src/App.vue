<template>
  <div id="app">
    <div class="container">
      <div class="container1">
        <div class="flex-sb">
          <div class="logo">
            <img src="./assets/logo.png" />
          </div>
          <div class="lang">
            <!-- <img v-if="language=='zh'" @click="changeLanguage('en')" src="./assets/images/lang.png" />
            <img v-else @click="changeLanguage('zh')" src="./assets/images/lang1.png" /> -->
          </div>
        </div>
        <!-- <p>{{ $t("message.hello") }}</p> -->
        <div class="title">
          <h1 class>KlipC交流会</h1>
        </div>
        <div class="content">
          <div class="box">
            <img class="number-img1" src="./assets/images/01.png" />
            <div class="section-title">关于klipc</div>
            <img class="line-img" src="./assets/images/line.png" />
          </div>
          <div
            class="text"
          >KlipC默默耕耘API跟单技术和服务已经五年有余，在T4/T5跨服务器领域已经做到了行业领先水平。通过不断提升的专业功能技术和细致完善的服务积攒了良好的线上口碑。</div>
          <div
            class="text"
          >越来越多KlipC用户积极提倡我们走进线下，举办线下技术交流活动，我们也在2023年底和2024年初迈出了成功的一小步。KlipC用户涵盖全球市场，汇聚行业交易明星大佬，他们掌握着前沿的市场讯息、稳定的交易技术、不同环节的圈内人脉。</div>
        </div>
        <div class="content">
          <div class="box">
            <img class="number-img" src="./assets/images/02.png" />
            <div class="section-title">活动介绍</div>
            <img class="line-img" src="./assets/images/line.png" />
          </div>
          <div class="text">本次交流会将以“什么什么主题”，于2024年10月10日周六下午在成都举行，具体时间地点详见报名短信.</div>
          <div class="text flex">
            <div class="flex">
              <div>交流会地点:</div>
              <div class="bold">成都</div>
            </div>
            <div class="flex">
              <div class="flex">与会人群:</div>
              <div class="bold">交易者</div>
            </div>
          </div>
          <div class="section-title1">2024.8.20</div>
          <div class="line"></div>
          <div class="arrange flex">
            <div class="time">13:30-13:50</div>
            <img class="dots" src="./assets/images/dot.png" />
            <div class="arrange-text">活动签到</div>
          </div>

          <div class="arrange flex">
            <div class="time">13:50-14:00</div>
            <img class="dots" src="./assets/images/dot.png" />
            <div class="arrange-text">主持人介绍主办方和分享嘉宾</div>
          </div>
          <div class="arrange flex">
            <div class="time">14:00-14:30</div>
            <img class="dots" src="./assets/images/dot.png" />
            <div class="arrange-text">***主题分享</div>
          </div>
          <div class="arrange flex">
            <div class="time">14:30-15:00</div>
            <img class="dots" src="./assets/images/dot.png" />
            <div class="arrange-text">***主题分享</div>
          </div>
          <div class="arrange flex">
            <div class="time">15:00-15:30</div>
            <img class="dots" src="./assets/images/dot.png" />
            <div class="arrange-text">茶歇时间 &互动交流</div>
          </div>
          <div class="arrange flex">
            <div class="time">15:30-15:50</div>
            <img class="dots" src="./assets/images/dot.png" />
            <div class="arrange-text">***主题分享</div>
          </div>
          <div class="arrange flex">
            <div class="time">15:50-16:10</div>
            <img class="dots" src="./assets/images/dot.png" />
            <div class="arrange-text">***主题分享</div>
          </div>
          <div class="arrange flex">
            <div class="time">16:10-17:00</div>
            <img class="dots" src="./assets/images/dot.png" />
            <div class="arrange-text">圆桌会议&互动交流</div>
          </div>
        </div>
        <div class="content">
          <div class="box">
            <img class="number-img" src="./assets/images/03.png" />
            <div class="section-title">嘉宾介绍</div>
            <img class="line-img" src="./assets/images/line.png" />
          </div>
          <div class="guest">
            <div class="guest-item">
              <img class="outline-img" src="./assets/images/outline.png" />
              <img class="profile-img" src="./assets/images/profile1.png" />

              <div class="guest-name">姓名</div>
              <div class="guest-dec">这是介绍这是介绍这是介绍</div>
            </div>
            <div class="guest-item">
              <img class="outline-img" src="./assets/images/outline.png" />
              <img class="profile-img" src="./assets/images/profile1.png" />

              <div class="guest-name">姓名</div>
              <div class="guest-dec">这是介绍这是介绍这是介绍</div>
            </div>
            <div class="guest-item">
              <img class="outline-img" src="./assets/images/outline.png" />
              <img class="profile-img" src="./assets/images/profile1.png" />

              <div class="guest-name">姓名</div>
              <div class="guest-dec">这是介绍这是介绍这是介绍</div>
            </div>
            <div class="guest-item">
              <img class="outline-img" src="./assets/images/outline.png" />
              <img class="profile-img" src="./assets/images/profile1.png" />

              <div class="guest-name">姓名</div>
              <div class="guest-dec">这是介绍这是介绍这是介绍</div>
            </div>
            <div class="guest-item">
              <img class="outline-img" src="./assets/images/outline.png" />
              <img class="profile-img" src="./assets/images/profile1.png" />

              <div class="guest-name">姓名</div>
              <div class="guest-dec">这是介绍这是介绍这是介绍</div>
            </div>
            <div class="guest-item">
              <img class="outline-img" src="./assets/images/outline.png" />
              <img class="profile-img" src="./assets/images/profile1.png" />

              <div class="guest-name">姓名</div>
              <div class="guest-dec">这是介绍这是介绍这是介绍</div>
            </div>
          </div>
        </div>

        <div class="content">
          <div class="box">
            <img class="number-img" src="./assets/images/04.png" />
            <div class="section-title">愿景</div>
            <img class="line-img" src="./assets/images/line.png" />
          </div>
          <div
            class="text"
          >KlipC可以整合社区用户资源，构建一个更加友好的线上线下互动生态。在特定地区打造线上转线下的技术交流会，给市场带来更多讯息、技术、合作的可能性。期待各位行业用户积极参与，帮助我们选择下一场活动的地址和主题分享。</div>
        </div>
        <div class="content">
          <div class="box">
            <img class="number-img" src="./assets/images/05.png" />
            <div class="section-title">主办单位</div>
            <img class="line-img" src="./assets/images/line.png" />
          </div>
          <div class="logos">
            <img src="./assets/logo.png" />
          </div>
        </div>
        <div class="content">
          <div class="box">
            <img class="number-img" src="./assets/images/06.png" />
            <div class="section-title">KlipC交流会报名表</div>
            <img class="line-img" src="./assets/images/line.png" />
          </div>
          <div class="text">活动全程免费，请正确填写联系方式和所在城市，便于发送最新活动时间和地址</div>
          <div class="form">
            <el-form
              :model="form"
              status-icon
              :rules="rules"
              ref="form"
              label-width="100px"
              class="demo-form"
            >
              <el-form-item prop="name">
                <el-input v-model="form.name" placeholder="姓名"></el-input>
              </el-form-item>
              <el-form-item prop="phone">
                <el-input v-model="form.phone" placeholder="手机号"></el-input>
              </el-form-item>
              <el-form-item prop="email">
                <el-input v-model="form.email" placeholder="邮箱"></el-input>
              </el-form-item>
              <el-form-item prop="city">
                <el-input v-if="language=='en'" v-model="form.city" placeholder="所在城市"></el-input>
                <!-- 中文选择  英文输入 -->
                <el-cascader
                  v-if="language=='zh'"
                  size="large"
                  :options="options"
                  v-model="selectedOptions"
                  @change="handleChange"
                  placeholder="请选择所在城市"
                ></el-cascader>
              </el-form-item>
              <!-- <div>
                <el-checkbox v-model="checked"></el-checkbox>
                <span class="checked-text">是否报名宣讲嘉宾</span>
              </div>
              <div class="checked-text1">需要同时提交个人信息情况介绍包括不限于公司名称、工作室名称 三方媒体名称和粉丝数，交易策略名字等）</div>

              <el-form-item prop="news">
                <el-input v-model="form.news" placeholder="填写信息" :disabled="!checked"></el-input>
              </el-form-item>-->
              <el-form-item class="buttons">
                <el-button type="primary" @click="submitForm('form')">确认报名</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <div class="flex code-box">
          <div>
            <div class="code">
              <img class="code-img" src="./assets/code.jpg" />
              <div class="bottom-text">扫一扫关注公众号</div>
            </div>
          </div>
          <div>
            <div class="code">
              <img class="code-img" src="./assets/images/code2.png" />
              <div class="bottom-text">下载KlipC</div>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom-text mt-50">KlipC 官网：https://klipc.me/</div>
    </div>
  </div>
</template>
<script>
// import getToken from "./utils/api";
import encrypt from "./utils/encrypt.js";
import axios from "axios";
import { provinceAndCityData } from "element-china-area-data";

export default {
  data() {
    return {
      options: provinceAndCityData,
      selectedOptions: [],
      selectedProvince: "",
      checked: false,
      language: "zh",
      form: {
        name: "",
        phone: "",
        email: "",
        city: "",
        news: ""
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
      app_id: "5b090c17-c221-4912-b850-d697b2ef89c4",
      app_secret: "e803ba2aca76615ea0ebc1983732052d",
      secret_tk: ""
    };
  },
  created() {
    this.getToken();
  },

  methods: {
    // 切换语言
    changeLanguage(lang) {
      this.language = lang;
      this.$i18n.locale = lang;
    },
    getToken() {
      let _this = this;
      axios
        .post(
          process.env.NODE_ENV === "development"
            ? this.baseURL3 + "/api/platform/auth"
            : process.env.NODE_ENV === "test"
            ? this.baseURL2 + "/api/platform/auth"
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
    handleChange(selectValue) {
      provinceAndCityData.forEach(item => {
        if (item.value == selectValue[0]) {
          item.children.forEach(item1 => {
            if (item1.value == selectValue[1]) {
              // console.log(item.label,item1.label);
              this.form.city = item.label + item1.label;
            }
          });
        }
      });
    },
    submitF() {
      const data = {
        name: this.form.name,
        area_code: "+86",
        phone: this.form.phone,
        email: this.form.email,
        city: this.form.city,
        location: "CN"
      };
      axios
        .post(
          process.env.NODE_ENV === "development"
            ? this.baseURL3 + "/api/platform/enroll"
            : process.env.NODE_ENV === "test"
            ? this.baseURL2 + "/api/platform/enroll"
            : this.baseURL3 + "/api/platform/enroll",
          data,
          {
            headers: {
              Token: this.secret_tk
            }
          }
        )
        .then(res => {
          // console.log(res.data);
          if (res.data.status == 10200) {
            this.$message({
              message: "报名成功！",
              type: "success"
            });
          } else {
            this.$message.error(res.data.msg);
          }
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
</style>
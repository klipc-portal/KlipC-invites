<template>
  <!-- 嘉宾报名表 -->
    <div class="guest-body">
      <div class="container">
        <div class="container1">
          <div class="flex-sb">
            <div class="logo">
              <img src="@/assets/logo.png" />
            </div>
            <div class="lang">
              <!-- <img v-if="language=='zh'" @click="changeLanguage('en')" src="@/assets/images/lang.png" />
              <img v-else @click="changeLanguage('zh')" src="@/assets/images/lang1.png" />-->
            </div>
          </div>
          <div class="text1">融合前沿 共创未来</div>
          <div class="guest-img">
            <div class="guest-img1">嘉宾报名区</div>
          </div>
          <div class="title2">KlipC</div>
          <div class="guest-title">
            全球线下城市
            <span class="guest-title2">交流会</span>
          </div>
          <div class="guest-title3">“交易 科技 共赢”</div>
          <img class="guest-down" src="../assets/images/down.png" />
          <div class="tags">
            <div class="tags-flex">
              <img class="tags-img" src="../assets/images/analysis.png" />
              <span class="tags-text">分析师</span>
              <img class="tags-img" src="../assets/images/manage.png" />
              <span class="tags-text">资管公司</span>
              <img class="tags-img" src="../assets/images/people.png" />
              <span class="tags-text">交易牛人</span>
              <img class="tags-img" src="../assets/images/merchant.png" />
              <span class="tags-text">交易商</span>
            </div>
            <div class="tags-bottom">
              <img class="tags-img" src="../assets/images/address.png" />
              <span class="tags-text">成都站/西安站/杭州站/广州站/济南站/石家庄站/新疆等</span>
            </div>
          </div>

          <div class="guest-form">
            <div class="guest-form-top">
              <div>KlipC交流会嘉宾报名表</div>
              <img class src="../assets/images/left.png" />
            </div>
            <div class="guest-form-main">
              <div class="text2">活动全程免费，请正确填写联系方式和所在城市，便于发送最新活动时间和地址</div>
              <el-form
                :model="form"
                status-icon
                :rules="rules"
                ref="form"
                label-width="100px"
                class="demo-form"
              >
                <el-form-item prop="name" style="--size:2em">
                  <el-input v-model="form.name" placeholder="姓名 *"></el-input>
                </el-form-item>
                <el-form-item prop="phone" style="--size:3em">
                  <el-input v-model="form.phone" placeholder="手机号 *"></el-input>
                </el-form-item>
                <el-form-item prop="email" style="--size:2em">
                  <el-input v-model="form.email" placeholder="邮箱 *"></el-input>
                </el-form-item>
                <el-form-item prop="city" style="--size:4em">
                  <el-input v-if="language=='en'" v-model="form.city" placeholder="所在城市 *"></el-input>
                  <!-- 中文选择  英文输入 -->
                  <el-cascader
                    v-if="language=='zh'"
                    size="large"
                    :options="options"
                    v-model="selectedOptions"
                    @change="handleChange"
                    placeholder="所在城市 *"
                  ></el-cascader>
                </el-form-item>
                <el-form-item prop="news" style="--size:4em">
                  <el-input v-model="form.news" placeholder="个人信息 *"></el-input>
                </el-form-item>
                <div class="text2">个人信息情况介绍包括但不限于公司名称、工作室名称、三方媒体名称和粉丝数或者交易策略名字等</div>

                <el-form-item class="guest-buttons">
                  <el-button type="primary" @click="submitForm('form')">确认报名</el-button>
                </el-form-item>
                <div class="text2">具体交流会选择城市和时间将由社区客服一对一告知邀请，我们诚挚的邀请每一位热衷于交易的您~</div>
              </el-form>
            </div>
          </div>
          <div class="guest-form">
            <div class="guest-form-top">
              <div>关于KlipC</div>
              <img class src="../assets/images/left.png" />
            </div>
            <div class="guest-form-main">
              <div class="text2">
                KlipC 成立于2019年，总部位于美国
                <span class="color-bc">西雅图</span>，全球超过
                <span class="color-bc">100,000用户</span>选择，在T4/T5的API跨服务器领域处于
                <span class="color-bc">行业领先地位</span>。我们即将在各个城市举办线下的技术交流会，向全球市场的
                <span class="color-bc">明星信号、资管团队、交易红人</span>发出橄榄枝，期待您的积极参与，促进行业发展，为市场带来更多讯息、技术和合作的机会！
              </div>
            </div>
          </div>

          <div class="flex code-box">
            <div>
              <div class="code">
                <img class="code-img" src="@/assets/code.jpg" />
                <div class="bottom-text">
                  关注KlipC公众号
                  <br />了解更多资讯
                </div>
              </div>
            </div>
            <div>
              <div class="code">
                <img class="code-img" src="@/assets/images/code2.png" />
                <div class="bottom-text">
                  安卓-扫码下载APP
                  <br />苹果-APP Store即可下载
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom-text mt-80">www.klipc.me</div>
        <img class="bgimg1" src="../assets/images/bg1.png" />
      </div>
    </div>
</template>
<script>
import encrypt from "@/utils/encrypt.js";
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
        ],
        news: [
          {
            required: true,
            message: "请输入个人信息",
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
        activity_name: "成都第一次klipc交流会",
        activity_city: "成都",
        name: this.form.name,
        area_code: "+86",
        phone: this.form.phone,
        email: this.form.email,
        city: this.form.city,
        location: "中国",
        request_guest: true,
        guest_info: this.form.news
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
      console.log(123);
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
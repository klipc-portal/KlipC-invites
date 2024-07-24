<template>
  <!-- 观众报名表 -->
  <div>
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
        <div class="title">KlipC</div>
        <div class="title2">全球线下城市交流会</div>
        <div class="title3">“融合前沿，共创未来”</div>
        <div class="content">
          <div class="box">
            <img class="number-img1" src="@/assets/images/01.png" />
            <div class="section-title">关于KLIPC</div>
            <img class="line-img" src="@/assets/images/line.png" />
          </div>
          <div class="text">
            KlipC 成立于2019年，总部位于美国
            <span class="color-bc">西雅图</span>，技术开发是由
            <span class="color-bc">15年+</span> 行业金融技术经验的瑞典团队负责，管理团队都是已经积累了
            <span class="color-bc">15年+</span> 行业领域的成员组成。全球超过
            <span class="color-bc">100,000用户</span>选择KlipC，其在T4/T5的API跨服务器领域处于
            <span class="color-bc">行业领先地位</span>。通过不断
            <span class="color-bc">提升技术专业性、优化交易功能、改善用户体验和保障线上一对一用户服务</span>，我们在线上积累了非常好的
            <span class="color-bc">口碑</span>。KlipC致力于整合行业用户资源，打造更加友好的线上线下互动生态。
          </div>
          <div class="text">
            <span class="color-bc">Now</span> 我们计划在各个城市举办线下技术交流会，向全球
            <span class="color-bc">交易员、投资者、信号、跟单者、技术团队和交易商等所有行业人士发出诚挚的邀请！</span>期待您的积极参与，促进行业发展，为市场带来更多讯息、技术和合作的机会！
          </div>
        </div>
        <div class="form form1">
          <div class="form-title">KlipC交流会观众报名表</div>

          <div class="form-text">具体时间和地址将以短信方式发送给大家，我们欢迎所有城市的用户都报名，下一场可能就来到您的城市哦</div>

          <el-form
            :model="form"
            status-icon
            :rules="rules"
            ref="form"
            label-width="100px"
            class="demo-form"
          >
            <el-form-item prop="name" style="--size:2em">
              <el-input v-model="form.name" placeholder="姓名*"></el-input>
            </el-form-item>
            <el-form-item prop="phone" style="--size:3em" class="codeShows">
              <el-input v-model="form.phone" maxlength="11" placeholder="手机号 *"></el-input>
              <div v-if="codeShow" class="codeShowss">
                <div class="codeShowtips">
                  <img class="nocodeimg" src="../assets/images/code.png" />
                  {{codetips}}
                </div>
              </div>
            </el-form-item>
            <el-form-item class="code_line" prop="code" style="--size:3em">
              <el-input v-model="form.code" placeholder="验证码 *"></el-input>
              <el-button
                @click="getVerificationCode"
                :disabled="countdown > 0"
              >{{ countdown > 0 ? `${countdown}s` : '获取验证码' }}</el-button>
            </el-form-item>
            <el-form-item prop="city" style="--size:4em">
              <el-input v-if="language=='en'" v-model="form.city" placeholder="所在城市"></el-input>
              <el-cascader
                v-if="language=='zh'"
                size="large"
                :options="options"
                v-model="selectedOptions"
                @change="handleChange"
                placeholder="所在城市 *"
              ></el-cascader>
            </el-form-item>

            <el-form-item class="buttons">
              <el-button type="primary" @click="submitForm('form')">确认报名</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div class="content">
          <div class="box">
            <img class="number-img" src="@/assets/images/02.png" />
            <div class="section-title">主办方</div>
            <img class="line-img" src="@/assets/images/line.png" />
          </div>
          <div class="logos">
            <img src="@/assets/logo.png" />
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
      <div class="bottom-text mt-50">https://klipc.me/</div>
      <div>
        <img class="bgimg" src="../assets/images/bg.png" />
      </div>

      <SuccessDialog
        v-if="application"
        :parentPhone="form.phone"
        :parentType="parenttype"
        :parentMsg="msg"
      ></SuccessDialog>
    </div>
  </div>
</template>
<script>
import encrypt from "@/utils/encrypt.js";
import axios from "axios";
import { provinceAndCityData } from "element-china-area-data";
import SuccessDialog from "../components/SuccessDialog.vue";

export default {
  data() {
    return {
      options: provinceAndCityData,
      selectedOptions: [],
      selectedProvince: "",
      checked: false,
      language: "zh",
      isButtonDisabled: true,
      countdown: 0, // 倒计时的秒数
      intervalId: null, // 存储定时器ID
      codetips: "", //手机验证提示窗内容
      codeShow: false,
      application: false,
      msg: "您已经报过名了，请勿重复提交",
      parenttype: 0, //成功传1  失败2
      form: {
        name: "",
        phone: "",
        code: "",
        city: "",
        news: "观众报名表"
      },
      baseURL1: "https://dev.klipc.com.cn",
      baseURL2: "https://master.klipc.com.cn", //测试环境
      baseURL3: "https://my.klipc.com", //正式环境
      rules: {
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        phone: [{ required: true, message: "请输入电话", trigger: "blur" }],
        code: [{ required: true, message: "请输入验证码", trigger: "blur" }],
        city: [
          {
            required: true,
            message: "请输入所在城市",
            trigger: "blur"
          }
        ]
      },
      // app_id: "53ae894c-dee7-468a-b79a-064957d0d131",//master
      // app_id: "bf859622-d312-471f-a6e2-5a3b21094168", //dev
      // app_secret: "e803ba2aca76615ea0ebc1983732052d", //dev
      app_id: "5b090c17-c221-4912-b850-d697b2ef89c4", //产品
      app_secret: "e803ba2aca76615ea0ebc1983732052d", //产品
      secret_tk: ""
    };
  },
  created() {
    this.getToken();
  },
  components: {
    SuccessDialog
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
              this.form.city = item.label + item1.label;
            }
          });
        }
      });
    },
    // 观众报名表
    submitF() {
      const data = {
        activity_name: "成都第一次klipc交流会",
        activity_city: "成都",
        name: this.form.name,
        area_code: "0086",
        phone: this.form.phone,
        verification_code: this.form.code,
        city: this.form.city,
        location: "中国",
        request_guest: false,
        // guest_info: this.form.news
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
            this.application = true;
            this.parenttype = 0;
            setTimeout(() => {
              this.application = false;
            }, 10000);
          } else if(res.data.status == 10400){
           
                this.msg = res.data.msg;
            this.application = true;
            this.parenttype = 1;
            setTimeout(() => {
              this.application = false;
            }, 3000);
          }else {
            this.codeShow = true;
                this.codetips = res.data.msg;
                setTimeout(() => {
                  this.codeShow = false;
                }, 2000);
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
    },
    // 获取验证码
    getVerificationCode() {
      this.$refs["form"].validateField("phone", error => {
        if (!error) {
          const data = {
            mobile: this.form.phone,
            area_code: "0086",
            code_type: "enroll_klipc"
          };
          axios
            .post(
              process.env.NODE_ENV === "development"
                ? this.baseURL3 + "/api/platform/enroll/send_code"
                : process.env.NODE_ENV === "test"
                ? this.baseURL2 + "/api/platform/enroll/send_code"
                : this.baseURL3 + "/api/platform/enroll/send_code",
              data,
              {
                headers: {
                  Token: this.secret_tk
                }
              }
            )
            .then(res => {
              console.log(res);

              if (res.data.status == 10200) {
                this.countdown = 59; // 假设倒计时60秒
                this.intervalId = setInterval(() => {
                  if (this.countdown > 0) {
                    this.countdown -= 1;
                  } else {
                    clearInterval(this.intervalId);
                  }
                }, 1000);
              } else {
                this.codeShow = true;
                this.codetips = res.data.msg;
                setTimeout(() => {
                  this.codeShow = false;
                }, 2000);
              }
            });
        }
      });
    }
  }
};
</script>
<style>
</style>
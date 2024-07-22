<template>
  <div class="success">
    <div class="dialogs" v-if="parentType=='0'">
      <div class="diatop">
        <img src="../assets/images/success1.png" />
      </div>
      <div class="diatips1">报名成功！</div>
      <div class="diatips2">您登记的手机号码是{{parentPhone}}</div>
      <div class="diatips3">
        活动举办
        <span class="color-bc">前3天将以短信通知</span>，短信经常被拦截，建议添加上KlipC客服微信，可一对一交流并有交流群可加。
      </div>
    </div>
    <div class="dialogsw" v-if="parentType=='1'">
      <div class="diatop">
        <img src="../assets/images/warn.png" />
      </div>
      <div class="diatips1">{{parentMsg}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SuccessDialog",
  props: {
    parentPhone: String,
    parentType: String,
    parentMsg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.success {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(5, 6, 6, 0.5);
}
.dialogs {
  width: 580px;
  height: 500px;
  border-radius: 12px;
  background-color: transparent;
  background-image: url(../assets/images/success.png);
  background-size: cover;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  padding: 40px;
}
.dialogsw {
  width: 660px;
  height: 350px;
  border-radius: 12px;
  background-color: transparent;
  background-image: url(../assets/images/success.png);
  background-size: cover;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  padding: 40px;
}
.diatop {
  width: 160px;
  height: 160px;
  margin: 0 auto;
}
.diatop img {
  width: 160px;
  height: 160px;
}
.diatips1 {
  font-weight: 700;
  font-size: 40px;
  color: #111111;
  line-height: 40px;
  text-align: center;
  font-style: normal;
  text-transform: none;
  margin-left: 16px;
  margin-top: 24px;
}
.diatips2 {
  margin-top: 40px;
  width: 320px;
  text-align: center;
  padding: 8px 20px;
  border-radius: 30px;
  background: #ffb9bf;
  color: #bc1b29;
  font-size: 20px;
  margin: 40px auto;
}
.diatips3 {
  font-size: 20px;
  color: #9c9c9c;
}

@media screen and (max-width: 750px) {
  .dialogs {
    width: 90%;
    height: 300px;
    padding: 20px;
  }
  .dialogsw {
  width: 90%;
  height: 200px;
  border-radius: 12px;
  padding: 20px;
}
  .diatop {
    width: 80px;
    height: 80px;
    margin: 0 auto;
  }
  .diatop img {
    width: 80px;
    height: 80px;
  }
  .diatips1 {
    font-weight: 700;
    font-size: 20px;
    color: #111111;
    line-height: 20px;
    text-align: center;
    font-style: normal;
    text-transform: none;
    margin-left: 12px;
    margin-top: 12px;
  }
  .diatips2 {
    margin-top: 20px;
    width: 160px;
    text-align: center;
    padding: 4px 12px;
    border-radius: 30px;
    background: #ffb9bf;
    color: #bc1b29;
    font-size: 14px;
    margin: 20px auto;
  }
  .diatips3 {
    font-size: 14px;
    color: #9c9c9c;
  }
}
</style>

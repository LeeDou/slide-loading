
<template>
  <div class="wrapper">
    <form class="login" v-on:submit.prevent="submit">
      <h1>login</h1>
      <div class="line">  
               
        <div v-show="btn && !form.id">id不能为空</div>
        <p>
          <label for="id">your userid</label><br>
          <input type="number" name="id" placeholder="输入你的id" v-model="form.id">
        </p>
      </div>
      <div class="line">
        <div v-show="btn && !form.name">用户名不能为空</div>
        <p>
          <label for="username">your username</label><br>
          <input type="text" name="username" placeholder="输入你的用户名" v-model="form.name">
        </p>
      </div>
      <button class="button">login</button>
    </form>
  </div>
</template>
<script>
    import { mapActions } from 'vuex'
    import { USER_SIGNIN } from '@/store/user'
    export default {
        data() {
      return {
        btn: false, //true 已经提交过， false没有提交过
        form: {
          id: '',
          name: ''
        }
      }
    },
    methods: {
            ...mapActions([USER_SIGNIN]),
        submit() {
        this.btn = true
        if(!this.form.id || !this.form.name) return
        this.USER_SIGNIN(this.form)
        this.$router.replace({ path: '/index' })
      }
    }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper{
  width:60%;
  min-height:540px;
  width:500px;
  margin:10px auto;
  position:relative;
  border-radius:4px;
  border:1px solid #30B1C8;
  background: rgb(247, 247, 247);
  border: 1px solid rgba(147, 184, 189,0.8);
  -webkit-box-shadow: 0pt 2px 5px rgba(105, 108, 109,  0.7),  0px 0px 8px 5px rgba(208, 223, 226, 0.4) inset;
     -moz-box-shadow: 0pt 2px 5px rgba(105, 108, 109,  0.7),  0px 0px 8px 5px rgba(208, 223, 226, 0.4) inset;
          box-shadow: 0pt 2px 5px rgba(105, 108, 109,  0.7),  0px 0px 8px 5px rgba(208, 223, 226, 0.4) inset;
  -webkit-box-shadow: 5px;
  -moz-border-radius: 5px;
     border-radius: 5px;
  font-family:Arial,sans-serif;  
}
.wrapper h1{
  
  font-size: 48px;
  color: rgb(6, 106, 117);
  padding: 2px 0 10px 0;
  font-family: 'FranchiseRegular','Arial Narrow',Arial,sans-serif;
  font-weight: bold;
  text-align: center;
  padding-bottom: 30px;
}
.line{
  width:80%;
  margin:10px auto;
}
.line input{
  padding:10px 5px 10px 5px;
  width:94%;
}
.wrapper .button{
  left:72%;
  top:60%;
  width:80px;
  height:36px;
  padding:5px 8px 5px 8px;
  position:absolute;
  color: #fff;
  background: rgb(61, 157, 179);
  cursor: pointer;
  border-radius:3px;
  font-size:18px;
}
.wrapper .button input:hover{
  background: rgb(74, 179, 198);
}
</style>
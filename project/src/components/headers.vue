<template >
<div class="navbar">                 
  <h1 class="labTitle">网站首页</h1>
  <p class="user">
    <span>欢迎你{{user.name}}</span>
    <span class="signout"><v-link href="/login">退出</v-link></span>
  </p>    
</div>
</template>

<script>
import VLink from '@/components/VLink'
import { mapState } from 'vuex'
export default {
	components:{VLink},
	computed: mapState({ user: state => state.user }),
}
</script>

<style>
  .navbar {
    width:80%;    
    height: 50px;
    margin:0 auto;
    position: relative;
    color:#fff;
    background-color:#30B1C8;
  }
  .labTitle{
    width:160px;
    height:50px;
    line-height:50px;
    left:5%;
    top:0;
    font-size:20px;
    position:absolute;
  }
  .user{
    width:200px;
    height:50px;
    line-height:50px;
    position:absolute;
    right:5%;
    top:0px;
  }
  .user span{
      padding:0 5px;
  }
</style>
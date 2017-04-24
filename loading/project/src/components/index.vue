<template>
  <div class="container">
    <headers></headers>
    <div class="newslist" v-scroll="loadMore">
      <ul class="news">
        <li class ="news_item" v-for="(news,index) in newslist">
          <h1>{{news.title}}</h1>
          <p>发布者：{{news.name}}</p>
          <p>{{news.text}}</p>
        </li>
      </ul>  
    </div>
  </div>
</template>
<script>
    import { mapState } from 'vuex'
    import headers from '@/components/headers'
    export default {
      data() {
        return {
          newslist:[
            {
              "name":"kantle",
              "title":"标题",
              "text":"这是一条新闻，还请认真阅读。到此完毕！"
            },
            {
              "name":"kantle",
              "title":"标题",
              "text":"这是一条新闻，还请认真阅读。到此完毕！"
            },          
            {
              "name":"kantle",
              "title":"标题",
              "text":"这是一条新闻，还请认真阅读。到此完毕！"
            },          
            {
              "name":"kantle",
              "title":"标题",
              "text":"这是一条新闻，还请认真阅读。到此完毕！"
            },          
            {
              "name":"kantle",
              "title":"标题",
              "text":"这是一条新闻，还请认真阅读。到此完毕！"
            },
            {
              "name":"kantle",
              "title":"标题",
              "text":"这是一条新闻，还请认真阅读。到此完毕！"
            },
            {
              "name":"kantle",
              "title":"标题",
              "text":"这是一条新闻，还请认真阅读。到此完毕！"
            },
            {
              "name":"kantle",
              "title":"标题",
              "text":"这是一条新闻，还请认真阅读。到此完毕！"
            }                        
          ]
        }  
        
      },
      components:{
        headers
      },
      directives: {
        scroll: {
          bind: function (el, binding){
            window.addEventListener('scroll', ()=> { 
              if(document.body.scrollTop + window.innerHeight >= el.clientHeight) {   
                let fnc = binding.value;   
                fnc(); 
              }
            })
          } 
        }  
      },
      methods: {
        loadMore() {
          let newArray = [];
          newArray.push({
            "name":"kantle",
            "title":"标题",
            "text":"这是一条新闻，还请认真阅读。到此完毕！"
            
          });                     
          this.newslist = [...this.newslist, ...newArray];
        }
      },
      computed: mapState({ user: state => state.user }),       
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  font-family:"黑体";
}
.container{
  margin:0px;
  padding:0px;
}
h1, h2 {
  font-weight: normal;
}

.newslist{
  width:80%;
  min-height:560px;
  margin:20px auto;

}
.newslist ul{
  list-style:none;
}
.news_item {
    padding:8px;
    border: 1px solid #30B1C8;
    margin-bottom:20px;
}
.news h1{
  font-size:22px;
}
</style>
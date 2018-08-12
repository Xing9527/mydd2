<template>
  <div class="dia">
      <div class="content1">
          <img src="../.././static/images/07.png" alt="">
          <div class="serve">
              <h2>服务内容</h2>
              <div class="container">   
                    <div class="item" style="background:#e8b215;">
                      <div class="item2">
                          <span class="text">
                              市场营销<br>学院
                          </span>
                      </div>
                  </div>
                    <i>+</i>
                    <div class="item" style="background:#e96062;">
                        <div class="item2">
                            <span class="text">
                                工程项目<br>管理学院
                            </span>
                        </div>
                    </div>                 
              </div>
              <p>提供以上两个学院的技术支持、咨询服务、课件学习等内容。</p>
          </div>
      </div>
      <div class="content2">
          <h2>创业者享受的回报收益</h2>
          <div class="box">
              <div class="box1">
                  <span class="top">运营项目的业绩</span><br>
              </div>
              <div class="box1">
                  <span class="top">三年内：流水*99.5%</span><br>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  name:'silver'
}
</script>
<style scoped>
    .content1{
        padding-top:5px;
        background-color: #fff;
    }
    img{
        display: block;
        width: 100%;
    }
    .serve{
        padding-bottom:10px;
    }
    h2{
        margin: 10px 0;
        font-size:20px;
        color: #000;
        font-weight: 500;
        text-align: center;
    }
    .container{
        display: flex;
        justify-content: space-around;
        margin: 15px auto;
        width: 50%;
    }
    .item{
        padding: 4px;
        box-sizing: border-box;
        width: 65px;
        height:65px;
        background-color:#08acb0;
        text-align: center;
        border-radius: 50%;
    }
    .item2{
        padding-top: 15px;
        width: 57px;
        height: 57px;
        border: 1px dashed #fff;
        border-radius: 50%;
        box-sizing: border-box;
    }
    .text{
        color: #fff;
    }
    i{
        font-size:45px;
        line-height: 65px;
    }
    p{
        text-align: center;
        margin-bottom:15px;
    }
    .box{
        display: flex;
        justify-content: space-around;
        padding: 10px 20px;
        margin: 12px 0 30px 0;
    }
    .box1{
        width: 130px;
        height: 110px;
        border: 1px dashed #006bb6;
        text-align: center;
    }
    .top{
        display: inline-block;
        line-height: 110px;
        color:#006ab7;
    }
</style>
<style>

</style>


<template>
  <div class="dia">
      <div class="content1">
          <img src="../.././static/images/05.png" alt="">
          <div class="serve">
              <h2>服务内容</h2>
              <div class="container">
                  <div class="item" >
                      <div class="item2">
                          <span class="text">
                              工程行业<br>学院
                          </span>
                      </div>
                  </div>
                    <i>+</i>   
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
                                运营管理<br>学院
                            </span>
                        </div>
                    </div>                 
              </div>
              <div class="container">
                  <div class="item" style="background:#00a1fe;">
                      <div class="item2">
                          <span class="text">
                              渠道建设<br>学院
                          </span>
                      </div>
                  </div>
                    <i>+</i>   
                    <div class="item" style="background:#fe01e3;">
                      <div class="item2">
                          <span class="text">
                              招商路演<br>学院
                          </span>
                      </div>
                  </div>
                    <i>+</i>
                    <div class="item" style="background:#ff0301;">
                        <div class="item2">
                            <span class="text">
                                会议营销<br>学院
                            </span>
                        </div>
                    </div>                 
              </div>
              <p>提供以上六个学院的技术支持、咨询服务、课件学习等内容。</p>
          </div>
      </div>
      <div class="content2">
          <h2>创业者享受的回报收益</h2>
          <div class="box">
              <div class="box1">
                  <span class="top">短期收益</span><br>
                  <span class="bot">30万*N（人）<br>*50%=150万</span>
                  <span class="icon">1</span>
              </div>
              <div class="box1">
                  <span class="top">中长期收益</span><br>
                  <span class="bot">股权</span>
                  <span class="icon">2</span>
              </div>
              <div class="box1">
                  <span class="top">3年内所承包工程<br>不用上缴利润</span>
                  <span class="icon">3</span>
              </div>
          </div>
      </div>
      <ul>
          <li>X：渠道可享有的股份额度；</li>
          <li>Y：渠道个人业绩流水总额累计；</li>
          <li>Z：历年渠道全部各方业绩流水总额累计；</li>
          <li>B：鸿鑫互联集团所拥有的上市或重组公司总股本数；</li>
          <li>20%：鸿鑫互联集团上市总股本数的20%；</li>
      </ul>
      <div class="condition">
          <h2>获得收益条件</h2>
          <ul>
            <li>① N ≥ 10人；</li>
            <li>② 业绩流水 ≥ 1.2亿</li>
            <li>当满足以上2个条件时，钻石创业者才能取得期权。</li>
            <li><b>注：</b>上面的Y、Z为财务数据，由财务部门按期提供，录入即可。</li>
          </ul>
      </div>
  </div>
</template>
<script>
export default {
  name:'diamond'
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
        margin: 10px auto;
        width: 80%;
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
        font-size:12px;
        color: #fff;
    }
    i{
        font-size:45px;
        line-height: 65px;
    }
    p{
        text-align: center;
    }
    .box{
        display: flex;
        justify-content: space-around;
        padding: 0 10px;
        margin: 12px 0 10px 0;
    }
    .box1{
        position: relative;
        width: 100px;
        height: 90px;
        border: 1px dashed #006bb6;
        text-align: center;
    }
    .top{
        display: inline-block;
        margin:20px 0 5px 0;
        color:#006ab7;
    }
    .icon{
        display: block;
        position: absolute;
        top:-8px;
        left:-7px;
        width: 15px;
        height: 15px;
        font-size: 14px;
        color:#fff;
        background-color:#fe5b1f;
        border-radius: 50%;
    }
    ul{
        margin-left: 25px; 
        color:#343334;
        line-height: 2em;    
    }
    .condition{
        padding-top:5px;
        background: #fff;        
    }
    .condition ul{
        line-height: 1.5em;
        margin-bottom:35px;
        color:#343437;
    }
    b{
        font-size: 14px;
        font-weight: 700;
    }
</style>
<style>

</style>


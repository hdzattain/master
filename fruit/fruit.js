
//注册一个界面
// pages/fruit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fruitslist:[
      {name:"苹果",number:3,price:1,buynbr:0,reducedis:false,adddis:false},
      {name:"橘子",number:2,price:1.5,buynbr:0,reducedis:false,adddis:false},
    ],
    sum:0
  },

    handlePushBtn: function (event) {
      var dataset = event.currentTarget.dataset;
      var sum = dataset.total;
      wx.navigateTo({
        url: '/master/fruit/fruit',
        events: {
          // 获取传送数据
          acceptDataFromOpenedPage: function(data) {
          }
        },
        success: function(res) {
          // 传送数据
          res.eventChannel.emit('acceptDataFromOpenerPage', sum)
        }
      })
  },

  decrease:function(e){ 
    var dataset = e.currentTarget.dataset;
    var buynum = dataset.buynum;
    var index = dataset.index; 
    let fruitslist = this.data.fruitslist;    
    let num = fruitslist[index].buynbr; 
    if(num == 0){      
      wx.showToast({title: '没有了',icon:'none'})      
      return ;   
    }     
    num = num - 1; 
    fruitslist[index].buynbr = num; 
    fruitslist[index].number = fruitslist[index].number + 1; 
    this.setData({fruitslist:fruitslist}); 
    this.count_price();
  },  
      
  increase:function(e){    
    var dataset = e.currentTarget.dataset;
    var buynum = dataset.buynum; 
    var index = dataset.index;  
    let fruitslist = this.data.fruitslist;    
    let num = fruitslist[index].buynbr;   
    if(fruitslist[index].number == 0){      
      wx.showToast({title: '到达上限',icon:'none'})      
      return ;   
    } 
    num = num + 1;    
    fruitslist[index].buynbr = num; 
    fruitslist[index].number = fruitslist[index].number - 1;  
    this.setData({fruitslist:fruitslist});   
    this.count_price(); 
  },

  count_price() { 
    let fruitslist = this.data.fruitslist; 
    let total = 0;      
    for (let i = 0; i < fruitslist.length; i++) {         
        total += fruitslist[i].buynbr * fruitslist[i].price;        
    }    
    this.setData({sum:total}); 
 },

 /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(option){
  } 
})

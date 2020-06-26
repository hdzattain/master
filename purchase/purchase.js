// pages/Purchase/Purchase.js
  Page({
    data:{
      fruitprice:0,
    },
    onLoad: function(option){
      // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
      let eventChannel = this.getOpenerEventChannel();
      eventChannel.on('acceptDataFromOpenerPage', function(pricedata) {
        const pages = getCurrentPages()
        const Purchase = pages[pages.length - 1]
        Purchase.setData({
          fruitprice:pricedata,
        })
      })
    },

  })

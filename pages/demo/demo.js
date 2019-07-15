// pages/demo.js
Page({

  /**
   * Page initial data
   */
  data: {
    text: "pages/demo/demo.wxml?from=data"
  },
  
  to: function() {
    // console.log('hehehe');
    this.calc();
    wx.showLoading({
      title: 'Loading',
    });
    
    setTimeout(function () {
      wx.hideLoading()
    }, 2000);
    
  },

  calc: function() {
    console.log('heheheha');
  }
})
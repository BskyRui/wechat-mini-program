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
      wx.hideLoading();
      // to
      wx.navigateTo({
        url: '/pages/home/home',
      });
    }, 500);

    console.log('auth start');
    this.userAuthorized();
    console.log('auth end');
    
  },

  calc: function() {
    console.log('heheheha');
    // user auth info
    wx.getSetting({
      success: function(data) {
        console.log(data);
        // undefined or true
        console.log(data.authSetting['scope.userInfo']);
      }
    })
  },

  getUserInfo: function(e){
    console.log(e)
  },

  userAuthorized: function() {
    // const res = await wx.getSetting();
    // console.log(res);
  }
})
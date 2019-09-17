// pages/demo.js
Page({

  /**
   * Page initial data
   */
  data: {
    text: 'pages/demo/demo.wxml?from=data',
    loading: true,
    arr: [{ name: 'check1', active: false }, { name: 'check2', active: false }, { name: 'check3', active: false }],
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

  onLoad: function() {
    setTimeout(() => {
      this.setData({
        loading: false,
      })
    }, 3000);
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
  },

  select: function(e) {
    const d = this.data.arr;
    const idx = e.target.dataset.idx;
    d.forEach((item, index) => {
      if (index == idx) {
        item.active = !item.active;
        d[idx] = item;
        this.setData({
          arr: d
        });
      }
    });
  }
})
// pages/home.js
Page({

  /**
   * Page initial data
   */
  data: {
    name: 0
  },

  properties: {
    name: {
      type: Number,
    }
  },

  add: function() {
    let n = this.properties.name;
    this.setData({
      name: n + 1
    });
  }
})
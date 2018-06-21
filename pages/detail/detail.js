// pages/detail/detail.js
const util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    startDate: util.startDate,
    date: util.startDate,
    endDate: util.endDate,
    time: util.startTime,
    weekDay: util.weekDay(util.startDate)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value,
      weekDay: util.weekDay(e.detail.value)
    })
  },
  bindTimeChange: function (e) {
    this.setData({
      time: e.detail.value
    })
  },
  formReset: function (e) {
    this.setData({
      date: util.startDate,
      time: util.startTime
    })
  },
  formSubmit: function (e) {
    var date = e.detail.value.date + " " + e.detail.value.time
    var nowTimeStamp = new Date().getTime()
    var submitTimeStamp = new Date(date).getTime()
    if (submitTimeStamp < nowTimeStamp) {
      wx.showToast({
        title: "时间设置不对",
        icon: "none",
        duration: 2000
      })
      return false
    }
    wx.showToast({
      title: "成功",
      icon: "success",
      duration: 2000,
      success: function (e) {
        setTimeout(function () { wx.navigateBack()}, 1000)
      }
    })
    console.log(e)

  }
})
/**
 * Created by Feddiyao on 2017/7/4.
 */
$(document).ready(function () {
  $(function() {
    FastClick.attach(document.body);
  });

  wx.config({
    appId: 'wx3d217570b080c004',
    timestamp: sign.timestamp,
    nonceStr: sign.nonceStr,
    signature: sign.signature,
    jsApiList: [
      // 所有要调用的 API 都要加到这个列表中
      'onMenuShareTimeline',
      'onMenuShareAppMessage',
      'onMenuShareQQ'
    ]
  });


  var shareTitle = '衡道医学销售工具箱';
  var shareDesc = '衡道医学分子病理项目目录';
  var shareLink = 'https://www.histomed.com/toolkit/gene/test_item.html';
  var imageUrl = 'https://www.histomed.com/env.jpg';

  // 所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数>中。
  wx.ready(function(){

    // 分享到朋友圈
    wx.onMenuShareTimeline({
      title: shareTitle, // 分享标题
      link: shareLink, // 分享链接
      imgUrl: imageUrl, // 分享图标
      success: function () {
        // 用户确认分享后执行的回调函数
      },
      cancel: function () {
        // 用户取消分享后执行的回调函数
      }
    });

    // 分享给朋友
    wx.onMenuShareAppMessage({
      title: shareTitle, // 分享标题
      desc: shareDesc, // 分享描述
      link: shareLink, // 分享链接
      imgUrl: imageUrl, // 分享图标
      type: 'link', // 分享类型,music、video或link，不填默认为link
      dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
      success: function () {
        // 用户确认分享后执行的回调函数
      },
      cancel: function () {
        // 用户取消分享后执行的回调函数
      }
    });

    wx.onMenuShareQQ({
      title: shareTitle, // 分享标题
      desc: shareDesc, // 分享描述
      link: shareLink, // 分享链接
      imgUrl: imageUrl, // 分享图标
      success: function () {
        // 用户确认分享后执行的回调函数
      },
      cancel: function () {
        // 用户取消分享后执行的回调函数
      }
    });
  });
})
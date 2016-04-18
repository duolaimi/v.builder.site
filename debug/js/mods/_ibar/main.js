// Generated by CoffeeScript 1.9.1
define('mods/_ibar/main',['vmcore','mods/_ibar/tplinit','_data/ibar'],function(vmcore, ibarTpl, getData) {
  var _timer, timer;
  new ibarTpl();
  timer = null;
  _timer = null;

  /*全局的ibar购物车模型 */
  _VM_.ibar = vmcore.define({
    $id: "global_ibar",
    userInfo: {},
    cartInfo: {},
    myAsset: {},
    myFavorite: {},
    myHistory: {},
    tpl_login: "",
    tpl_panel: "",
    tpl_tips: "",
    isLogin: false,
    iscurrent: false,
    render: function() {
      console.log(this);
      return this.innerHTML;
    },
    openLogin: function() {
      var _top;
      if (timer) {
        clearTimeout(timer);
      }
      _top = $('.mpbtn_login').offsetTop;
      _VM_.ibar.tpl_login = 'tpl_ibar_login';
      $('.ibar_login_box').css({
        top: _top,
        visibility: 'visible'
      }).fadeIn();
      return $('.ibar_sub_panel').fadeOut().css({
        left: 0,
        visibility: 'hidden'
      });
    },
    hideLogin: function() {},
    openPanel: function(type) {
      var _this, _type;
      _this = $(this);
      _this.next('div').stop().animate({
        opacity: 0
      }, 'fast').css({
        left: -92,
        visibility: 'hidden'
      });
      if (timer) {
        clearTimeout(timer);
      }
      _type = type || 1;
      switch (_type) {
        case 1:
          _VM_.ibar.tpl_panel = 'tpl_ibar_cart';
          break;
        case 2:
          _VM_.ibar.tpl_panel = 'tpl_ibar_favorite';
          getData.favorite(function(data) {
            return _VM_.ibar.myFavorite = data;
          });
          break;
        case 3:
          _VM_.ibar.tpl_panel = 'tpl_ibar_history';
          getData.history(function(data) {
            return _VM_.ibar.myHistory = data;
          });
          break;
        case 4:
          _VM_.ibar.tpl_panel = 'tpl_ibar_asset';
          getData.asset(function(data) {
            return _VM_.ibar.myAsset = data;
          });
          break;
        case 5:
          _VM_.ibar.tpl_panel = 'tpl_ibar_recharge';
      }
      $('.ibar_login_box').fadeOut().css({
        visibility: 'hidden'
      });
      return $('.ibar_sub_panel').css({
        visibility: 'visible'
      }).fadeIn().animate({
        left: -287
      }, 250);
    },
    hidePanel: function(t) {
      var _t;
      if (timer) {
        clearTimeout(timer);
      }
      _t = t || 1500;
      timer = setTimeout(function() {
        _VM_.ibar.tpl_panel = '';
        _VM_.ibar.tpl_login = '';
        $('.ibar_login_box').fadeOut().css({
          visibility: 'hidden'
        });
        return $('.ibar_sub_panel').fadeOut().css({
          left: 0,
          visibility: 'hidden'
        });
      }, _t);
    },
    showTips: function(start, end) {
      var _this;
      _this = $(this);
      _this.addClass('current');
      return _this.next('div').css({
        left: start,
        opacity: 0,
        visibility: 'visible'
      }).stop().animate({
        left: end,
        opacity: 1
      }, 400);
    },
    hideTips: function(end) {
      var _this;
      _this = $(this);
      _this.next('div').stop().animate({
        opacity: 0
      }, 'fast').css({
        left: end,
        visibility: 'hidden'
      });
      return _this.removeClass('current');
    },
    goTop: function() {
      return $("body,html").animate({
        scrollTop: 0
      }, 400);
    }
  });
  return _VM_;
});

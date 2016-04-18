define('mods/_index/main',['_lib/lazyload','mods/_index/slider','mods/_index/vmctrl'],function(lazyload, Slider, vmctrl) {
  var init;
  init = function() {
    Slider.init();
    $('img').lazyload({
      placeholder: STATIC_PATH + "/img/dot.png"
    });
    return vmctrl.run(function() {
      return $(window).resize(function() {
        return $("#iBar").css({
          'height': $(window).height()
        });
      });
    });
  };
  return init();
});

(function(win, doc) {
  //当初始的 HTML 文档被完全加载和解析完成之后，
  // DOMContentLoaded 事件被触发，而无需等待样式表、图像和子框架的完成加载
  doc.addEventListener("DOMContentLoaded", recalc, false);
  win.addEventListener("resize", recalc, false);
  // 规定 设计稿宽度 640px  一个标准字体24px(1rem)
  // 类推 屏幕的宽度 320px  一个标准字体12px(1rem)
  // 公式 640/d.width =20 /d.fontSize
  // 假设 d.fontSize = 20/(640/360)
  function recalc() {
    var CW = doc.documentElement.clientWidth;
    if (!CW) return;
    doc.body.style.fontSize =24/(640/CW) + "px";
    //console.log('（未应用rem方案）此处通过客户端窗口宽度'+CW+'和设计稿规定宽度640px,规定字体24px计算得出根元素字体大小应该是'+24/(640/CW));

  }
})(window, document);

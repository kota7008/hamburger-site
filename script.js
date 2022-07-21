$(".p-hamburger").click(function () {//ボタンがクリックされたら
  $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
  $(".p-sidebar").toggleClass('mask');
  $(".p-sidebar__nav-content").toggleClass('slide');//ナビゲーションにpanelactiveクラスを付与
});

$(".p-sidebar-close").click(function () {
  $(".p-hamburger").removeClass('active');//ボタンの activeクラスを除去し
  $(".p-sidebar").removeClass('mask');//ナビゲーションのpanelactiveクラスも除去
  $(".p-sidebar__nav-content").removeClass('slide');//ナビゲーションにpanelactiveクラスを付与
});

// pc時のメニューの制御
$(window).resize(function () {
  var pc = $(window).width();
  var tab = 1024;
  if (pc > tab) {
    $(".p-hamburger").removeClass('active');//ボタンの activeクラスを除去し
    $(".p-sidebar").removeClass('mask');//ナビゲーションのpanelactiveクラスも除去
    $(".p-sidebar__nav-content").removeClass('slide');//ナビゲーションにpanelactiveクラスを除去
  }
});
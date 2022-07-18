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

  $(function () {
    if (window.matchMedia('(min-width: 1025px)').matches) {
      var mask = document.getElementsByClassName('mask');
      mask.removeAttribute('class');
    }
  })
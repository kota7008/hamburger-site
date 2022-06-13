// $(".p-hamburger").click(function () {//ボタンがクリックされたら
// 	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
//     $(".p-sidebar").toggleClass('is-active');//ナビゲーションにクラスを付与
// });

// $(".p-sidebar").on('touchstart', function () {//ナビゲーションのリンクがクリックされたら
//     $(".p-hamburger").removeClass('active');//ボタンの activeクラスを除去し
//     $(".p-sidebar").removeClass('is-active');//ナビゲーションのクラスも除去
// });

// $(".p-hamburger").click(function () {//ボタンがクリックされたら
// 	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
//     $(".p-sidebar__nav-content").toggleClass('slide');//ナビゲーションにpanelactiveクラスを付与
// });

// $(".p-sidebar__nav-content").click(function () {//ナビゲーションのリンクがクリックされたら
//     $(".p-hamburger").removeClass('active');//ボタンの activeクラスを除去し
//     $(".p-sidebar__nav-content").removeClass('slide');//ナビゲーションのpanelactiveクラスも除去
// });

// $(".p-hamburger").click(function () {//ボタンがクリックされたら
// 	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
//     $(".p-sidebar").toggleClass('is-active');//ナビゲーションにクラスを付与
// });

// $(".p-sidebar").on('touchstart', function () {//ナビゲーションのリンクがクリックされたら
//     $(".p-hamburger").removeClass('active');//ボタンの activeクラスを除去し
//     $(".p-sidebar").removeClass('is-active');//ナビゲーションのクラスも除去
// });

$(".p-hamburger").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $(".p-sidebar, .p-sidebar__nav-content").toggleClass('slide');//ナビゲーションにpanelactiveクラスを付与
});

$(".p-sidebar").on('touchstart',function () {//ナビゲーションのリンクがクリックされたら
  $(".p-hamburger").removeClass('active');//ボタンの activeクラスを除去し
    $(".p-sidebar, .p-sidebar__nav-content").removeClass('slide');//ナビゲーションのpanelactiveクラスも除去
});
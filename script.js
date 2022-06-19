$(".p-hamburger").click(function () {
	$(this).toggleClass('active');
    $(".p-sidebar, .p-sidebar__nav-content").toggleClass('slide');
});

$(".p-sidebar").on('touchstart',function () {
  $(".p-hamburger").removeClass('active');
    $(".p-sidebar, .p-sidebar__nav-content").removeClass('slide');
});
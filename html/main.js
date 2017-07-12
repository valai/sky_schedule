$(function() {
//マウスオーバーで表示
	$('#slideR').hover(
	function(){
		$(this).animate({'marginRight':'140px'},500)},
		function() {
			$(this).animate({'marginRight':'0'},500);
		}
	);

//クリックで表示
	$('#slideL').on('click',function(){
		if($('#slideL').hasClass('off')){
			$('#slideL').removeClass('off');
			$(this).animate({'marginLeft':'400px'},300).addClass('on');
		}else{
			$('#slideL').addClass('off');
			$(this).animate({'marginLeft':'0px'},300);
		}
	});
});
//左のコンテンツ用にウィンドウの高さを取得
$(document).ready(function(){
	fit();
	$(window).resize(function(){
		fit();
	})
	function fit(){
		var h = $(window).height();
		$('.slide-inner').css("height",h);
	}
});

//导航
$('#nav li').on('mouseover',function(){
	$(this).addClass('nav_focus');
});

$('#nav li').on('mouseout',function(){
	$(this).removeClass('nav_focus');
});
//轮播
function Slide(obj,bg){
	var Children = obj.children();
	var Slider_btn = $('.banner_slider li');
	var Length = Children.length;
	var Width = obj.width()/3;
	var Left = 0;
	var moveLeft = function(){
		Left = 0;
		obj.animate({left:-Left},function(){
			var i = Left/Width;
			$('.slider_focus').removeClass('slider_focus');
			$(Slider_btn[i]).addClass('slider_focus');
		});
		timer = setTimeout(moveRight,5000);
	};
	var moveRight = function(){
		Left += Width;
		obj.animate({left:-Left},function(){
			var i = Left/Width;
			$('.slider_focus').removeClass('slider_focus');
			$(Slider_btn[i]).addClass('slider_focus');
			if (Left<Width*2) {
				timer = setTimeout(moveRight,5000);
			}else{
				timer = setTimeout(moveLeft,5000);
			}
			
		});
	}
	Children.css('width',Width);
	for(var i = 0;i < Length;i++){
		if(i%2)
		{
			$(Children[i]).css('background','#44baf7');
		}
		else
		{
			$(Children[i]).css('background','#6af744');
		}
	}
	Slider_btn.on('click',function(){
		var j = $('.slider_focus').index();
		var i = $(this).index();
		Left = (i-1)*Width;
		clearTimeout(timer);
		if (i = 0) {
			moveLeft();
		}else{
			moveRight();
		}
	})
	var timer = setTimeout(moveRight,5000);
	
}
Slide($('.banner_con'));
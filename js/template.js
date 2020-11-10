// Получаем рандомное число

function getRandom(min, max) {
	var rand = Math.floor(Math.random() * (max - min + 1)) + min;
	return Math.floor(rand/min)*min;  
}
	
	
// Функция склонения слов после чисел
	
function declOfNum(number, titles) {  
	cases = [2, 0, 1, 1, 1, 2];  
	return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
}  


function tpaneScroll()
{
	var $scrollTop = parseInt(jQuery(window).scrollTop()),
		$scrollPane = jQuery('body'),
		h=0,
		w = parseInt(jQuery(window).width())
		
	if($scrollTop > h)
	{
		if(!$scrollPane.hasClass('fix'))
			$scrollPane.addClass('fix')
	}
	else
	{
		if($scrollPane.hasClass('fix'))
			$scrollPane.removeClass('fix')
	}
}


jQuery(function($){
	
	// fancybox

	jQuery(".fancybox").fancybox(
	{
		'padding'			: 20,
		'width'				: 250,
		'height'			: "auto",
		'autoDimensions'	: false,
		'centerOnScroll'	: 'yes',
		'titleShow'			: false,
		'touch'				: false
	})

    jQuery('.gallery-icon a').fancybox(
	{
		'overlayShow': true, 
		'hideOnContentClick': true, 
		'overlayOpacity': 0.85
	})

	
	tpaneScroll()
	$(window).resize(function(){tpaneScroll()})
	$(document).scroll(function(){tpaneScroll()})

	
	// Маска для телефона
	
	if($('input.phone').length)
		$('input.phone').inputmask("+7 (999) 999-99-99");
	
	if($('input[name=xs_phone]').length)
		$('input[name=xs_phone]').inputmask("+7 (999) 999-99-99");
	

	// Скролл к элементам с хэшем

	$('.xs_hash').click(function(event)
	{
		var height = parseInt(Math.round($($(this).attr('href')).offset().top)) - parseInt($('header').height())
		
		$('html, body').stop().animate({
			scrollTop: height
		}, 500, "linear")
		
		return false
	})
	
	
	// Выдвигаем адаптивное меню
	
	$('.buttonMenu').click(function()
	{
		$('body').toggleClass('show_menu')
	})
	
	$('header nav .menu_container .close').click(function()
	{
		$('body').removeClass('show_menu')
	})
	
	$(document).click(function(event)
	{
		if (
			$(event.target).closest("header nav .menu_container .menu_wrapper").length ||
			$(event.target).closest("header .buttonMenu").length 
		) return;

		$('body').removeClass('show_menu')

		event.stopPropagation();
	})

	
	// Скрытие селектора при клике вне его
	
	$(document).mouseup(function (e)
	{
		var div = $(".hide_click_away")
		
		if (!div.is(e.target) && div.has(e.target).length === 0) 
			div.hide();
	})
	
	
	// Активируем слайдер

	$('.xs_slider').slick({
  		slidesToShow: 3,
  		slidesToScroll: 1,
		arrows: false,
		infinite: false,
		touchMove: false,
		swipeToSlide: false,
		touchThreshold: false,
		swipe: false,
  		responsive: [
		{
		    breakpoint: 900,
		    settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
		    breakpoint: 600,
		    settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
			}
		}]
	});
	
	
	// Обратная связь
	
	$('a[href="#xs_recall"]').click(function()
	{
		var t = $(this).data('theme'),
			b = $(this).data('button'),
			y = $(this).data('yandexid'),
			g = $(this).data('googleid')
			
		$('#xs_recall input[type=submit]').val(b)
		$('#xs_recall input[name=xs_theme]').val(t)
		$('#xs_recall .title').text(t)
		
		if(y !== undefined)
			$('#xs_recall .xs_send_form').data('yandexid', y)
		else
			$('#xs_recall .xs_send_form').data('yandexid', '')
		
		if(g !== undefined)
			$('#xs_recall .xs_send_form').data('googleid', g)
		else
			$('#xs_recall .xs_send_form').data('googleid', '')
		
		$('.xs_result').text('');
	})
	
	if($('input[name=xs_link]').length > 0)
		$('input[name=xs_link]').val(window.location.href)
	
	$('.xs_send_form').on('submit', function(e)
	{
		e.preventDefault()
		
		var f = $(this),
			yandexid = f.data('yandexid'),
			googleid = $(this).data('googleid')
		
		f.addClass('xs_load')
		
		$.ajax({
			url: '/wp-content/themes/xs_business/load/mail.php',
			method: 'post',
			data: f.serialize(),
			success: function(data)
			{
				if(data != 'error')
				{
					//if(yandexid !== undefined && yandexid != '')
					//	yaCounter50465191.reachGoal(yandexid)
					
					//if(googleid !== undefined && googleid != '')
					//	ga('send', 'event', googleid);
					
					f.find('input[type=text],textarea,input[type=url],input[type=number],select,input[type=email],input[type=date],input[type=tel]').val('')
					f.find('.xs_result').html(data)
				}
				else
					alert('Ошибка при отправке данных. Пожалуйста заполните обязательное поле "Телефон"')
				
				
				f.removeClass('xs_load')
			}
		})
	})


	// разворот дочерних пунктов меню

	if( $(document).width() <= 960)
	{
		$('header nav ul li.menu-item-has-children > a').click(function(){
			
		
		 	$(this).toggleClass('rotate');

	        var menu = $(this).next(); 
	        if( $(menu).is(':visible')){
	            $(menu).slideUp(400);
	        }
	        else{
	            $(menu).slideDown(400);
	        }
			
			return false;
			
		});
	}


	// Слайдер Популярные материалы

	$('.mat-content.common-element.active, .wr-access .access').slick({
  		slidesToShow: 5,
  		slidesToScroll: 1,
		arrows: false,
		infinite: true,
		swipe: true,
		centerMode: true,
		speed: 400,
  		responsive: [
		{
		    breakpoint: 1400,
		    settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		{
		    breakpoint: 769,
		    settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1
			}
		}
		]
	});


	// Табы Популярные материалы

	$('.mat-navigate li').click(function(){
        $('.mat-navigate li').removeClass('active');
        $(this).addClass('active');
        var $get_id = $(this).attr('id');
        $('.wr-mat-content .mat-content').removeClass('active');
        $('.wr-mat-content .mat-content.'+$get_id).addClass('active');


        $('.selection .treatment .wr_text .arrow .next').removeClass('active')

		$('.wr-mat-content').addClass('loader');

			setTimeout(function()
			{	

				if(!$('.wr-mat-content.common-slider .mat-content.'+$get_id).hasClass('slick-slider'))
				{		
					$('.wr-mat-content.common-slider .mat-content.'+$get_id).slick({
						slidesToShow: 5,
				  		slidesToScroll: 1,
						arrows: false,
						infinite: true,
						swipe: true,
						centerMode: true,
						speed: 400,
				  		responsive: [
						{
						    breakpoint: 1400,
						    settings: {
								slidesToShow: 4,
								slidesToScroll: 1
							}
						},
						{
						    breakpoint: 600,
						    settings: {
						        slidesToShow: 1,
						        slidesToScroll: 1
							}
						}]
					}) 
				}

			$('.wr-mat-content').removeClass('loader');

			}, 300)

        return false;
    });


	// Выпадающий список

		$('.selection-box__name').click(function()
		{	
			$('.selection-box__name').removeClass('selection-box__name--show'); 
			$('.selection-box__list').removeClass('selection-box__list--show');

		if ( !$(this).hasClass("selection-box__name--show") ) {

			$(this).addClass('selection-box__name--show')
			$(this).parents('.selection-box').find('.selection-box__list').addClass('selection-box__list--show')
		} 

		})
		
		$('.selection-box__list > div').click(function()
		{
			var sel = jQuery(this).parents('.selection-box')
			
			sel.find('.selection-box-bottom').text(jQuery(this).text())
			sel.find('.selection-box__list').removeClass('selection-box__list--show')
			sel.find('.selection-box__item').removeClass('selection-box__item--selected')
			jQuery(this).addClass('selection-box__item--selected')
			sel.find('.selection-box__item').val(jQuery(this).data('value'))

			jQuery('.selection-box__name').removeClass('selection-box__name--show')
		})

		$('.main-selection .clarify').click(function(){
			$('.selection-box-date').text('Выбрать дату');
			$('.selection-box-type').text('Выбрать тип');
			$('.selection-box-country').text('Выбрать страну');
			$('.selection-box-city').text('Выбрать город');

			$('.selection-box__name').removeClass('selection-box__name--show'); 
			$('.selection-box__list').removeClass('selection-box__list--show'); 
		})

	// Сворачивание фильтра при клике вне его

		$(document).click(function(event)
		{
			if (
				$(event.target).closest(".selection-box__name").length) return;
 
			$('.selection-box__name').removeClass('selection-box__name--show')
			$('.selection-box__list').removeClass('selection-box__list--show')

			event.stopPropagation();
		})


	// Информационный баннер

	$('.sale-note strong').click(function(){
		$('body').removeClass('sale')
	})


	// Форма поиска

	$(document).mouseup(function (e)
	{
		var div = $(".search_form")
		if (!div.is(e.target) && div.has(e.target).length === 0) 
			div.removeClass('active');
	})


	// Эффект появления блоков

	$(document).ready(function($) {
	  $('.dummy').viewportChecker();
	});


	// Настройка прозрачной навигации для слайдера

	$('.common-slider .slick-click').click(function(){

		var opacity_div = $('.common-slider')
		opacity_div.addClass('opacity')

		setTimeout(function()
			{	
				opacity_div.removeClass('opacity')
			}, 350)
	})


	// Удаление товаров из корзины в попапе

	$('.common-form .bass_line .item .close').click(function(){
		$(this).parents('.item').addClass('hide')
	})

	// Бегущая строка

	/*$('.marquee').marquee({
	  duration: 9000,
	  infinite: true,
	  duplicated: true
	});*/


	// Табы у преподавателя

	$('.teacher-file .descrip .line .aname').click(function(){
        $('.teacher-file .descrip .line .aname').removeClass('active');
        $(this).addClass('active');
        var $get_id = $(this).attr('id');
        $('.teacher-file .descrip .text .item').removeClass('active');
        $('.teacher-file .descrip .text .item.'+$get_id).addClass('active');
    })
		


})
	


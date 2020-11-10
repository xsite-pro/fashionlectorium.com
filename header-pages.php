<!DOCTYPE html>
<html lang="ru-RU" >
<head>
	<title>Fashion Lectorium - крупнейший современный образовательный портал в сфере индустри и моды</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta http-equiv="Cache-control" content="public"> 
	<link rel="stylesheet" href="style.css?p=25" />
	<script type='text/javascript' src='js/jquery.js'></script>
	<link rel="shortcut icon" type="image/png" href="favicon.png" />
</head><?
	if(substr($_SERVER['SERVER_NAME'], 0, 3) == 'www'){
	    header( 'Location: https://fashionlectorium.com'.$_SERVER['REQUEST_URI'], true, 301 );
	} 
?><body class="sale"> 
<!-- Главый экран START -->
	<header class="wr-main-screen xs_flex xs_column pages fix">
		<!-- <div class="sale-note">
			<span>Скидка 20% на все курсы от ирины рамзы</span>
			<strong></strong>
		</div> -->
		<div class="wr-top-menu">
			<div class="top-menu xs_flex xs_middle">
				<a href="/" class="logo">
					<img src="images/pics/logo.png" alt="" class="logo_white">
					<img src="images/pics/logo_black.png" alt="" class="logo_black">
					<span><strong>#</strong> средысовкусом</span>
				</a>
			<div class="contain-hill xs_flex xs_middle">
				<nav class="menu">
					<div class="menu_container">
						<span class="close"></span>
						<div class="menu_wrapper">
							<div class="menu_wrapper_inner">
								<ul>
									<li><a href="/page-katalog.php">Каталог материалов</a></li>
									<li><a href="/page-events.php">Мероприятия</a></li>
									<li><a href="#">Популярное</a></li>
									<li><a href="#">О проекте</a></li>
								</ul>
								<div class="footer">
									<div class="kabins xs_flex xs_middle">
										<a href="#" class="bacome">Стать автором</a>
										<a href="#" class="person-area">личный кабинет</a>
									</div>	
								<div class="we-phone xs_flex xs_middle">
									<a href="tel:88008888888" class="phone">8 800 888 88 88</a>
									<div class="recall">
										<a href="#xs_recall" data-theme="Мы вам перезвоним" data-button="Заказать звонок" class="fancybox btn"><span>Заказать звонок</span></a>
									</div>
								</div>
								<a href="mailto:info@fashionlectorium.ru" class="email">info@fashionlectorium.ru</a>
								<div class="bottom_line">
									Copyright © 2020
								</div>
							</div>
							</div>
						</div>
					</div>
				</nav>
				<div class="log-field xs_flex xs_middle">
					<a href="#" class="bacome">Стать автором</a>
					<a href="#" class="person-area">личный кабинет</a>
				</div>
			</div>
				<div class="icons-field xs_flex xs_middle xs_end">
					<a href="#" class="icon extend basket">
						<span class="amount">1</span>
					</a>
					<a href="#" class="icon extend favorite">
						<span class="amount">2</span>
					</a>

					<div class="wr-search xs_flex">
						<a href="#xs_auth" class="account_link fancybox" rel="nofollow"></a>
						<span class="icon zoomer search_link" onclick="jQuery('.search_form').addClass('active').find('input[type=text]').focus()">
						</span>

						<form role="search" method="get" action="https://fashionlectorium.com/" class="search_form">
							<input type="submit" class="zoom">
							<input type="text" placeholder="Введите текст запроса" name="s" id="s" class="your_latters">
						</form>
					</div>
				</div>
				<div class="buttonMenu"><span></span></div>
			</div>
		</div>
	</header>
<!-- Главый экран END -->
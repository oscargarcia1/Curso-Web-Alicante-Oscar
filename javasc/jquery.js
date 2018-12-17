$(document).ready(function(){
	$(".ullista li:has(ul)").click(function(e){
		e.preventDefault();
		
		if ($(this).hasClass("activado")){
			$(this).removeClass("activado");
			$(this).children("ul").slideUp();
		} else {
			$(".ullista li ul").slideUp();
			$(".ullista li").removeClass("activado");
			$(this).addClass("activado");
			$(this).children("ul").slideDown();
			
			$(".menu li ul li a").click(function (e) { window.location.href = $(this).attr("href"); });﻿
		}
	});
});
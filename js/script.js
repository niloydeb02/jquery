// jquery
$(document).ready(function(){
//$('button').click(function(){
		//alert("WELCOME");
	//});
//update
	$('#b_t').on("click",function(){
		alert("HELLO WORLD");
	});
	//hide
	$('#hide').on("mouseover",function(){
		$('h2').hide();
	});
	//show
	$('#show').on("mouseover",function(){
		$('h2').show();
	});
	//toggle
	$('#toggle').on("click",function(){
		$('h2').toggle();
	});

	//fade
	$('#fadein').on("click",function(){
		$('#fade').fadeIn();
	});
	$('#fadeout').on("click",function(){
		$('#fade').fadeOut();
	});
	$('#fadetoggle').on("click",function(){
		$('#fade').fadeToggle();
	});

	// qustion and ans
	$('.ques').on("click",function(){
		$('.ans').slideToggle(2000);
	});

	//ANIMATION
	$('.a_button').on("click",function(){
		$('.animate').animate({
			width:"70%",
			opacity:0.5,
			fontSize:"30px",
			borderWidth:"10px"
		},1500);
	});

	//animated box
	$('.b_r').on("click",function(){
		$('.a_box').animate({"left":"+=300px"},"slow");
	});

	$('.b_l').on("click",function(){
		$('.a_box').animate({"left":"-=300px"},"slow");
	});
   //animated box 2
	//box1
	$('.a_b1').on("click",function(){
		$('.b_1').animate({
			width:"90%"},{
				queue:false,
				duration:3000
			})
		.animate({fontSize:"24px"},1500)
		.animate({borderRightWidth:"15px"},1500);
	});
	//box 2
	$('.a_b2').on("click",function(){
		$('.b_2')
		.animate({width:"90%"},1000)
		.animate({fontSize:"24px"},1000)
		.animate({borderLeftWidth:"15px"},1000);
	});
	//both box
	$('.a_both').on("click", function(){
		$('.a_b1').add('.a_b2').trigger("click");
	});
	//reset
	$('.a_reset').on("click",function(){
		$('div').css({
			width:"",
			fontSize:"",
			borderWidth:""
		});


  

	});

    $('.b_run').on("click",function(){
    	$('.r_box').first().animate({
    		left:100},{
    			duration:1000,step:function(now,fx){$('.r_box').slice(1).css("left", now);}
    		});
    });
    // slide

    $('.b_slide').on("click",function(){
    	if ($('.s_1').first().is(":hidden")) {
    		$('.s_1').slideDown("slow");
    	} else{
    		$('.s_1').hide();
    	}
    });

 $('.b_slide').on("click",function(){
    	if ($('.s_1').first().is(":hidden")) {
    		$('.s_1').slideDown("slow");
    	} else{
    		$('.s_1').hide();
    	}
    });

    // valid form
    $("form").on("submit",function(event){
    	if($(".f_input").first().val()==="NILOY"){
    		$("span").text("VALIDATED...").show();
    		return;
    	}
    	$('span').text("NOT VALID!").show().fadeOut(1000);
    	event.preventDefault();
    });
// select item
    
   $("select").on("change",function(){
   	var str = "";
   	$("select option:selected").each(function(){
   		str += $(this).text() +"";
   	});
   	$('.s_item').text(str);
   })
   .trigger("change");

// before
   $('.b_p').before("<b>Hello</b>");



//remove

   $('.b_remove').on("click",function(){
   	$('.r_p').remove();
   });

// replace
   $('.ri_p').on("click",function(){
   	$(this).replaceWith($('.replaced'));
   });


// width change

   var modWidth = 100;
   $('.w_div').one("click",function(){
   	$(this).innerWidth(modWidth).addClass('mod');
   	modWidth -=5;
   });
	});


	
	



 
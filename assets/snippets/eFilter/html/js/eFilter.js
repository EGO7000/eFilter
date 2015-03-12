$(document).ready(function(){

$(document).on("change", "form#eFiltr input, form#eFiltr select", function(e){
	$("form#eFiltr").submit();
})

$(document).on("submit", "form#eFiltr", function(e){
	if (window.eFiltrAjax && eFiltrAjax == '1') {
		e.preventDefault();
		var _form = $(this);
		var data2 = _form.serialize();
		var action = _form.attr("action");
		$.ajax({
			url: action,                                   
			data: data2,
			type: "GET",   
			beforeSend:function(){
				$("#eFiltr").css({'opacity':'0.5'});
				$("#eFiltr_results").css({'opacity':'0.5'});
			},                   
			success: function(msg){
				var new_form = $(msg).find("#eFiltr").html();
				$("#eFiltr").html(new_form).css({'opacity':'1'});
				var new_result = $(msg).find("#eFiltr_results").html();
				$("#eFiltr_results").html(new_result).css({'opacity':'1'});
			}
		})
	}
})


})
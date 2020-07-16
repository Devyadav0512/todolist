// show/hide input bar
var a = 0;
$("i:first-of-type").click(function(){
    if(a == 0){
        $("input").hide();
        a = 1;
        return false;
    };
    if(a == 1){
    $("input").show();
        a = 0;
        return false;
    };
});

// create new todo
$("input").keypress(function(event){
	if(event.which===13){
		var value = $("input").val();
		if(value != ""){
		$("input").val("");
		var bre = document.createElement("br");
		var tag = document.createElement("p");
        var text = document.createTextNode(value);
        var icon = document.createElement("i");
        var divi = document.createElement("div");
        var element = document.getElementById("new");      
        tag.setAttribute("class","dra p-2 pl-3 mb-0");
        tag.setAttribute("style","display: inline-block");
        icon.setAttribute("class","fas fa-trash-alt p-3 mb-0");
        divi.setAttribute("class","second");
        tag.append(text);               
        divi.append(icon);
        divi.append(tag);
        divi.append(bre);
        element.append(divi);
        if(a == 0){
        divi.setAttribute("class","third");
        a = 1;
        return false;
        };
        if(a == 1){
        divi.setAttribute("class","sixth");
            a = 0;
            return false;
        };
        }
	}
});

// line through done todo
$(document).on('click','.dra', function(){
  $(this).toggleClass("fourth");
});

// delete todo
$(document).on('click','.fas', function(){
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  });
});

// sliding trash icon
// $(document).ready(function() { 
//     $(".dra").hover(function() { 
//         $(".fa-trash-alt").removeClass("seventh"); 
//     }, function() { 
//         $(".fa-trash-alt").addClass("seventh"); 
//     }); 
// });
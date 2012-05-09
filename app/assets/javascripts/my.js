

var ifr_loaded = false;
$("iframe").load(function() {
    $(window.ifr.document.getElementsByTagName("body")[0]).mouseover(function(event) { $("#result").html("<p>"+event.target+"</p>"); });
    ifr_loaded = true;
});

$(function() {
    if (!ifr_loaded)
    {
        $("iframe").load(function() {

            
	    //$(window.ifr.document.getElementsByTagName("body")[0]).click(function(event) { 
		//if(!event.ctrlKey) {
			//result = selecteddomelement(event.target)
			//$("#result").append("<p>"+result+"</p>");
		//}
	    //});

	    $(window.ifr.document.getElementsByTagName("body")[0]).bind('keydown', 'tab', function(e){ 
		if(!$(e.target).attr("selected")) {
			highlight(e);
		        selecteddomelement(e.target);
		}
	    });

	    $(window.ifr.document.getElementsByTagName("body")[0]).bind('keydown', 'shift+tab', function(e){ 
		if(!$(e.target).attr("selected")) {
			highlight(e);
		        selecteddomelement(e.target);
		}
	    });

	    $("iframe").contents().find("*").each(function(ind,ele){
		$(ele).attr("index",ind);
		$(ele).attr("selected",false);
	    });
	    
	    $("iframe").contents().click(function(e){ 
              if(e.ctrlKey) 
                {
		 if (e.target.tagName == "INPUT" || e.target.tagName == "BUTTON" || e.target.tagName == "SELECT" || e.target.tagName == "RADIO") {
			highlight(e);
		        selecteddomelement(e.target);
		 }
		   	e.preventDefault();
         		e.stopPropagation();
		}
	    });
        });
    }
});



function highlight(e)
{
      if (e.target.tagName == "INPUT" || e.target.tagName == "BUTTON" || e.target.tagName == "SELECT" || e.target.tagName == "RADIO") {

	$(frames['ifr'].document.getElementsByTagName("div")).remove();
	$("iframe").contents().find("*").removeAttr("selected");


	var divtag = frames['ifr'].document.createElement("div"); 
	$(divtag).css({ 'background-color' : '#c1c1c1', 'border' : '3px solid orange', 'opacity' : '0.6', 'position': 'absolute', 'filter' : 'alpha(opacity=60)' });  
	if($(e.target).width() == 0) {
		divtag.style.width = "15px";
	}
	else {
	   divtag.style.width = $(e.target).width()+2 +"px";
	}

	divtag.style.height = $(e.target).height()+3+"px";
	divtag.style.left = $(e.target).position().left;
	divtag.style.top = $(e.target).position().top;
        $(divtag).attr("index",$(e.target).attr("index"));
	$(e.target).attr("selected",true);
 	divtag.onclick = function(event){
		$(this).css("display","none");
		$(e.target).removeAttr("selected");
		$("#"+$(e.target).attr("index")).remove();
		$(frames['ifr'].document.getElementsByTagName("div")).remove();
	}	
	frames['ifr'].document.body.appendChild(divtag);

      }
}



function selecteddomelement(ele)
{
	    $("#result").html("");
            var txt=""
	    if (ele.tagName == "INPUT" || ele.tagName == "BUTTON" || ele.tagName == "SELECT" || ele.tagName == "RADIO") {
		txt += "<tr valign='top' id="+$(ele).attr('index')+"><td>TagName : "+ele.tagName+"</td><td>" 
		$($(ele).listAttributes()).each(function(ind,attr){
			if(attr != "index" && attr != "selected")
			 txt += attr+" : "+ele[attr]+"</br>";
		});
		txt += "</td></tr>";
	     }
	    $("#result").append(txt);

}



function finddom()
{
	 $("iframe").contents().find("*").each(function(index,ele){
            var txt=""
	     if (ele.tagName == "INPUT" || ele.tagName == "BUTTON" || ele.tagName == "SELECT" || ele.tagName == "RADIO") {
		txt += "<tr><td>" + ele.tagName +"</td><td>"

		$($(ele).listAttributes()).each(function(ind,attr){
   		       if(attr != "index" && attr != "selected")
			txt += attr+":"+ele[attr]+"</br>";			
		});
		txt += "</td></tr>";
		$("#list").append(txt);	    
	     }
	 });
}

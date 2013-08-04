$('#home').on('pageinit', function(){
	//code needed for home page goes here
});	
		
$('#newMaint').on('pageinit', function(){

		var maintForm = $('#newMaint'),
			recordErrors= $("#MaintErrorLink")
			
		    maintForm.validate({
			invalidHandler: function(form, validator) {
				recordErrors.click();
				var html="";
				for(var key in validator.submitted){
					var label = $('label[for^="'+ key +'"]').not('[generated]');
					var legend = label.closest('fieldset').find('.ui-controlgroup-label');
					var fieldName = legend.length ? legend.text() : label.text();
					html += '<li>' + fieldName + '<li>';
				};
				$("#recordErrors ul").html(html);
				console.log(label.text());
			},
			
			submitHandler: function() {
		
		var data = maintForm.serializeArray();
			storeData(data);
		}
	});
	//any other code needed for addItem page goes here
	
});

parseForm = function(data) {
  console.log(data)
};

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

var autofillData = function (){
	
};

var getData = function(){

};
r
var storeData = function(data, key){
	if(!key){
	var id = Math.floor(Math.random()*1000000001);
	}else{
		id = key;
	}

	var item = {};
   	   item.type = ["Maintenance type:", $("#maintType").val()];
   	   item.location = ["Maintenance Location:", $("#mLocate").val()];
   	   item.time = ["Time needed", $("#timeNeeded").value()];
   	   item.regMaint1 = ["regular maint yes", $("#regMaint1").val()];
   	   item.regMaint2 = ["regular maint no", $("#regMaint2").val()]
   	   item.tools = ["Tools Needed", $("#tools").value()];
   	   item.equip = ["Special Equipment", $("#specEquip").val()];
   	   localStorage.setItem(id, JSON.stringify(item));
   	   alert("saved drink")
 };

//having trouble getting storage to display
function getStorage (){
	if(localStorage.length === 0){
		alert("nothing to see here. so i added some for you to look cool");
		autoFill();
		};
		
	var savedPage = getelementbyid("#schedule")
	var makeDiv = document.createElement("div");
	makeDiv.setAttribute("id","savedItem");
	var makeList = document.createElement("ul");
	makeList.setAttribute("id", "savedMaint");
	makeDiv.appendChild(makeList);
	document.body.appendChild(makeDiv);
	for(var i=0, len=localStorage.length; i<len; i++){
		var makeLi = document.createElement("li");
		var linkLi = document.createElement("li");
		makeList.appendChild(makeLi);
		var key =localStorage.key(i);
		var value = localStorage.getItem(key);
		var obj = JSON.parse(value);
		var makeSubList = document.createElement("ul");
		makeLi.appendChild(makeSubList);
		//getImage(obj, makeSubList);
		for (var n in obj){
			var makeSubli = document.createElement("li");
			makeSubList.appendChild(makeSubli);
			var optSubText = obj[n][0]+" "+obj[n][1];
			makeSubli.innerHTML = optSubText;
			makeSubList.appendChild(linkLi);
		}
		
		itemlinksBut(localStorage.key(i), linkLi);
		
	}
	
}; 

var	deleteItem = function (){
			
};
					
var clearLocal = function(){

};


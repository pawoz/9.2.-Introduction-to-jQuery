//spanEvenColorChange
var span = $('span');
span.each(function(index, element) {
	if (index % 2 == 0) {
		$(element).css('color', 'red');
	};
});

//paragraphsAddButton
var paragraphs = $('p');
paragraphs.each(function(index, element) {
	var button = '<button class="btn" data-tmp="' + index + '">click me</button>'
	$(element).append(button);
});

//addEventHandlerAlert
$("button").click(function(){
	alert($(this).attr("data-tmp"));
});

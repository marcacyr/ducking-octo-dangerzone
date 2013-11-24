$(document).ready(function(){
	$("#calendar div").datepicker();

	$('#datepicker .input-append.date').datepicker({
    orientation: "bottom left",
    autoclose: true,
    todayHighlight: true
	});
});
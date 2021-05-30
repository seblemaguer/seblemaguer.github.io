function reset() {
    $("select").each(function () {
	localStorage.setItem($(this).attr("id"),"");
	$(this).val("");
    });
    $("#searchbar").val("");
    $("#searchbar").trigger('change');
}

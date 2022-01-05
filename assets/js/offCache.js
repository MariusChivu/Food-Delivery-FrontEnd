$(document).ready(function() {
	$("link").each(function() {		
		originalLink = $(this).attr("href");
		newLink = originalLink + "?offCache=" + Math.floor(Math.random() * 1000);
		$(this).attr("href", newLink)
	});

	$("script").each(function() {		
		originalLink = $(this).attr("src");
		newLink = originalLink + "?offCache=" + Math.floor(Math.random() * 1000);
		$(this).attr("src", newLink)
	});
});
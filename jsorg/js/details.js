var Details = (function(){
	function loadPerson(id){
		// evt.preventDefault();
		// evt.stopPropagation();
		// evt.stopImmediatePropagation();

		// var rel = $(evt.target).attr("rel");
		// var id = rel.substr(rel.lastIndexOf('-')+1);

		var url = "details/" + id + ".html";
		$.ajax(url, { dataType: "text" })
		.then(function(contents){
			$content.html(contents);
		});
	}

	function init() {
		//$items = $("[rel=js-carousel] > [rel=js-content] > [rel=js-items]");
		$content = $("[rel=js-details]");

		//$items.on("click", "[rel*='js-item-']", loadPerson);

		// on click of a carousel item, do an Ajax request for
		// the "details/2.html" (or whatever) file for the person
		// clicked, and load those contents into the `$content` div.

		// hint: you will probably want to use "event propagation"
		// (aka "event delegation"), by attaching a single event
		// handler the `$content` element rather than individual
		// event handlers to each item in the carousel.
	}

	var $content;

	return {
		init: init,
		loadPerson: loadPerson
	};

})();

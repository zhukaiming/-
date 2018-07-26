

(function($){
	function getRandom(min,max){
		return Math.round(min + (max-min)*Math.random());
	}
	 $('.wish').pep({  constrainTo: '.wall' });
	//$('.wish').pep({ constrainTo: '.wall'});

})(jQuery);
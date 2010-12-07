steal.plugins(	
	'jquery/controller',			// a widget factory
	'jquery/controller/subscribe',	// subscribe to OpenAjax.hub
	'jquery/view/ejs',				// client side templates
	'jquery/controller/view',		// lookup views with the controller's name
	'jquery/model',					// Ajax wrappers
	'jquery/dom/fixture',			// simulated Ajax requests
	'jquery/dom/form_params')		// form data helper
	
	.css('style', 'comicbox')	// loads styles

	.resources()					// 3rd party script's (like jQueryUI), in resources folder

	.models('comic')						// loads files in models folder 

	.controllers('main', 'comic_list', 'read_comic')					// loads files in controllers folder

	.views();						// adds views to be added to build
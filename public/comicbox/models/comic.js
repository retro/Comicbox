/**
 * @tag models, home
 * Wraps backend comic services.  Enables 
 * [Comicbox.Models.Comic.static.findAll retrieving],
 * [Comicbox.Models.Comic.static.update updating],
 * [Comicbox.Models.Comic.static.destroy destroying], and
 * [Comicbox.Models.Comic.static.create creating] comics.
 */
$.Model.extend('Comicbox.Model.Comic',
/* @Static */
{
	/**
 	 * Retrieves comics data from your backend services.
 	 * @param {Object} params params that might refine your results.
 	 * @param {Function} success a callback function that returns wrapped comic objects.
 	 * @param {Function} error a callback function for an error in the ajax request.
 	 */
	findAll: function( params, success, error ){
		$.ajax({
			url: '/comics',
			type: 'get',
			dataType: 'json',
			data: params,
			success: this.callback(['wrapMany',success]),
			error: error,
			//fixture: "//comicbox/fixtures/comics.json.get" //calculates the fixture path from the url and type.
		});
	},
	/**
	 * Updates a comic's data.
	 * @param {String} id A unique id representing your comic.
	 * @param {Object} attrs Data to update your comic with.
	 * @param {Function} success a callback function that indicates a successful update.
 	 * @param {Function} error a callback that should be called with an object of errors.
     */
	update: function( id, attrs, success, error ){
		$.ajax({
			url: '/comics/'+id,
			type: 'put',
			dataType: 'json',
			data: attrs,
			success: success,
			error: error,
			fixture: "-restUpdate" //uses $.fixture.restUpdate for response.
		});
	},
	/**
 	 * Destroys a comic's data.
 	 * @param {String} id A unique id representing your comic.
	 * @param {Function} success a callback function that indicates a successful destroy.
 	 * @param {Function} error a callback that should be called with an object of errors.
	 */
	destroy: function( id, success, error ){
		$.ajax({
			url: '/comics/'+id,
			type: 'delete',
			dataType: 'json',
			success: success,
			error: error,
			fixture: "-restDestroy" // uses $.fixture.restDestroy for response.
		});
	},
	/**
	 * Creates a comic.
	 * @param {Object} attrs A comic's attributes.
	 * @param {Function} success a callback function that indicates a successful create.  The data that comes back must have an ID property.
	 * @param {Function} error a callback that should be called with an object of errors.
	 */
	create: function( attrs, success, error ){
		$.ajax({
			url: '/comics',
			type: 'post',
			dataType: 'json',
			success: success,
			error: error,
			data: attrs,
			fixture: "-restCreate" //uses $.fixture.restCreate for response.
		});
	}
},
/* @Prototype */
{});
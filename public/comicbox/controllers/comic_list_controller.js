/**
 * @tag controllers, home
 */
jQuery.Controller.extend('Comicbox.Controllers.ComicList',
/* @Static */
{

},
/* @Prototype */
{
  init: function(el){
    Comicbox.Model.Comic.findAll({}, this.callback('allComics'));
  },
  allComics: function(comics){
    this.comics = {};
    for(var i = 0; i < comics.length; i++){
      this.comics[comics[i].id] = comics[i];
    }
    this.element.html(this.view('all_comics', {comics: comics}));
  },
  '.comic click': function(el, ev){
    var comic_id = el.data('comic-id');
    $('#main').html('<div id="read-comic"></div>');
    $('#read-comic').comicbox_read_comic(this.comics[comic_id]);
  }
});
$.Controller.extend("Comicbox.Controllers.MainController",{
  hasActiveElement : document.activeElement || false,
  onDocument: true
},{
  ready: function(el, options){
    this.setupComicListController();
  },
  setupComicListController: function(){
    var main = this.element.find('#main');
    main.html('<div id="comic_list"></div>');
    $('#comic_list').comicbox_comic_list();
  },
  '.all-comics click': function(el, ev){
    ev.preventDefault();
    $('header, footer').text('');
    this.setupComicListController();
  },
  keydown: function(el, ev){
    this.publish("keycode_" + ev.keyCode);
  }
})
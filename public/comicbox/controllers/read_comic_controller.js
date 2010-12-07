/**
 * @tag controllers, home
 */
jQuery.Controller.extend('Comicbox.Controllers.ReadComic',
/* @Static */
{

},
/* @Prototype */
{
  init: function(el, comic){
    this.comic = comic;
    this.page = 0;
    this.renderPage();
    $('header').html("<a href='#' class='all-comics'>&laquo; Back to all comics</a>" + this.comic.name);
  },
  pageUrl: function(){
    return this.comic.url + "/" + this.comic.pages[this.page];
  },
  renderPage: function(){
    this.element.html(this.view('one_page', {page_url: this.pageUrl()}))
    this.updatePagination();
  },
  nextPage: function(){
    if(this.page < (this.comic.pages.length - 1)){
      this.page += 1;
      this.element.find('img').attr('src', this.pageUrl());
      this.updatePagination();
    }
  },
  prevPage: function(){
    if(this.page > 0){
      this.page -= 1;
      this.element.find('img').attr('src', this.pageUrl());
      this.updatePagination();
    }
  },
  updatePagination: function(){
    $("footer").text("Page: " + (this.page + 1) + " / " + this.comic.pages.length)
  },
  'keycode_39 subscribe': function(){
    this.nextPage();
  },
  'keycode_37 subscribe': function(){
    this.prevPage();
  },
  '.prev click': function(el, ev){
    ev.preventDefault();
    this.prevPage();
  },
  '.next click': function(el, ev){
    ev.preventDefault();
    this.nextPage();
  }
});
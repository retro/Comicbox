//steal/js comicbox/scripts/compress.js

load("steal/rhino/steal.js");
steal.plugins('steal/build','steal/build/scripts','steal/build/styles',function(){
	steal.build('comicbox/scripts/build.html',{to: 'comicbox'});
});

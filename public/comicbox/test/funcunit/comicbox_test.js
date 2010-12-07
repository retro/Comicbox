module("comicbox test", { 
	setup: function(){
		S.open("//comicbox/comicbox.html");
	}
});

test("Copy Test", function(){
	equals(S("h1").text(), "Welcome to JavaScriptMVC 3.0!","welcome text");
});
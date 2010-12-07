module("Model: Comicbox.Models.Comic")

test("findAll", function(){
	stop(2000);
	Comicbox.Models.Comic.findAll({}, function(comics){
		start()
		ok(comics)
        ok(comics.length)
        ok(comics[0].name)
        ok(comics[0].description)
	});
	
})

test("create", function(){
	stop(2000);
	new Comicbox.Models.Comic({name: "dry cleaning", description: "take to street corner"}).save(function(comic){
		start();
		ok(comic);
        ok(comic.id);
        equals(comic.name,"dry cleaning")
        comic.destroy()
	})
})
test("update" , function(){
	stop();
	new Comicbox.Models.Comic({name: "cook dinner", description: "chicken"}).
            save(function(comic){
            	equals(comic.description,"chicken");
        		comic.update({description: "steak"},function(comic){
        			start()
        			equals(comic.description,"steak");
        			comic.destroy();
        		})
            })

});
test("destroy", function(){
	stop(2000);
	new Comicbox.Models.Comic({name: "mow grass", description: "use riding mower"}).
            destroy(function(comic){
            	start();
            	ok( true ,"Destroy called" )
            })
})
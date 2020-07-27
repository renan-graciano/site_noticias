module.exports = function(app){
    app.get('/noticias',function(req, resp){
        app.app.controllers.noticias.noticias(app, req, resp);
    });

    app.get('/noticia',function(req, resp){
        app.app.controllers.noticias.noticia(app, req, resp);
    });
}; 
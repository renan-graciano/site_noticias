module.exports = function(app){
    app.get('/InclusaoNoticia',function(req, resp){
        app.app.controllers.admin.inclusaoNoticia(app, req, resp);
    });
    app.post('/noticia/salvar',function(req, resp){
        app.app.controllers.admin.salvarNoticia(app, req, resp);
    });
};
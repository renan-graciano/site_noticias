module.exports.noticias = function(application, req, resp){
    var conn = application.config.dbConnection();
    var noticiasDAO = new application.app.models.noticiasDAO(conn);

    noticiasDAO.getNoticias(function(error, result){
        if(error){
            throw error;
        }
        resp.render('noticias/noticias',{noticias: result});
    });
}

module.exports.noticia = function(application, req, resp){
    var conn = application.config.dbConnection();
    var noticiasDAO = new application.app.models.noticiasDAO(conn);
    var id_noticia = req.query.id_noticia;

    noticiasDAO.getNoticia(id_noticia, function(error, result){
        if(error){
            throw error;
        }
        resp.render('noticias/noticia',{noticia: result});
    });
}
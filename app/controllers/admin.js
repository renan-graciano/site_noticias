var {body, validationResult} = require('express-validator')

module.exports.inclusaoNoticia = function (application, req, resp) {
    resp.render('admin/form_add_noticia',{validacao : {}, noticia : {}});
}

module.exports.salvarNoticia = function(application, req, resp){
    var noticia = req.body;

    req.assert('titulo', 'Título é obrigatório').notEmpty();
    req.assert('resumo', 'Resumo é obrigatório').notEmpty();
    req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10,100);
    req.assert('autor', 'Autor é obrigatório').notEmpty();
    req.assert('data_noticia', 'Data é obrigatório').notEmpty().isDate({format: 'YYYY-MM-DD'});
    req.assert('noticia', 'Noticia é obrigatório').notEmpty();
    
    var erros = req.validationErrors();

    if(erros){
        resp.render('admin/form_add_noticia',{validacao: erros, noticia: noticia});
        return;
    }

    var conn = application.config.dbConnection();
    var noticiasDAO = new application.app.models.noticiasDAO(conn);

    noticiasDAO.salvarNoticia(noticia, function(error, result){
        if(error){
            throw error;
        }
        resp.redirect('/noticias'); 
    });
}
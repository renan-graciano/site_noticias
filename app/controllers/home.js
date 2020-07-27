module.exports.index = function(application, req, resp){
    var conn = application.config.dbConnection();
    var noticiasModel =  new application.app.models.noticiasDAO(conn);
    noticiasModel.get5UltimasNoticias(function(error, result){
        if(error){
            throw error;
        }
        resp.render('home/index',{noticias: result});
    })
    
}
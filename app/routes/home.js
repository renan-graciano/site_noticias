
module.exports = function(app){
app.get('/',function(req, resp){
    app.app.controllers.home.index(app, req, resp);
});
};


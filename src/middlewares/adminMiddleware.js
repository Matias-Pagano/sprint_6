function adminMiddleware(req, res, next){
   if(req.session.adminLogged){
		return res.redirect('/user/vistaAdministrador');

   }
   next();
}
module.exports = adminMiddleware;
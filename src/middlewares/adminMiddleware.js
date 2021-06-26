function adminMiddleware(req, res, next){
   if(req.session.adminLogged){
		return res.redirect('/user/admin');

   }
   next();
}
module.exports = adminMiddleware;
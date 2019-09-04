/*
* GET home page.
*/
 
exports.call_index = function(req, res){
  var message = 'home page';
  res.render('home.ejs',{message: message});
}
exports.call_new_member = function(req, res){
  var message = 'home page';
  res.render('new_member.ejs',{message: message});
}
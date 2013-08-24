
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Yet another Blitz Aegis reboot, 2013 :)' });
};
/* login page. */
router.get('/login', function(req, res, next) {
    res.render('login', { title: 'Login Page', message:
     req.flash('loginMessage') });
 });

 /* GET Signup */
router.get('/signup', function(req, res) {
    res.render('signup', { title: 'Signup Page',
       message:req.flash('signupMessage') });
});

var express = require('express');
var router = express.Router();


router.get('/', function(req, res)
{
  res.render('pages/signup/index');
});

router.post('/', function(req, res)
{
  if(req.body.hasOwnProperty('REGISTER'))
  {
    var info =
    {
      lid: req.body.username,
      sid: '0',
      pass: req.body.password
    }
    log_in.insetLogin(info, function(result)
    {
      if(result == true)
      {
        var detail =
        {
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
        }
        customer.signCustomer(detail, function(result)
        {
          if(result == true)
          {
            res.redirect('pages/login');
          }
          else
          {
            res.send('Something Went Wrong....!');
          }
        });
      }
    });
  }
});

module.exports = router;

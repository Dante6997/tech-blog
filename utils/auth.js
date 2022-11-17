const withAuth = (req, res, next) => {
    //redirect the user to login page if not loggedIn
    if (!req.session.loggedIn) {
      res.redirect('/login');
    } else {
      //else if user loggedIn, call the next() which renders the page
      next();
    }
  };
  
module.exports = withAuth;
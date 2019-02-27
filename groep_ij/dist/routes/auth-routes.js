"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// app/routes.js
module.exports = function (app, passport) {
    app.get('/profile', isLoggedIn, function (req, res) {
        console.log('profile');
        res.json(req.user);
    });
    // process the signup form
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/profile',
        failureRedirect: '/signup',
        failureFlash: true // allow flash messages
    }));
    // process the signup form
    app.post('/login', passport.authenticate('local-login', {
        successRedirect: '/profile',
        failureRedirect: '/signup',
        failureFlash: true // allow flash messages
    }));
    app.get('/logout', function (req, res) {
        req.logout();
        res.end();
    });
};
// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {
    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();
    // if they aren't redirect them to the home page
    res.send(403);
}
//# sourceMappingURL=auth-routes.js.map
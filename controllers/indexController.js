// indexController.js

module.exports = {
    // Render the home page
    renderHomePage(req, res) {
      const data = {
        pageTitle: 'Home Page',
        logoPath: '/media/logo.png',
        homeLink: 'index.ejs',
        loginLink: 'login.ejs',
        aboutUsLink: 'about.ejs',
        firstPartImage: '/media/home.svg',
        getStartedLink: '/get-started',
        secondPartImage: './media/First Part About Us.svg',
      };

      console.log('__dirname:', '/Users/User/Desktop/tino_wpd2/');
      res.render('index', data);
    },
  
    aboutUs(req, res) {
      const data = {
        pageTitle: 'About Us',
        logoPath: '/media/logo.png',
        homeLink: 'index.ejs',
        loginLink: 'login.ejs',
        aboutUsLink: 'about.ejs',
        firstPartImage: './media/First Part About Us.svg',
        getStartedLink: '/get-started',
        secondPartImage: './media/First Part About Us (210 x 270 mm).svg',
      };
  
      res.render('about', data);
    },
  
    // Login page
    login(req, res) {
      const data = {
        pageTitle: 'Login',
        logoPath: '/media/logo.png',
        homeLink: 'home.ejs',
        loginLink: 'login/login.ejs', 
        aboutUsLink: 'about.ejs',
      };
  
      res.render('login/login', data);
    },
  };
  
// menteeDashController.js

const menteeDashController = {
    // Render the mentee dashboard
    renderMenteeDashboard(req, res) {
      const data = {
        pageTitle: 'Mentee Dashboard',
        logoPath: '/media/logo.png', // Update the path based on your project structure
        homeLink: 'index.html',
        aboutUsLink: 'about.html',
      };
  
      res.render('menteeDash/home', data); // Assuming the view file is menteeDashboard.ejs
    },
  };
  
  module.exports = menteeDashController;
  
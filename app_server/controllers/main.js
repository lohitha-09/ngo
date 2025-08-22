exports.home = (req, res) => {
  res.render('index', {
    title: 'Volunteer Engagement',
    message: 'Welcome to the NGO Volunteer Management System!',
    bodyClass: 'home-bg'
  });
};

exports.about = (req, res) => {
  res.render('about', {
    title: 'About Us',
    message: 'Learn more about how NGOs engage and track volunteers.',
    bodyClass: 'home-bg'
  });
};

exports.volunteers = (req, res) => {
  res.render('volunteers', {
    title: 'Volunteer Management',
    message: 'Recruit, onboard, and assign volunteers to projects.',
    bodyClass: 'home-bg'
  });
};

exports.impact = (req, res) => {
  res.render('impact', {
    title: 'Impact Reports',
    message: 'Track and measure the impact of volunteer-driven projects.',
    bodyClass: 'home-bg'
  });
};
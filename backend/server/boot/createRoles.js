module.exports = function (app) {

  app.models.Role.create([{
      name: 'admin',
      description: 'admin role created when first system runs and assign to user whose id = 1.',
    },
    {
      name: 'user',
      description: 'user role created when first system runs and assign to user whose id > 1.',
    }
  ], function (err, role) {
    if (err) console.error(err);
    else {
      console.log("Roles are created successfully!")
    };
  })
}

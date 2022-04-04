module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1e9f92d59a5dc52a056c0b1f90e4464b'),
  },
});

module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '698ee6cf25692621a0fe3bb861c295eb'),
  },
});

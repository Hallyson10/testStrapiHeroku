const parse = require('pg-connection-string').parse;

module.exports = ({ env }) => {
  if(env('NODE_ENV' === 'production')){
    const config = parse(process.env.DATA_BASE_URL);
    return{
      defaultConnection: 'default',
      connections: {
        default: {
          connector: 'bookshelf',
          settings: {
            client: 'postgres',
            host: config.host,
            port: config.port,
            database: config.database,
            username: config.username,
            password: config.password,
            // ssl: env.bool('DATABASE_SSL', false),
          },
          options: {
            ssl: env.bool('DATABASE_SSL', false)
          }
        },
      },
    }
  }
  return{
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'postgres'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'strapi'),
        username: env('DATABASE_USERNAME', 'strapi'),
        password: env('DATABASE_PASSWORD', 'strapi'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
}};

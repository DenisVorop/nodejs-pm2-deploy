require('dotenv').config({ path: '.env.deploy' });

const {
  DEPLOY_USER, DEPLOY_HOST, DEPLOY_PATH, DEPLOY_REF,
} = process.env;

module.exports = {
  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      repo: 'git@github.com:DenisVorop/nodejs-mesto-project.git',
      path: DEPLOY_PATH,
      'post-deploy': 'cd frontend && pwd && npm ci && npm run build',
    },
  },
};

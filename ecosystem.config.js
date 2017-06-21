module.exports = {
    "apps" : [
      {
        "name"      : "validatejavascript.com",
        "script"    : "packages/backend/index.js",
        "error_file": "/var/web/eslint.com/logs/err.log",
        "out_file": "/var/web/eslint.com/logs/out.log",
        "env": {
            "NODE_ENV": "production",
            "PORT": "5004"
        },
        "env_production" : {

        }
      }
    ],
  "deploy" : {
    "production" : {
      "user" : "deployer",
      "host" : "192.241.157.86",
      "ref"  : "origin/master",
      "repo" : "git@github.com:circlecell/eslint.io.git",
      "path" : "/var/web/eslint.io",
      "ssh_options": ["StrictHostKeyChecking=no", "PasswordAuthentication=no"],
      "post-deploy" : "npm run install-all && npm run build && npm start"
    }
  }
}
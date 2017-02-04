module.exports = {
  "port" : process.env.PORT || 3000,
  "server": {
    "baseDir": "src",
    "routes": {
      "/node_modules": "node_modules"
    }
  }
}

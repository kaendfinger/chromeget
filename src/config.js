var fs = require("fs");

var defaultConfig = {
    path: process.env.HOME + ".chromeget",
    repoMain: "https://raw.github.com/kaendfinger/chromeget/master/pkgs/main.json",
    prefix: "/usr/local"
};

exports.config = function(filename) {
    var configPath = defaultConfig.path + (filename ? filename : "/config.json");
    
    if (!fs.existsSync(configPath)) {
        fs.writeFile(configPath, JSON.stringify(defaultConfig, null, 4) + "\n");
        return defaultConfig;
    } else {
        return JSON.parse(fs.readFileSync(filename ? filename : defaultConfig.path));   
    }
};
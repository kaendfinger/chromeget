require("colors");

exports.printUsage = function(cmd) {
    var command = cmd ? cmd : "<command>";
    console.log("usage: chromeget " + command + " [arguments]");
    console.log();
    console.log("Possible Commands:");
    console.log("  update, install, list");
};

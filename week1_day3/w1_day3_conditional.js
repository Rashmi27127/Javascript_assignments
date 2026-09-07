
function launchBrowser(browserName) {
    if (browserName === "chrome") {
        console.log("Chrome browser is launched");
    } else {
        console.log("Other browser is launched");
    }
}

function runTests(testType) {
    switch (testType) {
        case "smoke":
            console.log("Running smoke tests");
            break;

        case "sanity":
            console.log("Running sanity tests");
            break;

        case "regression":
            console.log("Running regression tests");
            break;

        default:
            console.log("Running random tests");
            break;
    }
}

launchBrowser("chrome");
runTests("123");

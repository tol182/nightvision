/*Global flag for all modes*/
var currentMode = "off";

/*Listeners for img - 'buttons'*/
document.getElementById("invert").addEventListener("click", invert);
document.getElementById("matrix").addEventListener("click", matrix);
document.getElementById("smartInvert").addEventListener("click", smartInvert);

function invert() {
    if (currentMode != "invert") {
        self.port.emit("invertM", "invert-turn-on.js");

        currentMode = "invert";
    } else {
        self.port.emit("invertM", "invert-turn-off.js");

        currentMode = "off";
    }
}

function matrix() {
    if (currentMode != "matrix") {
        self.port.emit("invertM", "matrix-turn-on.js");

        currentMode = "matrix";
    } else {
        self.port.emit("invertM", "matrix-turn-off.js");

        currentMode = "off";
    }
}

function smartInvert() {
    if (currentMode != "smartinvert") {
        self.port.emit("invertM", "smart-invert-turn-on.js");

        currentMode = "smartinvert";
    } else {
        self.port.emit("invertM", "smart-invert-turn-off.js");

        currentMode = "off";
    }
}
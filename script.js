
let constraints = {
    video: {
        deviceId: {
            exact: "",
        },
    }, audio: false
}


let capture;
let filters = {
    "BLOCK": { chars: "█", displaysSingle: true },
    // "CAMPFIREtext": { chars: ["Campfire"], displaysSingle: false },
    "UWU": { chars: "UwU", displaysSingle: false },
    "colonthree": { chars: [":3"], displaysSingle: false },
    "trans": { chars: "🏳️‍⚧️", displaysSingle: true },
    "CAMPFIREEMOJI": { chars: "🔥", displaysSingle: true },
    "BULLET": { chars: "<img src='data:image/jpeg;base64,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'/>", displaysSingle: true },
    "ucs": { chars: ["GameObject", "MonoBehavior", "Transform", "Vector2", "Quaternion", "OnCollisionEnter", "OnCollisionLeave"], "displaysSingle": false },
    "gray": { "function": () => { filter(GRAY) }, "allCanvas": true },
    "doublecharwidth": { "function": () => { window.ENV.string = window.ENV.string + window.ENV.string; } }
}

let modes = {
    // "BLOCK2": [28, 21, { "filter": [filters.BLOCK, filters.doublecharwidth], "name": "Blocks (double width)", usesTextOutput: true }],
    "BLOCK1": [28, 21, { "filter": [filters.BLOCK], "name": "Blocks (single width)", usesTextOutput: true }],
    // "CFT": [28, 21, { "filter": [filters.CAMPFIREtext], "name": "Campfire text", usesTextOutput: true }],
    ":3": [28, 21, { "filter": [filters.colonthree], "name": ":3 meow mrrp nya", usesTextOutput: true }],
    "trans": [28/2, 21, { "filter": [filters.trans], "name": "Trans Flag", usesTextOutput: true }],
    "UCS": [28, 21, { "filter": [filters.ucs], "name": "Unity C# keywords", usesTextOutput: true }],
    "HD420k": [32,32, { "filter": [filters.gray], "name": "Super HD 420x420kp", usesTextOutput: false }],
    "dithered": [384, 288, { "filter": [filters.gray], "name": "regular dithering", usesTextOutput: false }],
}
let mode = modes["dithered"]
fps = 30
let doMakeChars = true
let useAnyCamera = true
let didCameraEverWork = false
let useRandomWord = true
async function checkCamera() {
    const statusText = document.getElementById("status");

    if (((!capture || !capture.elt?.srcObject || capture.elt.srcObject.active === false) && didCameraEverWork == true) && !useAnyCamera) {
        console.log("Camera disconnected. Reloading...");

        window.location.reload();
        return;
    }

    setTimeout(checkCamera, 5000);
}

let viewer = document.querySelector(".viewer")
let vwrapper = document.querySelector(".vwrapper")
vwrapper.style.display = "none"

function setMode(nmode) {
    mode = nmode
    vwrapper.style.display = nmode[2].usesTextOutput ? "" : "none"
    if(nmode[2].usesTextOutput){
        viewer.classList.add("to")
    }
    else{
        viewer.classList.remove("to")
    }
    capture.size(mode[0], mode[1]);
    resizeCanvas(mode[0], mode[1]);
    document.querySelector("#modelabel").textContent = `Mode: ${mode[2].name}`
}

async function setup() {
    pixelDensity(1);
    describe('Video capture from the device webcam.');
    createCanvas(mode[0], mode[1]);
    const statusText = document.getElementById('status');
    try {

        await navigator.mediaDevices.getUserMedia({ video: true });

        const devices = await navigator.mediaDevices.enumerateDevices();
        const bauhnCam = devices.find(d =>
            d.kind === "videoinput" &&
            d.label.toLowerCase().includes("bauhn")
        );
        if (!bauhnCam && !useAnyCamera) {
            console.log("No Bauhn camera found. Retrying in 5 seconds...");
            setTimeout(async () => {
                const devices = await navigator.mediaDevices.enumerateDevices();
                const retryCam = devices.find(d =>
                    d.kind === "videoinput" &&
                    d.label.toLowerCase().includes("bauhn")
                );
                if (retryCam) {
                    console.log("Ready.");
                    if (!useAnyCamera) {
                        constraints.video.deviceId.exact = retryCam.deviceId;
                    }
                    capture = createCapture(useAnyCamera ? { audio: false, video: true } : constraints);
                    capture.size(mode[0], mode[1]);
                    capture.hide()
                    frameRate(fps);
                }
            }, 5000);
            return;
        }
        console.log("Ready.");
        if (!useAnyCamera) {
            constraints.video.deviceId.exact = bauhnCam.deviceId
        }
        capture = createCapture(useAnyCamera ? { audio: false, video: true } : constraints);
        capture.size(mode[0], mode[1]);
        capture.hide()
        frameRate(fps)
    } catch (err) {
        console.log("Camera access denied or error: " + err.message);
    }

}

let issubC = false
let lastSampleSum = 0;
let threshold = 60;
let lastFrameSum = 0;
let isFirstRun = true;
function shouldRedraw() {
    if (isFirstRun) {
        isFirstRun = false
        return true
    }
    image(capture, 0, 0, mode[0], mode[1]);
    loadPixels();


    let currentFrameSum = 0;
    for (let i = 0; i < pixels.length; i += 4) {
        currentFrameSum += pixels[i];
    }

    if (Math.abs(currentFrameSum - lastFrameSum) < threshold) {
        return false;
    }
    lastFrameSum = currentFrameSum;

    return true;
}

window.ENV = {}

function processFilter(pfilter) {
    if (Object.hasOwn(pfilter, "function")) {
        return pfilter.function()
    }
    else {

    }
}


let widthMultiplier = 2

function draw() {
    window.ENV = {}
    window.ENV.cfilter = mode[2].filter[0]
    if (capture) {
        image(capture, 0, 0, mode[0], mode[1]);

        if (!!issubC) {
            window.ENV.url = capture.canvas.toDataURL()
        }
        
        if (doMakeChars && shouldRedraw()) {
            viewer.innerHTML = ""
            window.ENV.frame = ""
            window.ENV.filterPos = 0
            window.ENV.FilterPosSubindex = 0
            if (Object.hasOwn(window.ENV.cfilter, "chars")) {
                if (useRandomWord) {
                    window.ENV.filterPos = Math.floor(Math.random() * window.ENV.cfilter.chars.length)
                }
                window.ENV.drawmode = issubC ? "subc" : (typeof window.ENV.cfilter.chars == typeof [''] ? "subindexed" : "string")
            }

            for (let y = 0; y < mode[1]; y++) {
                for (let x = 0; x < mode[0]; x++) {
                    for (let _ = 0; _ < (mode[2].widthMultiplier || widthMultiplier); _++) {

                        let index = 4 * (y * mode[0] + x); 
                        let gray = pixels[index]; 
                        window.ENV.string = ""
                        if (Object.hasOwn(window.ENV.cfilter, "chars")) {
                            if (window.ENV.drawmode == "subc") {
                                window.ENV.string = `<img src="${window.ENV.url}"/>`
                            }
                            else if (window.ENV.drawmode == "subindexed") {

                                window.ENV.string = `${window.ENV.cfilter.chars[window.ENV.filterPos][window.ENV.FilterPosSubindex]}`[0]
                            }
                            else if (window.ENV.drawmode == "string") {
                                if (window.ENV.cfilter.displaysSingle) {
                                    window.ENV.string = window.ENV.cfilter.chars
                                }
                                else {
                                    window.ENV.string = window.ENV.cfilter.chars[window.ENV.filterPos]
                                }
                            }
                        }
                        for (let filterid = 1; filterid < mode[2].filter.length; filterid++) {
                            if (Object.hasOwn(mode[2].filter[filterid], "function") && !mode[2].filter[filterid].allCanvas) {
                                mode[2].filter[filterid].function()
                            }
                        }
                        if (Object.hasOwn(window.ENV.cfilter, "chars")) {
                            window.ENV.frame += `<span style="opacity: ${gray / 255}">${window.ENV.string}</span>`
                            if (typeof window.ENV.cfilter.chars == typeof ['']) {
                                if (window.ENV.FilterPosSubindex >= window.ENV.cfilter.chars[window.ENV.filterPos].length - 1) {
                                    window.ENV.filterPos++;
                                    window.ENV.FilterPosSubindex = 0;
                                }
                                else {
                                    window.ENV.FilterPosSubindex++;
                                }
                            }
                            else {
                                    window.ENV.filterPos++;

                            }
                            if (window.ENV.filterPos >= window.ENV.cfilter.chars.length) {
                                window.ENV.filterPos = 0
                            }
                        }
                    }


                }
                if (Object.hasOwn(window.ENV.cfilter, "chars")) {
                    window.ENV.frame += "<br>"
                }
            }
            viewer.innerHTML = window.ENV.frame
        }

        for (let filterid = 0; filterid < mode[2].filter.length; filterid++) {
            if (Object.hasOwn(mode[2].filter[filterid], "function") && !!mode[2].filter[filterid].allCanvas) {
                mode[2].filter[filterid].function()
            }
        }
    }


}


document.querySelector("#prev").addEventListener("click", ()=>{
    Keys = Object.keys(modes)
    CurrentIndex = Keys.indexOf(Object.keys(modes).find(key => modes[key] === mode))
    PrevIndex = CurrentIndex - 1;
    if(PrevIndex < 0){
        PrevIndex = 0
    }
    setMode(modes[Keys[PrevIndex]])
    console.log(Keys[PrevIndex])
})


document.querySelector("#next").addEventListener("click", ()=>{
    Keys = Object.keys(modes)
    CurrentIndex = Keys.indexOf(Object.keys(modes).find(key => modes[key] === mode))
    NextIndex = CurrentIndex + 1;
    if(NextIndex >= Keys.length){
        NextIndex = Keys.length - 1
    }
    setMode(modes[Keys[NextIndex]])
    console.log(Keys[NextIndex])
})

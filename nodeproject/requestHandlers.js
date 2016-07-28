function start() {
    console.log("Request Handler for 'start' was caller");
}
function upload() {
    console.log("Request Handler for 'upload' was caller");
}

exports.start =start;
expors.upload= upload;

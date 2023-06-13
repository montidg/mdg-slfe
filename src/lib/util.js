let returnSuccess = (success, data) => {
    return new Response(JSON.stringify({success, data}));
}
let safeName = function (text) {
    return text.replaceAll(/[^A-Za-z0-9\-\_]/g, '');
}

export {
    returnSuccess,
    safeName
}
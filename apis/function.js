function isString(data) {
    if (typeof data === 'string')
        return true
}

function isArray(data) {
    if (Array.isArray(data))
        return true
}

function isObj(data) {
    if (typeof data === 'object')
        return true
}

function isBool(data) {
    if (typeof data === 'boolean')
        return true
}

function isFunc(data) {
    if (typeof data === 'function')
        return true
}

function isNumber(data) {
    if (typeof data === 'number')
        return true
}

function isNull(data) {
    if (data === null)
        return true
}
function isUndefined(data) {
    if (data === undefined)
        return true
}
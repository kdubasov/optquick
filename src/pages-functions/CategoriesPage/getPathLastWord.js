export const getPathLastWord = url => {
    return url.slice(url.lastIndexOf('/') + 1, url.length)
}
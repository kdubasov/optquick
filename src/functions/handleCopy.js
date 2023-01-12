export const handleCopy = value => {
    navigator.clipboard.writeText(value)
        .then(console.log)
}

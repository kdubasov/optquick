export const getCutWord = (word,length) => {
    if (word.length > length){
        return word.slice(0,length) + "..."
    }else{
        return word
    }
}
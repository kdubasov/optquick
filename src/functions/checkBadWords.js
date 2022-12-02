//плохие слова для комментов и товаров
const badWords = [
    "ху","жоп","пиз","упа","бл","еб","даун","гей","геи","пид","шлю","дон","ган","су","чмо"
];

//если строка включает плохие слоги то возращаем true если нет false
export const checkBadWords = str => {
    for (let word in badWords) {
        if (str.toLowerCase().includes(badWords[word])){
            return true;
        }
    }
    return false;
}
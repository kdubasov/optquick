export const getDate = milsec => {
    const date = new Date(milsec);
    const formatedDateDays = `${date.getDate()<10?('0' + date.getDate()):date.getDate()}-${(date.getMonth() + 1)<10?('0' + (date.getMonth() + 1)):(date.getMonth() + 1)}-${date.getFullYear()}`;

    const formatedDateTime = `${date.getHours()<10?('0' + date.getHours()):date.getHours()}:${date.getMinutes()<10?('0' + date.getMinutes()):date.getMinutes()}`;
    return formatedDateTime + ' ' + formatedDateDays
}
export const getDate = milsec => {

    const dateNoRedact = new Date(milsec);

    const date = dateNoRedact.toLocaleDateString();
    const time = dateNoRedact.toLocaleTimeString();

    return time + ' ' + date;
}

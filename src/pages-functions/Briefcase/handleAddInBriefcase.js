import {ref, set} from "firebase/database";
import {realtimeDB} from "../../database/firebase-connect";
import {getDate} from "../../functions/getDate";

export const handleAddInBriefcase = (e,elemId,userUid) => {
    e.preventDefault()

    const dbRef = ref(realtimeDB, `/users/${userUid}/briefcase/${elemId}`)

    return set(dbRef,{
        elemid: elemId,
        dateAdded: getDate(Date.now()),
    })
}
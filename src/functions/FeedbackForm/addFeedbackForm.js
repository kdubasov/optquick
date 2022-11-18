import {ref, set} from "firebase/database";
import {realtimeDB} from "../../database/firebase-connect";
import {getDate} from "../getDate";

//set data in database
export const addFeedbackForm = (email,message,cooperation) =>{

    const date = Date.now();

    const dbURL = `/forms/feedbackForm/${date + '-' + getDate(date)}`

    return set(ref(realtimeDB,dbURL),{
        email: email,
        message: message,
        date: getDate(date),
        id: date + '-' + getDate(date),
        cooperation: cooperation,
    })
}
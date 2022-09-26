import {remove,ref} from 'firebase/database'
import {realtimeDB} from "../../../database/firebase-connect";

export const handleDeleteCategory = url => {
    return remove(ref(realtimeDB,url))
}
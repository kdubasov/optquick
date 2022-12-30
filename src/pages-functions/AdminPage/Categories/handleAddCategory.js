import {realtimeDB} from "../../../database/firebase-connect";
import {set,ref} from "firebase/database";

export const handleAddCategory = (e,url,state,sub = "") =>{

    e.preventDefault()

    return set(ref(realtimeDB, `${url}/${state.id.trim()}`),{
        id: state.id.trim(),
        title: state.title,
        image: state.image,
        iconImage: state.iconImage,
        category: sub ? sub : "",
    })
};

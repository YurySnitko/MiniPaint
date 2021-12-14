import { database } from "./firebase";
import { child, get, push, ref, set } from "@firebase/database";
import { getToast } from "../lib/getToast";
import { UsersDataType } from "store/stores.types";

export const mainAPI = {
    createImageKey(userId: string | null) {
        return push(child(ref(database), `users/${userId}/images/`)).key     
    }, 
    uploadImage(userId: string | null, key: string | null, imageData: string) {
        return set(ref(database, `users/${userId}/images/${key}`), imageData)
    },
    getImage(userId: string | null): Promise<{[key: string]: string}>  {
        return get(child(ref(database), `users/${userId}/images/`))
            .then(snapshot => snapshot.exists() && snapshot.val())
            .catch(err => err && getToast(err));
    },
    getUsersData(): Promise<UsersDataType> {
        return get(child(ref(database), `users/`))
            .then(snapshot => snapshot.exists() && snapshot.val())
            .catch(err => err && getToast(err));
    },  
}
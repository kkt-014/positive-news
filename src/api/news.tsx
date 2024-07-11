import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase.ts";

export interface Article {
  id: string;
  title: string;
  publishedAt: string;
  author: string;
  imageUrl?: string;
  content: string;
}

const docRef = doc(db, "cities", "SF");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}

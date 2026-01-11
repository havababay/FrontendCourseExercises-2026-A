import {
    addDoc,
    collection, getDocs,
    query, updateDoc, doc, getDoc
} from "firebase/firestore";
import {
    firestore
} from "./config";

import type { Candidate } from "../src/candidates/candidate";
import { candidateConverter } from './candidateConverter';

export async function addCandidate(candidate: Candidate) {
    await addDoc(collection(firestore, "candidates").withConverter(candidateConverter), candidate);
}

export async function updateCandidate(candidate: Candidate): Promise<void> {
    const docRef = doc(firestore, "candidates", candidate.id).withConverter(candidateConverter);
    await updateDoc(docRef, { name: candidate.name, email: candidate.email });
}

export async function getCandidate(id: string): Promise<Candidate | null> {
    const docRef = doc(firestore, "candidates", id).withConverter(candidateConverter);
    const snap = await getDoc(docRef);
    return snap.exists() ? snap.data() : null;
}

export async function getCandidates(): Promise<Candidate[]> {
    const q = query(collection(firestore, "candidates").withConverter(candidateConverter));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => doc.data());
}

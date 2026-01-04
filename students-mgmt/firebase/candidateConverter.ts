import {
    FirestoreDataConverter,
    QueryDocumentSnapshot,
    SnapshotOptions
} from "firebase/firestore";
import {
    Candidate
} from "../src/candidates/candidate";

export const candidateConverter: FirestoreDataConverter < Candidate > = {
    toFirestore: (candidate: Candidate) => {
        return {
            name: candidate.name,
            email: candidate.email,
        };
    },
    fromFirestore: (
        snapshot: QueryDocumentSnapshot,
        options: SnapshotOptions
    ) => {
        const data = snapshot.data(options);
        return new Candidate(data.name, data.email, snapshot.id);
    },
};

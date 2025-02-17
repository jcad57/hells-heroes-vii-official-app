import { BusinessListData } from "@/data/types";
import { db } from "@/firebase/firebase";
import { collection, getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";

export function useFetchBusinessList() {
    const [businessList, setBusinessList] = useState<BusinessListData[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchBusinessList = async () => {
            setIsLoading(true);
            try {
                const querySnapshot = await getDocs(query(collection(db, "guide-to-hell-business-list")));
                const businessListData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    name: doc.data().name,
                    description: doc.data().description,
                    latitude: parseFloat(doc.data().latitude),
                    longitude: parseFloat(doc.data().longitude),
                }));
                setBusinessList(businessListData);

                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching schedule:", error);
                setIsLoading(false);
            }
        };
        fetchBusinessList();
    }, []);

    return { businessList, isLoading };
}

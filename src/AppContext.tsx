import { createContext, ReactNode, useContext, useState } from "react";
import { useQuery } from "react-query";
import { getCurrentUser } from "./api";
import { User } from "./types";

interface AppContextProps {
    currentUser?: User | null
}

const AppContext = createContext<AppContextProps>({} as AppContextProps);

export function AppProvider({ children }: { children: ReactNode }) {
    const [currentUser, setCurrentUser] = useState<User | null | undefined>(null);

    const { data, isLoading } = useQuery("getuser", getCurrentUser, {
        refetchOnWindowFocus: false, //refetch when window comes to focus
        refetchOnReconnect: false, //refetch when browser reconnects to server
        refetchOnMount: false, //refetch when component mounts
        onSuccess: ({data}) => {
            setCurrentUser(data)
        }
    })

    return (
        <AppContext.Provider value={{ currentUser }}>
            {!isLoading && children}
        </AppContext.Provider>
    )
}

export function useCurrentUser() {
    const { currentUser } = useContext(AppContext);

    return currentUser;
}
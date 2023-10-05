'use client'
import { ReactNode, createContext, useState } from "react";

export const AppContext = createContext({
    search: '',
    page: 0,
    type: "ALL" || "FAVORITES",
    setSearch: (value: string) => {},
    setPage: (value: number) => {},
    setType: (value: string) => {},
});

interface ProviderProps {
    children: ReactNode
}

export const AppContextProvider = ({ children }: ProviderProps) => {
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(0)
    const [type, setType] = useState('ALL')
    
    return (
        <AppContext.Provider value={{ search, setSearch, page, setPage, type, setType }}>
            {children}
        </AppContext.Provider>
    )
}
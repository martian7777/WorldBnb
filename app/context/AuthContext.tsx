"use client";

import {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
} from "react";
import { useRouter } from "next/navigation";

export interface AuthUser {
    id: string;
    name: string;
    email: string;
    avatar?: string;
    role: "guest" | "host";
    joinedAt: string;
    location?: string;
    bio?: string;
    phone?: string;
}

interface AuthContextValue {
    user: AuthUser | null;
    isLoading: boolean;
    login: (email: string, password: string) => Promise<{ ok: boolean; error?: string }>;
    signup: (name: string, email: string, password: string) => Promise<{ ok: boolean; error?: string }>;
    logout: () => void;
    updateUser: (updates: Partial<AuthUser>) => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

const STORAGE_KEY = "worldbnb_user";

const DEMO_USER: AuthUser = {
    id: "usr_demo_001",
    name: "Alex Johnson",
    email: "alex@example.com",
    avatar: undefined,
    role: "guest",
    joinedAt: "January 2024",
    location: "San Francisco, CA",
    bio: "Travel enthusiast. Always looking for the next adventure.",
    phone: "+1 (555) 234-5678",
};

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<AuthUser | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    // Rehydrate from localStorage
    useEffect(() => {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored) setUser(JSON.parse(stored));
        } catch {
            // ignore parse errors
        }
        setIsLoading(false);
    }, []);

    function persist(u: AuthUser | null) {
        if (u) localStorage.setItem(STORAGE_KEY, JSON.stringify(u));
        else localStorage.removeItem(STORAGE_KEY);
        setUser(u);
    }

    async function login(email: string, password: string) {
        setIsLoading(true);
        await new Promise((r) => setTimeout(r, 800)); // simulate network
        if (!email || !password) {
            setIsLoading(false);
            return { ok: false, error: "Email and password are required." };
        }
        if (password.length < 6) {
            setIsLoading(false);
            return { ok: false, error: "Password must be at least 6 characters." };
        }
        persist({ ...DEMO_USER, email, name: email.split("@")[0] });
        setIsLoading(false);
        return { ok: true };
    }

    async function signup(name: string, email: string, password: string) {
        setIsLoading(true);
        await new Promise((r) => setTimeout(r, 900));
        if (!name || !email || !password) {
            setIsLoading(false);
            return { ok: false, error: "All fields are required." };
        }
        if (password.length < 6) {
            setIsLoading(false);
            return { ok: false, error: "Password must be at least 6 characters." };
        }
        persist({ ...DEMO_USER, name, email, joinedAt: "March 2026" });
        setIsLoading(false);
        return { ok: true };
    }

    function logout() {
        persist(null);
    }

    function updateUser(updates: Partial<AuthUser>) {
        if (!user) return;
        const updated = { ...user, ...updates };
        persist(updated);
    }

    return (
        <AuthContext.Provider value={{ user, isLoading, login, signup, logout, updateUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
    return ctx;
}

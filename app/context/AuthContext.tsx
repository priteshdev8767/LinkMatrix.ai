"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { insforge } from "@/app/lib/insforge";
import { UserSchema } from "@insforge/shared-schemas";

interface AuthContextType {
  user: UserSchema | null;
  loading: boolean;
  checkUser: () => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  checkUser: async () => {},
  signOut: async () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserSchema | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const checkUser = async () => {
    try {
      const { data, error } = await insforge.auth.getCurrentUser();
      
      if (data?.user) {
        const currentUser = data.user;
        
        // Check if user exists in our custom users table
        try {
          const { data: dbUser, error: selectError } = await insforge.database
            .from("users")
            .select("*")
            .eq("id", currentUser.id)
            .maybeSingle();

          if (!dbUser && !selectError) {
            // First time sign-in: insert their details into the users table
            const defaultName = (currentUser.profile as any)?.name || currentUser.email?.split("@")[0] || "User";
            
            await insforge.database.from("users").insert([
              {
                id: currentUser.id,
                email: currentUser.email,
                name: defaultName,
                email_verified: currentUser.emailVerified || false,
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString(),
              },
            ]);
            console.log("Successfully saved first-time user record in database users table.");
          }
        } catch (dbError) {
          console.error("Database query failed during verification check:", dbError);
        }

        setUser(currentUser);
      } else {
        setUser(null);
      }
    } catch (err) {
      console.error("Error checking current user session:", err);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    setLoading(true);
    try {
      await insforge.auth.signOut();
      setUser(null);
    } catch (err) {
      console.error("Error signing out:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, checkUser, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

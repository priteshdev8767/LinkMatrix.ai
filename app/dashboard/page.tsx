"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/app/context/AuthContext";
import { insforge } from "@/app/lib/insforge";
import { Bot, LogOut, User, Users, Shield, Calendar, Mail, Loader2, Sparkles } from "lucide-react";

interface DbUser {
  id: string;
  email: string;
  name: string;
  email_verified: boolean;
  created_at: string;
}

export default function Dashboard() {
  const router = useRouter();
  const { user, loading, signOut } = useAuth();
  const [dbUsers, setDbUsers] = useState<DbUser[]>([]);
  const [fetchingUsers, setFetchingUsers] = useState(true);

  // Redirect if not logged in
  useEffect(() => {
    if (!loading && !user) {
      router.push("/sign-in");
    }
  }, [user, loading, router]);

  // Fetch registered users list from custom database table
  useEffect(() => {
    if (user) {
      const fetchDbUsers = async () => {
        setFetchingUsers(true);
        try {
          const { data, error } = await insforge.database
            .from("users")
            .select("*")
            .order("created_at", { ascending: false });
          
          if (!error && data) {
            setDbUsers(data);
          } else {
            console.error("Error fetching users from DB:", error);
          }
        } catch (err) {
          console.error("Failed to query users table:", err);
        } finally {
          setFetchingUsers(false);
        }
      };

      fetchDbUsers();
    }
  }, [user]);

  if (loading || (!user && !loading)) {
    return (
      <div className="relative min-h-screen bg-[#030014] text-slate-100 flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <Loader2 className="w-10 h-10 animate-spin text-purple-500" />
          <p className="text-sm text-slate-400 font-medium">Verifying authorization session...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#030014] text-slate-100 overflow-x-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-pink-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Nav */}
      <header className="sticky top-0 z-40 bg-[#030014]/70 backdrop-blur-md border-b border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors">
            <Bot className="w-8 h-8 text-purple-500" />
            <span className="text-lg font-bold tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              LinkMatrix<span className="text-purple-400">.ai</span>
            </span>
          </Link>

          <button
            onClick={() => {
              signOut();
              router.push("/");
            }}
            className="flex items-center space-x-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-4 py-2 rounded-xl border border-white/5"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="mb-10">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent flex items-center gap-2">
            Dashboard <Sparkles className="w-5 h-5 text-purple-400" />
          </h1>
          <p className="text-slate-400 mt-2">Manage your account status and view registered database users.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* User Info Card */}
          <div className="lg:col-span-1 bg-[#0b0720]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-[0_0_30px_rgba(139,92,246,0.05)] h-fit">
            <div className="flex items-center space-x-4 mb-6 pb-6 border-b border-white/5">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                <User className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-200">
                  {(user?.profile as any)?.name || user?.email?.split("@")[0] || "User Profile"}
                </h3>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20 mt-1">
                  Active Session
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-500 font-semibold mb-1">
                  User ID
                </label>
                <div className="text-sm font-mono text-slate-300 bg-[#030014]/50 p-2.5 rounded-xl border border-white/5 break-all select-all">
                  {user?.id}
                </div>
              </div>

              <div className="flex items-start space-x-3 text-sm">
                <Mail className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-400">Email Address</span>
                  <span className="text-slate-200 font-medium">{user?.email}</span>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-sm">
                <Shield className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-400">Verification Status</span>
                  <span className={`inline-flex items-center space-x-1 font-medium ${user?.emailVerified ? "text-emerald-400" : "text-amber-400"}`}>
                    <span>{user?.emailVerified ? "Verified" : "Pending Verification"}</span>
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-sm">
                <Calendar className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-400">Account Created</span>
                  <span className="text-slate-200 font-medium">
                    {user?.createdAt ? new Date(user.createdAt).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "long",
                      day: "numeric"
                    }) : "N/A"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Database Users List Card */}
          <div className="lg:col-span-2 bg-[#0b0720]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-[0_0_30px_rgba(139,92,246,0.05)]">
            <div className="flex items-center justify-between mb-6 pb-6 border-b border-white/5">
              <div className="flex items-center space-x-3">
                <Users className="w-6 h-6 text-purple-400" />
                <h3 className="text-lg font-semibold text-slate-200">Registered Users (PostgreSQL Table)</h3>
              </div>
              <span className="text-xs bg-purple-500/10 text-purple-400 border border-purple-500/20 px-2.5 py-1 rounded-full font-semibold">
                {dbUsers.length} total
              </span>
            </div>

            {fetchingUsers ? (
              <div className="flex flex-col items-center justify-center py-12 space-y-3">
                <Loader2 className="w-8 h-8 animate-spin text-purple-500" />
                <span className="text-sm text-slate-500">Querying database table...</span>
              </div>
            ) : dbUsers.length === 0 ? (
              <div className="text-center py-12 text-slate-500">
                No users stored in the database.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/5 text-slate-400 text-xs uppercase tracking-wider font-semibold">
                      <th className="py-3 px-4">Name</th>
                      <th className="py-3 px-4">Email</th>
                      <th className="py-3 px-4">Verified</th>
                      <th className="py-3 px-4 text-right">Signed Up</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-sm text-slate-300">
                    {dbUsers.map((dbUser) => (
                      <tr key={dbUser.id} className="hover:bg-white/5 transition-colors">
                        <td className="py-3.5 px-4 font-medium text-slate-200">
                          {dbUser.name}
                          {dbUser.id === user?.id && (
                            <span className="ml-2 inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                              You
                            </span>
                          )}
                        </td>
                        <td className="py-3.5 px-4 font-mono text-xs">{dbUser.email}</td>
                        <td className="py-3.5 px-4">
                          <span className={`px-2 py-0.5 rounded text-xs font-semibold ${dbUser.email_verified ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" : "bg-amber-500/10 text-amber-400 border border-amber-500/20"} border`}>
                            {dbUser.email_verified ? "Yes" : "No"}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-right text-slate-400 text-xs">
                          {new Date(dbUser.created_at).toLocaleDateString(undefined, {
                            month: "short",
                            day: "numeric",
                            hour: "2-digit",
                            minute: "2-digit"
                          })}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

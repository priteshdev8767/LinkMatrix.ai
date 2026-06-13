"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { insforge } from "@/app/lib/insforge";
import { useAuth } from "@/app/context/AuthContext";
import { Bot, Mail, Lock, ArrowRight, Loader2, AlertCircle } from "lucide-react";

function SignInForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user, checkUser } = useAuth();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  // Check for verification redirect messages
  useEffect(() => {
    const status = searchParams.get("insforge_status");
    const type = searchParams.get("insforge_type");
    const err = searchParams.get("insforge_error");

    if (status === "success" && type === "verify_email") {
      setMessage("Your email has been verified successfully! You can now sign in.");
    } else if (status === "error" && err) {
      setError(decodeURIComponent(err));
    }
  }, [searchParams]);

  // Redirect to dashboard if already logged in
  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user, router]);

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    setLoading(true);
    setError(null);
    setMessage(null);

    const { data, error: authError } = await insforge.auth.signInWithPassword({
      email,
      password,
    });

    if (authError) {
      setError(authError.message || "Invalid email or password.");
      setLoading(false);
    } else {
      // Re-fetch current user context (which inserts them into DB if it is their first login)
      await checkUser();
      router.push("/dashboard");
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    setError(null);
    setMessage(null);

    const redirectTo = window.location.origin + "/dashboard";
    const { error: authError } = await insforge.auth.signInWithOAuth("google", {
      redirectTo,
    });

    if (authError) {
      setError(authError.message || "Failed to sign in with Google.");
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md z-10 transition-all duration-300">
      {/* Back Link */}
      <div className="mb-6 text-center">
        <Link href="/" className="inline-flex items-center space-x-2 text-slate-400 hover:text-white transition-colors duration-200 group">
          <Bot className="w-6 h-6 text-purple-400" />
          <span className="text-lg font-bold tracking-tight">
            LinkMatrix<span className="text-purple-400">.ai</span>
          </span>
        </Link>
      </div>

      {/* Card */}
      <div className="bg-[#0b0720]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-[0_0_50px_rgba(139,92,246,0.15)]">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
            Welcome Back
          </h1>
          <p className="text-sm text-slate-400 mt-2">
            Sign in to manage your AI communications
          </p>
        </div>

        {/* Success message */}
        {message && (
          <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-sm flex items-start space-x-2">
            <span className="mt-0.5">✓</span>
            <span>{message}</span>
          </div>
        )}

        {/* Error display */}
        {error && (
          <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/25 text-rose-400 text-sm flex items-start space-x-2">
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        {/* OAuth button */}
        <button
          onClick={handleGoogleSignIn}
          disabled={loading}
          className="w-full py-3 px-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-medium transition-all duration-200 flex items-center justify-center space-x-3 group disabled:opacity-50 disabled:cursor-not-allowed mb-6"
        >
          <svg className="w-5 h-5 group-hover:scale-105 transition-transform" viewBox="0 0 24 24">
            <path
              fill="#EA4335"
              d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.336 0 3.323 2.682 1.409 6.614l3.857 3.151z"
            />
            <path
              fill="#4285F4"
              d="M23.864 12.273c0-.818-.073-1.609-.209-2.373H12v4.582h6.664a5.7 5.7 0 0 1-2.473 3.736v3.109h3.991c2.336-2.145 3.682-5.3 3.682-9.054z"
            />
            <path
              fill="#FBBC05"
              d="M5.266 14.235A7.16 7.16 0 0 1 4.909 12c0-.791.136-1.555.357-2.265L1.409 6.584A11.942 11.942 0 0 0 0 12c0 1.927.455 3.755 1.255 5.373l4.011-3.138z"
            />
            <path
              fill="#34A853"
              d="M12 24c3.245 0 5.973-1.073 7.964-2.909l-3.991-3.109c-1.109.745-2.527 1.191-3.973 1.191-3.073 0-5.673-2.082-6.6-4.891L1.518 17.4A11.961 11.961 0 0 0 12 24z"
            />
          </svg>
          <span>Continue with Google</span>
        </button>

        <div className="relative flex items-center justify-center mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/5"></div>
          </div>
          <span className="relative px-3 bg-[#0c0821] text-xs text-slate-500 uppercase tracking-wider">
            Or Sign In with Email
          </span>
        </div>

        {/* Email Login Form */}
        <form onSubmit={handleEmailSignIn} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full pl-11 pr-4 py-3 bg-[#030014]/50 border border-white/10 rounded-xl focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none text-slate-200 placeholder-slate-600 transition-colors"
                disabled={loading}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-11 pr-4 py-3 bg-[#030014]/50 border border-white/10 rounded-xl focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none text-slate-200 placeholder-slate-600 transition-colors"
                disabled={loading}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-4 py-3 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold transition-all duration-200 flex items-center justify-center space-x-2 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] disabled:opacity-50 disabled:cursor-not-allowed group"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Signing In...</span>
              </>
            ) : (
              <>
                <span>Sign In</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-slate-400">
          Don't have an account?{" "}
          <Link href="/sign-up" className="text-purple-400 hover:text-purple-300 font-semibold transition-colors duration-150">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function SignIn() {
  return (
    <div className="relative min-h-screen bg-[#030014] text-slate-100 flex items-center justify-center p-4 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_55%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-pink-500/10 rounded-full blur-[100px] pointer-events-none" />

      <Suspense fallback={
        <div className="flex flex-col items-center space-y-4 z-10">
          <Loader2 className="w-10 h-10 animate-spin text-purple-500" />
          <p className="text-sm text-slate-400 font-medium">Loading...</p>
        </div>
      }>
        <SignInForm />
      </Suspense>
    </div>
  );
}

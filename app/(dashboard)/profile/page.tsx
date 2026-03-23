"use client";

import { useEffect, useState } from "react";
import { User, Save } from "lucide-react";
import { getMe } from "@/lib/org-member-auth";

type ProfileDraft = {
  displayName: string;
  title: string;
  phone: string;
  timezone: string;
  bio: string;
};

type Account = {
  email?: string;
  fullName?: string;
  orgName?: string;
};

const STORAGE_KEY = "asm.profile.draft";

export default function ProfilePage() {
  const [loading, setLoading] = useState(true);
  const [saved, setSaved] = useState(false);
  const [account, setAccount] = useState<Account>({ email: '-', fullName: '-', orgName: '-' });
  const [draft, setDraft] = useState<ProfileDraft>({
    displayName: "",
    title: "",
    phone: "",
    timezone: "",
    bio: "",
  });

  // Save profile function
  const saveProfile = () => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(draft));
      setSaved(true);
      setTimeout(() => setSaved(false), 3000); // Reset saved state after 3 seconds
    } catch (error) {
      console.error("Failed to save profile:", error);
    }
  };

  // Fetch user profile data
  useEffect(() => {
    // Load draft from storage
    try {
      const savedDraft = localStorage.getItem(STORAGE_KEY);
      if (savedDraft) {
        setDraft(JSON.parse(savedDraft));
      }
    } catch {}

    async function fetchProfile() {
      try {
        const userData = await getMe();
        if (userData?.user) {
          setAccount({
            email: userData.user.email || '-',
            fullName: userData.user.fullName || userData.user.email || '-',
            orgName: userData.memberships?.[0]?.org?.name || 'No organization',
          });
        }
      } catch (error) {
        console.error("Failed to fetch profile:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProfile();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Display loading state
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
            <User className="w-8 h-8" />
            Profile
          </h1>
          <p className="text-slate-600 dark:text-slate-300">Manage your account details and personal preferences</p>
        </div>

        <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-md border border-slate-200 dark:border-zinc-800 p-6 mb-6">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Account</h2>
          {loading ? (
            <p className="text-sm text-slate-600 dark:text-slate-300">Loading profile...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-slate-600 dark:text-slate-400">Email</p>
                <p className="text-slate-900 dark:text-white font-medium">{account?.email || "-"}</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400">Full Name</p>
                <p className="text-slate-900 dark:text-white font-medium">{account?.fullName || "-"}</p>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400">Organization</p>
                <p className="text-slate-900 dark:text-white font-medium">{account?.orgName || "-"}</p>
              </div>
            </div>
          )}
        </div>

        <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-md border border-slate-200 dark:border-zinc-800 p-6">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Personal Details</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Display name</label>
              <input
                className="w-full bg-white dark:bg-zinc-900 text-slate-900 dark:text-white px-3 py-2 rounded-lg border border-slate-200 dark:border-zinc-800"
                value={draft.displayName}
                onChange={(e) => setDraft((prev) => ({ ...prev, displayName: e.target.value }))}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Title</label>
              <input
                className="w-full bg-white dark:bg-zinc-900 text-slate-900 dark:text-white px-3 py-2 rounded-lg border border-slate-200 dark:border-zinc-800"
                value={draft.title}
                onChange={(e) => setDraft((prev) => ({ ...prev, title: e.target.value }))}
                placeholder="Scrum Master"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Phone</label>
              <input
                className="w-full bg-white dark:bg-zinc-900 text-slate-900 dark:text-white px-3 py-2 rounded-lg border border-slate-200 dark:border-zinc-800"
                value={draft.phone}
                onChange={(e) => setDraft((prev) => ({ ...prev, phone: e.target.value }))}
                placeholder="+1 000 000 0000"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Timezone</label>
              <input
                className="w-full bg-white dark:bg-zinc-900 text-slate-900 dark:text-white px-3 py-2 rounded-lg border border-slate-200 dark:border-zinc-800"
                value={draft.timezone}
                onChange={(e) => setDraft((prev) => ({ ...prev, timezone: e.target.value }))}
                placeholder="Asia/Kolkata"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Bio</label>
              <textarea
                className="w-full bg-white dark:bg-zinc-900 text-slate-900 dark:text-white px-3 py-2 rounded-lg border border-slate-200 dark:border-zinc-800"
                rows={4}
                value={draft.bio}
                onChange={(e) => setDraft((prev) => ({ ...prev, bio: e.target.value }))}
                placeholder="Add your profile details..."
              />
            </div>
          </div>

          <div className="mt-5 flex items-center gap-3">
            <button
              type="button"
              onClick={saveProfile}
              className="bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-200 text-white dark:text-black font-semibold py-2 px-4 rounded-lg transition inline-flex items-center gap-2"
            >
              <Save className="w-4 h-4" />
              Save Profile
            </button>
            {saved ? <p className="text-sm text-green-700 dark:text-green-300">Saved</p> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

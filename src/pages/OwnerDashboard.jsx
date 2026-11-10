import { useState } from "react";
import { Users, IndianRupee, ShieldCheck, Plus } from "lucide-react";

export default function OwnerDashboard({ token }) {
  // For now, these are UI placeholders. You can connect them to backend APIs later.
  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-card border border-line flex items-center gap-4">
          <div className="h-12 w-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center"><IndianRupee size={24} /></div>
          <div><p className="text-xs text-muted font-bold uppercase">Platform Revenue</p><h3 className="text-2xl font-extrabold">₹1,45,000</h3></div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-card border border-line flex items-center gap-4">
          <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center"><Users size={24} /></div>
          <div><p className="text-xs text-muted font-bold uppercase">Active Admins</p><h3 className="text-2xl font-extrabold">3</h3></div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-card border border-line flex items-center gap-4">
          <div className="h-12 w-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center"><ShieldCheck size={24} /></div>
          <div><p className="text-xs text-muted font-bold uppercase">Verified Pros</p><h3 className="text-2xl font-extrabold">12</h3></div>
        </div>
      </div>

      {/* Admin Management (Placeholder) */}
      <div className="bg-white rounded-2xl shadow-card border border-line overflow-hidden">
        <div className="p-5 border-b border-line flex justify-between items-center">
          <h2 className="text-lg font-bold">Admin Access Control</h2>
          <button className="flex items-center gap-2 text-sm font-semibold text-pink-600 hover:underline">
            <Plus size={16} /> Grant Admin Access
          </button>
        </div>
        <div className="p-6">
          <p className="text-muted text-sm mb-4">Manage who has administrative rights to the platform.</p>
          <div className="bg-ivory p-4 rounded-xl border border-line flex justify-between items-center">
            <div>
              <p className="font-bold">Manager One (admin@kaamlink.in)</p>
              <p className="text-xs text-green-600 font-semibold">Active Admin</p>
            </div>
            <button className="text-sm text-red-500 font-semibold border border-red-200 px-4 py-2 rounded-lg hover:bg-red-50">Revoke Access</button>
          </div>
        </div>
      </div>

      {/* Service Management (Placeholder) */}
      <div className="bg-white rounded-2xl shadow-card border border-line p-6">
        <h2 className="text-lg font-bold mb-4">Platform Master Controls</h2>
        <div className="flex gap-4">
          <button className="bg-ink text-white px-6 py-3 rounded-xl font-semibold">Add New Service</button>
          <button className="bg-ink text-white px-6 py-3 rounded-xl font-semibold">Update Pricing</button>
        </div>
      </div>
    </div>
  );
}
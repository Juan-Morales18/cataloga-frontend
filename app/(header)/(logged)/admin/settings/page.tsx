import { AdminLayout } from "@/components/admin/admin-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Save, Bell, Shield, Palette } from "lucide-react";

export default function AdminSettingsPage() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-text-primary">
            Configuración
          </h1>
          <p className="text-text-secondary">
            Gestiona la configuración y preferencias de tu aplicación
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {/* General Settings */}
            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="text-lg font-semibold text-text-primary mb-4">
                General Settings
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-text-primary mb-2 block">
                    Site Name
                  </label>
                  <Input defaultValue="Tierrita" />
                </div>
                <div>
                  <label className="text-sm font-medium text-text-primary mb-2 block">
                    Site Description
                  </label>
                  <textarea
                    defaultValue="Beautiful handcrafted ceramics and pottery"
                    rows={3}
                    className="flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-text-primary mb-2 block">
                    Contact Email
                  </label>
                  <Input type="email" defaultValue="contact@tierrita.com" />
                </div>
              </div>
            </div>

            {/* Notification Settings */}
            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notifications
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-text-primary">
                      Email Notifications
                    </p>
                    <p className="text-xs text-text-secondary">
                      Receive email updates
                    </p>
                  </div>
                  <input type="checkbox" defaultChecked className="rounded" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-text-primary">
                      Order Alerts
                    </p>
                    <p className="text-xs text-text-secondary">
                      Get notified of new orders
                    </p>
                  </div>
                  <input type="checkbox" defaultChecked className="rounded" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-text-primary">
                      User Registration
                    </p>
                    <p className="text-xs text-text-secondary">
                      Notify when users sign up
                    </p>
                  </div>
                  <input type="checkbox" className="rounded" />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Security Settings */}
            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Security
              </h3>
              <div className="space-y-4">
                <Button variant="outline" className="w-full">
                  Change Password
                </Button>
                <Button variant="outline" className="w-full">
                  Two-Factor Auth
                </Button>
                <Button variant="outline" className="w-full">
                  Session Management
                </Button>
              </div>
            </div>

            {/* Appearance Settings */}
            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
                <Palette className="h-5 w-5" />
                Appearance
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-text-primary mb-2 block">
                    Theme
                  </label>
                  <select className="flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]">
                    <option>Light</option>
                    <option>Dark</option>
                    <option>System</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-text-primary mb-2 block">
                    Language
                  </label>
                  <select className="flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]">
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Save Button */}
            <Button className="w-full gap-2">
              <Save className="h-4 w-4" />
              Save Settings
            </Button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

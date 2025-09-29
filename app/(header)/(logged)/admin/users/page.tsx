import { AdminLayout } from "@/components/admin/admin-layout";
import { Users, UserPlus, UserCheck, UserX } from "lucide-react";

export default function AdminUsersPage() {
  const users = [
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      role: "Admin",
      status: "Active",
      lastLogin: "2 hours ago",
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      role: "User",
      status: "Active",
      lastLogin: "1 day ago",
    },
    {
      id: "3",
      name: "Bob Johnson",
      email: "bob@example.com",
      role: "User",
      status: "Inactive",
      lastLogin: "1 week ago",
    },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-text-primary">Usuarios</h1>
          <p className="text-text-secondary">
            Gestiona cuentas de usuario y permisos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-card rounded-lg border border-border p-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-text-secondary">
                  Total Usuarios
                </p>
                <p className="text-2xl font-bold text-text-primary">1,234</p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg border border-border p-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 bg-success/10 rounded-lg flex items-center justify-center">
                <UserCheck className="h-6 w-6 text-success" />
              </div>
              <div>
                <p className="text-sm font-medium text-text-secondary">
                  Usuarios Activos
                </p>
                <p className="text-2xl font-bold text-text-primary">1,180</p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg border border-border p-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 bg-warning/10 rounded-lg flex items-center justify-center">
                <UserX className="h-6 w-6 text-warning" />
              </div>
              <div>
                <p className="text-sm font-medium text-text-secondary">
                  Usuarios Inactivos
                </p>
                <p className="text-2xl font-bold text-text-primary">54</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-lg border border-border">
          <div className="p-6 border-b border-border">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-text-primary">
                User Management
              </h2>
              <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-600">
                <UserPlus className="h-4 w-4" />
                Add User
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-border">
                <tr>
                  <th className="text-left p-4 text-sm font-medium text-text-secondary">
                    User
                  </th>
                  <th className="text-left p-4 text-sm font-medium text-text-secondary">
                    Role
                  </th>
                  <th className="text-left p-4 text-sm font-medium text-text-secondary">
                    Status
                  </th>
                  <th className="text-left p-4 text-sm font-medium text-text-secondary">
                    Last Login
                  </th>
                  <th className="text-left p-4 text-sm font-medium text-text-secondary">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr
                    key={user.id}
                    className="border-b border-border hover:bg-muted/50"
                  >
                    <td className="p-4">
                      <div>
                        <p className="font-medium text-text-primary">
                          {user.name}
                        </p>
                        <p className="text-sm text-text-secondary">
                          {user.email}
                        </p>
                      </div>
                    </td>
                    <td className="p-4">
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          user.role === "Admin"
                            ? "bg-primary/10 text-primary"
                            : "bg-muted text-text-secondary"
                        }`}
                      >
                        {user.role}
                      </span>
                    </td>
                    <td className="p-4">
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          user.status === "Active"
                            ? "bg-success/10 text-success"
                            : "bg-warning/10 text-warning"
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-text-secondary">
                      {user.lastLogin}
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <button className="text-sm text-primary hover:text-primary-600">
                          Edit
                        </button>
                        <button className="text-sm text-destructive hover:text-destructive-600">
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

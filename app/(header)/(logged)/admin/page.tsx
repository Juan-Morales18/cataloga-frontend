import { AdminLayout } from "@/components/admin/admin-layout";
import { Package, Users, DollarSign, TrendingUp } from "lucide-react";

export default function AdminDashboard() {
  const stats = [
    {
      title: "Total Productos",
      value: "24",
      change: "+2 este mes",
      icon: Package,
    },
    {
      title: "Usuarios Activos",
      value: "1,234",
      change: "+12% del mes pasado",
      icon: Users,
    },
    {
      title: "Ingresos",
      value: "$12,345",
      change: "+8% del mes pasado",
      icon: DollarSign,
    },
    {
      title: "Crecimiento",
      value: "23%",
      change: "+3% del mes pasado",
      icon: TrendingUp,
    },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-text-primary">
            Panel de Control
          </h1>
          <p className="text-text-secondary">
            Bienvenido al panel de administración de Tierrita
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="bg-card rounded-lg border border-border p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-text-secondary">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold text-text-primary">
                    {stat.value}
                  </p>
                  <p className="text-xs text-success">{stat.change}</p>
                </div>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-card rounded-lg border border-border p-6">
            <h3 className="text-lg font-semibold text-text-primary mb-4">
              Actividad Reciente
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 bg-success rounded-full"></div>
                <p className="text-sm text-text-secondary">
                  Nuevo producto "Tazón Artesanal" fue agregado
                </p>
                <span className="text-xs text-text-muted ml-auto">
                  hace 2 horas
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 bg-primary rounded-full"></div>
                <p className="text-sm text-text-secondary">
                  Producto "Jarrón de Cerámica" fue actualizado
                </p>
                <span className="text-xs text-text-muted ml-auto">
                  hace 4 horas
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 bg-warning rounded-full"></div>
                <p className="text-sm text-text-secondary">
                  Usuario "john@example.com" se registró
                </p>
                <span className="text-xs text-text-muted ml-auto">
                  hace 6 horas
                </span>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg border border-border p-6">
            <h3 className="text-lg font-semibold text-text-primary mb-4">
              Acciones Rápidas
            </h3>
            <div className="space-y-3">
              <a
                href="/admin/products"
                className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors"
              >
                <Package className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-text-primary">
                  Gestionar Productos
                </span>
              </a>
              <a
                href="/admin/users"
                className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors"
              >
                <Users className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-text-primary">
                  Gestionar Usuarios
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

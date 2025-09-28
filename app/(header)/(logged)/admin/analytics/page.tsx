import { AdminLayout } from "@/components/admin/admin-layout";
import { BarChart3, TrendingUp, Eye, ShoppingCart } from "lucide-react";

export default function AdminAnalyticsPage() {
  const analytics = [
    {
      title: "Total Views",
      value: "12,345",
      change: "+12%",
      icon: Eye,
    },
    {
      title: "Conversion Rate",
      value: "3.2%",
      change: "+0.5%",
      icon: TrendingUp,
    },
    {
      title: "Cart Abandonment",
      value: "68%",
      change: "-2%",
      icon: ShoppingCart,
    },
    {
      title: "Revenue Growth",
      value: "24%",
      change: "+8%",
      icon: BarChart3,
    },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-text-primary">Analíticas</h1>
          <p className="text-text-secondary">
            Rastrea el rendimiento de tu negocio y obtén insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {analytics.map((stat) => (
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
              Sales Overview
            </h3>
            <div className="h-64 flex items-center justify-center text-text-secondary">
              <p>Chart placeholder - Sales data visualization</p>
            </div>
          </div>

          <div className="bg-card rounded-lg border border-border p-6">
            <h3 className="text-lg font-semibold text-text-primary mb-4">
              Top Products
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-text-secondary">
                  Artisan Ceramic Bowl
                </span>
                <span className="text-sm font-medium text-text-primary">
                  $2,450
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-text-secondary">
                  Traditional Pottery Vase
                </span>
                <span className="text-sm font-medium text-text-primary">
                  $1,890
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-text-secondary">
                  Handwoven Textile
                </span>
                <span className="text-sm font-medium text-text-primary">
                  $1,234
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-lg border border-border p-6">
          <h3 className="text-lg font-semibold text-text-primary mb-4">
            Recent Activity
          </h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 bg-success rounded-full"></div>
              <p className="text-sm text-text-secondary">
                New order #1234 for $89.99
              </p>
              <span className="text-xs text-text-muted ml-auto">
                5 minutes ago
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 bg-primary rounded-full"></div>
              <p className="text-sm text-text-secondary">
                Product "Ceramic Bowl" was updated
              </p>
              <span className="text-xs text-text-muted ml-auto">
                1 hour ago
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 bg-warning rounded-full"></div>
              <p className="text-sm text-text-secondary">
                User "jane@example.com" signed up
              </p>
              <span className="text-xs text-text-muted ml-auto">
                2 hours ago
              </span>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

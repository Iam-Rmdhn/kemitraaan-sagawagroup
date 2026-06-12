import { TrendingDown, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type DashboardMetric = {
  label: string;
  value: string | number;
  trend?: string;
  trendDirection?: "up" | "down";
  footerTitle: string;
  footerDescription: string;
};

export function DashboardSectionCards({ metrics }: { metrics: DashboardMetric[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-linear-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      {metrics.map((metric) => {
        const TrendIcon = metric.trendDirection === "down" ? TrendingDown : TrendingUp;

        return (
          <Card key={metric.label} className="@container/card">
            <CardHeader>
              <CardDescription>{metric.label}</CardDescription>
              <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                {metric.value}
              </CardTitle>
              {metric.trend && (
                <CardAction>
                  <Badge variant="outline">
                    <TrendIcon />
                    {metric.trend}
                  </Badge>
                </CardAction>
              )}
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1.5 text-sm">
              <div className="line-clamp-1 flex gap-2 font-medium">
                {metric.footerTitle}
                <TrendIcon />
              </div>
              <div className="text-muted-foreground">{metric.footerDescription}</div>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}

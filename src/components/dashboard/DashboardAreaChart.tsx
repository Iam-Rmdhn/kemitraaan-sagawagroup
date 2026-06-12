"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { formatRupiah } from "@/lib/utils";

type ChartPoint = {
  date: string;
  value: number;
};

export function DashboardAreaChart({
  title,
  description,
  data,
  valueLabel,
}: {
  title: string;
  description: string;
  data: ChartPoint[];
  valueLabel: string;
}) {
  const [timeRange, setTimeRange] = React.useState("90d");
  const filteredData = React.useMemo(() => {
    if (data.length === 0) return [];

    const referenceDate = new Date(data[data.length - 1].date);
    const daysToSubtract = timeRange === "7d" ? 7 : timeRange === "30d" ? 30 : 90;
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);

    return data.filter((item) => new Date(item.date) >= startDate);
  }, [data, timeRange]);

  return (
    <div className="px-4 lg:px-6">
      <Card className="@container/card">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>
            <span className="hidden @[540px]/card:block">{description}</span>
            <span className="@[540px]/card:hidden">{valueLabel}</span>
          </CardDescription>
          <CardAction>
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-40" aria-label="Pilih periode">
                <SelectValue placeholder="3 bulan terakhir" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="90d">3 bulan terakhir</SelectItem>
                  <SelectItem value="30d">30 hari terakhir</SelectItem>
                  <SelectItem value="7d">7 hari terakhir</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </CardAction>
        </CardHeader>
        <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
          <div className="h-62.5 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={filteredData}>
                <defs>
                  <linearGradient id="dashboardFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.9} />
                    <stop offset="95%" stopColor="var(--primary)" stopOpacity={0.08} />
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} stroke="var(--border)" />
                <XAxis
                  dataKey="date"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  minTickGap={32}
                  tickFormatter={(value) =>
                    new Date(value).toLocaleDateString("id-ID", {
                      month: "short",
                      day: "numeric",
                    })
                  }
                />
                <Tooltip
                  cursor={false}
                  content={({ active, payload, label }) => {
                    if (!active || !payload?.length) return null;

                    return (
                      <div className="rounded-lg border border-border bg-background p-2 text-sm shadow-sm">
                        <div className="font-medium">
                          {new Date(String(label)).toLocaleDateString("id-ID", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </div>
                        <div className="text-muted-foreground">
                          {valueLabel}: {formatRupiah(Number(payload[0].value ?? 0))}
                        </div>
                      </div>
                    );
                  }}
                />
                <Area
                  dataKey="value"
                  type="natural"
                  fill="url(#dashboardFill)"
                  stroke="var(--primary)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

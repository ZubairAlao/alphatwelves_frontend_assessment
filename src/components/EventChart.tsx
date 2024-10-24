import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { revenueData } from "@/constants";
import {
  ChartConfig,
  ChartContainer,
} from "@/components/ui/chart";
import { ImageCarousel } from "./ImageCarousel";

const chartConfig = {
  Month: {
    label: "Months",
    color: "bg-blue-500",
  },
} satisfies ChartConfig;

const EventChart = () => {
  return (
    <section className="py-6 container">
      <p className="text-xl font-semibold mb-4">Event Registrations per month</p>
      <div className="space-y-4 lg:space-y-0 lg:flex justify-between  items-center lg:h-[350px] w-full">
        <ChartContainer config={chartConfig} className="border-2 dark:border-none dark:bg-background-dark py-6 lg:min-h-[320px] w-full lg:max-w-[500px]">
          <BarChart
            accessibilityLayer
            data={revenueData} 
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              fontSize={8}
              tick={{ fontSize: 10 }}
              tickFormatter={(value) => value.slice(0, 2)}
            />
            <YAxis dataKey="revenue" tick={{ fontSize: 10 }}/>
            <Bar dataKey="revenue" fill="#3b82f6">
            </Bar>
          </BarChart>
        </ChartContainer>
        <ImageCarousel />
      </div>
    </section>
  );
};

export default EventChart;

"use client";

import { Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { formatPlaytime } from "../_lib/helpers";

export default function PlaytimeChart({ recentPlaytime, totalPlaytime }) {
  return (
    <>
      <ResponsiveContainer width="100%" height={220}>
        <PieChart>
          <Pie
            data={recentPlaytime}
            nameKey="name"
            dataKey="value"
            innerRadius={65}
            outerRadius={90}
            cx="50%"
            cy="50%"
            strokeWidth={1}
            paddingAngle={3}
            stroke="#1861a1"
            fill="#114673"
          />
          <Tooltip
            // To correctly display Minutes, Minute, Hour and Hours
            formatter={(value, name, props) => formatPlaytime(value)}
            separator=" &mdash; "
            contentStyle={{
              backgroundColor: "#0e2238",
              borderColor: "#114673",
              borderRadius: "1px",
            }}
            itemStyle={{
              color: "#e7eaed",
            }}
            wrapperStyle={{ zIndex: "999" }}
          />

          <Pie
            data={totalPlaytime}
            nameKey="gameName"
            dataKey="value"
            innerRadius={35}
            outerRadius={60}
            cx="50%"
            cy="50%"
            strokeWidth={1}
            paddingAngle={5}
            stroke="#1b6fb8"
            fill="#14538a"
          />
        </PieChart>
      </ResponsiveContainer>
    </>
  );
}

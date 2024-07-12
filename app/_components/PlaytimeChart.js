"use client";

import { Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

export default function PlaytimeChart({ data }) {
  return (
    <>
      <ResponsiveContainer width="100%" height={240}>
        <PieChart>
          <Pie
            data={data}
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
            formatter={(value, name, props) => ""}
            separator=""
            contentStyle={{
              backgroundColor: "#0e2238",
              borderColor: "#114673",
              borderRadius: "1px",
            }}
            itemStyle={{
              color: "#e7eaed",
            }}
          />
          {/* <Tooltip
            separator=" &mdash; "
            payload={{ name: "AC3", value: 15, unit: "Hours" }}
          /> */}
        </PieChart>
      </ResponsiveContainer>
    </>
  );
}

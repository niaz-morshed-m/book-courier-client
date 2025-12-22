import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const AdminHome = () => {

const axiosSecure = useAxiosSecure()

const { data: counts = [], } = useQuery({
  queryKey: ["counts"],
  queryFn: async () => {
    const res = await axiosSecure.get("/order/stats");
    return res.data;
  },
});



    return (
      <div>
        <p className="text-xl font-bold mt-2 text-center my-8">Admin Stats</p>
        <div className="flex justify-center">
          {" "}
          <div className="stats stats-vertical lg:stats-horizontal shadow">
            <div className="stat">
              <div className="stat-title">Order Pending</div>
              <div className="stat-value">{counts[0]?.count || 0}</div>
            </div>

            <div className="stat">
              <div className="stat-title">Order Delivered</div>
              <div className="stat-value">{counts[1]?.count || 0}</div>
            </div>
            <div className="stat">
              <div className="stat-title">Order Cancelled</div>
              <div className="stat-value">{counts[2]?.count || 0}</div>
            </div>
          </div>
        </div>
        <div className="mx-auto my-13" style={{ width: "40%", height: 300 }}>
          <ResponsiveContainer>
            <BarChart data={counts}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="status" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
};

export default AdminHome;
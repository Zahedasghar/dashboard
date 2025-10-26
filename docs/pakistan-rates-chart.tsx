import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function PakistanRatesChart() {
  // Data compiled from State Bank of Pakistan and Pakistan Bureau of Statistics
  // 5-year period: October 2020 - September 2025
  const data = [
    { month: 'Oct 2020', policyRate: 7.0, inflation: 9.0 },
    { month: 'Nov 2020', policyRate: 7.0, inflation: 8.4 },
    { month: 'Dec 2020', policyRate: 7.0, inflation: 8.0 },
    { month: 'Jan 2021', policyRate: 7.0, inflation: 5.7 },
    { month: 'Feb 2021', policyRate: 7.0, inflation: 5.7 },
    { month: 'Mar 2021', policyRate: 7.0, inflation: 5.8 },
    { month: 'Apr 2021', policyRate: 7.0, inflation: 7.3 },
    { month: 'May 2021', policyRate: 7.0, inflation: 10.9 },
    { month: 'Jun 2021', policyRate: 7.0, inflation: 9.7 },
    { month: 'Jul 2021', policyRate: 7.0, inflation: 8.4 },
    { month: 'Aug 2021', policyRate: 7.0, inflation: 8.4 },
    { month: 'Sep 2021', policyRate: 7.0, inflation: 9.0 },
    { month: 'Oct 2021', policyRate: 7.3, inflation: 9.2 },
    { month: 'Nov 2021', policyRate: 8.8, inflation: 11.5 },
    { month: 'Dec 2021', policyRate: 9.8, inflation: 12.3 },
    { month: 'Jan 2022', policyRate: 9.8, inflation: 13.0 },
    { month: 'Feb 2022', policyRate: 9.8, inflation: 12.2 },
    { month: 'Mar 2022', policyRate: 9.8, inflation: 12.7 },
    { month: 'Apr 2022', policyRate: 11.0, inflation: 13.4 },
    { month: 'May 2022', policyRate: 13.8, inflation: 13.8 },
    { month: 'Jun 2022', policyRate: 15.0, inflation: 21.3 },
    { month: 'Jul 2022', policyRate: 15.0, inflation: 24.9 },
    { month: 'Aug 2022', policyRate: 15.0, inflation: 27.3 },
    { month: 'Sep 2022', policyRate: 15.0, inflation: 23.2 },
    { month: 'Oct 2022', policyRate: 16.0, inflation: 26.6 },
    { month: 'Nov 2022', policyRate: 16.0, inflation: 24.5 },
    { month: 'Dec 2022', policyRate: 16.0, inflation: 24.5 },
    { month: 'Jan 2023', policyRate: 17.0, inflation: 27.6 },
    { month: 'Feb 2023', policyRate: 18.0, inflation: 31.5 },
    { month: 'Mar 2023', policyRate: 20.0, inflation: 35.4 },
    { month: 'Apr 2023', policyRate: 21.0, inflation: 36.5 },
    { month: 'May 2023', policyRate: 21.0, inflation: 38.0 },
    { month: 'Jun 2023', policyRate: 22.0, inflation: 29.4 },
    { month: 'Jul 2023', policyRate: 22.0, inflation: 28.3 },
    { month: 'Aug 2023', policyRate: 22.0, inflation: 27.4 },
    { month: 'Sep 2023', policyRate: 22.0, inflation: 31.4 },
    { month: 'Oct 2023', policyRate: 22.0, inflation: 26.9 },
    { month: 'Nov 2023', policyRate: 22.0, inflation: 29.2 },
    { month: 'Dec 2023', policyRate: 22.0, inflation: 29.7 },
    { month: 'Jan 2024', policyRate: 22.0, inflation: 28.3 },
    { month: 'Feb 2024', policyRate: 22.0, inflation: 23.1 },
    { month: 'Mar 2024', policyRate: 22.0, inflation: 20.7 },
    { month: 'Apr 2024', policyRate: 22.0, inflation: 17.3 },
    { month: 'May 2024', policyRate: 22.0, inflation: 11.8 },
    { month: 'Jun 2024', policyRate: 21.0, inflation: 12.6 },
    { month: 'Jul 2024', policyRate: 19.5, inflation: 11.1 },
    { month: 'Aug 2024', policyRate: 19.5, inflation: 9.6 },
    { month: 'Sep 2024', policyRate: 17.5, inflation: 6.9 },
    { month: 'Oct 2024', policyRate: 17.5, inflation: 7.2 },
    { month: 'Nov 2024', policyRate: 15.0, inflation: 4.9 },
    { month: 'Dec 2024', policyRate: 13.0, inflation: 4.1 },
    { month: 'Jan 2025', policyRate: 13.0, inflation: 2.3 },
    { month: 'Feb 2025', policyRate: 13.0, inflation: 1.7 },
    { month: 'Mar 2025', policyRate: 12.0, inflation: 1.5 },
    { month: 'Apr 2025', policyRate: 12.0, inflation: 0.3 },
    { month: 'May 2025', policyRate: 11.0, inflation: 1.8 },
    { month: 'Jun 2025', policyRate: 11.0, inflation: 3.2 },
    { month: 'Jul 2025', policyRate: 11.0, inflation: 4.1 },
    { month: 'Aug 2025', policyRate: 11.0, inflation: 3.0 },
    { month: 'Sep 2025', policyRate: 11.0, inflation: 5.6 }
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-2xl p-4 md:p-8">
        <div className="mb-6 md:mb-8">
          <h1 className="text-2xl md:text-4xl font-bold text-slate-800 mb-2">
            Pakistan: Policy Rate & Inflation Rate
          </h1>
          <p className="text-slate-600 text-base md:text-lg">
            5-Year Monthly Data (October 2020 - September 2025)
          </p>
          <p className="text-xs md:text-sm text-slate-500 mt-2">
            Source: State Bank of Pakistan & Pakistan Bureau of Statistics
          </p>
        </div>

        <ResponsiveContainer width="100%" height={500}>
          <LineChart
            data={data}
            margin={{ top: 5, right: 10, left: 0, bottom: 80 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis 
              dataKey="month" 
              angle={-45}
              textAnchor="end"
              height={100}
              tick={{ fontSize: 10 }}
              stroke="#64748b"
              interval={5}
            />
            <YAxis 
              label={{ value: 'Rate (%)', angle: -90, position: 'insideLeft' }}
              tick={{ fontSize: 11 }}
              stroke="#64748b"
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                fontSize: '12px'
              }}
              formatter={(value) => `${value}%`}
            />
            <Legend 
              wrapperStyle={{ paddingTop: '20px' }}
              iconType="line"
            />
            <Line 
              type="monotone" 
              dataKey="policyRate" 
              stroke="#3b82f6" 
              strokeWidth={2.5}
              name="Policy Rate (%)"
              dot={false}
              activeDot={{ r: 5 }}
            />
            <Line 
              type="monotone" 
              dataKey="inflation" 
              stroke="#ef4444" 
              strokeWidth={2.5}
              name="Inflation Rate (%)"
              dot={false}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>

        <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          <div className="bg-blue-50 p-3 md:p-4 rounded-lg border border-blue-200">
            <h3 className="text-xs md:text-sm font-semibold text-blue-800 mb-1">Current Policy Rate</h3>
            <p className="text-2xl md:text-3xl font-bold text-blue-600">11.0%</p>
            <p className="text-xs text-blue-600 mt-1">September 2025</p>
          </div>
          
          <div className="bg-red-50 p-3 md:p-4 rounded-lg border border-red-200">
            <h3 className="text-xs md:text-sm font-semibold text-red-800 mb-1">Current Inflation</h3>
            <p className="text-2xl md:text-3xl font-bold text-red-600">5.6%</p>
            <p className="text-xs text-red-600 mt-1">September 2025</p>
          </div>
          
          <div className="bg-orange-50 p-3 md:p-4 rounded-lg border border-orange-200">
            <h3 className="text-xs md:text-sm font-semibold text-orange-800 mb-1">Peak Policy Rate</h3>
            <p className="text-2xl md:text-3xl font-bold text-orange-600">22.0%</p>
            <p className="text-xs text-orange-600 mt-1">June 2023</p>
          </div>

          <div className="bg-purple-50 p-3 md:p-4 rounded-lg border border-purple-200">
            <h3 className="text-xs md:text-sm font-semibold text-purple-800 mb-1">Peak Inflation</h3>
            <p className="text-2xl md:text-3xl font-bold text-purple-600">38.0%</p>
            <p className="text-xs text-purple-600 mt-1">May 2023</p>
          </div>
        </div>

        <div className="mt-6 p-4 bg-slate-50 rounded-lg">
          <h3 className="font-semibold text-slate-800 mb-3 text-sm md:text-base">Key Insights (5-Year Period):</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-slate-700 text-sm mb-2">COVID-19 Era (2020-2021)</h4>
              <ul className="text-xs md:text-sm text-slate-700 space-y-1">
                <li>• Policy rate cut to historic low of <strong>7%</strong> to support economy during pandemic</li>
                <li>• Inflation remained relatively stable at <strong>8-11%</strong></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-slate-700 text-sm mb-2">Tightening Cycle (2021-2023)</h4>
              <ul className="text-xs md:text-sm text-slate-700 space-y-1">
                <li>• Rates increased from 7% to <strong>22%</strong> (15 percentage points)</li>
                <li>• Inflation peaked at <strong>38%</strong> in May 2023</li>
                <li>• Most aggressive monetary tightening in Pakistan's history</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-slate-700 text-sm mb-2">Easing Cycle (2024-2025)</h4>
              <ul className="text-xs md:text-sm text-slate-700 space-y-1">
                <li>• Policy rate cut by <strong>11 percentage points</strong> (22% to 11%)</li>
                <li>• Inflation declined sharply from 29.7% to <strong>5.6%</strong></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-slate-700 text-sm mb-2">Current Outlook</h4>
              <ul className="text-xs md:text-sm text-slate-700 space-y-1">
                <li>• Inflation stabilizing within target range of <strong>5-7%</strong></li>
                <li>• Real policy rate remains positive to anchor expectations</li>
                <li>• Monetary policy supporting gradual economic recovery</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
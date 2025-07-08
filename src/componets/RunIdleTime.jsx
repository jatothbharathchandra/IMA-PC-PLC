
import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, LineChart, Line } from 'recharts';
import { Sidebar, TopNav } from './NavBar';

const barData = [
  { name: '0', Run: 38, Idle: 10 },
  { name: '5', Run: 40, Idle: 12 },
  { name: '10', Run: 48, Idle: 14 },
  { name: '15', Run: 52, Idle: 8 },
  { name: '20', Run: 40, Idle: 20 },
  { name: '21', Run: 38, Idle: 22 },
  { name: '22', Run: 34, Idle: 26 },
];
const lineData = [
  { name: '0:00', Stops: 3 },
  { name: '4:00', Stops: 2 },
  { name: '8:00', Stops: 3 },
  { name: '12:00', Stops: 1 },
  { name: '16:00', Stops: 5 },
  { name: '20:00', Stops: 4 },
  { name: '24:00', Stops: 3 },
];

const RunIdleTime = () => (
  <div style={{ minHeight: '100vh', background: '#f4f7fa', padding: 0, margin: 0 }}>
    <div style={{ display: 'flex', height: '100vh', background: '#e9eef2' }}>
      <Sidebar />
      <main style={{ flex: 1, padding: '36px 32px', background: '#e9eef2', overflowY: 'auto' }}>
        <TopNav />
        <div style={{ display: 'flex', gap: 18, marginBottom: 18 }}>
          {/* Machine Identification & Status */}
          <div style={{ flex: 1, background: '#fff', borderRadius: 10, boxShadow: '0 1px 4px rgba(0,0,0,0.08)', padding: 18, minWidth: 260, maxWidth: 400, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', border: '1px solid #e0e0e0', marginRight: 12 }}>
            <div style={{ fontWeight: 700, fontSize: 18, color: '#222', marginBottom: 10 }}>Machine Identification & Status</div>
            <div style={{ fontSize: 15, color: '#222', marginBottom: 6 }}>Machine Name/ID : <b>C350</b></div>
            <div style={{ fontSize: 15, color: '#222', marginBottom: 6 }}>Shift Timing : <b>08:00 - 16:00</b></div>
            <div style={{ fontSize: 15, color: '#222', marginBottom: 6 }}>Current Status :
              <span style={{ marginLeft: 8, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#1bbf5c', display: 'inline-block' }}></span> Running /
                <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#f9a825', display: 'inline-block' }}></span> Idle /
                <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#e53935', display: 'inline-block' }}></span> Stopped
              </span>
            </div>
            <div style={{ fontSize: 15, color: '#222', marginBottom: 6 }}>Operator Name : <b>John D.</b></div>
          </div>
          {/* Current Status */}
          <div style={{ flex: 1, background: '#fff', borderRadius: 10, boxShadow: '0 1px 4px rgba(0,0,0,0.08)', padding: 18, minWidth: 260, maxWidth: 400, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', border: '1px solid #e0e0e0' }}>
            <div style={{ fontWeight: 700, fontSize: 18, color: '#222', marginBottom: 10 }}>Current Status</div>
            <div style={{ fontSize: 15, color: '#222', marginBottom: 6, display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <span>Total Machine Run Time</span>
              <b>04h : 12m : 38s</b>
            </div>
            <div style={{ fontSize: 15, color: '#222', marginBottom: 6, display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <span>Machine IN Idle Condition</span>
              <b>00h : 10m : 45s</b>
            </div>
            <div style={{ fontSize: 15, color: '#222', marginBottom: 6, display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <span>Machine Stop (Downstream)</span>
              <b>00h : 15m : 23s</b>
            </div>
          </div>
        </div>
        {/* Core Performance Metrics */}
        <div style={{ display: 'flex', gap: 18, marginBottom: 18 }}>
          <div style={{ flex: 1, background: '#fff', borderRadius: 10, boxShadow: '0 1px 4px rgba(0,0,0,0.08)', padding: 18, minWidth: 260, maxWidth: 400, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', border: '1px solid #e0e0e0', marginRight: 12 }}>
            <div style={{ fontWeight: 700, fontSize: 18, color: '#222', marginBottom: 10 }}>Core Performance Metrics</div>
            <div style={{ fontSize: 15, color: '#222', marginBottom: 6 }}>Total Machine Run Time <b>04h : 12m : 38s</b></div>
            <div style={{ fontSize: 15, color: '#222', marginBottom: 6 }}>Machine in Idle Condition <b>00h : 10m : 45s</b></div>
            <div style={{ fontSize: 15, color: '#222', marginBottom: 6 }}>Machine Stop (Downstream) <b>5 Times</b></div>
          </div>
          {/* Downtime Breakdown */}
          <div style={{ flex: 2, background: '#fff', borderRadius: 10, boxShadow: '0 1px 4px rgba(0,0,0,0.08)', padding: 18, minWidth: 260, maxWidth: 600, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', border: '1px solid #e0e0e0' }}>
            <div style={{ fontWeight: 700, fontSize: 18, color: '#222', marginBottom: 10 }}>Downtime Breakdown</div>
            <table style={{ width: '100%', fontSize: 15, borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ color: '#888', fontWeight: 600, borderBottom: '1px solid #e0e0e0' }}>
                  <th style={{ textAlign: 'left', padding: '6px 8px' }}>Stop Reason</th>
                  <th style={{ textAlign: 'right', padding: '6px 8px' }}>Count</th>
                  <th style={{ textAlign: 'right', padding: '6px 8px' }}>Total Duration</th>
                  <th style={{ textAlign: 'right', padding: '6px 8px' }}>% of Downtime</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '6px 8px' }}>Downstream Jam</td>
                  <td style={{ textAlign: 'right', padding: '6px 8px' }}>5</td>
                  <td style={{ textAlign: 'right', padding: '6px 8px' }}>00:15:23</td>
                  <td style={{ textAlign: 'right', padding: '6px 8px' }}>40%</td>
                </tr>
                <tr>
                  <td style={{ padding: '6px 8px' }}>Material Shortage</td>
                  <td style={{ textAlign: 'right', padding: '6px 8px' }}>2</td>
                  <td style={{ textAlign: 'right', padding: '6px 8px' }}>00:08:00</td>
                  <td style={{ textAlign: 'right', padding: '6px 8px' }}>21%</td>
                </tr>
                <tr>
                  <td style={{ padding: '6px 8px' }}>Changeover</td>
                  <td style={{ textAlign: 'right', padding: '6px 8px' }}>1</td>
                  <td style={{ textAlign: 'right', padding: '6px 8px' }}>00:10:00</td>
                  <td style={{ textAlign: 'right', padding: '6px 8px' }}>27%</td>
                </tr>
                <tr>
                  <td style={{ padding: '6px 8px' }}>Maintenance/Other</td>
                  <td style={{ textAlign: 'right', padding: '6px 8px' }}>1</td>
                  <td style={{ textAlign: 'right', padding: '6px 8px' }}>00:04:00</td>
                  <td style={{ textAlign: 'right', padding: '6px 8px' }}>12%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* Lower Section: Charts and Suggestions */}
        <div style={{ display: 'flex', gap: 18, marginBottom: 18 }}>
          {/* Machine Run Time VS Idle Time Chart */}
          <div style={{ flex: 1, background: '#fff', borderRadius: 10, boxShadow: '0 1px 4px rgba(0,0,0,0.08)', padding: 18, minWidth: 260, maxWidth: 400, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', border: '1px solid #e0e0e0', marginRight: 12 }}>
            <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 0 }}>Machine Run Time VS Idle Time</div>
            <div style={{ fontWeight: 400, fontSize: 13, color: '#888', marginBottom: 10 }}>Last 24 Hours</div>
            <BarChart width={350} height={220} data={barData} style={{ margin: '0 auto' }} barCategoryGap={12}>
              <XAxis dataKey="name" fontSize={14} tickLine={false} axisLine={{ stroke: '#e0e0e0' }} tick={{ fill: '#222', fontWeight: 600 }} label={{ value: 'Hours', position: 'insideBottom', offset: -5, fontSize: 14, fill: '#888' }} />
              <YAxis fontSize={14} tickLine={false} axisLine={{ stroke: '#e0e0e0' }} tick={{ fill: '#222', fontWeight: 600 }} label={{ value: 'Minutes', angle: -90, position: 'insideLeft', fontSize: 14, fill: '#888' }} domain={[0, 60]} />
              <Tooltip contentStyle={{ borderRadius: 10, border: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.10)', fontSize: 14 }} labelStyle={{ color: '#1976d2', fontWeight: 700 }} itemStyle={{ fontWeight: 600 }} cursor={{ fill: '#e3f1fc', opacity: 0.5 }} />
              <Legend verticalAlign="top" height={32} iconType="rect" iconSize={18} align="center" wrapperStyle={{ top: 0, left: 0, fontWeight: 700, fontSize: 15 }} />
              <Bar dataKey="Idle" fill="#f9a825" name="Idle Time" stackId="a" barSize={28} radius={[6, 6, 0, 0]} />
              <Bar dataKey="Run" fill="#1bbf5c" name="Run Time" stackId="a" barSize={28} radius={[6, 6, 0, 0]} />
            </BarChart>
          </div>
          {/* Downstream Stops Frequency Chart */}
          <div style={{ flex: 1, background: '#fff', borderRadius: 10, boxShadow: '0 1px 4px rgba(0,0,0,0.08)', padding: 18, minWidth: 260, maxWidth: 400, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', border: '1px solid #e0e0e0' }}>
            <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 0 }}>Downsteam Stops Frequency</div>
            <LineChart width={350} height={220} data={lineData} style={{ margin: '0 auto' }}>
              <XAxis dataKey="name" fontSize={14} tickLine={false} axisLine={{ stroke: '#e0e0e0' }} tick={{ fill: '#222', fontWeight: 600 }} />
              <YAxis fontSize={14} tickLine={false} axisLine={{ stroke: '#e0e0e0' }} tick={{ fill: '#222', fontWeight: 600 }} domain={[0, 6]} />
              <Tooltip contentStyle={{ borderRadius: 10, border: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.10)', fontSize: 14 }} labelStyle={{ color: '#1976d2', fontWeight: 700 }} itemStyle={{ fontWeight: 600 }} cursor={{ fill: '#e3f1fc', opacity: 0.5 }} />
              <Legend verticalAlign="top" height={32} iconType="rect" iconSize={18} align="center" wrapperStyle={{ top: 0, left: 0, fontWeight: 700, fontSize: 15 }} />
              <Line type="monotone" dataKey="Stops" stroke="#1bbf5c" strokeWidth={3} dot={{ r: 4 }} name="Output per Hour" />
            </LineChart>
          </div>
        </div>
        {/* Suggested Operator Actions */}
        <div style={{ background: '#fff', borderRadius: 10, boxShadow: '0 1px 4px rgba(0,0,0,0.08)', padding: 18, minWidth: 260, maxWidth: 820, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', border: '1px solid #e0e0e0' }}>
          <div style={{ fontWeight: 700, fontSize: 18, color: '#222', marginBottom: 10 }}>Suggested Operator Actions</div>
          <ul style={{ padding: 0, margin: 0, listStyle: 'none', fontSize: 15, width: '100%' }}>
            <li style={{ color: '#1bbf5c', display: 'flex', alignItems: 'center', gap: 8 }}><span>✔️</span> Clear Downstream Jam</li>
            <li style={{ color: '#f9a825', display: 'flex', alignItems: 'center', gap: 8 }}><span>🔄</span> Resume operation</li>
            <li style={{ color: '#e53935', display: 'flex', alignItems: 'center', gap: 8 }}><span>🗓️</span> Schedule Preventive min</li>
          </ul>
        </div>
      </main>
    </div>
  </div>
);

export default RunIdleTime;

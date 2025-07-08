import React from "react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, LineChart, Line } from 'recharts';
import { Sidebar, TopNav } from './NavBar';

const oeeYearData = [
  { name: 'Availability', value: 55, color: '#1bbf5c' },
  { name: 'Performance', value: 20, color: '#f9a825' },
  { name: 'Quality', value: 15, color: '#e53935' },
];
const oeeMonthData = [
  { name: 'Availability', value: 50, color: '#1bbf5c' },
  { name: 'Performance', value: 25, color: '#f9a825' },
  { name: 'Quality', value: 25, color: '#e53935' },
];
const barData = [
  { name: '9 to 10 am', Good: 8, 'Rejected Blister': 2 },
  { name: '10 to 11 am', Good: 7, 'Rejected Blister': 1 },
  { name: '11 to 12 pm', Good: 9, 'Rejected Blister': 3 },
  { name: '12 to 01 pm', Good: 6, 'Rejected Blister': 2 },
  { name: '01 to 02 pm', Good: 8, 'Rejected Blister': 1 },
  { name: '02 to 03 pm', Good: 7, 'Rejected Blister': 2 },
  { name: '03 to 05 pm', Good: 6, 'Rejected Blister': 2 },
];
const downtime7Data = [
  { name: 'Work Arrangement', value: 30, color: '#f9a825' },
  { name: 'Uncommented', value: 28, color: '#e53935' },
  { name: 'Technical', value: 24, color: '#1976d2' },
  { name: 'Material Quality Issues', value: 20, color: '#1bbf5c' },
  { name: 'Material Shortage', value: 16, color: '#8884d8' },
  { name: 'Electrical Failure', value: 12, color: '#bdbdbd' },
  { name: 'Unplanned Cleaning', value: 8, color: '#bdbdbd' },
  { name: 'Set Up', value: 4, color: '#bdbdbd' },
  { name: 'Break', value: 2, color: '#bdbdbd' },
];
const downtime30Data = [
  { name: 'Break', value: 40, color: '#e53935' },
  { name: 'Shift Handover', value: 30, color: '#f9a825' },
  { name: 'No Planned Production', value: 28, color: '#1976d2' },
  { name: 'Machine Reset', value: 24, color: '#1bbf5c' },
  { name: 'Product Changeover', value: 20, color: '#8884d8' },
  { name: 'Electrical Failure', value: 16, color: '#bdbdbd' },
  { name: 'Mechanical Failure', value: 12, color: '#bdbdbd' },
  { name: 'Operator Missing', value: 8, color: '#bdbdbd' },
  { name: 'Set Up', value: 4, color: '#bdbdbd' },
];
const runVsIdleData = [
  { name: '5', 'Run Time': 4, 'Idle Time': 2 },
  { name: '10', 'Run Time': 5, 'Idle Time': 1 },
  { name: '15', 'Run Time': 3, 'Idle Time': 3 },
  { name: '20', 'Run Time': 6, 'Idle Time': 2 },
];
const stopsFreqData = [
  { name: '0:00', Output: 2 },
  { name: '4:00', Output: 3 },
  { name: '8:00', Output: 1 },
  { name: '12:00', Output: 4 },
  { name: '16:00', Output: 2 },
];

const PGB250Dashboard = () => (
  <div style={{ minHeight: '100vh', background: '#f4f7fa', padding: 0, margin: 0 }}>
    <div style={{ display: 'flex', height: '100vh', background: '#e9eef2' }}>
      <Sidebar />
      <main style={{ flex: 1, padding: '36px 32px', background: '#e9eef2', overflowY: 'auto' }}>
        <TopNav />
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 24, background: '#f6fafd', borderRadius: 12, padding: '18px 24px 18px 24px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <div>
            <div style={{ fontSize: 24, fontWeight: 700, color: '#222', letterSpacing: 0.5 }}>Stretch Bundling Machine : PGB250</div>
            <div style={{ fontSize: 15, color: '#444', marginTop: 2 }}>
              Live Status: <span style={{ color: '#1bbf5c', fontWeight: 600 }}>Active</span> <span style={{ color: '#888' }}>(29/05/2025) 12:15:23</span>
            </div>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 18, marginBottom: 18 }}>
          {/* OEE (This Year) Donut Chart Card */}
          <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: 18, display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 0 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginBottom: 8 }}>
              <span style={{ fontWeight: 600, fontSize: 15 }}>OEE (This Year)</span>
              <a href="#" style={{ color: '#1976d2', fontSize: 12, textDecoration: 'none', fontWeight: 500, display: 'flex', alignItems: 'center', gap: 4 }}>View Details <svg width="12" height="12" fill="none" stroke="#1976d2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10l4-4-4-4"/></svg></a>
            </div>
            <PieChart width={110} height={110} style={{ margin: '0 auto' }}>
              <Pie
                data={oeeYearData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={38}
                outerRadius={50}
                fill="#8884d8"
                label={false}
                startAngle={90}
                endAngle={-270}
              >
                {oeeYearData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <circle cx="55" cy="55" r="28" fill="#fff" />
              <text x="55" y="55" textAnchor="middle" dominantBaseline="middle" fontSize="20" fontWeight="700" fill="#222">50%</text>
              <text x="55" y="75" textAnchor="middle" fontSize="11" fill="#bdbdbd">OEE</text>
            </PieChart>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8, borderTop: '1px solid #e0e0e0', paddingTop: 8, width: '100%' }}>
              <span style={{ color: '#888', fontSize: 13 }}>Status</span>
              <span style={{ color: '#888', fontSize: 13 }}>%</span>
            </div>
            <ul style={{ padding: 0, margin: 0, listStyle: 'none', fontSize: 13, width: '100%' }}>
              <li style={{ color: '#1bbf5c', display: 'flex', justifyContent: 'space-between' }}><span>● Availability</span> <span>55%</span></li>
              <li style={{ color: '#f9a825', display: 'flex', justifyContent: 'space-between' }}><span>● Performance</span> <span>20%</span></li>
              <li style={{ color: '#e53935', display: 'flex', justifyContent: 'space-between' }}><span>● Quality</span> <span>15%</span></li>
            </ul>
          </div>
          {/* OEE (Last 30 Days) Donut Chart Card */}
          <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: 18, display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 0 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginBottom: 8 }}>
              <span style={{ fontWeight: 600, fontSize: 15 }}>OEE (Last 30 Days)</span>
              <a href="#" style={{ color: '#1976d2', fontSize: 12, textDecoration: 'none', fontWeight: 500, display: 'flex', alignItems: 'center', gap: 4 }}>View Details <svg width="12" height="12" fill="none" stroke="#1976d2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10l4-4-4-4"/></svg></a>
            </div>
            <PieChart width={110} height={110} style={{ margin: '0 auto' }}>
              <Pie
                data={oeeMonthData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={38}
                outerRadius={50}
                fill="#8884d8"
                label={false}
                startAngle={90}
                endAngle={-270}
              >
                {oeeMonthData.map((entry, index) => (
                  <Cell key={`cell2-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <circle cx="55" cy="55" r="28" fill="#fff" />
              <text x="55" y="55" textAnchor="middle" dominantBaseline="middle" fontSize="20" fontWeight="700" fill="#222">60%</text>
              <text x="55" y="75" textAnchor="middle" fontSize="11" fill="#bdbdbd">OEE</text>
            </PieChart>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8, borderTop: '1px solid #e0e0e0', paddingTop: 8, width: '100%' }}>
              <span style={{ color: '#888', fontSize: 13 }}>Status</span>
              <span style={{ color: '#888', fontSize: 13 }}>%</span>
            </div>
            <ul style={{ padding: 0, margin: 0, listStyle: 'none', fontSize: 13, width: '100%' }}>
              <li style={{ color: '#1bbf5c', display: 'flex', justifyContent: 'space-between' }}><span>● Availability</span> <span>50%</span></li>
              <li style={{ color: '#f9a825', display: 'flex', justifyContent: 'space-between' }}><span>● Performance</span> <span>25%</span></li>
              <li style={{ color: '#e53935', display: 'flex', justifyContent: 'space-between' }}><span>● Quality</span> <span>25%</span></li>
            </ul>
          </div>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2.2fr 1.2fr',
          gridTemplateRows: '1fr 1fr',
          gap: 28,
          marginBottom: 28,
          alignItems: 'stretch',
        }}>
          {/* Left: Good and Rejected Blister Produced */}
          <div style={{
            background: '#fff',
            borderRadius: 18,
            boxShadow: '0 2px 12px rgba(0,0,0,0.10)',
            padding: 32,
            gridRow: '1 / span 2',
            display: 'flex',
            flexDirection: 'column',
            minHeight: 480,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <div style={{ fontWeight: 700, fontSize: 22, marginBottom: 12, letterSpacing: 0.2, textAlign: 'center' }}>
              Good and Rejected Blister Produced
            </div>
            <BarChart width={440} height={240} data={barData} style={{ margin: '0 auto' }} barCategoryGap={22}>
              <XAxis dataKey="name" fontSize={14} tickLine={false} axisLine={{ stroke: '#e0e0e0' }} tick={{ fill: '#888', fontWeight: 500 }} angle={-18} dy={10} height={38} />
              <YAxis fontSize={14} tickLine={false} axisLine={{ stroke: '#e0e0e0' }} tick={{ fill: '#888', fontWeight: 500 }} width={36} domain={[0, 'dataMax+2']} />
              <Tooltip contentStyle={{ borderRadius: 10, border: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.10)', fontSize: 15 }} labelStyle={{ color: '#1976d2', fontWeight: 600 }} itemStyle={{ fontWeight: 500 }} cursor={{ fill: '#e3f1fc', opacity: 0.5 }} />
              <Legend verticalAlign="top" height={32} iconType="rect" iconSize={18} align="center" wrapperStyle={{ top: 0, left: 0, fontWeight: 700, fontSize: 15, margin: '0 auto' }} />
              <Bar dataKey="Good" fill="#1bbf5c" radius={[6, 6, 0, 0]} barSize={32} name="Good" />
              <Bar dataKey="Rejected Blister" fill="#e53935" radius={[6, 6, 0, 0]} barSize={32} name="Rejected Blister" />
            </BarChart>
          </div>
          {/* Top Right: Alerts & Notifications */}
          <div style={{
            background: '#fff',
            borderRadius: 18,
            boxShadow: '0 2px 12px rgba(0,0,0,0.10)',
            padding: 28,
            minHeight: 220,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
          }}>
            <div style={{ fontWeight: 700, fontSize: 20, color: '#222', marginBottom: 12, textDecoration: 'underline', textUnderlineOffset: 3 }}>Alerts & Notifications</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <span style={{ color: '#e53935', fontSize: 20 }}>⛔</span>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 16, color: '#222' }}>Emergency Stop</div>
                  <div style={{ fontWeight: 700, fontSize: 20, color: '#222', marginTop: 2 }}>2-10 h</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <span style={{ color: '#f9a825', fontSize: 20 }}>🔔</span>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 16, color: '#222' }}>Last Downstream Stop</div>
                  <div style={{ fontWeight: 700, fontSize: 20, color: '#222', marginTop: 2 }}>12:42 PM</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <span style={{ color: '#1976d2', fontSize: 20 }}>⏰</span>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 16, color: '#222' }}>Next Scheduled Maintenance</div>
                  <div style={{ fontWeight: 700, fontSize: 18, color: '#222', marginTop: 2 }}>In 02:30 hrs</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <span style={{ color: '#e53935', fontSize: 20 }}>⚠️</span>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 16, color: '#222' }}>Idle Time Alert</div>
                  <div style={{ fontWeight: 500, fontSize: 14, color: '#222', marginTop: 2 }}>Exceeded Set threshold</div>
                </div>
              </div>
            </div>
            <a href="/machine/pgb250/details" style={{ color: '#1976d2', fontSize: 16, textDecoration: 'none', fontWeight: 500, display: 'flex', alignItems: 'center', gap: 4, marginTop: 14 }}>View Details <svg width="15" height="15" fill="none" stroke="#1976d2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10l4-4-4-4"/></svg></a>
          </div>
          {/* Bottom Right: Machine Current Status */}
          <div style={{
            background: '#fff',
            borderRadius: 18,
            boxShadow: '0 2px 12px rgba(0,0,0,0.10)',
            padding: 28,
            minHeight: 180,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
          }}>
            <div style={{ fontWeight: 700, fontSize: 20, color: '#222', marginBottom: 12 }}>Machine Current Status</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, width: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <span style={{ fontSize: 16, color: '#222', fontWeight: 500 }}>Total Machine Run Time</span>
                <span style={{ fontWeight: 700, fontSize: 19, color: '#222', letterSpacing: 1 }}>04:12:38</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <span style={{ fontSize: 16, color: '#222', fontWeight: 500 }}>Machine in Idle Condition</span>
                <span style={{ fontWeight: 700, fontSize: 19, color: '#222', letterSpacing: 1 }}>00:10:23</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <span style={{ fontSize: 16, color: '#222', fontWeight: 500 }}>Machine Stop Due to Downstem</span>
                <span style={{ fontWeight: 700, fontSize: 19, color: '#222', letterSpacing: 1 }}>00:15:13</span>
              </div>
            </div>
            <a href="#" style={{ color: '#1976d2', fontSize: 16, textDecoration: 'none', fontWeight: 500, display: 'flex', alignItems: 'center', gap: 4, marginTop: 14 }}>View Details <svg width="15" height="15" fill="none" stroke="#1976d2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10l4-4-4-4"/></svg></a>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 18, marginBottom: 18 }}>
          {/* Downtime (Last 7 days) */}
          <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: 20, minWidth: 320, marginBottom: 0 }}>
            <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 10 }}>Downtime (Last 7 days)</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {downtime7Data.map((item, idx) => (
                <div key={item.name} style={{ display: 'flex', alignItems: 'center', height: 28 }}>
                  <div style={{ width: 120, fontSize: 14, color: '#222', fontWeight: 500 }}>{item.name}</div>
                  <div style={{ flex: 1, marginLeft: 8, marginRight: 8, height: 16, background: '#f0f0f0', borderRadius: 8, position: 'relative' }}>
                    <div style={{
                      width: `${Math.max(10, item.value * 2)}%`,
                      height: '100%',
                      background: item.color,
                      borderRadius: 8,
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      transition: 'width 0.4s',
                    }}></div>
                    <svg width="14" height="16" style={{ position: 'absolute', right: -14, top: 0 }}>
                      <polygon points="0,8 14,0 14,16" fill={item.color} />
                    </svg>
                    {idx === 0 && (
                      <div style={{
                        position: 'absolute',
                        right: -170,
                        top: -18,
                        background: '#111',
                        color: '#fff',
                        borderRadius: 8,
                        padding: '8px 14px',
                        fontSize: 13,
                        fontWeight: 500,
                        minWidth: 140,
                        zIndex: 2,
                        boxShadow: '0 2px 8px rgba(0,0,0,0.18)'
                      }}>
                        ORGANISATIONAL<br />13h 43m 56s (36 times)<br /><span style={{ color: '#1bbf5c', fontWeight: 400 }}>3h 25m 35s (19.4%)</span>
                      </div>
                    )}
                  </div>
                  <div style={{ width: 60, textAlign: 'right', fontSize: 14, color: '#444', fontWeight: 500 }}>{item.value}h</div>
                </div>
              ))}
            </div>
          </div>
          {/* Downtime (Last 30 days) */}
          <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: 20, minWidth: 320, marginBottom: 0 }}>
            <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 10 }}>Downtime (Last 30 days)</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {downtime30Data.map((item, idx) => (
                <div key={item.name} style={{ display: 'flex', alignItems: 'center', height: 28 }}>
                  <div style={{ width: 120, fontSize: 14, color: '#222', fontWeight: 500 }}>{item.name}</div>
                  <div style={{ flex: 1, marginLeft: 8, marginRight: 8, height: 16, background: '#f0f0f0', borderRadius: 8, position: 'relative' }}>
                    <div style={{
                      width: `${Math.max(10, item.value * 2)}%`,
                      height: '100%',
                      background: item.color,
                      borderRadius: 8,
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      transition: 'width 0.4s',
                    }}></div>
                    <svg width="14" height="16" style={{ position: 'absolute', right: -14, top: 0 }}>
                      <polygon points="0,8 14,0 14,16" fill={item.color} />
                    </svg>
                    {idx === 0 && (
                      <div style={{
                        position: 'absolute',
                        right: -190,
                        top: -18,
                        background: '#111',
                        color: '#fff',
                        borderRadius: 8,
                        padding: '8px 14px',
                        fontSize: 13,
                        fontWeight: 500,
                        minWidth: 160,
                        zIndex: 2,
                        boxShadow: '0 2px 8px rgba(0,0,0,0.18)'
                      }}>
                        Conveyor Breakdown<br />89h 43m 56s (77 times)<br /><span style={{ color: '#e53935', fontWeight: 400 }}>20h 32m 20s (20.89%)</span>
                      </div>
                    )}
                  </div>
                  <div style={{ width: 60, textAlign: 'right', fontSize: 14, color: '#444', fontWeight: 500 }}>{item.value}h</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 18, marginBottom: 18 }}>
          {/* Machine Run Time VS Idle Time */}
          <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: 20, minWidth: 260 }}>
            <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 10 }}>Machine Run Time VS Idle Time <span style={{ fontWeight: 400, fontSize: 13, color: '#888' }}>(Last 24 Hours)</span></div>
            <BarChart width={260} height={160} data={runVsIdleData} style={{ margin: '0 auto' }} barCategoryGap={18}>
              <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={{ stroke: '#e0e0e0' }} tick={{ fill: '#888', fontWeight: 500 }} />
              <YAxis fontSize={12} tickLine={false} axisLine={{ stroke: '#e0e0e0' }} tick={{ fill: '#888', fontWeight: 500 }} width={32} />
              <Tooltip contentStyle={{ borderRadius: 10, border: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.10)', fontSize: 13 }} labelStyle={{ color: '#1976d2', fontWeight: 600 }} itemStyle={{ fontWeight: 500 }} cursor={{ fill: '#e3f1fc', opacity: 0.5 }} />
              <Legend verticalAlign="top" height={28} iconType="rect" iconSize={16} align="right" wrapperStyle={{ top: -8, right: 0, fontWeight: 600, fontSize: 13 }} />
              <Bar dataKey="Run Time" fill="#1bbf5c" radius={[6, 6, 0, 0]} barSize={18} name="Run Time" />
              <Bar dataKey="Idle Time" fill="#e53935" radius={[6, 6, 0, 0]} barSize={18} name="Idle Time" />
            </BarChart>
          </div>
          {/* Downstream Stops Frequency */}
          <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: 20, minWidth: 260 }}>
            <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 10 }}>Downstream Stops Frequency</div>
            <LineChart width={260} height={160} data={stopsFreqData} style={{ margin: '0 auto' }}>
              <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={{ stroke: '#e0e0e0' }} tick={{ fill: '#888', fontWeight: 500 }} />
              <YAxis fontSize={12} tickLine={false} axisLine={{ stroke: '#e0e0e0' }} tick={{ fill: '#888', fontWeight: 500 }} width={32} />
              <Tooltip contentStyle={{ borderRadius: 10, border: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.10)', fontSize: 13 }} labelStyle={{ color: '#1976d2', fontWeight: 600 }} itemStyle={{ fontWeight: 500 }} cursor={{ fill: '#e3f1fc', opacity: 0.5 }} />
              <Legend verticalAlign="top" height={28} iconType="rect" iconSize={16} align="right" wrapperStyle={{ top: -8, right: 0, fontWeight: 600, fontSize: 13 }} />
              <Line type="monotone" dataKey="Output" stroke="#1976d2" strokeWidth={2} dot={{ r: 3 }} name="Output per Hour" />
            </LineChart>
          </div>
        </div>
      </main>
    </div>
  </div>
);

export default PGB250Dashboard;

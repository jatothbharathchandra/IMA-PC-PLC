
import React from "react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, LineChart, Line } from 'recharts';
import { FiHome, FiRefreshCw, FiCalendar, FiLogOut, FiBell } from 'react-icons/fi';
import { FaRegUserCircle } from 'react-icons/fa';

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
  { name: '9 to 10 am', Good: 8, Rejected: 2 },
  { name: '10 to 11 am', Good: 7, Rejected: 1 },
  { name: '11 to 12 pm', Good: 9, Rejected: 3 },
  { name: '12 to 01 pm', Good: 6, Rejected: 2 },
  { name: '01 to 02 pm', Good: 8, Rejected: 1 },
  { name: '02 to 03 pm', Good: 7, Rejected: 2 },
  { name: '03 to 05 pm', Good: 6, Rejected: 2 },
];
const downtime7Data = [
  { name: 'Unscheduled', value: 3.5, color: '#e53935' },
  { name: 'Mechanical', value: 2.5, color: '#f9a825' },
  { name: 'Quality Issue', value: 2, color: '#1976d2' },
  { name: 'Material Shortage', value: 1.5, color: '#1bbf5c' },
  { name: 'Planned Cleaning', value: 1, color: '#8884d8' },
  { name: 'Break', value: 0.5, color: '#bdbdbd' },
];
const downtime30Data = [
  { name: 'Net Hardware', value: 4, color: '#e53935' },
  { name: 'Unplanned', value: 3, color: '#f9a825' },
  { name: 'Product Changeover', value: 2.5, color: '#1976d2' },
  { name: 'Material Shortage', value: 2, color: '#1bbf5c' },
  { name: 'Scheduled Cleaning', value: 1.5, color: '#8884d8' },
  { name: 'Break', value: 1, color: '#bdbdbd' },
];
const runVsIdleData = [
  { name: '10:00', Run: 4, Idle: 2 },
  { name: '12:00', Run: 5, Idle: 1 },
  { name: '14:00', Run: 3, Idle: 3 },
  { name: '16:00', Run: 6, Idle: 2 },
  { name: '18:00', Run: 5, Idle: 1 },
];
const stopsFreqData = [
  { name: '10:00', Stops: 2 },
  { name: '12:00', Stops: 3 },
  { name: '14:00', Stops: 1 },
  { name: '16:00', Stops: 4 },
  { name: '18:00', Stops: 2 },
];

const Home = () => (
  <div style={{ minHeight: '100vh', background: '#f4f7fa', padding: 0, margin: 0 }}>
    <div style={{ display: 'flex', height: '100vh', background: '#e9eef2' }}>
      {/* Sidebar */}
      <aside style={{
        width: 260,
        background: '#0a2236',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '32px 0 0 0',
        boxShadow: '2px 0 12px rgba(0,0,0,0.04)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontWeight: 700, fontSize: 22, margin: '0 0 36px 36px', letterSpacing: 1 }}>
          <FaRegUserCircle size={28} style={{ color: '#7ec0ee' }} />
          IMA PG-PLC
        </div>
        <nav style={{ width: '100%' }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, width: '100%' }}>
            <li style={{ background: '#16304a', padding: '14px 36px', fontWeight: 600, borderRadius: '0 24px 24px 0' }}>Dashboard</li>
            <li style={{ padding: '14px 36px', cursor: 'pointer' }}>Run & Idle Time</li>
            <li style={{ padding: '14px 36px', cursor: 'pointer' }}>Maintenance</li>
            <li style={{ padding: '14px 36px', cursor: 'pointer' }}>Help & Support</li>
          </ul>
        </nav>
        <div style={{ marginTop: 'auto', marginLeft: 36, marginBottom: 32, fontSize: 15, opacity: 0.8, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
            <FaRegUserCircle size={22} style={{ color: '#b0b8c1' }} />
            My Profile
          </div>
          <div style={{ color: '#b0b8c1', fontSize: 14, cursor: 'pointer', marginLeft: 2 }}>Sign Out</div>
        </div>
      </aside>
      {/* Main Content */}
      <main style={{ flex: 1, padding: '36px 32px', background: '#e9eef2', overflowY: 'auto' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 24, background: '#f6fafd', borderRadius: 12, padding: '18px 24px 18px 24px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <div>
            <div style={{ fontSize: 24, fontWeight: 700, color: '#222', letterSpacing: 0.5 }}>Blister Machine : C350</div>
            <div style={{ fontSize: 15, color: '#444', marginTop: 2 }}>
              Live Status: <span style={{ color: '#1bbf5c', fontWeight: 600 }}>Active</span> <span style={{ color: '#888' }}>(29/05/2025) 12:15:23</span>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <div style={{ display: 'flex', gap: 10 }}>
              <button style={{ background: '#fff', border: '1.5px solid #222', borderRadius: 6, padding: 0, width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><FiHome size={20} /></button>
              <button style={{ background: '#fff', border: '1.5px solid #222', borderRadius: 6, padding: 0, width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><FiRefreshCw size={20} /></button>
              <button style={{ background: '#fff', border: '1.5px solid #222', borderRadius: 6, padding: 0, width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><FiCalendar size={20} /></button>
              <button
                style={{
                  background: '#fff',
                  border: '1.5px solid #222',
                  borderRadius: 6,
                  padding: 0,
                  width: 110,
                  height: 38,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  fontWeight: 600,
                  gap: 6
                }}
                onClick={() => window.location.href = '/'}
              >
                <FiLogOut size={20} style={{ marginRight: 4 }} />
                <span style={{ fontSize: 15, fontWeight: 600, marginLeft: 2 }}>Logout</span>
              </button>
            </div>
            <div style={{ position: 'relative', marginLeft: 18 }}>
              <div style={{ background: '#e3f1fc', borderRadius: 8, padding: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', width: 38, height: 38 }}>
                <FiBell size={20} color="#2196f3" />
                <span style={{
                  position: 'absolute',
                  top: -8,
                  right: -8,
                  background: '#2196f3',
                  color: '#fff',
                  borderRadius: '50%',
                  fontSize: 11,
                  fontWeight: 700,
                  width: 22,
                  height: 22,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid #fff',
                  boxShadow: '0 1px 4px rgba(33,150,243,0.12)'
                }}>04</span>
              </div>
            </div>
            <input type="text" placeholder="Select Machine" style={{ padding: '10px 18px', borderRadius: 8, border: '1.5px solid #ddd', fontSize: 16, minWidth: 180, background: '#fff', marginLeft: 10 }} />
          </div>
        </div>
        {/* Dashboard Cards Placeholder */}
        <div style={{ display: 'flex', gap: 24, flexWrap: 'nowrap', alignItems: 'stretch' }}>
          {/* OEE Donut Chart Cards (Reduced width) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24, minWidth: 220, maxWidth: 240, flex: '0 0 240px' }}>
            {/* OEE (This Year) Donut Chart Card */}
            <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: 16, minWidth: 0, marginBottom: 0, position: 'relative', flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                <span style={{ fontWeight: 600, fontSize: 15 }}>OEE (This Year)</span>
                <a href="#" style={{ color: '#1976d2', fontSize: 12, textDecoration: 'none', fontWeight: 500, display: 'flex', alignItems: 'center', gap: 4 }}>View Details <svg width="12" height="12" fill="none" stroke="#1976d2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10l4-4-4-4"/></svg></a>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <PieChart width={100} height={100} style={{ margin: '0 auto' }}>
                  <Pie
                    data={oeeYearData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={32}
                    outerRadius={44}
                    fill="#8884d8"
                    label={false}
                    startAngle={90}
                    endAngle={-270}
                  >
                    {oeeYearData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <circle cx="50" cy="50" r="26" fill="#fff" />
                  <text x="50" y="50" textAnchor="middle" dominantBaseline="middle" fontSize="18" fontWeight="700" fill="#222">50%</text>
                  <text x="50" y="65" textAnchor="middle" fontSize="10" fill="#bdbdbd">OEE</text>
                </PieChart>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 6, borderTop: '1px solid #e0e0e0', paddingTop: 6 }}>
                <span style={{ color: '#888', fontSize: 12 }}>Status</span>
                <span style={{ color: '#888', fontSize: 12 }}>%</span>
              </div>
              <ul style={{ padding: 0, margin: 0, listStyle: 'none', fontSize: 12 }}>
                <li style={{ color: '#1bbf5c', display: 'flex', justifyContent: 'space-between' }}><span>● Availability</span> <span>55%</span></li>
                <li style={{ color: '#f9a825', display: 'flex', justifyContent: 'space-between' }}><span>● Performance</span> <span>20%</span></li>
                <li style={{ color: '#e53935', display: 'flex', justifyContent: 'space-between' }}><span>● Quality</span> <span>15%</span></li>
              </ul>
            </div>
            {/* OEE (Last 30 Days) Donut Chart Card */}
            <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: 16, minWidth: 0, marginBottom: 0, position: 'relative', flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                <span style={{ fontWeight: 600, fontSize: 15 }}>OEE (Last 30 Days)</span>
                <a href="#" style={{ color: '#1976d2', fontSize: 12, textDecoration: 'none', fontWeight: 500, display: 'flex', alignItems: 'center', gap: 4 }}>View Details <svg width="12" height="12" fill="none" stroke="#1976d2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10l4-4-4-4"/></svg></a>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <PieChart width={100} height={100} style={{ margin: '0 auto' }}>
                  <Pie
                    data={oeeMonthData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={32}
                    outerRadius={44}
                    fill="#8884d8"
                    label={false}
                    startAngle={90}
                    endAngle={-270}
                  >
                    {oeeMonthData.map((entry, index) => (
                      <Cell key={`cell2-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <circle cx="50" cy="50" r="26" fill="#fff" />
                  <text x="50" y="50" textAnchor="middle" dominantBaseline="middle" fontSize="18" fontWeight="700" fill="#222">60%</text>
                  <text x="50" y="65" textAnchor="middle" fontSize="10" fill="#bdbdbd">OEE</text>
                </PieChart>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 6, borderTop: '1px solid #e0e0e0', paddingTop: 6 }}>
                <span style={{ color: '#888', fontSize: 12 }}>Status</span>
                <span style={{ color: '#888', fontSize: 12 }}>%</span>
              </div>
              <ul style={{ padding: 0, margin: 0, listStyle: 'none', fontSize: 12 }}>
                <li style={{ color: '#1bbf5c', display: 'flex', justifyContent: 'space-between' }}><span>● Availability</span> <span>50%</span></li>
                <li style={{ color: '#f9a825', display: 'flex', justifyContent: 'space-between' }}><span>● Performance</span> <span>25%</span></li>
                <li style={{ color: '#e53935', display: 'flex', justifyContent: 'space-between' }}><span>● Quality</span> <span>25%</span></li>
              </ul>
            </div>
          </div>
          {/* Good and Rejected Blister Produced Bar Chart (beside donut charts) */}
          <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: 24, minWidth: 320, flex: 2, marginBottom: 16, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ fontWeight: 600, marginBottom: 8 }}>Good and Rejected Blister Produced</div>
            <BarChart width={400} height={160} data={barData} style={{ margin: '0 auto' }}>
              <XAxis dataKey="name" fontSize={11} tickLine={false} axisLine={false} />
              <YAxis fontSize={11} tickLine={false} axisLine={false} />
              <Tooltip />
              <Legend verticalAlign="top" height={24}/>
              <Bar dataKey="Good" fill="#1bbf5c" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Rejected" fill="#e53935" radius={[4, 4, 0, 0]} />
            </BarChart>
            <div style={{ color: '#888', fontSize: 15, marginTop: 8 }}>Good | Rejected Blister</div>
          </div>
        </div>
        {/* More dashboard sections can be added here */}
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', marginTop: 24 }}>
          {/* Downtime (Last 7 days) Custom Horizontal Bar Chart */}
          <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: 24, minWidth: 320, flex: 1, minHeight: 260, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ fontWeight: 600, marginBottom: 8 }}>Downtime (Last 7 days)</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {downtime7Data.map((item, idx) => (
                <div key={item.name} style={{ display: 'flex', alignItems: 'center', position: 'relative', height: 28 }}>
                  {/* Category label */}
                  <div style={{ width: 110, fontSize: 13, color: '#222', fontWeight: 500 }}>{item.name}</div>
                  {/* Bar */}
                  <div style={{ flex: 1, marginLeft: 8, marginRight: 8, position: 'relative', height: 16, background: '#f0f0f0', borderRadius: 8, overflow: 'visible' }}>
                    <div style={{
                      width: `${Math.max(10, item.value * 22)}%`,
                      height: '100%',
                      background: item.color,
                      borderRadius: 8,
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      display: 'flex',
                      alignItems: 'center',
                      transition: 'width 0.4s',
                    }}></div>
                    {/* Triangle indicator at end of bar */}
                    <svg width="14" height="16" style={{ position: 'absolute', right: -14, top: 0 }}>
                      <polygon points="0,8 14,0 14,16" fill={item.color} />
                    </svg>
                    {/* Black popup for top bar */}
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
                        ORGANISATIONAL<br />13h 43m 56s (16 times)<br /><span style={{ color: '#1bbf5c', fontWeight: 400 }}>3h 25m 35s (19.4%)</span>
                      </div>
                    )}
                  </div>
                  {/* Value label */}
                  <div style={{ width: 60, textAlign: 'right', fontSize: 13, color: '#444', fontWeight: 500 }}>{item.value}h</div>
                </div>
              ))}
            </div>
          </div>
          {/* Downtime (Last 30 days) Custom Horizontal Bar Chart */}
          <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: 24, minWidth: 320, flex: 1, minHeight: 260, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ fontWeight: 600, marginBottom: 8 }}>Downtime (Last 30 days)</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {downtime30Data.map((item, idx) => (
                <div key={item.name} style={{ display: 'flex', alignItems: 'center', position: 'relative', height: 28 }}>
                  {/* Category label */}
                  <div style={{ width: 110, fontSize: 13, color: '#222', fontWeight: 500 }}>{item.name}</div>
                  {/* Bar */}
                  <div style={{ flex: 1, marginLeft: 8, marginRight: 8, position: 'relative', height: 16, background: '#f0f0f0', borderRadius: 8, overflow: 'visible' }}>
                    <div style={{
                      width: `${Math.max(10, item.value * 15)}%`,
                      height: '100%',
                      background: item.color,
                      borderRadius: 8,
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      display: 'flex',
                      alignItems: 'center',
                      transition: 'width 0.4s',
                    }}></div>
                    {/* Triangle indicator at end of bar */}
                    <svg width="14" height="16" style={{ position: 'absolute', right: -14, top: 0 }}>
                      <polygon points="0,8 14,0 14,16" fill={item.color} />
                    </svg>
                    {/* Black popup for top bar */}
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
                        Conveyor Breakdown<br />80h 43m 56s (77 times)<br /><span style={{ color: '#e53935', fontWeight: 400 }}>20h 32m 20s (20.89%)</span>
                      </div>
                    )}
                  </div>
                  {/* Value label */}
                  <div style={{ width: 60, textAlign: 'right', fontSize: 13, color: '#444', fontWeight: 500 }}>{item.value}h</div>
                </div>
              ))}
            </div>
          </div>
          {/* Machine Run Time VS Idle Time Line Chart */}
          <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: 24, minWidth: 260, flex: 1 }}>
            <div style={{ fontWeight: 600, marginBottom: 8 }}>Machine Run Time VS Idle Time</div>
            <LineChart width={220} height={120} data={runVsIdleData} style={{ margin: '0 auto' }}>
              <XAxis dataKey="name" fontSize={11} tickLine={false} axisLine={false} />
              <YAxis fontSize={11} tickLine={false} axisLine={false} />
              <Tooltip />
              <Legend verticalAlign="top" height={24}/>
              <Line type="monotone" dataKey="Run" stroke="#1bbf5c" strokeWidth={2} dot={{ r: 3 }} />
              <Line type="monotone" dataKey="Idle" stroke="#e53935" strokeWidth={2} dot={{ r: 3 }} />
            </LineChart>
          </div>
          {/* Downstream Stops Frequency Line Chart */}
          <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: 24, minWidth: 260, flex: 1 }}>
            <div style={{ fontWeight: 600, marginBottom: 8 }}>Downstream Stops Frequency</div>
            <LineChart width={220} height={120} data={stopsFreqData} style={{ margin: '0 auto' }}>
              <XAxis dataKey="name" fontSize={11} tickLine={false} axisLine={false} />
              <YAxis fontSize={11} tickLine={false} axisLine={false} />
              <Tooltip />
              <Line type="monotone" dataKey="Stops" stroke="#1976d2" strokeWidth={2} dot={{ r: 3 }} />
            </LineChart>
          </div>
        </div>
      </main>
    </div>
  </div>
);

export default Home;

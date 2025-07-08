import React from "react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, LineChart, Line } from 'recharts';
import { Sidebar, TopNav } from './NavBar';

// Example data for the graphs (customize as needed)
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
  { name: 'Work Arrangement', value: 24, color: '#fbc02d' },
  { name: 'Uncommented', value: 22, color: '#e53935' },
  { name: 'Technical', value: 12, color: '#ff9800' },
  { name: 'Material Quality issues', value: 8, color: '#1976d2' },
  { name: 'Material Shortage', value: 6, color: '#1bbf5c' },
  { name: 'Electrical Failure', value: 4, color: '#3f51b5' },
  { name: 'Unplanned Cleaning', value: 3, color: '#00bcd4' },
  { name: 'Set Up', value: 2, color: '#8bc34a' },
  { name: 'Break', value: 1, color: '#bdbdbd' },
];
const downtime30Data = [
  { name: 'Break', value: 30, color: '#e53935' },
  { name: 'Shift Handover', value: 20, color: '#fbc02d' },
  { name: 'No Planned Production', value: 18, color: '#ff9800' },
  { name: 'Machine Reset', value: 15, color: '#1976d2' },
  { name: 'Product Changeover', value: 12, color: '#1bbf5c' },
  { name: 'Electrical Failure', value: 10, color: '#3f51b5' },
  { name: 'Mechanical Failure', value: 8, color: '#00bcd4' },
  { name: 'Operator Missing', value: 5, color: '#8bc34a' },
  { name: 'Set Up', value: 3, color: '#bdbdbd' },
];
const runVsIdleData = [
  { name: '0', Run: 10, Idle: 2 },
  { name: '5', Run: 12, Idle: 3 },
  { name: '10', Run: 15, Idle: 4 },
  { name: '15', Run: 18, Idle: 5 },
  { name: '20', Run: 20, Idle: 6 },
];
const stopsFreqData = [
  { name: '0:00', Stops: 3 },
  { name: '4:00', Stops: 2 },
  { name: '8:00', Stops: 3 },
  { name: '12:00', Stops: 1 },
  { name: '16:00', Stops: 5 },
  { name: '20:00', Stops: 4 },
  { name: '24:00', Stops: 3 },
];

const CartonerA300 = () => (
  <div style={{ minHeight: '100vh', background: '#f4f7fa', padding: 0, margin: 0 }}>
    <div style={{ display: 'flex', height: '100vh', background: '#e9eef2' }}>
      <Sidebar />
      <main style={{ flex: 1, padding: '36px 32px', background: '#e9eef2', overflowY: 'auto' }}>
        <TopNav />
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 24, background: '#f6fafd', borderRadius: 12, padding: '18px 24px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', minHeight: 80 }}>
          <div style={{ marginLeft: 32 }}>
            <div style={{ fontSize: 28, fontWeight: 700, color: '#222', letterSpacing: 0.5 }}>Cartoner Machine: A300</div>
            <div style={{ fontSize: 16, color: '#444', marginTop: 2 }}>
              Live Status: <span style={{ color: '#1bbf5c', fontWeight: 600 }}>Active</span> <span style={{ color: '#888' }}>(29/05/2025) 12:15:23</span>
            </div>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 2fr 2fr 3fr', gap: 18, marginBottom: 18 }}>
          {/* OEE (This Year) */}
          <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: 18, minWidth: 220 }}>
            <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 8 }}>OEE (This Year) <a href="/machine/a300/details" style={{ color: '#1976d2', fontSize: 13, fontWeight: 500, marginLeft: 8, textDecoration: 'none' }}>View Details <svg width="13" height="13" fill="none" stroke="#1976d2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10l4-4-4-4"/></svg></a></div>
            <PieChart width={140} height={140} style={{ margin: '0 auto' }}>
              <Pie data={oeeYearData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={45} outerRadius={65} fill="#8884d8" label={false} startAngle={90} endAngle={-270}>
                {oeeYearData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <circle cx="70" cy="70" r="35" fill="#fff" />
              <text x="70" y="70" textAnchor="middle" dominantBaseline="middle" fontSize="22" fontWeight="700" fill="#222">50%</text>
              <text x="70" y="95" textAnchor="middle" fontSize="12" fill="#bdbdbd">OEE</text>
            </PieChart>
            <ul style={{ padding: 0, margin: 0, listStyle: 'none', fontSize: 15, width: '100%' }}>
              <li style={{ color: '#1bbf5c', display: 'flex', justifyContent: 'space-between' }}><span>● Availability</span> <span>55%</span></li>
              <li style={{ color: '#f9a825', display: 'flex', justifyContent: 'space-between' }}><span>● Performance</span> <span>20%</span></li>
              <li style={{ color: '#e53935', display: 'flex', justifyContent: 'space-between' }}><span>● Quality</span> <span>15%</span></li>
            </ul>
          </div>
          {/* OEE (Last 30 Days) */}
          <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: 18, minWidth: 220 }}>
            <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 8 }}>OEE (Last 30 Days) <a href="/machine/a300/details" style={{ color: '#1976d2', fontSize: 13, fontWeight: 500, marginLeft: 8, textDecoration: 'none' }}>View Details <svg width="13" height="13" fill="none" stroke="#1976d2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 10l4-4-4-4"/></svg></a></div>
            <PieChart width={140} height={140} style={{ margin: '0 auto' }}>
              <Pie data={oeeMonthData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={45} outerRadius={65} fill="#8884d8" label={false} startAngle={90} endAngle={-270}>
                {oeeMonthData.map((entry, index) => (
                  <Cell key={`cell2-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <circle cx="70" cy="70" r="35" fill="#fff" />
              <text x="70" y="70" textAnchor="middle" dominantBaseline="middle" fontSize="22" fontWeight="700" fill="#222">60%</text>
              <text x="70" y="95" textAnchor="middle" fontSize="12" fill="#bdbdbd">OEE</text>
            </PieChart>
            <ul style={{ padding: 0, margin: 0, listStyle: 'none', fontSize: 15, width: '100%' }}>
              <li style={{ color: '#1bbf5c', display: 'flex', justifyContent: 'space-between' }}><span>● Availability</span> <span>50%</span></li>
              <li style={{ color: '#f9a825', display: 'flex', justifyContent: 'space-between' }}><span>● Performance</span> <span>25%</span></li>
              <li style={{ color: '#e53935', display: 'flex', justifyContent: 'space-between' }}><span>● Quality</span> <span>25%</span></li>
            </ul>
          </div>
          {/* Good and Rejected Blister Produced */}
          <div style={{
            background: '#fff',
            borderRadius: 10,
            boxShadow: '0 2px 8px rgba(60, 80, 100, 0.10)',
            border: '1.5px solid #e3eaf2',
            padding: '14px 14px 4px 14px',
            minWidth: 340,
            minHeight: 260,
            maxWidth: 410,
            width: 410,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            boxSizing: 'border-box',
            overflow: 'hidden',
            position: 'relative',
          }}>
            <div style={{
              fontWeight: 600,
              fontSize: 24,
              marginBottom: 0,
              color: '#222',
              fontFamily: 'inherit',
              lineHeight: 1.2,
              textAlign: 'left',
              borderBottom: 'none',
              paddingBottom: 0,
              marginTop: 2,
              width: '100%',
              letterSpacing: 0.1,
              boxShadow: 'none',
            }}>Good and Rejected Blister Produced</div>
            <BarChart width={360} height={150} data={barData} barCategoryGap={16} margin={{ top: 12, right: 8, left: 8, bottom: 0 }} style={{ maxWidth: '100%' }}>
              <XAxis dataKey="name" fontSize={18} tickLine={false} axisLine={{ stroke: '#e0e0e0' }} tick={{ fill: '#5b7bb2', fontWeight: 500 }} angle={0} dy={10} height={38} />
              <YAxis fontSize={18} tickLine={false} axisLine={{ stroke: '#e0e0e0' }} tick={{ fill: '#bdbdbd', fontWeight: 500 }} width={32} domain={[0, 10]} />
              <Tooltip contentStyle={{ borderRadius: 10, border: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.10)', fontSize: 15 }} labelStyle={{ color: '#1976d2', fontWeight: 600 }} itemStyle={{ fontWeight: 500 }} cursor={{ fill: '#e3f1fc', opacity: 0.5 }} />
              <Bar dataKey="Good" fill="#4caf50" radius={[0, 0, 0, 0]} barSize={22} name="Good" />
              <Bar dataKey="Rejected" fill="#e74c3c" radius={[0, 0, 0, 0]} barSize={22} name="Rejected Blister" />
              <Legend
                verticalAlign="bottom"
                align="left"
                iconType="rect"
                height={36}
                wrapperStyle={{
                  fontSize: 18,
                  fontWeight: 600,
                  marginTop: 8,
                  marginLeft: 12,
                  display: 'flex',
                  justifyContent: 'flex-start',
                  width: '100%',
                  letterSpacing: 0.1,
                }}
                formatter={(value) => value === 'Good'
                  ? <span style={{ color: '#4caf50', marginRight: 18, fontWeight: 600 }}>Good</span>
                  : <span style={{ color: '#e74c3c', fontWeight: 600 }}>Rejected Blister</span>}
              />
            </BarChart>
          </div>
          {/* Alerts & Notifications and Machine Current Status */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, gridColumn: '1 / span 2', marginTop: 0, marginBottom: 0 }}>
            {/* Alerts & Notifications (wide card, new design) */}
            <div style={{ background: '#fff', borderRadius: 18, boxShadow: '0 2px 8px rgba(60, 80, 100, 0.10)', border: '1.5px solid #e3eaf2', padding: '18px 24px', minWidth: 340, minHeight: 260, maxWidth: 480, width: 480, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', boxSizing: 'border-box', overflow: 'hidden', position: 'relative' }}>
              <div style={{ fontWeight: 800, fontSize: 28, color: '#222', marginBottom: 10, fontFamily: 'inherit', textDecoration: 'underline', textUnderlineOffset: 4, letterSpacing: 0.2 }}>Alerts & Notifications</div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}><span style={{ fontSize: 28, marginRight: 12, color: '#e53935' }}>⛔</span><span style={{ fontWeight: 700, fontSize: 20, color: '#e53935', marginRight: 8 }}>Emergency Stop</span><span style={{ fontWeight: 700, fontSize: 22, color: '#222' }}>2-10 h</span></div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}><span style={{ fontSize: 28, marginRight: 12, color: '#f9a825' }}>🔔</span><span style={{ fontWeight: 700, fontSize: 20, color: '#f9a825', marginRight: 8 }}>Last Downstream Stop</span><span style={{ fontWeight: 700, fontSize: 22, color: '#222' }}>12:42 PM</span></div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}><span style={{ fontSize: 28, marginRight: 12, color: '#1976d2' }}>⏰</span><span style={{ fontWeight: 700, fontSize: 20, color: '#1976d2', marginRight: 8 }}>Next Scheduled Maintenance</span><span style={{ fontWeight: 700, fontSize: 22, color: '#222' }}>In 02:30 hrs</span></div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}><span style={{ fontSize: 28, marginRight: 12, color: '#e53935' }}>⚠️</span><span style={{ fontWeight: 700, fontSize: 20, color: '#e53935', marginRight: 8 }}>Idle Time Alert</span><span style={{ fontWeight: 700, fontSize: 18, color: '#222' }}>Exceeded Set threshold</span></div>
              <a href="/machine/a300/details" style={{ color: '#1976d2', fontSize: 18, textDecoration: 'underline', fontWeight: 600, marginTop: 12, display: 'inline-block' }}>View Details <span style={{ fontSize: 20, marginLeft: 2 }}>➔</span></a>
            </div>
            {/* Machine Current Status (wide card, new design) */}
            <div style={{ background: '#fff', borderRadius: 18, boxShadow: '0 2px 8px rgba(60, 80, 100, 0.10)', border: '1.5px solid #e3eaf2', padding: '18px 24px', minWidth: 340, minHeight: 260, maxWidth: 480, width: 480, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', boxSizing: 'border-box', overflow: 'hidden', position: 'relative' }}>
              <div style={{ fontWeight: 800, fontSize: 28, color: '#222', marginBottom: 10, fontFamily: 'inherit', textDecoration: 'underline', textUnderlineOffset: 4, letterSpacing: 0.2 }}>Machine Current Status</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 20, marginBottom: 12, width: '100%' }}>
                <span>Total Machine Run Time</span>
                <span style={{ fontWeight: 800, fontSize: 24 }}>04:12:38</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 20, marginBottom: 12, width: '100%' }}>
                <span>Machine in Idle Condition</span>
                <span style={{ fontWeight: 800, fontSize: 24 }}>00:10:23</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 20, marginBottom: 12, width: '100%' }}>
                <span>Machine Stop Due to Downstem</span>
                <span style={{ fontWeight: 800, fontSize: 24 }}>00:15:13</span>
              </div>
              <a href="/machine/a300/details" style={{ color: '#1976d2', fontSize: 18, textDecoration: 'underline', fontWeight: 600, marginTop: 12, display: 'inline-block' }}>View Details <span style={{ fontSize: 20, marginLeft: 2 }}>➔</span></a>
            </div>
          </div>
        </div>
        {/* Lower Section: Downtime, Machine Run Time VS Idle Time, Downstream Stops Frequency */}
        {/* Lower Section: Downtime, then Machine Run Time VS Idle Time & Downstream Stops Frequency (side by side, as screenshot) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 28,
          marginBottom: 18,
          alignItems: 'stretch',
        }}>
          {/* Downtime (Last 7 days) - Custom Design */}
          <div style={{ background: '#fff', borderRadius: 20, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: 28, minWidth: 420, minHeight: 370, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', overflow: 'visible', position: 'relative' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
              <div style={{ fontWeight: 800, fontSize: 28, color: '#222', fontFamily: 'inherit', lineHeight: 1.2 }}>Downtime <span style={{ fontWeight: 400, fontSize: 22, color: '#222', marginLeft: 8 }}>(Last 7 days)</span></div>
              <span style={{ fontSize: 32, color: '#888', fontWeight: 700, cursor: 'pointer', marginRight: 8 }}>•••</span>
            </div>
            <div style={{ marginTop: 10 }}>
              {[
                { label: 'Work Arrangement', value: '1d 6h', color: '#fbc02d' },
                { label: 'Uncommented', value: '1d 2h', color: '#e53935' },
                { label: 'Technical', value: '11h 43m', color: '#ff9800' },
                { label: 'Material Quality Issues', value: '5h 25m', color: '#1976d2' },
                { label: 'Marterial Shortage', value: '3h 25m', color: '#8bc34a' },
                { label: 'Electrical Failure', value: '2h 16m', color: '#7c4dff' },
                { label: 'Unplanned Cleaning', value: '3h 20m', color: '#00bcd4' },
                { label: 'Set Up', value: '2h 35m', color: '#757575' },
                { label: 'Break', value: '2h 35m', color: '#bdbdbd' },
              ].map((item, idx) => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'center', marginBottom: 7 }}>
                  <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                    <div style={{ width: '100%', maxWidth: 320, height: 32, background: item.color, borderRadius: 6, display: 'flex', alignItems: 'center', position: 'relative', marginRight: 16 }}>
                      <span style={{ color: '#fff', fontWeight: 700, fontSize: 17, marginLeft: 16, textShadow: '0 1px 2px #0002', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.label}</span>
                    </div>
                  </div>
                  <span style={{ fontWeight: 700, fontSize: 17, color: '#222', width: 80, textAlign: 'right', marginRight: 12 }}>{item.value}</span>
                  <span style={{ color: '#1bbf5c', fontSize: 22, marginLeft: 2 }}>{idx < 7 ? <>&#9654;</> : <>&#9650;</>}</span>
                </div>
              ))}
            </div>
            {/* ORGANISATIONAL Card */}
            <div style={{ position: 'absolute', left: 60, bottom: 18, background: '#222', color: '#fff', borderRadius: 14, padding: '18px 22px', minWidth: 260, boxShadow: '0 4px 16px rgba(0,0,0,0.18)', fontSize: 17, fontWeight: 700, zIndex: 2 }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                <span style={{ color: '#ff9800', fontSize: 19, marginRight: 8 }}>●</span> ORGANISATIONAL
              </div>
              <div style={{ fontSize: 19, fontWeight: 700, marginBottom: 2 }}>13h 43m 56s <span style={{ fontWeight: 400, fontSize: 15, color: '#bdbdbd' }}>(36 times)</span></div>
              <div style={{ color: '#1bbf5c', fontWeight: 700, fontSize: 16 }}>-3h 23m 39s (19,82%)</div>
            </div>
          </div>
          {/* Downtime (Last 30 days) - Custom Design */}
          <div style={{ background: '#fff', borderRadius: 20, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: 28, minWidth: 420, minHeight: 370, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', overflow: 'visible', position: 'relative' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
              <div style={{ fontWeight: 800, fontSize: 28, color: '#222', fontFamily: 'inherit', lineHeight: 1.2 }}>Downtime <span style={{ fontWeight: 400, fontSize: 22, color: '#222', marginLeft: 8 }}>(Last 30 days)</span></div>
              <span style={{ fontSize: 32, color: '#888', fontWeight: 700, cursor: 'pointer', marginRight: 8 }}>•••</span>
            </div>
            <div style={{ marginTop: 10 }}>
              {[
                { label: 'Break', value: '16d 22h', color: '#e53935' },
                { label: 'Shift Handover', value: '10d 5h', color: '#1976d2' },
                { label: 'No Planned Producation', value: '7d 7h', color: '#fbc02d' },
                { label: 'Machine Reset', value: '5d 25m', color: '#1976d2' },
                { label: 'Product Changeover', value: '11h 25m', color: '#8bc34a' },
                { label: 'Electrical Failure', value: '9h 53m', color: '#7c4dff' },
                { label: 'Mechanical Failure', value: '6h 20m', color: '#00bcd4' },
                { label: 'Operator Missing', value: '3h 55m', color: '#1976d2' },
                { label: 'Set Up', value: '2h 35m', color: '#1bbf5c' },
              ].map((item, idx) => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'center', marginBottom: 7 }}>
                  <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                    <div style={{ width: '100%', maxWidth: 320, height: 32, background: item.color, borderRadius: 6, display: 'flex', alignItems: 'center', position: 'relative', marginRight: 16 }}>
                      <span style={{ color: '#fff', fontWeight: 700, fontSize: 17, marginLeft: 16, textShadow: '0 1px 2px #0002', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.label}</span>
                    </div>
                  </div>
                  <span style={{ fontWeight: 700, fontSize: 17, color: '#222', width: 80, textAlign: 'right', marginRight: 12 }}>{item.value}</span>
                  <span style={{ color: idx === 8 ? '#f44336' : '#ff9800', fontSize: 22, marginLeft: 2 }}>&#9654;</span>
                </div>
              ))}
            </div>
            {/* Conveyor Breakdown Card */}
            <div style={{ position: 'absolute', left: 60, bottom: 18, background: '#222', color: '#fff', borderRadius: 14, padding: '18px 22px', minWidth: 290, boxShadow: '0 4px 16px rgba(0,0,0,0.18)', fontSize: 17, fontWeight: 700, zIndex: 2 }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                <span style={{ color: '#ff9800', fontSize: 19, marginRight: 8 }}>●</span> Conveyor Breakdown
              </div>
              <div style={{ fontSize: 19, fontWeight: 700, marginBottom: 2 }}>89h 43m 56s <span style={{ fontWeight: 400, fontSize: 15, color: '#bdbdbd' }}>(77 times)</span></div>
              <div style={{ color: '#f44336', fontWeight: 700, fontSize: 16 }}>+70h 53m 20s (808,39%)</div>
              <div style={{ color: '#fff', fontWeight: 400, fontSize: 15, marginTop: 2 }}>3,11% of planned time</div>
            </div>
          </div>
        </div>
        {/* Machine Run Time VS Idle Time and Downstream Stops Frequency side by side */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 28,
          marginBottom: 18,
          alignItems: 'stretch',
        }}>
          {/* Machine Run Time VS Idle Time */}
          <div style={{ background: '#fff', borderRadius: 20, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: 24, minWidth: 320, minHeight: 270, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', overflow: 'hidden' }}>
            <div style={{ fontWeight: 800, fontSize: 22, marginBottom: 0, color: '#111', fontFamily: 'inherit', lineHeight: 1.2 }}>Machine Run Time VS Idle Time <span style={{ fontWeight: 400, fontSize: 15, color: '#888', marginLeft: 2 }}>(Last 24 Hours)</span></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 18, margin: '8px 0 0 2px' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginRight: 10 }}>
                <div style={{ width: 22, height: 14, background: '#f9a825', borderRadius: 4, marginRight: 6 }}></div>
                <span style={{ color: '#f9a825', fontWeight: 700, fontSize: 17, fontFamily: 'inherit' }}>Idle Time</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ width: 22, height: 14, background: '#1bbf5c', borderRadius: 4, marginRight: 6 }}></div>
                <span style={{ color: '#1bbf5c', fontWeight: 700, fontSize: 17, fontFamily: 'inherit' }}>Run Time</span>
              </div>
            </div>
            <BarChart width={300} height={180} data={runVsIdleData} style={{ margin: '0 auto' }} barCategoryGap={18}>
              <XAxis dataKey="name" fontSize={15} tickLine={false} axisLine={{ stroke: '#e0e0e0' }} tick={{ fill: '#888', fontWeight: 500 }} />
              <YAxis fontSize={15} tickLine={false} axisLine={{ stroke: '#e0e0e0' }} tick={{ fill: '#888', fontWeight: 500 }} width={40} />
              <Tooltip contentStyle={{ borderRadius: 10, border: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.10)', fontSize: 13 }} labelStyle={{ color: '#1976d2', fontWeight: 600 }} itemStyle={{ fontWeight: 500 }} />
              {/* No Legend, use custom legend above */}
              <Bar dataKey="Idle" fill="#f9a825" radius={[6, 6, 0, 0]} barSize={18} name="Idle Time" />
              <Bar dataKey="Run" fill="#1bbf5c" radius={[6, 6, 0, 0]} barSize={18} name="Run Time" />
            </BarChart>
          </div>
          {/* Downstream Stops Frequency */}
          <div style={{ background: '#fff', borderRadius: 20, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: 24, minWidth: 320, minHeight: 270, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', overflow: 'hidden' }}>
            <div style={{ fontWeight: 800, fontSize: 22, marginBottom: 0, color: '#111', fontFamily: 'inherit', lineHeight: 1.2 }}>Downstream Stops Frequency</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 18, margin: '8px 0 0 2px' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ width: 22, height: 14, background: '#1976d2', borderRadius: 4, marginRight: 6 }}></div>
                <span style={{ color: '#1976d2', fontWeight: 700, fontSize: 17, fontFamily: 'inherit' }}>Output per Hour</span>
              </div>
            </div>
            <LineChart width={300} height={180} data={stopsFreqData} style={{ margin: '0 auto' }}>
              <XAxis dataKey="name" fontSize={15} tickLine={false} axisLine={{ stroke: '#e0e0e0' }} tick={{ fill: '#888', fontWeight: 500 }} />
              <YAxis fontSize={15} tickLine={false} axisLine={{ stroke: '#e0e0e0' }} tick={{ fill: '#888', fontWeight: 500 }} />
              <Tooltip contentStyle={{ borderRadius: 10, border: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.10)', fontSize: 13 }} labelStyle={{ color: '#1976d2', fontWeight: 600 }} itemStyle={{ fontWeight: 500 }} />
              {/* No Legend, use custom legend above */}
              <Line type="monotone" dataKey="Stops" stroke="#1976d2" strokeWidth={3} dot={{ r: 4 }} name="Output per Hour" />
            </LineChart>
          </div>
        </div>
      </main>
    </div>
  </div>
);

export default CartonerA300;

import React from "react";
import { Sidebar, TopNav } from "./NavBar";

const CartonerDetails = () => (
  <div style={{ minHeight: '100vh', background: '#f4f7fa', padding: 0, margin: 0 }}>
    <div style={{ display: 'flex', height: '100vh', background: '#e9eef2' }}>
      <Sidebar />
      <main style={{ flex: 1, padding: '36px 32px', background: '#e9eef2', overflowY: 'auto' }}>
        <TopNav />
        {/* Machine Identification & Status */}
        <div style={{ fontWeight: 700, fontSize: 22, color: '#222', marginBottom: 10 }}>Machine Identification & Status</div>
        <div style={{ display: 'flex', gap: 18, marginBottom: 18 }}>
          {/* Left card */}
          <div style={{ background: '#fff', borderRadius: 10, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: 18, minWidth: 320, flex: 1 }}>
            <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 8 }}>Machine Name/ID : <span style={{ fontWeight: 400 }}>C350</span></div>
            <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 8 }}>Shift Timing : <span style={{ fontWeight: 400 }}>08:00 - 16:00</span></div>
            <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 8 }}>Current Status : <span style={{ color: '#1bbf5c', fontWeight: 700, marginLeft: 8 }}>● Running</span> <span style={{ color: '#f9a825', fontWeight: 700, marginLeft: 8 }}>● Idle</span> <span style={{ color: '#e53935', fontWeight: 700, marginLeft: 8 }}>● Stopped</span></div>
            <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 8 }}>Operator Name : <span style={{ fontWeight: 400 }}>John D.</span></div>
          </div>
          {/* Right card */}
          <div style={{ background: '#fff', borderRadius: 10, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: 18, minWidth: 320, flex: 1 }}>
            <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 8 }}>Total Machine Run Time <span style={{ float: 'right', fontWeight: 700 }}>04h : 12m : 38s</span></div>
            <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 8 }}>Machine IN Idle Condition <span style={{ float: 'right', fontWeight: 700 }}>00h : 10m : 45s</span></div>
            <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 8 }}>Machine Stop (Downstream) <span style={{ float: 'right', fontWeight: 700 }}>00h : 15m : 23s</span></div>
          </div>
        </div>
        {/* Core Performance Metrics */}
        <div style={{ fontWeight: 700, fontSize: 22, color: '#222', marginBottom: 10 }}>Core Performance Metrics</div>
        <div style={{ display: 'flex', gap: 18, marginBottom: 18 }}>
          <div style={{ background: '#fff', borderRadius: 10, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: 18, minWidth: 320, flex: 1 }}>
            <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 8 }}>Total Machine Run Time <span style={{ float: 'right', fontWeight: 700 }}>04h : 12m : 38s</span></div>
            <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 8 }}>Machine in Idle Condition <span style={{ float: 'right', fontWeight: 700 }}>00h : 10m : 45s</span></div>
            <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 8 }}>Machine Stop (Downstream) <span style={{ float: 'right', fontWeight: 700 }}>5 Times</span></div>
          </div>
        </div>
        {/* Downtime Breakdown */}
        <div style={{ fontWeight: 700, fontSize: 22, color: '#222', marginBottom: 10 }}>Downtime Breakdown</div>
        <div style={{ background: '#fff', borderRadius: 10, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: 18, minWidth: 320, marginBottom: 18 }}>
          <table style={{ width: '100%', fontSize: 16, borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ fontWeight: 700, color: '#222', background: '#f6fafd' }}>
                <th style={{ padding: 8, textAlign: 'left' }}>Stop Reason</th>
                <th style={{ padding: 8, textAlign: 'right' }}>Count</th>
                <th style={{ padding: 8, textAlign: 'right' }}>Total Duration</th>
                <th style={{ padding: 8, textAlign: 'right' }}>% of Downtime</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: 8 }}>Downstream Jam</td>
                <td style={{ padding: 8, textAlign: 'right' }}>5</td>
                <td style={{ padding: 8, textAlign: 'right' }}>00:15:23</td>
                <td style={{ padding: 8, textAlign: 'right' }}>40%</td>
              </tr>
              <tr>
                <td style={{ padding: 8 }}>Material Shortage</td>
                <td style={{ padding: 8, textAlign: 'right' }}>2</td>
                <td style={{ padding: 8, textAlign: 'right' }}>00:08:00</td>
                <td style={{ padding: 8, textAlign: 'right' }}>21%</td>
              </tr>
              <tr>
                <td style={{ padding: 8 }}>Changeover</td>
                <td style={{ padding: 8, textAlign: 'right' }}>1</td>
                <td style={{ padding: 8, textAlign: 'right' }}>00:10:00</td>
                <td style={{ padding: 8, textAlign: 'right' }}>27%</td>
              </tr>
              <tr>
                <td style={{ padding: 8 }}>Maintenance/Other</td>
                <td style={{ padding: 8, textAlign: 'right' }}>1</td>
                <td style={{ padding: 8, textAlign: 'right' }}>00:04:00</td>
                <td style={{ padding: 8, textAlign: 'right' }}>12%</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Suggested Operator Actions */}
        <div style={{ fontWeight: 700, fontSize: 22, color: '#222', marginBottom: 10 }}>Suggested Operator Actions</div>
        <div style={{ background: '#fff', borderRadius: 10, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: 18, minWidth: 320, marginBottom: 18 }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: 17 }}>
            <li style={{ color: '#1bbf5c', fontWeight: 700, marginBottom: 8 }}>✔ Clear Downstream Jam</li>
            <li style={{ color: '#222', fontWeight: 700, marginBottom: 8 }}>⏵ Resume operation</li>
            <li style={{ color: '#e53935', fontWeight: 700, marginBottom: 8 }}>⏵ Schedule Preventive min</li>
          </ul>
        </div>
      </main>
    </div>
  </div>
);

export default CartonerDetails;

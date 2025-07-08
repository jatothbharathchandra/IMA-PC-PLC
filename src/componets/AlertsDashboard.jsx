import React from "react";
import { Sidebar, TopNav } from "./NavBar";

const AlertsDashboard = () => (
  <div style={{ minHeight: '100vh', background: '#f4f7fa', padding: 0, margin: 0 }}>
    <div style={{ display: 'flex', height: '100vh', background: '#e9eef2' }}>
      <Sidebar />
      <main style={{ flex: 1, padding: '36px 32px', background: '#e9eef2', overflowY: 'auto' }}>
        <TopNav />
        <div style={{ maxWidth: 1100, margin: '0 auto', marginTop: 24 }}>
          <div style={{ fontSize: 24, fontWeight: 700, color: '#222', letterSpacing: 0.5, marginBottom: 8 }}>Blister Machine : C350</div>
          <div style={{ fontSize: 20, fontWeight: 600, marginBottom: 18 }}>Alert Dashboard</div>
          <div style={{ display: 'flex', gap: 18 }}>
            {/* Main Alert Section */}
            <div style={{ flex: 2 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
                <span style={{ color: '#e53935', fontSize: 28 }}>❗</span>
                <span style={{ fontWeight: 700, fontSize: 22, color: '#222' }}>Active Alert</span>
              </div>
              {/* Alert Cards */}
              <div style={{ background: '#fff', borderRadius: 10, boxShadow: '0 1px 4px rgba(0,0,0,0.08)', padding: 18, marginBottom: 16, borderLeft: '6px solid #f9a825', minWidth: 350 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                  <span style={{ color: '#f9a825', fontSize: 22 }}>⚠️</span>
                  <span style={{ fontWeight: 700, fontSize: 17, color: '#222' }}>Temperature Exceeded</span>
                  <button style={{ marginLeft: 'auto', background: '#ffe082', color: '#222', border: 'none', borderRadius: 8, padding: '6px 18px', fontWeight: 600, fontSize: 15, cursor: 'pointer' }}>Acknowledge</button>
                </div>
                <div style={{ fontSize: 15, color: '#444', marginBottom: 2 }}><b>Code</b> : TEMP-01</div>
                <div style={{ fontSize: 15, color: '#444', marginBottom: 2 }}><b>Zone</b>: Heating Chamber</div>
                <div style={{ fontSize: 15, color: '#444', marginBottom: 2 }}><b>Timestamp</b> : 29-May-2025 ,14:37 , (Operating temperature hans surpassed the safety threshold.)</div>
                <div style={{ fontSize: 15, color: '#222', marginBottom: 2 }}><b>Recommended Action</b> : Inspect and regulate heating components</div>
              </div>
              <div style={{ background: '#fff', borderRadius: 10, boxShadow: '0 1px 4px rgba(0,0,0,0.08)', padding: 18, marginBottom: 16, borderLeft: '6px solid #e53935', minWidth: 350 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                  <span style={{ color: '#e53935', fontSize: 22 }}>❗</span>
                  <span style={{ fontWeight: 700, fontSize: 17, color: '#222' }}>Material Jam Detected</span>
                  <button style={{ marginLeft: 'auto', background: '#ffe082', color: '#222', border: 'none', borderRadius: 8, padding: '6px 18px', fontWeight: 600, fontSize: 15, cursor: 'pointer' }}>Acknowledge</button>
                </div>
                <div style={{ fontSize: 15, color: '#444', marginBottom: 2 }}><b>Code</b> : JAM-04</div>
                <div style={{ fontSize: 15, color: '#444', marginBottom: 2 }}><b>Zone</b>: Feeder Track</div>
                <div style={{ fontSize: 15, color: '#444', marginBottom: 2 }}><b>Timestamp</b> : 29-May-2025 ,14:37 , (Obstruction in feeder path is preventing material flow.)</div>
                <div style={{ fontSize: 15, color: '#222', marginBottom: 2 }}><b>Recommended Action</b> : Pause operations and manually clear jam.</div>
              </div>
              <div style={{ background: '#fff', borderRadius: 10, boxShadow: '0 1px 4px rgba(0,0,0,0.08)', padding: 18, marginBottom: 16, borderLeft: '6px solid #f9a825', minWidth: 350 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                  <span style={{ color: '#f9a825', fontSize: 22 }}>⚠️</span>
                  <span style={{ fontWeight: 700, fontSize: 17, color: '#222' }}>Low foil Supply</span>
                  <button style={{ marginLeft: 'auto', background: '#ffe082', color: '#222', border: 'none', borderRadius: 8, padding: '6px 18px', fontWeight: 600, fontSize: 15, cursor: 'pointer' }}>Acknowledge</button>
                </div>
                <div style={{ fontSize: 15, color: '#444', marginBottom: 2 }}><b>Code</b> : FOIL-02</div>
                <div style={{ fontSize: 15, color: '#444', marginBottom: 2 }}><b>Zone</b>: Roil Feed Unit &nbsp; Replace foil roll before next cycle.</div>
                <div style={{ fontSize: 15, color: '#444', marginBottom: 2 }}><b>Timestamp</b> : 29-May-2025 ,14:37 ,</div>
              </div>
              <div style={{ display: 'flex', gap: 18, marginTop: 18 }}>
                <button style={{ background: '#fff', border: '1.5px solid #bdbdbd', borderRadius: 12, padding: '10px 24px', fontWeight: 600, fontSize: 16, cursor: 'pointer' }}>Clear all Acknowledge</button>
                <button style={{ background: '#fff', border: '1.5px solid #bdbdbd', borderRadius: 12, padding: '10px 24px', fontWeight: 600, fontSize: 16, cursor: 'pointer' }}>View History</button>
                <button style={{ background: '#ffe082', border: 'none', borderRadius: 12, padding: '10px 32px', fontWeight: 700, fontSize: 16, color: '#222', boxShadow: '0 2px 8px rgba(249,168,37,0.18)', cursor: 'pointer' }}>Emergency Stop</button>
              </div>
            </div>
            {/* Alert Summary & Notes */}
            <div style={{ flex: 1, background: '#fff', borderRadius: 10, boxShadow: '0 1px 4px rgba(0,0,0,0.08)', padding: 18, minWidth: 220, maxWidth: 320, border: '1px solid #e0e0e0', marginLeft: 18, height: 'fit-content' }}>
              <div style={{ fontWeight: 700, fontSize: 16, color: '#f9a825', marginBottom: 8 }}>Alert Summary</div>
              <div style={{ fontSize: 15, color: '#222', marginBottom: 8 }}>Total Active Alerts: 3<br />Critical: 2 &nbsp;|&nbsp; Warning: 1</div>
              <div style={{ fontWeight: 700, fontSize: 16, color: '#222', marginBottom: 8 }}>Operator Notes</div>
              <div style={{ fontSize: 15, color: '#444' }}>Material jam reoccurred after last restart.<br />Escalated to maintenance.</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
);

export default AlertsDashboard;

import React from "react";
import { Sidebar, TopNav } from "./NavBar";

const PGB250Details = () => (
  <div style={{ minHeight: '100vh', background: '#f4f7fa', padding: 0, margin: 0 }}>
    <div style={{ display: 'flex', height: '100vh', background: '#e9eef2' }}>
      <Sidebar />
      <main style={{ flex: 1, padding: '36px 32px', background: '#e9eef2', overflowY: 'auto' }}>
        <TopNav />
        <div style={{ fontSize: 26, fontWeight: 700, color: '#222', marginBottom: 10 }}>Stretch Bundling Machine : PGB250</div>
        <div style={{ fontWeight: 700, fontSize: 22, color: '#e53935', marginBottom: 18, display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 32 }}>⚠️</span> Active Alert
        </div>
        {/* Alert Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18, marginBottom: 18 }}>
          {/* Alert 1 */}
          <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.10)', padding: 22, display: 'flex', flexDirection: 'column', gap: 8, borderLeft: '6px solid #f9a825', position: 'relative' }}>
            <div style={{ fontWeight: 700, fontSize: 20, color: '#f9a825', display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 22 }}>⚠️</span> Film Feed Error
              <button style={{ marginLeft: 'auto', background: '#ff5630', color: '#fff', border: 'none', borderRadius: 8, padding: '6px 18px', fontWeight: 600, fontSize: 15, cursor: 'pointer' }}>Acknowledge</button>
            </div>
            <div style={{ fontSize: 15, color: '#222', marginTop: 2 }}><b>Code</b> : FEED-05</div>
            <div style={{ fontSize: 15, color: '#222' }}><b>Zone</b>: Film Unwind Unit</div>
            <div style={{ fontSize: 15, color: '#222' }}><b>Timestamp</b> : 29-May-2025, 14:37, <b>Description</b> : Film roll not advancing correctly.</div>
            <div style={{ fontSize: 15, color: '#222' }}><b>Recommended Action</b> : Inspect film tension sensor and roller mechanism.</div>
          </div>
          {/* Alert 2 */}
          <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.10)', padding: 22, display: 'flex', flexDirection: 'column', gap: 8, borderLeft: '6px solid #e53935', position: 'relative' }}>
            <div style={{ fontWeight: 700, fontSize: 20, color: '#e53935', display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 22 }}>⚙️</span> Bundle Misposition Detected/Product Not Loaded
              <button style={{ marginLeft: 'auto', background: '#ff5630', color: '#fff', border: 'none', borderRadius: 8, padding: '6px 18px', fontWeight: 600, fontSize: 15, cursor: 'pointer' }}>Acknowledge</button>
            </div>
            <div style={{ fontSize: 15, color: '#222', marginTop: 2 }}><b>Code</b> : POS-09</div>
            <div style={{ fontSize: 15, color: '#222' }}><b>Zone</b>: Transfer Conveyor</div>
            <div style={{ fontSize: 15, color: '#222' }}><b>Timestamp</b> : 29-May-2025, 14:37, <b>Description</b> : Bundles are not aligned correctly for wrapping.</div>
            <div style={{ fontSize: 15, color: '#222' }}><b>Recommended Action</b> : Stop operation and reposition bundles manually or adjust sensor alignment.</div>
          </div>
          {/* Alert 3 */}
          <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.10)', padding: 22, display: 'flex', flexDirection: 'column', gap: 8, borderLeft: '6px solid #f9a825', position: 'relative' }}>
            <div style={{ fontWeight: 700, fontSize: 20, color: '#f9a825', display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: 22 }}>⚠️</span> Overheating Detected in Sealing Unit
              <button style={{ marginLeft: 'auto', background: '#ff5630', color: '#fff', border: 'none', borderRadius: 8, padding: '6px 18px', fontWeight: 600, fontSize: 15, cursor: 'pointer' }}>Acknowledge</button>
            </div>
            <div style={{ fontSize: 15, color: '#222', marginTop: 2 }}><b>Code</b> : HEAT-04</div>
            <div style={{ fontSize: 15, color: '#222' }}><b>Zone</b>: Sealing Bar</div>
            <div style={{ fontSize: 15, color: '#222' }}><b>Description</b> : Temperature in sealing bar exceeds safety limit.</div>
            <div style={{ fontSize: 15, color: '#222' }}><b>Timestamp</b> : 29-May-2025, 14:37,</div>
            <div style={{ fontSize: 15, color: '#222' }}><b>Recommended</b> : Allow cooling and check thermal regulation settings.</div>
          </div>
        </div>
        {/* Alert Summary */}
        <div style={{ display: 'flex', gap: 24, marginTop: 18 }}>
          <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.10)', padding: 22, minWidth: 260 }}>
            <div style={{ fontWeight: 700, fontSize: 17, color: '#f9a825', marginBottom: 8 }}>Alert Summary</div>
            <div style={{ fontSize: 15, color: '#222', marginBottom: 4 }}>Total Active Alerts: <b>3</b></div>
            <div style={{ fontSize: 15, color: '#e53935', marginBottom: 4 }}>Critical: <b>1</b></div>
            <div style={{ fontSize: 15, color: '#222' }}>Last Alert Received: <b>29-May-2025, 15:16</b></div>
          </div>
        </div>
        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: 24, marginTop: 32 }}>
          <button style={{ background: '#fff', color: '#222', border: '1.5px solid #222', borderRadius: 12, padding: '12px 28px', fontWeight: 700, fontSize: 16, cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>Clear all Acknowledge</button>
          <button style={{ background: '#fff', color: '#1976d2', border: '1.5px solid #1976d2', borderRadius: 12, padding: '12px 28px', fontWeight: 700, fontSize: 16, cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>View History</button>
          <button style={{ background: '#ffd600', color: '#222', border: 'none', borderRadius: 12, padding: '12px 28px', fontWeight: 700, fontSize: 16, cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>Emergency Stop</button>
        </div>
      </main>
    </div>
  </div>
);

export default PGB250Details;

import React from "react";
import { FiHome, FiRefreshCw, FiCalendar, FiLogOut, FiBell } from 'react-icons/fi';
import { FaRegUserCircle } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
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
          <li
            style={{ background: (location.pathname === '/home' || location.pathname === '/') ? '#16304a' : undefined, padding: '14px 36px', fontWeight: (location.pathname === '/home' || location.pathname === '/') ? 600 : 400, borderRadius: '0 24px 24px 0', cursor: 'pointer' }}
            onClick={() => navigate('/home')}
          >Dashboard</li>
          <li
            style={{ background: location.pathname === '/run-idle' ? '#16304a' : undefined, padding: '14px 36px', fontWeight: location.pathname === '/run-idle' ? 600 : 400, borderRadius: '0 24px 24px 0', cursor: 'pointer' }}
            onClick={() => navigate('/run-idle')}
          >Run & Idle Time</li>
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
  );
};


import { useState, useRef, useEffect } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const machineOptions = [
  'Blister Machine: C350',
  'Cartoner Machine: A300',
  'Stretch Bundling Machine: PGB250',
];

const TopNav = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selected, setSelected] = useState('');
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Calendar state
  const [showCalendar, setShowCalendar] = useState(false);
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  // Refresh handler
  const handleRefresh = () => {
    window.location.reload();
  };

  // Home handler
  const handleHome = () => {
    navigate('/home');
  };

  // Calendar handler
  const handleCalendar = () => {
    setShowCalendar((v) => !v);
  };

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      gap: 24,
      background: 'transparent',
      padding: '0 0 0 0',
      minHeight: 0,
      width: '100%'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, position: 'relative' }}>
        <button onClick={handleHome} style={{ background: '#fff', border: '2px solid #222', borderRadius: 6, padding: 0, width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><FiHome size={22} /></button>
        <button onClick={handleRefresh} style={{ background: '#fff', border: '2px solid #222', borderRadius: 6, padding: 0, width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><FiRefreshCw size={22} /></button>
        <button onClick={handleCalendar} style={{ background: '#fff', border: '2px solid #222', borderRadius: 6, padding: 0, width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', position: 'relative' }}><FiCalendar size={22} /></button>
        {showCalendar && (
          <div style={{ position: 'absolute', top: 54, right: 0, zIndex: 2000, background: '#fff', borderRadius: 12, boxShadow: '0 8px 32px rgba(0,0,0,0.13)', padding: 12 }}>
            <DateRange
              editableDateInputs={true}
              onChange={item => setDateRange([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={dateRange}
              rangeColors={["#1976d2"]}
              showMonthAndYearPickers={true}
              showDateDisplay={true}
              showSelectionPreview={true}
              months={1}
              direction="horizontal"
            />
            <button onClick={() => setShowCalendar(false)} style={{ marginTop: 8, background: '#1976d2', color: '#fff', border: 'none', borderRadius: 8, padding: '8px 18px', fontWeight: 600, fontSize: 15, cursor: 'pointer', width: '100%' }}>Close</button>
          </div>
        )}
        <button
          style={{
            background: '#fff',
            border: '2px solid #222',
            borderRadius: 6,
            padding: 0,
            width: 130,
            height: 44,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            fontWeight: 700,
            fontSize: 18,
            gap: 8,
            boxShadow: 'none',
            transition: 'box-shadow 0.2s',
          }}
          onClick={() => navigate('/')}
        >
          <FiLogOut size={22} style={{ marginRight: 6 }} />
          <span style={{ fontSize: 17, fontWeight: 700, marginLeft: 2 }}>Logout</span>
        </button>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
        <div style={{ position: 'relative', background: '#b3e0fc', borderRadius: 14, padding: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', width: 44, height: 44, boxShadow: '0 2px 8px rgba(33,150,243,0.10)' }}>
          <FiBell size={22} color="#2196f3" />
          <span style={{
            position: 'absolute',
            top: 2,
            right: 2,
            background: '#2196f3',
            color: '#fff',
            borderRadius: '50%',
            fontSize: 13,
            fontWeight: 700,
            width: 24,
            height: 24,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid #fff',
            boxShadow: '0 1px 4px rgba(33,150,243,0.12)'
          }}>04</span>
        </div>
        <div style={{ marginLeft: 0, position: 'relative', minWidth: 240 }} ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen((v) => !v)}
            style={{
              width: 260,
              padding: '14px 22px',
              borderRadius: 12,
              border: 'none',
              fontSize: 19,
              color: '#222',
              background: '#fff',
              fontWeight: 500,
              boxShadow: '0 4px 16px rgba(0,0,0,0.10)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              cursor: 'pointer',
              outline: 'none',
              transition: 'box-shadow 0.2s',
              borderBottom: dropdownOpen ? '2px solid #b0b8c1' : 'none',
            }}
          >
            {selected || 'Select Machine'}
            <span style={{ marginLeft: 12, fontSize: 22, color: '#888', transform: dropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>▼</span>
          </button>
          {dropdownOpen && (
            <div style={{
              position: 'absolute',
              top: 56,
              left: 0,
              width: 260,
              background: '#fff',
              borderRadius: 12,
              boxShadow: '0 8px 32px rgba(0,0,0,0.13)',
              zIndex: 10,
              padding: '8px 0',
              fontSize: 19,
            }}>
              {machineOptions.map((option) => (
                <div
                  key={option}
                  onClick={() => {
                    setSelected(option);
                    setDropdownOpen(false);
                    if (option === 'Cartoner Machine: A300') {
                      navigate('/machine/a300');
                    } else if (option === 'Blister Machine: C350') {
                      navigate('/home');
                    } else if (option === 'Stretch Bundling Machine: PGB250') {
                      navigate('/machine/pgb250');
                    }
                  }}
                  style={{
                    padding: '14px 22px',
                    cursor: 'pointer',
                    color: '#222',
                    borderRadius: 8,
                    transition: 'background 0.15s',
                    fontWeight: 500,
                    margin: '2px 8px',
                    background: selected === option ? '#f4f7fa' : 'transparent',
                  }}
                  onMouseDown={e => e.preventDefault()}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { Sidebar, TopNav };

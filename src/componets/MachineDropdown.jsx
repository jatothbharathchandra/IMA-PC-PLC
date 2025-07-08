import React from "react";

const machines = [
  "Blister Machine: C350",
  "Cartoner Machine: A300",
  "Stretch Bundling : PGB250"
];

export default function MachineDropdown() {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState("");
  const ref = React.useRef();

  React.useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} style={{ minWidth: 220, fontFamily: 'inherit', position: 'relative' }}>
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          width: '100%',
          padding: '12px 18px',
          borderRadius: 12,
          border: 'none',
          background: '#fff',
          fontSize: 17,
          color: selected ? '#222' : '#888',
          fontWeight: 500,
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          textAlign: 'left',
          cursor: 'pointer',
          outline: open ? '2px solid #1976d2' : 'none',
          transition: 'outline 0.2s',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {selected || 'Select Machine'}
        <span style={{ marginLeft: 12, fontSize: 20, transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>▼</span>
      </button>
      {open && (
        <div style={{
          position: 'absolute',
          top: '110%',
          left: 0,
          width: '100%',
          background: '#fff',
          borderRadius: 12,
          boxShadow: '0 2px 12px rgba(0,0,0,0.13)',
          zIndex: 10,
          marginTop: 4,
        }}>
          {machines.map((m) => (
            <div
              key={m}
              onClick={() => { setSelected(m); setOpen(false); }}
              style={{
                padding: '16px 18px',
                fontSize: 18,
                color: '#222',
                cursor: 'pointer',
                borderBottom: '1px solid #f0f0f0',
                background: selected === m ? '#f6fafd' : '#fff',
                fontWeight: 500,
                transition: 'background 0.15s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#f6fafd'}
              onMouseLeave={e => e.currentTarget.style.background = selected === m ? '#f6fafd' : '#fff'}
            >
              {m}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

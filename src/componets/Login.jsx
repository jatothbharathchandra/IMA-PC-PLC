

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import machineImg from "../assets/login.png";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add authentication logic here if needed
    navigate('/home');
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#f8f9fa',
    }}>
      <div style={{
        background: '#fff',
        borderRadius: 16,
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        display: 'flex',
        maxWidth: 900,
        width: '100%',
        padding: 40,
        gap: 40,
        alignItems: 'center',
      }}>
        <img
          src={machineImg}
          alt="Machine"
          style={{
            width: 350,
            height: 400,
            objectFit: 'cover',
            borderRadius: 16,
            background: '#eee',
          }}
        />
        <form style={{ minWidth: 320, maxWidth: 350, width: '100%' }} onSubmit={handleSubmit}>
          <h2 style={{ marginBottom: 24, fontWeight: 600 }}>Login</h2>
          <div style={{ marginBottom: 16 }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: 6, fontWeight: 500 }}>Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="john@mail.com"
              style={{
                width: '100%',
                padding: '10px 12px',
                border: '1px solid #ccc',
                borderRadius: 4,
                fontSize: 16,
                marginBottom: 4,
              }}
            />
          </div>
          <div style={{ marginBottom: 8 }}>
            <label htmlFor="password" style={{ display: 'block', marginBottom: 6, fontWeight: 500 }}>Password</label>
            <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
              <input
                id="password"
                type="password"
                placeholder="************"
                style={{
                  width: '100%',
                  padding: '10px 36px 10px 12px',
                  border: '1px solid #ccc',
                  borderRadius: 4,
                  fontSize: 16,
                }}
              />
              <span style={{
                position: 'absolute',
                right: 10,
                color: '#888',
                fontSize: 18,
                cursor: 'pointer',
                userSelect: 'none',
              }} title="Show Password">👁️</span>
            </div>
            <a href="#" style={{ float: 'right', fontSize: 13, color: '#1976d2', textDecoration: 'none', marginTop: 4 }}>Forgot Password?</a>
          </div>
          <button
            type="submit"
            style={{
              width: '100%',
              background: '#1976d2',
              color: '#fff',
              border: 'none',
              borderRadius: 4,
              padding: '12px 0',
              fontWeight: 600,
              fontSize: 17,
              marginTop: 18,
              marginBottom: 10,
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(25,118,210,0.08)'
            }}
          >
            Login
          </button>
          <div style={{ textAlign: 'center', color: '#888', margin: '12px 0 10px 0' }}>or</div>
          <Link to="/signup">
            <button
              type="button"
              style={{
                width: '100%',
                background: '#fff',
                color: '#1976d2',
                border: '1.5px solid #1976d2',
                borderRadius: 4,
                padding: '12px 0',
                fontWeight: 600,
                fontSize: 17,
                cursor: 'pointer',
                transition: 'background 0.2s',
              }}
            >
              Create Account
            </button>
          </Link>
        </form>
      </div>
    </div>

  );
};

export default Login;

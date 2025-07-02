
import React from "react";
import { Link } from "react-router-dom";
import machineImg from "../assets/login.png";

const Signup = () => (
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
      <form style={{ minWidth: 320, maxWidth: 350, width: '100%' }}>
        <h2 style={{ marginBottom: 24, fontWeight: 600 }}>Create Account</h2>
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
        <div style={{ marginBottom: 16 }}>
          <label htmlFor="password" style={{ display: 'block', marginBottom: 6, fontWeight: 500 }}>Password</label>
          <input
            id="password"
            type="password"
            placeholder="************"
            style={{
              width: '100%',
              padding: '10px 12px',
              border: '1px solid #ccc',
              borderRadius: 4,
              fontSize: 16,
            }}
          />
        </div>
        <div style={{ marginBottom: 24 }}>
          <label htmlFor="confirmPassword" style={{ display: 'block', marginBottom: 6, fontWeight: 500 }}>Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="************"
            style={{
              width: '100%',
              padding: '10px 12px',
              border: '1px solid #ccc',
              borderRadius: 4,
              fontSize: 16,
            }}
          />
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
            marginTop: 8,
            marginBottom: 10,
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(25,118,210,0.08)'
          }}
        >
          Create Account
        </button>
        <div style={{ textAlign: 'center', color: '#888', margin: '12px 0 10px 0' }}>or</div>
        <Link to="/">
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
            Back to Login
          </button>
        </Link>
      </form>
    </div>
  </div>
);

export default Signup;

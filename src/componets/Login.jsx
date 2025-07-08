

import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import machineImg from "../assets/login.png";

const Login = () => {
  const navigate = useNavigate();
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [showResetModal, setShowResetModal] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [otpError, setOtpError] = useState("");
  const otpRefs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];
  const [resetPassword, setResetPassword] = useState("");
  const [resetPassword2, setResetPassword2] = useState("");
  const [showResetPass, setShowResetPass] = useState(false);
  const [showResetPass2, setShowResetPass2] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [resetError, setResetError] = useState("");

  const handleOtpChange = (idx, val) => {
    if (!/^[0-9]?$/.test(val)) return;
    const newOtp = [...otp];
    newOtp[idx] = val;
    setOtp(newOtp);
    if (val && idx < 5) {
      otpRefs[idx + 1].current.focus();
    }
  };
  const handleOtpKeyDown = (idx, e) => {
    if (e.key === "Backspace" && !otp[idx] && idx > 0) {
      otpRefs[idx - 1].current.focus();
    }
  };
  const handleVerify = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join("");
    if (enteredOtp === "393441") {
      setShowOtpModal(false);
      setShowResetModal(true);
      setOtp(["", "", "", "", "", ""]);
      setOtpError("");
    } else {
      setOtpError("Invalid OTP. Please try again.");
    }
  };

  const handleResetSubmit = (e) => {
    e.preventDefault();
    // Fake validation: both fields must be non-empty and match
    if (!resetPassword || !resetPassword2) {
      setResetError("Please fill in both password fields.");
      return;
    }
    if (resetPassword !== resetPassword2) {
      setResetError("Passwords do not match.");
      return;
    }
    setResetError("");
    setShowResetModal(false);
    setShowSuccessModal(true);
    setResetPassword("");
    setResetPassword2("");
  };
    {/* Success Modal */}
    {showSuccessModal && (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(0,0,0,0.38)',
        zIndex: 1200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(2.5px)'
      }}>
        <div style={{
          background: '#fff',
          borderRadius: 16,
          boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
          padding: '38px 32px 32px 32px',
          minWidth: 370,
          maxWidth: '90vw',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <button
            onClick={() => setShowSuccessModal(false)}
            style={{
              position: 'absolute',
              top: 18,
              right: 18,
              background: 'none',
              border: 'none',
              fontSize: 28,
              color: '#222',
              cursor: 'pointer',
              fontWeight: 400,
              lineHeight: 1,
            }}
            aria-label="Close"
          >
            ×
          </button>
          <div style={{ marginBottom: 18, marginTop: 8 }}>
            <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
              <circle cx="35" cy="35" r="35" fill="#22c55e"/>
              <path d="M22 36.5L32 46.5L48 28.5" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 style={{ fontWeight: 600, fontSize: 22, marginBottom: 8, marginTop: 0, textAlign: 'center' }}>Password Changed Successfully</h2>
          <div style={{ fontSize: 16, color: '#222', marginBottom: 18, textAlign: 'center' }}>
            Now login using your new password
          </div>
          <button
            onClick={() => setShowSuccessModal(false)}
            style={{
              width: 180,
              background: '#1976d2',
              color: '#fff',
              border: 'none',
              borderRadius: 8,
              padding: '13px 0',
              fontWeight: 700,
              fontSize: 18,
              marginTop: 8,
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(25,118,210,0.08)'
            }}
          >
            Login
          </button>
        </div>
      </div>
    )}

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
            <span
              style={{ float: 'right', fontSize: 13, color: '#1976d2', textDecoration: 'none', marginTop: 4, cursor: 'pointer' }}
              onClick={() => setShowOtpModal(true)}
            >
              Forgot Password?
            </span>
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
    {/* OTP Modal */}
    {showOtpModal && (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(0,0,0,0.35)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(2px)'
      }}>
        <div style={{
          background: '#fff',
          borderRadius: 12,
          boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
          padding: '36px 32px 32px 32px',
          minWidth: 370,
          maxWidth: '90vw',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <button
            onClick={() => setShowOtpModal(false)}
            style={{
              position: 'absolute',
              top: 18,
              right: 18,
              background: 'none',
              border: 'none',
              fontSize: 28,
              color: '#222',
              cursor: 'pointer',
              fontWeight: 400,
              lineHeight: 1,
            }}
            aria-label="Close"
          >
            ×
          </button>
          <h2 style={{ fontWeight: 600, fontSize: 22, marginBottom: 10, marginTop: 0, textAlign: 'center' }}>Change Password</h2>
          <div style={{ fontSize: 16, color: '#222', marginBottom: 8, textAlign: 'center' }}>
            Enter the 6 digit OTP sent to<br />
            <span style={{ color: '#1976d2', fontWeight: 500, fontSize: 15 }}>Bharathchandra@gmail.com</span>
          </div>
          <form onSubmit={handleVerify} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: 10, margin: '18px 0 18px 0' }}>
              {otp.map((val, idx) => (
                <input
                  key={idx}
                  ref={otpRefs[idx]}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={val}
                  onChange={e => handleOtpChange(idx, e.target.value)}
                  onKeyDown={e => handleOtpKeyDown(idx, e)}
                  style={{
                    width: 54,
                    height: 54,
                    textAlign: 'center',
                    fontSize: 26,
                    border: '2px solid #d1d5db',
                    borderRadius: 10,
                    outline: 'none',
                    background: '#f8f9fa',
                    fontWeight: 600,
                    boxShadow: '0 1px 4px rgba(0,0,0,0.04)'
                  }}
                  autoFocus={idx === 0}
                />
              ))}
            </div>
            {otpError && <div style={{ color: '#e53935', fontWeight: 500, marginBottom: 8, marginTop: -8 }}>{otpError}</div>}
            <button
              type="submit"
              style={{
                width: '100%',
                background: '#1976d2',
                color: '#fff',
                border: 'none',
                borderRadius: 8,
                padding: '14px 0',
                fontWeight: 700,
                fontSize: 20,
                marginTop: 8,
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(25,118,210,0.08)'
              }}
            >
              Verify
            </button>
          </form>
        </div>
      </div>
    )}
    {/* Password Reset Modal */}
    {showResetModal && (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(0,0,0,0.35)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(2px)'
      }}>
        <div style={{
          background: '#fff',
          borderRadius: 12,
          boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
          padding: '36px 32px 32px 32px',
          minWidth: 370,
          maxWidth: '90vw',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <button
            onClick={() => setShowResetModal(false)}
            style={{
              position: 'absolute',
              top: 18,
              right: 18,
              background: 'none',
              border: 'none',
              fontSize: 28,
              color: '#222',
              cursor: 'pointer',
              fontWeight: 400,
              lineHeight: 1,
            }}
            aria-label="Close"
          >
            ×
          </button>
          <h2 style={{ fontWeight: 600, fontSize: 22, marginBottom: 18, marginTop: 0, textAlign: 'center' }}>Password Reset</h2>
          <form onSubmit={handleResetSubmit} style={{ width: '100%', maxWidth: 400, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: '100%', marginBottom: 16 }}>
              <label style={{ display: 'block', marginBottom: 6, fontWeight: 500 }}>Enter New Password</label>
              <div style={{ position: 'relative', width: '100%', maxWidth: 400 }}>
                <input
                  type={showResetPass ? 'text' : 'password'}
                  value={resetPassword}
                  onChange={e => setResetPassword(e.target.value)}
                  placeholder="************"
                  style={{
                    width: '100%',
                    maxWidth: 400,
                    padding: '10px 38px 10px 12px',
                    border: '1px solid #ccc',
                    borderRadius: 8,
                    fontSize: 17,
                    boxSizing: 'border-box',
                  }}
                  required
                />
                <span
                  style={{
                    position: 'absolute',
                    right: 12,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#7b1fa2',
                    fontSize: 22,
                    cursor: 'pointer',
                    userSelect: 'none',
                    background: 'none',
                    padding: 0,
                  }}
                  title={showResetPass ? 'Hide Password' : 'Show Password'}
                  onClick={() => setShowResetPass(v => !v)}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7b1fa2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="12" rx="8" ry="5"/><circle cx="12" cy="12" r="2.5"/></svg>
                </span>
              </div>
            </div>
            <div style={{ width: '100%', marginBottom: 16 }}>
              <label style={{ display: 'block', marginBottom: 6, fontWeight: 500 }}>Re-Enter New Password</label>
              <div style={{ position: 'relative', width: '100%', maxWidth: 400 }}>
                <input
                  type={showResetPass2 ? 'text' : 'password'}
                  value={resetPassword2}
                  onChange={e => setResetPassword2(e.target.value)}
                  placeholder="************"
                  style={{
                    width: '100%',
                    maxWidth: 400,
                    padding: '10px 38px 10px 12px',
                    border: '1px solid #ccc',
                    borderRadius: 8,
                    fontSize: 17,
                    boxSizing: 'border-box',
                  }}
                  required
                />
                <span
                  style={{
                    position: 'absolute',
                    right: 12,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#7b1fa2',
                    fontSize: 22,
                    cursor: 'pointer',
                    userSelect: 'none',
                    background: 'none',
                    padding: 0,
                  }}
                  title={showResetPass2 ? 'Hide Password' : 'Show Password'}
                  onClick={() => setShowResetPass2(v => !v)}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7b1fa2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="12" rx="8" ry="5"/><circle cx="12" cy="12" r="2.5"/></svg>
                </span>
              </div>
            </div>
            {resetError && (
              <div style={{ color: '#e53935', fontWeight: 500, marginBottom: 8, marginTop: -4, width: '100%', textAlign: 'center' }}>{resetError}</div>
            )}
            <button
              type="submit"
              style={{
                width: '100%',
                background: '#1976d2',
                color: '#fff',
                border: 'none',
                borderRadius: 10,
                padding: '14px 0',
                fontWeight: 700,
                fontSize: 20,
                marginTop: 8,
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(25,118,210,0.08)'
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    )}
  </div>
  );
};

export default Login;

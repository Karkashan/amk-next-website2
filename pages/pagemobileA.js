'use client';

import React from 'react';

export default function PageMobile() {
  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', padding: '20px', textAlign: 'center' }}>

      {/* زر واتساب في الزاوية العليا اليسرى */}
      <a
        href="https://wa.me/966505680795"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          top: '20px',
          left: '20px',
          zIndex: 1000,
        }}
      >
        <img
          src="/images/whatsapp-icon.png"
          alt="تواصل واتساب"
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          }}
        />
      </a>

      {/* زر العودة */}
      <a
        href="/"
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: 1000,
          width: '60px',
          height: '60px',
          backgroundColor: '#128C4A',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '10px',
          borderRadius: '50%',
          textDecoration: 'none',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          lineHeight: '1.1',
          padding: '6px',
        }}
      >
        <span style={{ fontSize: '16px' }}>🔙</span>
        <span>عودة<br />Back</span>
      </a>

      <img src="/images/tage1.png" alt="ملاحظة 1" style={{ width: '100%', maxWidth: '400px', margin: '0 auto 10px' }} />
      <img src="/images/tage2.png" alt="ملاحظة 2" style={{ width: '100%', maxWidth: '400px', marginTop: '20px' }} />
      <img src="/images/tage3.png" alt="ملاحظة 3" style={{ width: '100%', maxWidth: '400px', marginTop: '20px' }} />
      <img src="/images/logo1.png" alt="شعار رقم 1" style={{ width: '170px', height: '170px', marginTop: '20px' }} />
      <img src="/images/tage4.png" alt="ملاحظة 4" style={{ width: '100%', maxWidth: '400px', marginTop: '20px' }} />

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', flexDirection: 'column', alignItems: 'center' }}>
        <img src="/images/logo2.png" alt="شعار رقم 2" style={{ width: '170px', height: '170px' }} />
      </div>

      <img src="/images/tage5.png" alt="ملاحظة 5" style={{ width: '100%', maxWidth: '400px', marginTop: '20px' }} />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <img src="/images/logo3.png" alt="شعار رقم 3" style={{ width: '170px', height: '170px' }} />
      </div>

      <img src="/images/tage6.png" alt="ملاحظة 6" style={{ width: '100%', maxWidth: '400px', marginTop: '20px' }} />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <img src="/images/logo4.png" alt="شعار رقم 4" style={{ width: '170px', height: '170px' }} />
      </div>

      <img src="/images/tage7.png" alt="ملاحظة 7" style={{ width: '100%', maxWidth: '400px', marginTop: '20px' }} />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <img src="/images/logo5.png" alt="شعار رقم 5" style={{ width: '170px', height: '170px' }} />
      </div>

      <img src="/images/tage8.png" alt="ملاحظة 8" style={{ width: '100%', maxWidth: '400px', marginTop: '20px' }} />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <img src="/images/logo6.png" alt="شعار رقم 6" style={{ width: '170px', height: '170px' }} />
      </div>

      <img src="/images/tage9.png" alt="ملاحظة 9" style={{ width: '100%', maxWidth: '400px', marginTop: '20px' }} />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <img src="/images/logo7.png" alt="شعار رقم 7" style={{ width: '170px', height: '170px' }} />
      </div>

      <img src="/images/tage10.png" alt="ملاحظة 10" style={{ width: '100%', maxWidth: '400px', marginTop: '20px' }} />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <img src="/images/logo8.png" alt="شعار رقم 8" style={{ width: '170px', height: '170px' }} />
      </div>

      <img src="/images/tage11.png" alt="ملاحظة 11" style={{ width: '100%', maxWidth: '400px', marginTop: '20px' }} />
    </div>
  );
}

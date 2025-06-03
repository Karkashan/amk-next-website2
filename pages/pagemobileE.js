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

      {/* زر العودة الدائري في الزاوية العليا اليمنى */}
      <a
        href="/"
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: 1000,
          backgroundColor: '#28a745',
          color: 'white',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '10px',
          textAlign: 'center',
          lineHeight: '1.1',
          textDecoration: 'none',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          fontWeight: 'bold',
        }}
      >
        عودة<br />Back
      </a>

      {/* الصور والملاحظات */}
      <img src="/images/note1.png" alt="ملاحظة 1" style={{ width: '100%', maxWidth: '400px', margin: '0 auto 10px' }} />
      <img src="/images/note2e.png" alt="ملاحظة 2" style={{ width: '100%', maxWidth: '400px', marginTop: '20px' }} />
      <img src="/images/note3e.png" alt="ملاحظة 3" style={{ width: '100%', maxWidth: '400px', marginTop: '20px' }} />
      <img src="/images/logo1.png" alt="شعار رقم 1" style={{ width: '170px', height: '170px', marginTop: '20px' }} />
      <img src="/images/note4e.png" alt="ملاحظة 4" style={{ width: '100%', maxWidth: '400px', marginTop: '20px' }} />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <img src="/images/logo2.png" alt="شعار رقم 2" style={{ width: '170px', height: '170px' }} />
      </div>
      <img src="/images/note5e.png" alt="ملاحظة 5" style={{ width: '100%', maxWidth: '400px', marginTop: '20px' }} />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <img src="/images/logo3.png" alt="شعار رقم 3" style={{ width: '170px', height: '170px' }} />
      </div>
      <img src="/images/note6e.png" alt="ملاحظة 6" style={{ width: '100%', maxWidth: '400px', marginTop: '20px' }} />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <img src="/images/logo4.png" alt="شعار رقم 4" style={{ width: '170px', height: '170px' }} />
      </div>
      <img src="/images/note7e.png" alt="ملاحظة 7" style={{ width: '100%', maxWidth: '400px', marginTop: '20px' }} />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <img src="/images/logo5.png" alt="شعار رقم 5" style={{ width: '170px', height: '170px' }} />
      </div>
      <img src="/images/note8e.png" alt="ملاحظة 8" style={{ width: '100%', maxWidth: '400px', marginTop: '20px' }} />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <img src="/images/logo6.png" alt="شعار رقم 6" style={{ width: '170px', height: '170px' }} />
      </div>
      <img src="/images/note9e.png" alt="ملاحظة 9" style={{ width: '100%', maxWidth: '400px', marginTop: '20px' }} />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <img src="/images/logo7.png" alt="شعار رقم 7" style={{ width: '170px', height: '170px' }} />
      </div>
      
      {/* تم استبدال Note10 بـ Note10E */}
      <img src="/images/note10e.png" alt="ملاحظة 10" style={{ width: '100%', maxWidth: '400px', marginTop: '20px' }} />
      
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <img src="/images/logo8.png" alt="شعار رقم 8" style={{ width: '170px', height: '170px' }} />
      </div>

      {/* Note11 (الأخير) */}
      <img src="/images/note11.png" alt="ملاحظة 11" style={{ width: '100%', maxWidth: '400px', marginTop: '20px' }} />

    </div>
  );
}

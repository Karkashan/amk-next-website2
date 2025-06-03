import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  const goToArabic = () => {
    router.push('/pagemobileA');
  };

  const goToEnglish = () => {
    router.push('/pagemobileE');
  };

  return (
    <div
      style={{
        padding: '30px',
        textAlign: 'center',
        backgroundColor: '#f0f0f0',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* صورة amk1 مع مسافة 70px قبل النص */}
      <img
        src="/images/amk1.png"
        alt="صندوق 1"
        style={{
          width: '80vw',
          maxWidth: '450px',
          marginBottom: '70px',
          display: 'block',
          animation: 'none',
        }}
      />

      {/* العناوين */}
      <h1 style={{ fontSize: '36px', fontWeight: 'bold' }}>مرحبًا بكم في موقع</h1>
      <h2 style={{ fontSize: '32px', fontWeight: 'bold' }}>كركشان للأعمال والاستثمار</h2>
      <h3 style={{ color: '#800000' }}>(Welcome to the site)</h3>
      <h3 style={{ color: '#800000' }}>(Karkashan for Business & Investment)</h3>

      {/* أزرار اللغة */}
      <div
        style={{
          marginTop: '40px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          alignItems: 'center',
          width: '100%',
          maxWidth: '300px',
        }}
      >
        {/* زر العربي */}
        <button
          onClick={goToArabic}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#ffffff',
            border: '3px solid #006400',
            borderRadius: '12px',
            cursor: 'pointer',
            width: '200px',
            fontWeight: 'bold',
            color: '#006400',
            boxShadow: '2px 2px 8px rgba(0,0,0,0.2)',
          }}
        >
          تابع بالعربي
        </button>

        {/* زر الإنجليزي مع نص صغير */}
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={goToEnglish}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: '#ffffff',
              border: '3px solid #00008B',
              borderRadius: '12px',
              cursor: 'pointer',
              width: '200px',
              fontWeight: 'bold',
              color: '#00008B',
              boxShadow: '2px 2px 8px rgba(0,0,0,0.2)',
            }}
          >
            Continue
          </button>
          <p style={{ fontSize: '12px', color: '#444', marginTop: '6px' }}>Continue in English</p>
        </div>
      </div>
    </div>
  );
}

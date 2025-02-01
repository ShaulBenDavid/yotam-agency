import { ContactUs } from '@/features/ContactUs';
import { Countries } from '@/screens/Root/components/Countries';
import React from 'react';

const AboutUs = () => {
  return (
    <section className="py-2 tb:py-4">
      <h1 className="text-center text-xl font-bold tb:text-2xl">עלינו</h1>
      <p className="text-center text-lg font-semibold">
        פלייסאן היא סוכנות נסיעות המתמחה בטיולים למזרח הרחוק, עם דגש על חוויות
        ייחודיות, שירות אישי ותכנון מדויק. בזכות הקשרים המקומיים שלנו והאהבה
        לאנשים ותרבויות, אנו מציעים חבילות טיול, מלונות, סיורים מודרכים וייעוץ
        מקצועי לכל יעד, כך שתוכלו ליהנות מחופשה בלתי נשכחת בראש שקט. 🌏✈️
      </p>
      <Countries />
      <ContactUs />
    </section>
  );
};

export default AboutUs;

import type { Metadata } from 'next';
import { ogImages } from './ogImage';
import { absoluteUrl } from './seo';

const buildStaticMetadata = ({
  path,
  title,
  description,
}: {
  path: string;
  title: string;
  description: string;
}): Metadata => ({
  title,
  description,
  alternates: {
    canonical: absoluteUrl(path),
  },
  openGraph: {
    title,
    description,
    url: absoluteUrl(path),
    siteName: 'FlySan',
    type: 'website',
    locale: 'he_IL',
    images: ogImages,
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
    images: ogImages,
  },
});

export const aboutUsMetadata: Metadata = buildStaticMetadata({
  path: '/about-us',
  title: 'עלינו',
  description:
    'הכירו את FlySan – סוכנות נסיעות ישראלית המתמחה בטיולים ליפן. יותם ונתנאל מתכננים לכם מסלול אישי עם ידע מקומי וניסיון של שנים, כדי שתחוו את יפן לעומק.',
});

export const contactUsMetadata: Metadata = buildStaticMetadata({
  path: '/contact-us',
  title: 'יצירת קשר',
  description:
    'רוצים לתכנן טיול ליפן? צרו קשר עם צוות FlySan ונבנה לכם מסלול אישי מדויק – לינה, תחבורה, אטרקציות וטיפים – כך שתחוו את יפן בצורה הטובה ביותר.',
});

export const accessibilityMetadata: Metadata = buildStaticMetadata({
  path: '/accessibility',
  title: 'הצהרת נגישות',
  description:
    'הצהרת הנגישות של FlySan – אנו פועלים להנגיש את האתר לכלל הגולשים ומזמינים אתכם לפנות אלינו בכל קושי או הצעה לשיפור.',
});

export const privacyPolicyMetadata: Metadata = buildStaticMetadata({
  path: '/privacy-policy',
  title: 'מדיניות פרטיות',
  description:
    'מדיניות הפרטיות של FlySan מסבירה אילו מידע אנו אוספים באתר, כיצד אנו משתמשים בו ואילו זכויות עומדות לרשותכם כגולשים ולקוחות.',
});

export const attractionsMetadata: Metadata = buildStaticMetadata({
  path: '/attractions',
  title: 'אטרקציות וסיורים ביפן',
  description:
    'גלו סיורים, כרטיסים ואטרקציות ביפן – מהמקדשים העתיקים ועד חוויות מודרניות. FlySan עוזרת לכם להזמין את החוויות הכי שוות לטיול שלכם ביפן.',
});

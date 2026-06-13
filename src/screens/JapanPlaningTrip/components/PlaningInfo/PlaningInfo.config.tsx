import { FcPlanner, FcSelfie } from 'react-icons/fc';

export type PlanCardConfig = {
  title: string;
  description: string[];
  icon: JSX.Element;
  isDark: boolean;
  price: string;
};

export const planCardConfig: PlanCardConfig[] = [
  {
    title: 'פגישת ייעוץ בלבד',
    description: [
      '✅ פגישת ייעוץ ממוקדת בזום.',
      '✅ הכוונה כללית לבניית מסלול עצמאי.',
      '✅ המלצות על ערים, אזורים ועונות מומלצות.',
      '✅ מענה לשאלות בנוגע לתכנון הטיול.',
      '✅ טיפים חשובים שיחסכו זמן וכסף.',
      '✅ המלצות ממקור ראשון על יפן.',
    ],
    icon: <FcSelfie size={50} aria-hidden />,
    isDark: true,
    price: 'החל מ-500 ש״ח',
  },
  {
    title: 'תכנון טיול בהתאמה אישית',
    description: [
      '✅ פגישת ייעוץ מקיפה בזום.',
      '✅ בניית מסלול יומי מלא המותאם לסגנון הטיול, התקציב וקצב הטיול.',
      '✅ סגירת מלונות, סיורים ואטרקציות.',
      '✅ תכנון תחבורה מפורט בין ערים ובין אטרקציות.',
      '✅ מסמך דיגיטלי מסודר הכולל את כל פרטי הטיול והקישורים הישירים.',
      '✅ ליווי אישי וזמינות לאורך כל הטיול ועד החזרה לארץ.',
    ],
    icon: <FcPlanner size={50} aria-hidden />,
    isDark: false,
    price: 'לקבלת הצעת מחיר צרו קשר',
  },
];

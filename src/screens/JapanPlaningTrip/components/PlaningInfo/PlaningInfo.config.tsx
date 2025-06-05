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
    title: 'פגישת ייעוץ בלבד (ללא בניית מסלול)',
    description: [
      ' ✅ שיחה של בין שעה לשעתיים.',
      ' ✅ הכוונה כללית לבניית מסלול עצמאי.',
      ' ✅ המלצות על ערים, אזורים, עונות ומבנה כללי.',
    ],
    icon: <FcSelfie size={50} aria-hidden />,
    isDark: true,
    price: '400 ש״ח',
  },
  {
    title: 'בניית מסלול אישי + פגישת ייעוץ',
    description: [
      ' ✅ פגישת ייעוץ מעמיקה (בין שעה לשעתיים).',
      ' ✅ תכנון מסלול יומי מלא לפי תחומי עניין, קצב ותקציב.',
      ' ✅ פירוט של תחבורה, אטרקציות, מקומות לינה ונקודות עצירה.',
      ' ✅ טיפים חשובים שיחסכו זמן וכסף.',
      ' ✅ מענה לשאלות גם לאחר הפגישה.',
      ' ✅ מותאם בדיוק לסגנון שלכם – רגוע, אינטנסיבי, טבע, תרבות ועוד.',
    ],
    icon: <FcPlanner size={50} aria-hidden />,
    isDark: false,
    price: 'החל מ-1000 ש״ח',
  },
];

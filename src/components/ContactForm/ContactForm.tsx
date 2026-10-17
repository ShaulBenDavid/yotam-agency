'use client';

import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { reportConversion } from '@/utils';
import {
  pillBaseClassName,
  pillVariantClassNames,
} from '@/styles/buttonVariants';

const fieldClassName =
  'w-full min-h-12 rounded-card border border-line bg-white px-4 py-3 text-base text-ink placeholder:text-ink-muted transition focus:border-primary-950 focus:outline-none focus:ring-2 focus:ring-primary-950/15';

export const ContactForm = (): JSX.Element => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    tel: '',
    message: '',
    purpose: '',
  });
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponse(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setResponse({
        success: data.success,
        message: data.message || data.error,
      });

      if (data.success) {
        setFormData({ name: '', email: '', message: '', purpose: '', tel: '' });
        // Fire unconditionally — Consent Mode v2 handles the denied case by
        // sending cookieless pings, so gating this call drops most conversions.
        reportConversion(
          process.env.NEXT_PUBLIC_GOOGLE_ADS_LEAD_FORM_CONVERSION_LABEL as string
        );
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setResponse({
        success: false,
        message: 'Something went wrong. Please try again.',
      });
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="ds-card mx-auto w-full max-w-md space-y-3 p-5 shadow-lift tb:p-8"
    >
      <h2 className="mb-2 text-xl font-extrabold text-ink tb:text-2xl">
        השארת פרטים
      </h2>

      <input
        type="text"
        name="name"
        aria-label="השם שלך"
        placeholder="השם שלך"
        value={formData.name}
        onChange={handleChange}
        required
        className={fieldClassName}
      />

      <input
        type="email"
        name="email"
        aria-label="אימייל"
        placeholder="example@example.com"
        value={formData.email}
        onChange={handleChange}
        required
        className={fieldClassName}
      />
      <input
        type="tel"
        name="tel"
        aria-label="מספר טלפון"
        placeholder="מספר טלפון"
        value={formData.tel}
        onChange={handleChange}
        required
        className={fieldClassName}
      />

      <select
        name="purpose"
        aria-label="מטרה"
        value={formData.purpose}
        onChange={handleChange}
        required
        className={fieldClassName}
      >
        <option value="">מטרה</option>
        <option value="מלונות">מלונות</option>
        <option value="אטרקציות">אטרקציות</option>
        <option value="תכנון מסלול ליפן">תכנון מסלול ליפן</option>
        <option value="אחר....">אחר....</option>
      </select>

      <textarea
        name="message"
        aria-label="פרטים נוספים"
        placeholder="פרטים נוספים"
        value={formData.message}
        onChange={handleChange}
        required
        className={twMerge(fieldClassName, 'min-h-28 resize-y')}
        rows={4}
      />

      <button
        type="submit"
        disabled={loading}
        className={twMerge(
          pillBaseClassName,
          pillVariantClassNames.primary,
          'mt-2 w-full disabled:cursor-wait disabled:opacity-60'
        )}
      >
        {loading ? 'טוען...' : 'שלח'}
      </button>

      {response && (
        <p
          className={`mt-2 text-center text-sm ${response.success ? 'text-emerald-700' : 'text-red-700'}`}
        >
          {response.message}
        </p>
      )}
    </form>
  );
};

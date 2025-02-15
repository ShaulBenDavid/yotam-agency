'use client';

import { useState } from 'react';

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

      if (data.success)
        setFormData({ name: '', email: '', message: '', purpose: '', tel: '' });
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
      className="mx-auto max-w-md space-y-4 rounded-md bg-white p-6 shadow-2xl"
    >
      <h2 className="text-xl font-semibold text-primary-950">השארת פרטים</h2>

      <input
        type="text"
        name="name"
        placeholder="השם שלך"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full rounded-md border p-2"
      />

      <input
        type="email"
        name="email"
        placeholder="example@example.com"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full rounded-md border p-2"
      />
      <input
        type="tel"
        name="tel"
        placeholder="מספר טלפון"
        value={formData.tel}
        onChange={handleChange}
        required
        className="w-full rounded-md border p-2"
      />

      <select
        name="purpose"
        value={formData.purpose}
        onChange={handleChange}
        required
        className="w-full rounded-md border bg-white p-2"
      >
        <option value="">מטרה</option>
        <option value="מלונות">מלונות</option>
        <option value="אטרקציות">אטרקציות</option>
        <option value="תכנון מסלול ליפן">תכנון מסלול ליפן</option>
        <option value="אחר....">אחר....</option>
      </select>

      <textarea
        name="message"
        placeholder="פרטים נוספים"
        value={formData.message}
        onChange={handleChange}
        required
        className="w-full rounded-md border p-2"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-md bg-blue-600 py-2 text-white hover:bg-blue-700 disabled:bg-gray-400"
      >
        {loading ? 'טוען...' : 'שלח'}
      </button>

      {response && (
        <p
          className={`mt-2 text-center text-sm ${response.success ? 'text-green-600' : 'text-red-600'}`}
        >
          {response.message}
        </p>
      )}
    </form>
  );
};

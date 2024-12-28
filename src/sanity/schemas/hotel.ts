import { Routes } from '@/routes';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'city',
  title: 'City',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'starRating',
      title: 'Star Rating',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(5),
      options: {
        list: [1, 2, 3, 4, 5],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'reviewNumber',
      title: 'Review Number',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
      options: {
        list: [
          { title: 'SRI_LANKA', value: Routes.SRI_LANKA },
          { title: 'JAPAN', value: Routes.JAPAN },
          { title: 'THAILAND', value: Routes.THAILAND },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'city',
      title: 'City',
      type: 'reference',
      to: { type: 'city' },
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
    prepare(selection) {
      const { title } = selection;
      return { ...selection, subtitle: title && `${title}` };
    },
  },
});

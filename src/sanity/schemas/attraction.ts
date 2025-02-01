import { Routes } from '@/routes';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'attraction',
  title: 'Attraction',
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
      name: 'description',
      title: 'Description',
      type: 'string',
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
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
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

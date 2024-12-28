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
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'forWho',
      title: 'For Who',
      type: 'string',
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

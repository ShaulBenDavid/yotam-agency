import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import schemaTypes from '@/sanity/schemas';
import myTheme from '@/styles/theme';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? '';

export default defineConfig({
  basePath: '/studio',
  name: 'Fly_San_web',
  title: 'FlySan Web',

  projectId,
  dataset,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
  studio: {},
  theme: myTheme,
});

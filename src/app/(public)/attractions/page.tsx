import React from 'react';
import type { Metadata } from 'next';
import { Attractions } from '@/screens/Attractions';
import { attractionsMetadata } from '@/metadata';

export const metadata: Metadata = attractionsMetadata;

const AttractionsPage = (): JSX.Element => <Attractions />;

export default AttractionsPage;

import React from 'react';
import type { Metadata } from 'next';
import { JapanPlaningTrip } from '@/screens/JapanPlaningTrip';
import { japanMetadata } from '@/metadata';

export const metadata: Metadata = japanMetadata;

const JapanPlaningTripPage = (): JSX.Element => <JapanPlaningTrip />;

export default JapanPlaningTripPage;

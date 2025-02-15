'use client';

import React from 'react';
import { Attraction } from '@/sanity/types';
import { forUrl } from '@/sanity/sanity.utils';
import { AttractionCard } from '@/components/AttractionCard';
import { CityExtra } from '@/features/CityExtra';
import { Routes } from '@/routes';
import {
  AttractionModal,
  useAttractionModal,
} from '@/features/AttractionModal';

interface CityAttractionsProps {
  cityName: string;
  countryName: string;
  image: string;
  citySlug: string;
  countrySlug: string;
  cid?: number;
  attractions: Attraction[];
}

export const CityAttractions = ({
  countryName,
  cityName,
  image,
  countrySlug,
  citySlug,
  cid,
  attractions,
}: CityAttractionsProps): JSX.Element => {
  const {
    onShowAttraction,
    onCloseAttraction,
    attractionModalRef,
    attractionModalData,
  } = useAttractionModal();

  return (
    <>
      <CityExtra
        activityName="אטרקציות"
        activitySlug={Routes.ATTRACTIONS}
        cityName={cityName}
        countryName={countryName}
        image={image}
        citySlug={citySlug}
        countrySlug={countrySlug}
        cid={cid}
        data={attractions}
        cardRender={(params) => (
          <AttractionCard
            key={params._id}
            name={params.title}
            image={forUrl(params.mainImage).url()}
            description={params.description}
            price={params.price}
            onClick={() => onShowAttraction(params)}
          />
        )}
      />
      <AttractionModal
        onClose={onCloseAttraction}
        ref={attractionModalRef}
        data={attractionModalData}
      />
    </>
  );
};

'use client';

import React from 'react';
import { MdOutlineAttractions } from 'react-icons/md';
import { CountryExtra } from '@/features/CountryExtra/CountryExtra';
import { Routes } from '@/routes';
import { forUrl } from '@/sanity/sanity.utils';
import { Attraction } from '@/sanity/types';
import { AttractionCard } from '@/components/AttractionCard';
import {
  AttractionModal,
  useAttractionModal,
} from '@/features/AttractionModal';

interface CountryAttractionsProps {
  countryName: string;
  countrySlug: string;
  image: string;
  cid: number;
  data: Attraction[];
}

export const CountryAttractions = ({
  countryName,
  image,
  countrySlug,
  data,
  cid,
}: CountryAttractionsProps): JSX.Element => {
  const {
    onShowAttraction,
    onCloseAttraction,
    attractionModalRef,
    attractionModalData,
  } = useAttractionModal();

  return (
    <>
      <CountryExtra
        cid={cid}
        activityName="אטרקציות"
        activitySlug={Routes.ATTRACTIONS}
        linkText="לכל האטרקציות ב"
        icon={<MdOutlineAttractions size={50} aria-hidden />}
        carouselTitle="אטרקציות ב"
        countrySlug={countrySlug}
        countryName={countryName}
        image={image}
        data={data}
        cardRender={(params) => (
          <AttractionCard
            name={params.title}
            image={forUrl(params.mainImage).url()}
            description={params.description}
            price={params.price}
            onClick={() => onShowAttraction(params)}
          />
        )}
      />
      {attractionModalData && (
        <AttractionModal
          onClose={onCloseAttraction}
          ref={attractionModalRef}
          data={attractionModalData}
        />
      )}
    </>
  );
};

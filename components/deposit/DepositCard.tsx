import React from 'react';

import { useRouter } from 'next/router';

import { SidePadding } from '../../components/layout/SidePadding';
import { TitledCard } from '../../components/TitledCard';

interface DepositCardProps {
  title: string;
  children: React.ReactNode;
}

export const DepositCard = (props: DepositCardProps) => {
  const { title, children } = props;
  const router = useRouter();

  return (
    <div className="bg-grayLight-20 grow dark:bg-black">
      <SidePadding>
        <TitledCard
          onGoBack={router.back}
          className="mx-auto my-8 w-full max-w-lg lg:my-32"
          title={title}
        >
          {children}
        </TitledCard>
      </SidePadding>
    </div>
  );
};

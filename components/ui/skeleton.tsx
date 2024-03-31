'use client'

import { getProductsSize } from '@/database/products';
import { Card, Skeleton } from '@nextui-org/react';
import * as React from 'react'

export function CardSkeleton() {
  return (
    <Card className="w-[200px] space-y-5 p-4" radius="lg">
      <Skeleton className="rounded-lg">
        <div className="h-24 rounded-lg bg-default-300"></div>
      </Skeleton>
      <div className="space-y-3">
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-4/5 rounded-lg">
          <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton className="w-2/5 rounded-lg">
          <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
        </Skeleton>
      </div>
    </Card>
  );
}


export function CardSkeletonList() {
  const cards = getProductsSize()

  return (
    <div className="gap-6 grid grid-cols-2 sm:grid-cols-4">
      {Array.from({ length: cards }).map((_, index) => (

        <CardSkeleton key={index} />))
      }

    </div>

  )
}
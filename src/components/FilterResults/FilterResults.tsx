"use client";
import React from "react";
import { Button } from "../_shared/Button";
import { Facet, FacetItem, ResultCardContent, mockedFacets } from "./mocks";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onNextPage: () => void;
  onLastPage: () => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  onNextPage,
  onLastPage,
}: PaginationProps) => (
  <nav
    className='flex justify-center mt-2 mb-10 px-6 py-4'
    aria-label='Pagination'
  >
    <ul className='inline-flex items-center justify-center border rounded-md'>
      <li className='px-4'>
        <span>
          Page {currentPage} of {totalPages}
        </span>
      </li>
      <div className='flex items-center'>
        <li className='border'>
          <button
            onClick={onNextPage}
            className='mx-1 px-3 py-2'
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </li>
        <li>
          <button
            onClick={onLastPage}
            className='mx-1 px-3 py-2'
            disabled={currentPage === totalPages}
          >
            »
          </button>
        </li>
      </div>
    </ul>
  </nav>
);

const FacetItemComponent = ({ href, title, count }: FacetItem) => (
  <li className='flex justify-between align-items-center px-4 py-2'>
    <a className='truncate w-2/3 hover:text-blue-600' href={href} title={title}>
      {title}
    </a>
    <span className='flex items-center font-custom bg-gray-800 text-white rounded-full px-2  text-xs font-bold'>
      {count}
    </span>
  </li>
);

interface FacetsColumnProps {
  facets: Facet[];
}

const FacetComponent = ({ title, items, isNew, viewMore }: Facet) => (
  <div className='my-4'>
    <div className='flex justify-between items-center'>
      <h2 className='text-xl font-semibold'>
        {title}
        {isNew && (
          <small className='bg-green-600 text-white rounded-full px-3 py-1 ml-2 text-xs'>
            new
          </small>
        )}
      </h2>

      <a
        href='https://coherentdigital.net/help/impact'
        target='_blank'
        rel='noopener noreferrer'
      ></a>
    </div>
    <ul className='space-y-1'>
      {items.map((item, i) => (
        <FacetItemComponent key={i} {...item} />
      ))}
      {viewMore ? (
        <li className='flex justify-between align-items-center p-4'>
          <Button
            href='#'
            customClass='bg-white text-gray-500 border border-gray-500  hover:text-white hover:bg-gray-600 hover:border-gray-600 p-2 mr-2 rounded-md'
          >
            View more
          </Button>
        </li>
      ) : null}
    </ul>
  </div>
);

const FacetsColumn = ({ facets }: FacetsColumnProps) => (
  <div className='xs-max:hidden md:w-1/2 lg:w-1/4 pr-3'>
    {facets.map((facet, i) => (
      <FacetComponent key={i} {...facet} />
    ))}
  </div>
);

const ResultCard: React.FC<ResultCardContent> = ({
  id,
  href,
  imgSrc,
  imgAlt,
}) => (
  <div
    id={`search-result_file_${id}`}
    className='col-span-1 text-center align-middle pb-3'
  >
    <a href={href} className='h-auto'>
      <img
        src={imgSrc}
        alt={imgAlt}
        className='img-thumbnail max-w-full h-auto p-1 bg-white border-solid border border-gray-300 rounded-md'
      />
    </a>
  </div>
);

interface ResultGridContent {
  results: ResultCardContent[];
}

const ResultGrid: React.FC<ResultGridContent> = ({ results }) => {
  return (
    <>
      <hr className='h-1 w-full my-10 mt-10 border-0 border-t border-gray-200' />

      <div className='flex justify-center'>
        <FacetsColumn facets={mockedFacets} />
        <div className='flex flex-wrap justify-center lg:grid lg:grid-cols-4 gap-4 w-3/4'>
          {results.map((result, index) => (
            <ResultCard
              key={index}
              id={result.id}
              href={result.href}
              imgSrc={result.imgSrc}
              imgAlt={result.imgAlt}
              contentType={result.contentType}
            />
          ))}
        </div>
      </div>
      <Pagination
        currentPage={1}
        totalPages={100}
        onLastPage={() => {}}
        onNextPage={() => {}}
      />
    </>
  );
};

export default ResultGrid;

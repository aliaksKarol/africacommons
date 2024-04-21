"use client";
import { GridViewButton, ListViewButton } from "./components/Buttons";
import { SelectField } from "./components/SelectField";

const resultByPage = [
  { value: "20", label: "20 results" },
  { value: "100", label: "100 results" },
];
const sortBy = [
  { value: "date_asc", label: "Sort by:Date (older first)" },
  { value: "date_desc", label: "Sort by:Date (newer first)" },
];

const NoResults = () => (
  <>
    <div className='mt-10'>
      <div className='flex justify-center mb-1 px-2'>
        <img
          src='https://static.coherentcommons.com/img/illustrations/add_to_list.svg'
          alt='Add to list icon'
          className='img-fluid px-4 mt-10'
          style={{ maxWidth: "25%" }}
        />
      </div>
    </div>
    <div className='flex justify-center mt-4 mb-10'>
      <p className='px-4'>
        <small>There is no content available to you in this list</small>
      </p>
    </div>
  </>
);

export const Filter = () => {
  return (
    <>
      <div className='flex flex-wrap gap-2 w-full justify-center md:justify-end mt-10'>
        <div className='flex flex-wrap gap-3 lg:items-center'>
          <SelectField options={resultByPage} />
          <SelectField options={sortBy} />
        </div>
        <div className='flex gap-1'>
          <ListViewButton />
          <GridViewButton />
        </div>
      </div>
    </>
  );
};

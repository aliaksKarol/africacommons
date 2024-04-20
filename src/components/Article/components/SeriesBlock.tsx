export const Series = () => (
  <>
    <div className='flex flex-col md:flex-row mb-4'>
      <div className='w-full md:w-1/4 font-medium mb-2 md:mb-0'>Type</div>
      <div className='w-full md:w-3/4 text-gray-500 hover:text-blue-700'>
        <a href='/search/?i=collections&amp;collection_type=series%3ASeries'>
          Series
        </a>
      </div>
    </div>

    <div className='flex flex-col md:flex-row mb-4'>
      <div className='w-full md:w-1/4 font-medium mb-2 md:mb-0'>Website</div>
      <div className='w-full md:w-3/4 text-gray-500 hover:text-blue-700 line-clamp-1 overflow-hidden'>
        <a
          href='https://en.wikipedia.org/wiki/Drum_(South_African_magazine)'
          target='_blank'
          rel='noopener noreferrer'
        >
          https://en.wikipedia.org/wiki/Drum_(South_African_magazine)
        </a>
      </div>
    </div>

    <div className='flex flex-col md:flex-row'>
      <div className='w-full md:w-1/4 font-medium mb-2 md:mb-0'>Country</div>
      <div className='w-full md:w-3/4 text-gray-500 hover:text-blue-700 inline-flex items-center'>
        <a
          href='/search/?i=collections&amp;country=ZA%3ASouth Africa'
          className='flex'
        >
          <img
            src='https://static.coherentcommons.com/img/flags/ZA.png'
            alt='South Africa'
            className='h-6 w-auto mr-1'
          />
          <span>South Africa</span>
        </a>
      </div>
    </div>
  </>
);

export const FollowUsButtons = () => (
  <div className='flex flex-wrap gap-1'>
    <button className='btn inline-flex items-center px-3 py-2 rounded text-sm font-medium text-white bg-gray-500 border border-gray-500 hover:text-white hover:bg-gray-600 hover:border-gray-600'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
        className=''
      >
        <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path>
        <polyline points='22 4 12 14.01 9 11.01'></polyline>
      </svg>
      <span className='ml-1'>Following</span>
    </button>
    <button className='inline-flex items-center px-3 py-2 rounded text-sm font-medium text-gray-500 border border-gray-500 hover:text-white hover:bg-gray-600 hover:border-gray-600'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      >
        <circle cx='18' cy='5' r='3'></circle>
        <circle cx='6' cy='12' r='3'></circle>
        <circle cx='18' cy='19' r='3'></circle>
        <line x1='8.59' y1='13.51' x2='15.42' y2='17.49'></line>
        <line x1='15.41' y1='6.51' x2='8.59' y2='10.49'></line>
      </svg>
      <span className='ml-1'>Share</span>
    </button>

    <button className='inline-flex items-center px-3 py-2 mr-2 rounded text-sm font-medium text-gray-500 border border-gray-500 hover:text-white hover:bg-gray-600 hover:border-gray-600'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='14'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      >
        <path d='M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z'></path>
      </svg>
      <span className='ml-1'>Add to list</span>
    </button>

    <div className='flex ml-3'>
      <a
        href='/flags/add/collection/34066/?title=Drum Magazine'
        className='text-gray-500 hover:text-gray-700 text-xs inline-flex items-center font-normal'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        >
          <path d='M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z'></path>
          <line x1='4' y1='22' x2='4' y2='15'></line>
        </svg>
        <span className='ml-1'>Flag this collection</span>
      </a>
    </div>
  </div>
);

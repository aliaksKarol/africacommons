export const Title = () => (
  <>
    <h1 className='text-4xl mb-2 font-medium leading-tight text-2xl mb-2'>
      Drum Magazine
    </h1>
    <div className='text-gray-500 h5 flex items-center mb-2'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
        className='mr-1'
      >
        <polyline points='15 10 20 15 15 20'></polyline>
        <path d='M4 4v7a4 4 0 0 0 4 4h12'></path>
      </svg>
      <a
        href='/orgs/drum-publications/'
        className='text-gray-500 hover:text-blue-700 font-medium text-xl'
      >
        Drum Publications
      </a>
    </div>
  </>
);

export const ListViewButton = () => (
  <div className='border border-gray-500 hover:text-white hover:bg-gray-600 hover:border-gray-600 rounded-sm px-2 py-1'>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='feather feather-list'
    >
      <line x1='8' y1='6' x2='21' y2='6' />
      <line x1='8' y1='12' x2='21' y2='12' />
      <line x1='8' y1='18' x2='21' y2='18' />
      <line x1='3' y1='6' x2='3.01' y2='6' />
      <line x1='3' y1='12' x2='3.01' y2='12' />
      <line x1='3' y1='18' x2='3.01' y2='18' />
    </svg>
  </div>
);

interface GridViewButtonProps {
  title?: string;
  role?: string;
  ariaLabel?: string;
}

export const GridViewButton = ({
  title = "Grid View",
  role = "button",
  ariaLabel = "Grid view layout",
}: GridViewButtonProps) => (
  <div className='border border-gray-500 hover:text-white hover:bg-gray-600 hover:border-gray-600 rounded-sm px-2 py-1'>
    <a
      href={"#"}
      title={title}
      rel='nofollow'
      role={role}
      aria-label={ariaLabel}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='20'
        height='20'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='feather feather-grid'
      >
        <rect x='3' y='3' width='7' height='7'></rect>
        <rect x='14' y='3' width='7' height='7'></rect>
        <rect x='14' y='14' width='7' height='7'></rect>
        <rect x='3' y='14' width='7' height='7'></rect>
      </svg>
    </a>
  </div>
);

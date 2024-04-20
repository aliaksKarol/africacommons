import React from "react";

interface BreadcrumbsItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbsItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => (
  <div className='py-1 md:py-4 px-4'>
    <nav aria-label='breadcrumb'>
      <ol className='flex px-4 py-1 text-sm flex-wrap'>
        {items.map((item, index) => (
          <li key={index} className='flex items-center'>
            {index !== 0 && <span className='px-2 text-gray-500'>/</span>}
            {item.href ? (
              <a href={item.href} className='text-gray-500 hover:text-blue-700'>
                {item.label}
              </a>
            ) : (
              <span aria-current='page'>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  </div>
);

export default Breadcrumbs;

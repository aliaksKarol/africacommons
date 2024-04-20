"use client";

import { Button } from "@/components/_shared/Button";
import { ArrowDownIcon } from "@/components/_shared/icons/ArrowDownIcon";
import CN from "@/utils/classNames";
import { Menu, Transition } from "@headlessui/react";

const userNavigation = [
  { name: "Uploads", href: "/accounts/uploads/" },
  { name: "Following", href: "/accounts/following/" },
  { name: "Affiliation", href: "/accounts/affiliate/" },
  { name: "Lists", href: "/account/lists/" },
  { name: "Settings", href: "/accounts/email/" },
  { name: "Help", href: "https://coherentdigital.net/contact-us" },
];

export function UserBlock() {
  return (
    <div className='relative inline-flex justify-end lg:items-center mt-4 lg:mt-0 md-max:justify-center'>
      <Button href={"#"}>Upload</Button>
      <Menu as='div' className='inline-flex lg:items-center text-left'>
        {({ open }) => (
          <>
            <Menu.Button className='inline-flex justify-center lg:items-center gap-1 w-full text-sm font-medium leading-5 whitespace-nowrap transition duration-150 ease-in-out hover:underline'>
              <div className='flex items-center'>
                <img
                  className='h-7 w-7 rounded-full mr-2 ml-4'
                  src='https://secure.gravatar.com/avatar/a4e850d8548fffc0f2a88f9c804be9b9?s=100&amp;r=g&amp;d=https://static.coherentcommons.com/img/placeholders/user.png'
                  alt=''
                />
                <ArrowDownIcon isOpen={open} />
              </div>
            </Menu.Button>
            <Transition
              show={open}
              enter='transition ease-out duration-100 transform'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='transition ease-in duration-75 transform'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              {(ref) => (
                <Menu.Items
                  static
                  ref={ref}
                  className='origin-top-right absolute right-0 mt-10 lg:mt-1 w-40 rounded border border-gray-300 py-2 bg-white shadow-xs outline-none'
                >
                  <div className='block px-4 py-2 text-xs leading-5 text-gray-700'>
                    Signed in as <b>aleks</b>
                  </div>
                  <div className='h-0 my-2 border-t border-gray-300 overflow-hidden'></div>
                  {userNavigation.map((item, idx) => (
                    <>
                      <Menu.Item key={item.name}>
                        {({ active }) => (
                          <a
                            href={item.href}
                            className={CN(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-xs leading-5 text-gray-700"
                            )}
                          >
                            {item.name}
                          </a>
                        )}
                      </Menu.Item>
                      {(idx + 2) % 5 === 0 && (
                        <div className='h-0 my-2 border-t border-gray-300 overflow-hidden'></div>
                      )}
                    </>
                  ))}
                  <div className='h-0 my-2 border-t border-gray-300 overflow-hidden'></div>
                  <div className='block px-4 py-2 text-xs leading-5 text-gray-700'>
                    Logout
                  </div>
                </Menu.Items>
              )}
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
}

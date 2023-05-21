import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { cx } from '@/utils/dom';

const navigation = [
  { name: 'New', href: '#', current: true },
  { name: 'Past', href: '#', current: false },
  { name: 'Comments', href: '#', current: false },
  { name: 'Ask', href: '#', current: false },
  { name: 'Show', href: '#', current: false },
  { name: 'Jobs', href: '#', current: false },
  { name: 'Submit', href: '#', current: false },
];

export const NavBar = () => {
  return (
    <Disclosure
      as="nav"
      className="bg-gradient-to-r from-primary-red to-primary-red-dark text-white"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 hover:bg-black hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <h1 className="text-[1.5rem]">
                    <strong>Hacker</strong>News
                  </h1>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={cx(
                          {
                            'bg-black ': item.current,
                            ' hover:bg-black hover:bg-opacity-10':
                              !item.current,
                          },
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden absolute h-full w-full bg-gray-700">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={cx(
                    {
                      'bg-gray-900 ': item.current,
                      ' hover:bg-gray-700': !item.current,
                    },
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

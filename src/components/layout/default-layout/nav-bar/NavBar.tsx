import { Link } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { cx } from '@/utils/dom';
import { useRouter } from '@/hooks/useRouter';
import { NAV_BAR_ITEMS } from './NavBar.constants';

export const NavBar = () => {
  const { getIsCurrentPage } = useRouter();
  return (
    <div className="bg-gradient-to-r from-primary-red to-primary-red-dark pb-2 shadow-sm sticky top-0 z-10">
      <Disclosure as="div" className="bg-white">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-screen-2xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
                    <Link to="/" className="text-[1.9rem]">
                      <strong className="text-transparent bg-clip-text bg-gradient-to-r from-primary-red to-primary-red-dark">
                        Hacker
                      </strong>
                      <span>News</span>
                    </Link>
                  </div>
                  <div className="hidden sm:ml-8 sm:flex items-center">
                    <div className="flex space-x-4">
                      {NAV_BAR_ITEMS.map((item) => {
                        const isActive = getIsCurrentPage(item.path);
                        return (
                          <Link
                            key={item.title}
                            to={item.path}
                            className={cx(
                              'rounded-md px-3 py-2 text-sm font-medium',
                              {
                                'bg-primary-red text-white': isActive,
                                'hover:bg-primary-red hover:text-white':
                                  !isActive,
                              }
                            )}
                            aria-current={isActive ? 'page' : undefined}
                          >
                            {item.title}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden absolute h-full w-full bg-gray-700">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {NAV_BAR_ITEMS.map((item) => {
                  const isActive = getIsCurrentPage(item.path);
                  return (
                    <Disclosure.Button
                      key={item.title}
                      as={Link}
                      to={item.path}
                      className={cx(
                        {
                          'bg-gray-900 ': isActive,
                          ' hover:bg-gray-700': !isActive,
                        },
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {item.title}
                    </Disclosure.Button>
                  );
                })}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

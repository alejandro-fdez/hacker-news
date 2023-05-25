import { Link } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { cx } from '@/utils/dom';
import { useRouter } from '@/hooks/useRouter';
import ScrollLock from 'react-scrolllock';
import { NAV_BAR_ITEMS } from './NavBar.constants';

export const NavBar = () => {
  const { getIsCurrentPage } = useRouter();
  return (
    <Disclosure
      as="header"
      aria-label="Main header"
      className="bg-gradient-to-r from-primary-red to-primary-red-dark pb-2 shadow-sm sticky top-0 z-10"
    >
      {({ open }) => (
        <>
          <ScrollLock isActive={!!open} />
          <div className="bg-white">
            <div className="mx-auto max-w-screen-2xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black/60">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <nav
                  className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
                  aria-label="Main navigation"
                >
                  <div className="flex flex-shrink-0 items-center">
                    <Disclosure.Button
                      as={Link}
                      to="/"
                      className="text-[1.9rem]"
                    >
                      <strong className="text-transparent bg-clip-text bg-gradient-to-r from-primary-red to-primary-red-dark">
                        Hacker
                      </strong>
                      <span>News</span>
                    </Disclosure.Button>
                  </div>
                  <div className="hidden sm:ml-8 sm:flex items-center">
                    <div className="flex space-x-4">
                      {NAV_BAR_ITEMS.map((item) => {
                        const isActive = getIsCurrentPage(item.path);
                        return (
                          <Link
                            key={item.title}
                            to={item.path}
                            role="menuitem"
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
                </nav>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden absolute h-screen w-full bg-gray-700 overscroll-none mt-2">
            <nav
              className="flex flex-col px-4 py-4"
              aria-label="Main navigation mobile"
            >
              {NAV_BAR_ITEMS.map((item) => {
                const isActive = getIsCurrentPage(item.path);
                return (
                  <div className="border-b" key={item.title}>
                    <Disclosure.Button
                      as={Link}
                      to={item.path}
                      role="menuitem"
                      className={cx(
                        {
                          'bg-black/30': isActive,
                          ' hover:bg-gray-700': !isActive,
                        },
                        'block px-3 py-3 text-base font-medium text-white'
                      )}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {item.title}
                    </Disclosure.Button>
                  </div>
                );
              })}
            </nav>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

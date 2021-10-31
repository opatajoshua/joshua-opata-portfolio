/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Scrollspy from 'react-scrollspy'

const navigation = [
  { name: 'Home', href: 'home' },
  { name: 'Services', href: 'services' },
  { name: 'Skills', href: 'skills' },
  { name: 'Portfolio', href: 'projects' },
  { name: 'Blog', href: 'blogs' },
  { name: 'Contact', href: 'contact' },
]

export default function NavBar() {
  return (
    <div className="fixed top-0 home-bg w-full z-40">
      <div className="max-w-7xl mx-auto px-4 py-0 sm:px-6 lg:px-8">
        <Disclosure as="nav">
          {({ open }) => (
            <>
              <div className="">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 text-xl">
                      <b>Joshua</b> <span className="font-light">Opata</span>
                    </div>
      
                  </div>
                  <div className="hidden md:block">
                      <Scrollspy items={navigation.map(n=>n.href)} currentClassName="text-green-400 border-b-2 border-green-400" className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={'#'+item.href}
                            className='text-gray-300 hover:text-green-400 px-1 py-2 text-sm font-medium'
                          >
                            {item.name}
                          </a>
                        ))}
                      </Scrollspy>
                    </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>
              <Disclosure.Panel className="md:hidden">
              <Scrollspy items={navigation.map(n=>n.href)} currentClassName="text-green-400 border-b-2 border-green-400" className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={'#'+item.href}
                      className='block px-3 py-2 rounded-md text-base font-medium'
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </Scrollspy>
       
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  )
}

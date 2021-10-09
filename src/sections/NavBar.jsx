/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { NavLink } from 'react-router-dom'
import Scrollspy from 'react-scrollspy'

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Home', href: '', current: true },
  { name: 'Services', href: 'services', current: false },
  { name: 'Skills', href: 'skills', current: false },
  { name: 'Portfolio', href: 'projects', current: false },
  { name: 'Blog', href: 'blogs', current: false },
  { name: 'Contact', href: 'contact', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
  return (
    <div className="fixed top-0 home-section w-full z-40">
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
                            aria-current={item.current ? 'page' : undefined}
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

import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import PropTypes from 'prop-types';
import ReactImageGallery from "react-image-gallery";
import { ExternalLinkIcon } from '@heroicons/react/outline';

export default function ProjectGallery(props) {
    const cancelButtonRef = useRef(null)
    const images = [
        {
          original: 'https://picsum.photos/id/1018/1000/600/',
          thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
          original: 'https://picsum.photos/id/1015/1000/600/',
          thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
          original: 'https://picsum.photos/id/1019/1000/600/',
          thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
      ];

    return (
        <Transition.Root show={props.show} as={Fragment}>
            <Dialog as="div" className="fixed z-50  inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={props.onClose}>
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Dialog.Overlay className="fixed inset-0 bg-gray-700 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                {/* This element is to trick the browser into centering the modal contents. */}
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                    &#8203;
                </span>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                    <div className="inline-block align-bottom home-bg rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle lg:w-4/5 md:w-full sm:w-full">
                    <div className="home-bg px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        
                        <div className="flex flex-col md:flex-row">
                            
                            <div className="flex-1 flex justify-center ">
                                <ReactImageGallery items={images} />
                            </div>
                            <div className="md:w-1/3 md:px-4">
                                <Dialog.Title as="h2" className="text-lg leading-6 font-medium text-gray-200 mt-3 md:mt-0">
                                    {props.project? props.project.name:''}
                                </Dialog.Title>
                                <p className="text-sm text-gray-400 mt-0 md:mt-3">
                                    {props.project? props.project.description:''}
                                </p>
                                <div className="mt-3 flex">
                                    {props.project && props.project.links? 
                                        props.project.links.map(l=>(<a href={l.link} target="_blank" rel="noopener noreferrer" className="text-green-400 mr-4 flex items-center">{l.title} <ExternalLinkIcon className="ml-1 h-4 w-4"/></a>))
                                    :''}
                                    {/* <a href="#" className="text-green-400 mr-3">link 1</a>
                                    <a href="#" className="text-green-400">link 2</a> */}
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="app-bg px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button
                        type="button"
                        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-gray-300 text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={props.onClose}
                        ref={cancelButtonRef}
                        >
                        Close
                        </button>
                    </div>
                    </div>
                </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

ProjectGallery.propTypes = {
    show: PropTypes.bool.isRequired,
    project: PropTypes.object,
};
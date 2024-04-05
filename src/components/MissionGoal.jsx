import React from 'react'
import { TiTick } from "react-icons/ti";
function MissionGoal() {
    return (
        <div className='flex justify-evenly my-10'>
            <div className='flex flex-col w-5/12'>
                <h1 className='text-4xl mb-3 text-second font-medium'>
                    Our Goal
                </h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora adipisci et ea fugiat voluptate animi autem quas, eligendi aliquid temporibus necessitatibus expedita cum distinctio mollitia laborum vero totam? Voluptatum, accusamus.</p>
                <div className='flex flex-wrap'>
                    <div className='flex bg-second py-2 rounded-xl my-2 px-3 text-white items-center mr-1'>
                        <div className='text-3xl mt-[-2px]'>
                            <TiTick />
                        </div>
                        <p className='mb-0 pb-0'>Make Donation</p>
                    </div>
                    <div className='flex bg-second py-2 rounded-xl my-2 px-3 text-white items-center mr-1'>
                        <div className='text-3xl mt-[-2px]'>
                            <TiTick />
                        </div>
                        <p className='mb-0 pb-0'>Become A Volunteer</p>
                    </div>
                    <div className='flex bg-second py-2 my-2 rounded-xl px-3 mt-2 text-white items-center mr-1'>
                        <div className='text-3xl mt-[-2px]'>
                            <TiTick />
                        </div>
                        <p className='mb-0 pb-0'>Food For Poor People dayle</p>
                    </div>
                    <div className='flex bg-second my-2 py-2 rounded-xl px-3 text-white items-center mr-1'>
                        <div className='text-3xl mt-[-2px]'>
                            <TiTick />
                        </div>
                        <p className='mb-0 pb-0'>Education For All</p>
                    </div>
                </div>
                <p className='mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam esse molestias, amet, quod enim excepturi recusandae in reprehenderit distinctio vel quia molestiae provident illo deserunt quasi voluptatibus temporibus laudantium obcaecati!</p>
            </div>
            <div className='flex flex-col w-5/12 mb-14'>
                <h1 className='text-4xl  mb-3 text-second font-medium'>Our Mission</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ducimus voluptatum officia, totam ratione laboriosam ea aut dignissimos pariatur excepturi itaque repudiandae atque? Suscipit quasi amet distinctio alias illo esse.</p>
                <div className='relative'>
                    <img className='' src="https://www.blsonepal.org.np/uploads/medium/volunteer-P26f9wydr3UDGUgfFZ14mHwZjYUgVplGbEX63pXr.jpg" alt="" />
                    <div className='flex absolute bottom-[-50px] left-[30%] text-white justify-center items-center flex-col w-[250px] px-3 py-4 bg-second'>
                        <h2>20000+</h2>
                        <p>Thousand people helped</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MissionGoal
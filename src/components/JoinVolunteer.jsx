import React from 'react'

function JoinVolunteer() {
    return (
        <div className='bg-second text-white flex lg:flex-row flex-col justify-evenly'>
            <div className="w-11/12 mx-auto lg:w-5/12 py-10">
                <h4 className='font-lato my-2 text-base lg:text-xl'>How can we help ?</h4>
                <h1 className='text-xl lg:text-4xl'>Join The Community To Give Education For Children</h1>
                <p className='text-sm lg:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ullam quo nostrum! Sit adipisci quaerat eaque consequuntur aperiam dolorum eligendi non voluptate et, hic repudiandae laborum aspernatur. Reprehenderit, iusto hic?</p>
                <img className='rounded' src="https://i.pinimg.com/564x/00/ec/f8/00ecf8056086a55717aa7f9a54cb6c98.jpg" alt="" />
                {/* <Button /> */}
            </div>
            <div className="w-11/12 mx-auto lg:w-5/12 flex flex-col lg:pt-7 pb-10">
                <h2 className='my-3 text-xl lg:text-3xl text-center'>Become A Volunteer</h2>
                <form className='flex flex-col' action="" method="post">
                    <input className='pl-3 py-1 lg:py-3 rounded-sm my-2' type="text" name="name" id="name" placeholder='Enter your name' />
                    <input className=' pl-3 py-1 lg:py-3 rounded-sm my-2' type="text" name="number" id="number" placeholder='Phone number' />
                    <input className=' pl-3 py-1 lg:py-3 rounded-sm my-2' type="email" name="email" id="email" placeholder='Email address' />
                    <textarea className=' pl-3 py-1 lg:py-3 rounded-sm my-2' name="message" id="message" cols="30" rows="10" placeholder='Your message'></textarea>
                    <input className='bg-red-500 mx-auto mt-2 text-white w-24 rounded-2xl py-1' type="submit" value="SUBMIT" />
                </form>
            </div>
        </div>
    )
}

export default JoinVolunteer
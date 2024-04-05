import React from 'react'
import CustomBox from './CustomBox'

function DonationBox() {
  return (
    <div className='w-10/12 font-lato my-10 flex flex-col mx-auto'>
        <div className='bg-wow flex py-10 justify-center rounded-sm p-5'>
            <div className='flex w-5/12 mr-5 flex-col'>
                <h1 className='text-2xl mb-3 font-medium'>Donate Here</h1>
                <p></p>
                <div className='flex flex-col w-8/12 rounded-lg bg-white'>
                    {/* <img src={} alt="" /> */}
                    <p>Scan this QR code <br />
                        to Donate BLSO Nepal</p>
                </div>
                <div>
                    <h1 className='text-2xl font-medium my-4'>Accepted Payment Methods</h1>
                    <div className='flex flex-col'>

                    </div>
                </div>
            </div>
            <div className='flex flex-col w-5/12'>
                <h1 className='text-2xl font-medium mb-2'>Bank Details</h1>
                <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptatibus excepturi similique eveniet ullam, earum quisquam libero debitis, dolores facere maxime iste at, quasi alias minus. Nisi facilis nobis ad?</p>
                <pre className='mb-1'>Account Number      98776543456789</pre>
                <pre className='mb-1'>Beneficiar Name     Better Life Social Organization </pre>
                <pre></pre>
                <div className='mt-5'>
                <CustomBox name="COPY ACCOUNT DETAILS"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DonationBox
import React from 'react'
import CustomBox from './CustomBox'

function DonationBox() {
    return (
        <div className='w-11/12 lg:w-10/12 font-lato my-10 flex flex-col mx-auto'>
            <div className='bg-wow flex lg:flex-row flex-col py-10 justify-center rounded-sm p-3 lg:p-5'>
                <div className='flex lg:w-5/12 mr-5 flex-col'>
                    <h1 className='text-2xl mb-3 font-medium'>Donate Here</h1>
                    <p></p>
                    <div className='flex flex-col lg:w-8/12 rounded-lg bg-white'>
                        {/* <img src={} alt="" /> */}
                        <p>Scan this QR code <br />
                            to Donate <span className='text-second font-semibold'>BLSO Nepal</span></p>
                    </div>
                    <div>
                        <h1 className='text-2xl font-medium my-4'>Accepted Payment Methods</h1>
                        <div className='flex lg:w-10/12 justify-evenly'>
                            <img className='w-3/12' src="https://seeklogo.com/images/E/esewa-logo-DA36F8FD2F-seeklogo.com.png" alt="" />
                            <img className='w-3/12' src="https://seeklogo.com/images/K/khalti-logo-F0B049E67E-seeklogo.com.png" alt="" />
                            <img className='w-3/12' src="https://seeklogo.com/images/F/fonepay-logo-C9B7151FD6-seeklogo.com.png" alt="" />
                        </div>

                    </div>
                </div>
                <div className='flex flex-col lg:w-5/12'>
                    <h1 className='text-2xl font-medium mb-2'>Bank Details</h1>
                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptatibus excepturi similique eveniet ullam, earum quisquam libero debitis, dolores facere maxime iste at, quasi alias minus. Nisi facilis nobis ad?</p>
                    
                    <h6 className='mb-2 font-medium'>NEPAL INVESTMENT MEGA BANK LIMITED</h6>
                    <pre className='mb-1'>Account Number     01201020256278</pre>
                    <pre className='mb-1'>Beneficiar Name    Better Life Social Organization </pre>
                    <pre className='mb-1'>Address            Putalisadk Branch, Kathamndu, Nepal </pre>
                    <pre></pre>
                    <div className='mt-3'>
                        <CustomBox name="COPY ACCOUNT DETAILS" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DonationBox
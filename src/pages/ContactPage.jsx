import React from 'react'
import Contact from '../components/Contact'
import DonationBox from '../components/DonationBox'

function ContactPage() {
  return (
    <div>
      <Contact />
      <DonationBox />
      <div className='mt-10'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28271.982955283205!2d85.2786920682516!3d27.655537626889714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb177f078f1cd9%3A0xb514415c5a76afb3!2sKusunti%2C%20Lalitpur%2044700!5e0!3m2!1sen!2snp!4v1712400277076!5m2!1sen!2snp"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title='meow'
        ></iframe>
      </div>
    </div>
  )
}

export default ContactPage
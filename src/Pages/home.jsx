
import React from 'react';
import Button from '../CustomComponents/button';
import HomeSlide from '../CustomComponents/carousel';
import Logos from '../CustomComponents/logoArray'; 
import aboutData from '../Data/data'; 
import SimpleSlider from'../CustomComponents/slider'

export default function Home() {
    
    const homeImages = [
        '/Images/Kitchen/-IhIoytA.jpeg',
        '/Images/Kitchen/-sIirgvA.jpeg',
        '/Images/Kitchen/2B_MeqLQ.jpeg',
        '/Images/Kitchen/2mWOU1zw.jpeg',
        '/Images/Kitchen/4LDwtCyA.jpeg',
        '/Images/Kitchen/4wt1U8Kw.jpeg',
        '/Images/Kitchen/9A1d_2wg.jpeg',
        '/Images/Kitchen/BdRJMMxQ.jpeg',
        '/Images/Kitchen/BNQYYTmA.jpeg',
        '/Images/Kitchen/BnwvOv2g.jpeg',
        '/Images/Kitchen/dHGDEznA.jpeg',
        '/Images/Kitchen/GV4nDF7Q.jpeg',
        '/Images/Kitchen/Hlb109Jg.jpeg',
        '/Images/Kitchen/i6CXYwWA.jpeg',
        '/Images/Kitchen/jAZgENHA.jpeg',
        '/Images/Kitchen/JQELB7tw.jpeg',
        '/Images/Kitchen/jVtE7Fuw.jpeg',
        '/Images/Kitchen/l7DHzaiA.jpeg',
        '/Images/Kitchen/n9FTTB4w.jpeg',
        '/Images/Kitchen/QXlxi3qw.jpeg',
        '/Images/Kitchen/TVYR5PDQ.jpeg',
        '/Images/Kitchen/Wm2AAlgw.jpeg',
        '/Images/Bathroom/barmby_baths_rs_v1_ls.jpg',
        '/Images/Bathroom/bpr107_bath_panels_v1_ls.jpg',
        '/Images/Bathroom/bpr113_bath_panels_v1_ls.jpg',
        '/Images/Bathroom/bsg007_baths_v1_ls.jpg',
        '/Images/Bathroom/linton_baths_rs_v1_ls.jpg',
        '/Images/Bathroom/nbb001_baths_v2_ls.jpg',
        '/Images/Bathroom/nbb002_baths_v2_ls.jpg',
        '/Images/Bathroom/nbb003_baths_cameo_v1_ls.jpg',
        '/Images/Bathroom/nbb003_baths_v1_ls.jpg',
        '/Images/Bathroom/nss1_baths_v3_ls1.jpg',
        '/Images/Bathroom/nssq_baths_v3_ls1.jpg',
        '/Images/Bathroom/off973_baths_planels_v2_ls.jpg',
        '/Images/Bathroom/otley_baths_rs_v1_ls.jpg',
        '/Images/Bathroom/singleended_baths_rs_v1_ls.jpg',
    ];

    return (
        <section>

        <section className='mx-4 md:mx-12 lg:mx-24 my-4 flex flex-col lg:flex-row gap-10 items-center justify-center'>
            <div className='lg:w-6/12 flex flex-col items-center lg:items-start text-center lg:text-left gap-4'>
                <h1 className='text-4xl md:text-6xl font-semibold text-gray-800 mb-4'>Creative Bathroom & Kitchen Solutions In Norwich</h1>
                <p className="text-md md:text-lg text-gray-600">Create Your Perfect Kitchen & Bathroom in Norwich, Norfolk, and Suffolk. Our team offers top-quality products and customised solutions from leading UK manufacturers and brands. Contact us today to schedule a design consultation.</p>
                <Button to='/contact'>Book Your Consultation With Us</Button>
            </div>
            <img className='lg:w-5/12 h-auto object-cover rounded-lg mt-4 lg:mt-0' src={'/Images/Kitchen/TVYR5PDQ.jpeg'}/>
        </section>
    

            <Logos />

            <section className='mx-4 md:mx-12 lg:mx-24 grid grid-cols-1 md:grid-cols-2 gap-10'>
                {aboutData.map(data => (
                    <div className='text-center p-4' key={data.id}>
                        <h3 className='font-semibold text-xl mb-3 text-gray-800'>{data.room}</h3>
                        <div className='w-full h-48 md:h-64 lg:h-96 bg-gray-200 overflow-hidden'>
                            <img className='w-full h-full object-cover' src={data.mainImage} alt={`${data.room}`} />
                        </div>
                        <p className='mt-3 text-md md:text-lg text-gray-600'>{data.homeDesk}</p>
                        <Button to={`/${data.url}`}>Explore {data.room}s</Button>
                    </div>
                ))}
            </section>

            <section className='bg-gray-200 py-1'>
                <div className='my-20 mx-4 md:mx-12 lg:mx-24 flex flex-col md:flex-row md:justify-center md:items-center gap-6'>
                    <div className='w-full md:w-1/2'>
                        <h2 className='text-xl font-bold text-gray-600'>OUR LOCATION</h2>
                        <h3 className='text-gray-800 font-bold'>Where We Serve</h3>
                        <p className="text-md md:text-lg text-gray-600">We serve Norwich and the surrounding Norfolk area.</p>
                        <Button to='/contact'>Contact Us</Button>
                    </div>
                    <iframe className='w-full md:w-1/2 h-60' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d619346.7729219461!2d0.28879910565878114!3d52.672198825157885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d0a98a6c1ed5df%3A0x3579c8f16a8c121f!2sNorfolk!5e0!3m2!1sen!2suk!4v1710084848244!5m2!1sen!2suk" allowFullScreen="" loading="lazy"></iframe>
                </div>
            </section>

            <section className='my-20 mx-auto w-3/4 text-center'>
                <div className='gap-2 flex flex-col'>
                    <h3 className='text-4xl text-gray-800 font-bold'>Testimonials</h3>
                    <p className='text-2xl text-gray-600'>Hear what our happy customers have to say.</p>
                    {/* Assuming Slider is correctly imported and used */}
                    <SimpleSlider />
                </div>
            </section>
        </section>
    );
}

import React from 'react';
import projects from '../Data/projects';
import { Link } from 'react-router-dom';

export default function Projects() {
    const customerProjects = projects.map(project => {
        return (
            <div key={project.id} className="max-w-sm w-full lg:max-w-full overflow-hidden shadow-lg rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl">
                <Link to={`/projects/${project.id}`} className="block hover:opacity-75">
                    <img src={project.afterImages[0]} alt={project.projectType} className="w-full h-48 lg:h-72 object-cover rounded-t-lg"/>
                    <div className="p-4 bg-white">
                        <p className="text-lg md:text-xl font-semibold text-gray-800">{`${project.projectType}, ${project.location}`}</p>
                        <p className="mt-2 text-gray-600 text-md md:text-lg">{project.shortDescription}</p>
                    </div>
                </Link>
            </div>
        );
    });

    return (
        <section className='mx-auto py-4 px-4 md:px-12 lg:px-24 max-w-screen-2xl my-8'>
            <div className='flex flex-col lg:flex-row gap-10 my-8 items-center justify-center text-center lg:text-left'>
                <div className='space-y-4 lg:w-7/12'>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Customer Projects</h1>
                    <p className="text-md md:text-lg text-gray-600">Welcome to our creative space where dreams of a perfect kitchen and bathroom turn into reality. Here in the heart of Norwich, we've transformed countless homes, creating spaces that blend stunning aesthetics with functional design.</p>
                    <p className="text-md md:text-lg text-gray-600">Our portfolio is a testament to the passion and precision we pour into every detail. From cosy, family kitchens to lavish bathrooms, we've crafted spaces that reflect personality and style.</p>
                    <p className="text-md md:text-lg text-gray-600">We believe your home should be a reflection of you, and through our bespoke designs, we aim to make that a reality. Dive into our world, explore our projects, and let's create something beautiful together.</p>
                </div>
                <img className='lg:w-5/12 h-auto object-cover rounded-lg' src={projects.find(project => project.id === 2).afterImages[0]} alt="Project After Image"/>
            </div>

            {/* Horizontal Line Divider */}
            <hr className="border-t border-gray-300 my-8" />

            <div>
                <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-8'>Recent projects</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {customerProjects}
                </div>
            </div>
        </section>
    );
}

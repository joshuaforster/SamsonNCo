import React, { useEffect, useState } from 'react';
import projects from '../Data/projects';
import { useParams, Link } from 'react-router-dom';
import Gallery from '../CustomComponents/gallery';

export default function ProjectDetails() {
    const { id } = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        const matchingProject = projects.find(project => project.id.toString() === id);
        setProject(matchingProject);
    }, [id]);


    const photos = project ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {project.afterImages.map((photo, index) => (
                <div key={index} className="w-full h-48 lg:h-96 bg-gray-200 overflow-hidden flex justify-center items-center">
                    <Gallery className="min-w-full min-h-full object-cover shadow-lg rounded"  key={index} image={photo}/>
                </div>
            ))}
        </div>
    ) : null;



    if (!project) {
        return <section className="text-center py-10"><p>Loading project details...</p></section>;
    }

    return (
        <section className='mx-4 md:mx-12 lg:mx-24 my-4'>
            <Link to='/projects' className="inline-block mb-6 text-blue-600 hover:text-blue-800">
                ← Back to Customer Projects
            </Link>
            <div className="mb-8">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-gray-900">{project.name}</h1>
                <p className="text-md md:text-lg lg:text-xl mb-4 text-gray-600">{project.review}</p>
            </div>
            {photos} {/* Use the photos variable directly */}
        </section>
    );
}

import React, { useEffect, useState, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';


const reviews = [
  {
    id: 1,
    text: "Our new kitchen arrived on 27th September (on time) and to say we are pleased with it is an understatement. The build quality is of the highest standard as are the doors, hinges and all components. Sampson N co Kitchens were superb, they were professional and accommodating at all times and when I changed anything on the plans I was met with a 'no problem' attitude which was very satisfying. This company is highly recommended.",
    name: "Peter King"
  },
  {
    id: 2,
    text: "Fantastic company. George was so helpful all the way from planning to installation and we couldn't be happier with our lovely new kitchen and bathroom. Thanks also to Gary and Richard for their hard work, professionalism and attention to detail.",
    name: "Richard Calver"
  },
  {
    id: 3,
    text: "Advised and re-designed our bathroom modification. Always on hand to answer questions and went the extra mile to make sure every last piece was as we wanted. Highly recommend. Thank you.",
    name: "David Dyson"
  }
];


export default function Reviews() {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [offsetX, setOffsetX] = useState(0);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const nextReview = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      setDragging(false);
      setOffsetX(0);
      nextReview();
    },
    onSwipedRight: () => {
      setDragging(false);
      setOffsetX(0);
      prevReview();
    },
    onSwiping: (event) => {
      setDragging(true);
      setOffsetX(event.deltaX);
    },
    onSwiped: () => {
      setDragging(false);
      setOffsetX(0);
    },
    trackMouse: true,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { top, bottom } = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.75 && bottom > 0) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on initial render

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="isolate overflow-hidden bg-white">
      <div
        {...swipeHandlers}
        className="relative mx-auto max-w-screen-xl px-4 lg:px-6 py-24 sm:py-32"
      >
        <div className="absolute left-1/2 top-0 -z-10 h-[50rem] w-[90rem] -translate-x-1/2 bg-[radial-gradient(50%_100%_at_top,theme(colors.indigo.100),white)] opacity-20 lg:left-36" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-12 w-[150vw] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-20 md:mr-0 lg:right-full lg:-mr-36 lg:origin-center" />
        <div className={`transition-opacity duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl text-fontColour font-bold text-center mb-12">Reviews</h2>
          <div className="flex overflow-hidden relative">
            <div
              className="flex w-full cursor-grab"
              style={{
                transform: `translateX(calc(${offsetX}px - ${currentReviewIndex * 100}%))`,
                transition: dragging ? 'none' : 'transform 0.3s ease',
                cursor: dragging ? 'grabbing' : 'grab'
              }}
            >
              {reviews.map((review, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <figure className="flex flex-col items-center gap-y-8 lg:gap-x-10">
                    <blockquote className="text-l font-semibold leading-8 text-fontColour sm:leading-9 w-full text-center">
                      <p>{review.text}</p>
                    </blockquote>
                    <figcaption className="text-base">
                      <div className="font-semibold text-fontColour">{review.name}</div>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center mt-8">
            <button onClick={prevReview} className="mx-2 text-fontColour hover:text-gray-900 focus:outline-none" aria-label="Previous review">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            {reviews.map((_, index) => (
              <div key={index} className={`h-2 w-2 rounded-full mx-1 ${index === currentReviewIndex ? 'bg-gray-900' : 'bg-gray-300'}`} />
            ))}
            <button onClick={nextReview} className="mx-2 text-fontColour hover:text-gray-900 focus:outline-none" aria-label="Next review">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div className="flex justify-center items-center mt-4">
            <span className="text-sm text-fontColour">{currentReviewIndex + 1} of {reviews.length}</span>
          </div>
          {/* <div className="flex justify-center items-center mt-8">
            <Button
              href="https://www.facebook.com/profile.php?id=100069334146139&sk=reviews"
              variant="primary"
            >
              View More Reviews on Facebook
            </Button>
          </div> */}
        </div>
      </div>
    </section>
  );
}

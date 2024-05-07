// import React, { useState } from 'react';
// import './Carousel2.css';

// function Carousel2() {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const prevSlide = () => {
//         if (currentIndex > 0) {
//             setCurrentIndex(currentIndex - 1);
//         }
//     };

//     const nextSlide = () => {
//         // Assuming each card has a fixed width of 100px
//         if (currentIndex < 6) { // Adjust the number according to the number of cards
//             setCurrentIndex(currentIndex + 1);
//         }
//     };

//     return (
//         <div className="carousel-container">
//             <div className="carousel">
//                 <div className="carousel-items" style={{ transform: `translateX(-${currentIndex * 100}px)` }}>
//                     {[...Array(10).keys()].map((index) => (
//                         <div className="card" key={index + 1}>{index + 1}</div>
//                     ))}
//                 </div>
//             </div>
//             <button onClick={prevSlide} id="prevBtn">Previous</button>
//             <button onClick={nextSlide} id="nextBtn">Next</button>
//         </div>
//     );
// }

// export default Carousel2;




// import React, { useState } from 'react';
// import './Carousel.css';

// function Carousel() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevSlide = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     }
//   };

//   const nextSlide = () => {
//     // Assuming each card has a fixed width of 385px and we display 4 cards at a time
//     const totalCards = 10; // total number of cards
//     const maxIndex = totalCards - 4;
//     if (currentIndex < maxIndex) {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   return (
//     <>
//       <div className="comments-section" style={{ width: '1920px', height: '800px', backgroundColor: '#9DCCFF', alignItems: 'center', alignContent: 'center' }}>
//         <div className="students-comments" style={{ width: '1700px', height: '500px', padding: '150px 50px' }}>
//           <p style={{ color: '#2D3436', fontSize: '36px', fontWeight: 'bold' }}>What our students have to say</p>
//           <div id="carouselExample" className="carousel slide">
//             <div className="carousel-inner">
//               <div className="carousel-item active">
//                 <div className="row row-col-4" style={{ gap: '20px' }}>
//                   {[...Array(10).keys()].slice(currentIndex, currentIndex + 4).map((index) => (
//                     <div className="carousel-card col-3" key={index} style={{ width: '385px', height: '395px', borderRadius: '20px', backgroundColor: 'white', textAlign: 'center', padding: '20px 20px' }}>
//                       <img src="src\assets\image 12.png" alt="" style={{ backgroundColor: '#D9D9D9', borderRadius: '6px' }} />
//                       <div className="card-body">
//                         <h5 className="card-title" style={{ color: '#2D3436', fontSize: '24px', fontWeight: 'bold', margin: '20px' }}>Bulkin Simons</h5>
//                         <p className="card-text" style={{ color: '#696984', fontSize: '18px', margin: '20px' }}>
//                           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod
//                         </p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//             <button
//               className="carousel-control-prev"
//               type="button"
//               onClick={prevSlide}
//               style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#49BBBD', zIndex: 'auto', verticalAlign: 'middle' }}
//             >
//               <span className="carousel-control-prev-icon" aria-hidden="true" />
//               <span className="visually-hidden">Previous</span>
//             </button>
//             <button
//               className="carousel-control-next"
//               type="button"
//               onClick={nextSlide}
//               style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#49BBBD', zIndex: 'auto', verticalAlign: 'middle' }}
//             >
//               <span className="carousel-control-next-icon" aria-hidden="true" />
//               <span className="visually-hidden">Next</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Carousel;

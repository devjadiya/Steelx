// import React, { useRef } from 'react'

// export default function Section6() {

//     const container = useRef(null);

//     const btnpressprev = () => {
//         var box = container.current;
//         if (box) {
//             let width = box.clientWidth;
//             box.scrollLeft = box.scrollLeft - width;
//         }
//     };
    
//     const btnpressnext = () => {
//         var box = container.current;
//         if (box) {
//             let width = box.clientWidth;
//             box.scrollLeft = box.scrollLeft + width;
//         }
//     };
//     const posts = [
//         {
//             title: "What is SaaS? Software as a Service Explained",
//             desc: "Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people.",
//             img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//             date: "Jan 4 2022",
//             href: "javascript:void(0)"
//         },
//         {
//             title: "A Quick Guide to WordPress Hosting",
//             desc: "According to him, â€œI'm still surprised that this has happened. But we are surprised because we are so surprised.â€More revelations.",
//             img: "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//             date: "Jan 4 2022",
//             href: "javascript:void(0)"
//         },
//         {
//             title: "7 Promising VS Code Extensions Introduced in 2022",
//             desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks.",
//             img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//             date: "Jan 4 2022",
//             href: "javascript:void(0)"
//         },

//         {
//             title: "What is SaaS? Software as a Service Explained",
//             desc: "Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people.",
//             img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//             date: "Jan 4 2022",
//             href: "javascript:void(0)"
//         },
//         {
//             title: "A Quick Guide to WordPress Hosting",
//             desc: "According to him, â€œI'm still surprised that this has happened. But we are surprised because we are so surprised.â€More revelations.",
//             img: "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//             date: "Jan 4 2022",
//             href: "javascript:void(0)"
//         },
//         {
//             title: "7 Promising VS Code Extensions Introduced in 2022",
//             desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks.",
//             img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//             date: "Jan 4 2022",
//             href: "javascript:void(0)"
//         },
//         {
//             title: "A Quick Guide to WordPress Hosting",
//             desc: "According to him, â€œI'm still surprised that this has happened. But we are surprised because we are so surprised.â€More revelations.",
//             img: "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//             date: "Jan 4 2022",
//             href: "javascript:void(0)"
//         },
//         {
//             title: "7 Promising VS Code Extensions Introduced in 2022",
//             desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks.",
//             img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//             date: "Jan 4 2022",
//             href: "javascript:void(0)"
//         },
//         {
//             title: "A Quick Guide to WordPress Hosting",
//             desc: "According to him, â€œI'm still surprised that this has happened. But we are surprised because we are so surprised.â€More revelations.",
//             img: "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//             date: "Jan 4 2022",
//             href: "javascript:void(0)"
//         },
//         {
//             title: "7 Promising VS Code Extensions Introduced in 2022",
//             desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks.",
//             img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//             date: "Jan 4 2022",
//             href: "javascript:void(0)"
//         },
//         {
//             title: "A Quick Guide to WordPress Hosting",
//             desc: "According to him, â€œI'm still surprised that this has happened. But we are surprised because we are so surprised.â€More revelations.",
//             img: "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//             date: "Jan 4 2022",
//             href: "javascript:void(0)"
//         },
//         {
//             title: "7 Promising VS Code Extensions Introduced in 2022",
//             desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks.",
//             img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
//             date: "Jan 4 2022",
//             href: "javascript:void(0)"
//         },

//     ]


//     return (
//         <section className="">


//             <div className="w-full lg:pt-16 py-8 lg:h-screen flex justify-start items-start flex-col relative overflow-hidden bg-[#F3F3F3] mx-auto px-4 md:px-8">
//                 <div className="space-y-5 sm:text-center sm:max-w-md sm:mx-auto">
//                     <h1 className="text-black text-5xl font-extrabold ">Latest News</h1>

//                 </div>


//                 <ul ref={container} className="flex gap-x-8 gap-y-10 py-10 lg:px-10 scroll-smooth justify-start overflow-hidden ">
//                     {
//                         posts.map((items, key) => (
//                             <li className="w-full flex-shrink-0 mx-auto group max-w-sm  shadow-md rounded-2xl p-5" key={key}>
//                                 <a href={items.href}>
//                                     <img src={items.img} loading="lazy" alt={items.title} className="w-full h-[30vh]  rounded-lg" />
//                                     <div className="mt-3 space-y-2">
//                                         <span className="block text-[#545454] font-bold text-sm">{items.date}</span>

//                                         <p className="text-black text-lg  font-bold">{items.desc}</p>
//                                     </div>
//                                     <button className=' flex justify-center items-center rounded-full bg-bg-orange px-6 py-2 my-3 text-white font-bold '>
//                                         Know more
//                                     </button>
//                                 </a>
//                             </li>
//                         ))
//                     }
//                 </ul>

//                 <button className="pre-btn w-10 h-10 bg-black text-white font-bold text-2xl rounded-full flex justify-center items-center absolute left-5  top-1/2" onClick={btnpressprev}><p>&lt;</p></button>
//                 <button className="next-btn w-10 h-10 bg-black text-white font-bold text-2xl rounded-full flex justify-center items-center absolute right-5  top-1/2" onClick={btnpressnext}><p>&gt;</p></button>
//             </div>
//         </section>
//     )
// }

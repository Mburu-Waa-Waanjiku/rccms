import Image from "next/image";
import { GiGraduateCap } from "react-icons/gi";
import { MdCall } from "react-icons/md";
import { IoShareSocialSharp } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { CgMenuMotion } from "react-icons/cg";
import Link from "next/link";
import Footer from "@/components/Footer";
import ApplyButton from "@/components/ApplyButton";

export default function Home() {

  const shortCourses = [
    {
      name:'Calinary Arts',
      image: '/13e6b5defdc2cb87e53a9dbf027e70ca.jpg'
    },
    {
      name: 'Cake Decoration',
      image: '/7cfdc85b203699fcba4b8aa149ebd62e.jpg'
    },
    {
      name: 'Front Offive',
      image: '/6f4175f2499f20423e439f7fe12f5600.png'
    },
    {
      name: 'Tour Guiding',
      image: '/70d27ecabc0a6707fe2a9460dcb537fe.jpg'
    }
  ]

  const student = [
    {
      name: 'Allan Mwiti',
      ocupation: 'CEO, Conva Counsulants',
      testimonial: 'If I was to choose all over ​again a school to go to, I ​would choose RCCMS 100 ​times over.',
      image: '/ce1c35c07233d4a240d31e0875810db9.png'
    },
    {
      name: 'Mary Nekesa',
      ocupation: 'Chief pastry cheff',
      testimonial: 'If I was to choose all over ​again a school to go to, I ​would choose RCCMS 100 ​times over.',
      image: '/ce1c35c07233d4a240d31e0875810db9.png'
    }
  ]
  
  const Schools = [
    'School-Of-Hospitality-Management',
    'School-Of-Tourism',
    'School-Of-Fashion-Design',
    'School-Of-Business',
    'School-Of-ICT',
    'School-Of-Frontoffice',
    'School-Of-Beauty-And-Cosmetology'
  ]
  const partners = [
    '/6a0bb79132eb790b064d1a88c2412106.png', 
    '/3fbefe978c99c935b0dc3b83099f7a82.jpg'
  ]


  return (
    <div className="w-full  overflow-hidden h-full">
      <div className="w-full h-screen flex justify-center ">
        <Image alt="RUIRU COLLEGE OF CATERING & MANAGEMENT STUDIES" style={{objectFit: 'cover'}}  fill={true} src={'/e2d9649ed8c23c9583f82f3e8fb6e982.jpg'} />
      </div>
      <div style={{width: '66%'}} className="rounded-es-3xl h-10 overflow-hidden title-color absolute top-0 right-0 p-2">
        <p className="text-base leading-6 font-bold text-white text-center">
          Intake happening on January, March, May, July & September
        </p>
      </div>
      <ApplyButton homeApply={true} applyTitle={'Select Your Course'}/>
      <div className="w-full py-1 px-4 h-10 flex justify-start sm:justify-between text-white title-color absolute top-36 sm:top-40">
        <div></div>
        <CgMenuMotion className="mb-4 text-3xl block sm:hidden"/>
        <span className="hidden sm:block">About Us</span>
        <span className="hidden sm:block">Programs</span>
        <span className="hidden sm:block">Admission</span>
        <span className="hidden sm:block">Internships</span>
        <span className="hidden sm:block">Student Life </span>
        <span className="hidden sm:block">News & Events </span>
        <span className="hidden sm:block">Contact Us</span>
        <div></div>
      </div>
      <div className="logo min-w-24 sm:min-w-28 min-h-24 sm:min-h-28 max-w-32 max-h-32 absolute top-7 sm:top-8">
        <Image alt="RUIRU COLLEGE LOGO" layout="fill" src={'/a29d2abffaa3667be2c61a94a0ccc015.png'} />
      </div>
      <div style={{top: '55vh'}} className="text-5xl sm:text-7xl font-bold w-full text-center text-white absolute ">
        <div className=" pb-4">RUIRU COLLEGE</div>
        <div className="text-2xl">BUILT FOR A PURPOSE</div>
      </div>
      <div className="flex justify-center font-bold absolute bottom-12 w-full">
        <div className="rounded-xl flex bg-white bg-white items-center justify-between w-3/4 h-14 p-2 min-w-72">
          <div></div>
          <div className="flex flex-col items-center justify-center">
            <GiGraduateCap className="text-3xl"/>
            <span className="leading-3 hidden sm:block mb-1.5">COURSES</span>
          </div>
          <div className="w-0.5 bg-black h-full"></div>
          <div className="flex flex-col items-center justify-center gap-0.5">
            <MdCall className="text-2xl"/>
            <span className="leading-3 hidden sm:block mb-1.5">CONTACTS</span>
          </div>
          <div className="w-0.5 bg-black h-full"></div>
          <div className="flex flex-col items-center justify-center gap-0.5">
            <IoShareSocialSharp className="text-2xl"/>
            <span className="leading-3 hidden sm:block mb-1.5">SOCIALS</span>
          </div>
          <div className="w-0.5 bg-black h-full"></div>
          <div className="flex flex-col items-center justify-center gap-10.5">
            <IoLocationSharp className="text-2xl"/>
            <span className="leading-3 hidden sm:block mb-1.5">LOCATION</span>
          </div>
          <div></div>
        </div>
      </div>
      {/* start of boma template */}
      <div className="bg-highlight px-3 pt-5 pb-6">
        <div className="text-2xl title-text sm:text-center mb-3">Discover Ruiru College of Catering & Managment Studies</div>
        <div className="flex sm:justify-center">
          <div className="title-color text-xl w-32 pt-0.5 pb-2 text-center text-white ">Schools</div>
        </div>
      </div>
      {/* school of catering */}
      <div className="flex mb-8 p-6 mt-8 mlg:pb-8 slg:p-0 flex-col slg:flex-row justify-center relative items-center gap-4 w-full">
        <div className="title-color w-full block slg:hidden mt-6 mb-6 text-3xl  pt-1 pb-2 text-center text-white">School of Hospitality & Culinar​y art​s</div>
        <div className="slg:w-1/2 h-auto slg:h-96 w-full flex  items-center ">
          <div className="pt-4 justify-center flex flex-col  h-full px-6">
            <div className="title-color slg:block hidden mt-6 mb-6 text-3xl  pt-1 pb-2 text-center text-white">School of Hospitality & Culinar​y art​s</div>
            <p className="pb-6 title-text">Our hospitality  course s offer comprehensive pathway to success in the vibrant dynamic hospitelity industry.</p>
            <p className="title-text">Our strong partnerships with leading organisations provide you with unparalleled opportunities for growth</p>
            <Link href={`/${Schools[0]}`}><div className="title-gradien mt-6 text-xl w-32 pt-0.5 pb-2 text-center text-white ">Learn More</div></Link>
          </div>
        </div>
        <div className="w-full flex justify-center scaler xxsm:!scale-75 mlg:!scale-100  items-center h-72 slg:w-1/2">
          <Image alt="school of catering" style={{transform: 'translate(-70px, -50px)'}} className="absolute border-4 border-white m-1 z-10" width={300} height={200} src={'/caa8041ec6c3d6dcd30b6609afdc3783.jpg'}/>
          <Image alt="school of catering" style={{transform: 'translate(110px, 20px)'}} className="absolute border-4 border-white z-20" width={240} height={220} src={'/f1f772263d064024a90333c7101b5fa7.jpg'}/>
          <Image alt="school of catering" style={{transform: 'translate(-75px, 100px)'}} className="absolute" width={130} height={230} src={'/6cb07471145faa8a8d59f1ddc41d3156.jpg'}/>
        </div>
      </div>
      {/* School Of Beauty And Cosmetology */}
      <div className="flex mb-8 p-6 mlg:pb-8 slg:p-0 flex-col slg:flex-row justify-center relative items-center gap-4 w-full">
        <div className="title-color w-full block slg:hidden mt-6 mb-6 text-3xl  pt-1 pb-2 text-center text-white">School Of Beauty And Cosmetology </div>
        <div className="flex justify-center items-center slg:w-1/2">
          <div class="col-md-6  max-w-96">
            <div class="row mt-4 mt-md-0">
              <div class="col-5 offset-1 pl-4 pr-2 home-gallery mb-3 align-self-end">
                <img class=" img-fluid" src="./2ec8cfe15ae689b59e0ecfe7cf127190.jpg" alt="school of fashion"/>
              </div>
              <div class="col-6 px-2 mb-3">
                  <img class=" img-fluid" src="./8df6bfb5f8a77874ef7a51d698827667.jpg" alt="school of fashion"/>
              </div>
              <div class="col-7  px-2 mb-3">
                <div class=" title-color flex-col flex justify-center min-h-40 p-2 p-sm-3 p-lg-4 p-xl-5 text-white">
                  <h3 className="text-2xl">Building character and inspiring careers</h3>
                </div>
              </div>
              <div class="col-5 align-self-start pl-2 pr-10 mb-3">
                  <img class="border-radius-3 img-fluid" src="./666e0b80a3c87c51a35f226b8ed47274.png" alt="school of fashion"/>
              </div>
            </div>
          </div>
        </div>
        <div className="slg:w-1/2 h-auto slg:h-96 w-full flex  items-center ">
          <div className="pt-4 justify-center flex flex-col  h-full px-6">
            <div className="title-color slg:block hidden mt-6 mb-6 text-3xl  pt-1 pb-2 text-center text-white">School Of Beauty And Cosmetology </div>
            <p className="pb-6 title-text">Transforming your passion for beauty into s rewarding career with our compreensive cosmetology courses designed for you.</p>
            <p className="title-text">Get necessary skills, knowledge & hands on experience in hairdressing and beauty to help you excel in various roles within the field.</p>
            <Link href={`/${Schools[6]}`}><div className="title-gradien mt-6 text-xl w-32 pt-0.5 pb-2 text-center text-white ">Learn More</div></Link>
          </div>
        </div>
      </div>
      {/* school of tourisim */}
      <div className="flex mb-8 p-6 mlg:pb-8 slg:p-0 flex-col slg:flex-row justify-center relative items-center gap-4 w-full">
        <div className="title-color w-full mt-6 block slg:hidden mb-6 text-3xl  pt-1 pb-2 text-center text-white ">School of Tourisim and ​Travels</div>
        <div className="slg:w-1/2 h-auto slg:h-96 w-full flex  items-center ">
          <div className="pt-4 justify-center flex flex-col  h-full px-6">
            <div className="title-color mt-6 slg:block hidden mb-6 text-3xl  pt-1 pb-2 text-center text-white ">School of Tourisim and ​Travels</div>
            <p className="pb-4 title-text">Unlock the secrets of the tourism industry and propel your career forward with our comprehensive tourism courses.</p>
            <p className="pb-4 title-text">Our courses offer opportunities for international travel, cultural immersions & exposure to  diverse tourism career.</p>
            <Link href={`/${Schools[1]}`}><div className="title-gradien mt-6 text-xl w-32 pt-0.5 pb-2 text-center text-white ">Learn More</div></Link>
          </div>
        </div>
        <div className="w-full flex justify-center scaler xxsm:!scale-75 mlg:!scale-100  items-center h-72 slg:w-1/2">
          <Image alt="school of tourisim " style={{transform: 'translate(65px, -50px)'}} className="absolute border-4 border-white m-1 z-10" width={300} height={200} src={'/79fbc75c0a8b0b5ac8fdf34bc9ee3592.jpg'}/>
          <Image alt="school of tourisim " style={{transform: 'translate(-90px, 20px)'}} className="absolute border-4 border-white z-20" width={280} height={220} src={'/70d27ecabc0a6707fe2a9460dcb537fe.jpg'}/>
          <Image alt="school of tourisim " style={{transform: 'translate(85px, 150px)'}} className="absolute" width={130} height={230} src={'/8c947fbbd6170be92f34478bbf6ca05e.jpg'}/>
        </div>
      </div>
      {/* school of fashion */}
      <div className="flex mb-8 p-6 mlg:pb-8 slg:p-0 flex-col slg:flex-row justify-center relative items-center gap-4 w-full">
        <div className="title-color w-full block slg:hidden mt-6 mb-6 text-3xl  pt-1 pb-2 text-center text-white">School of Fashion design</div>
        <div className="flex justify-center items-center slg:w-1/2">
          <div class="col-md-6  max-w-96">
            <div class="row mt-4 mt-md-0">
              <div class="col-5 offset-1 pl-4 pr-2 home-gallery mb-3 align-self-end">
                <img class=" img-fluid" src="./2ec8cfe15ae689b59e0ecfe7cf127190.jpg" alt="school of fashion"/>
              </div>
              <div class="col-6 px-2 mb-3">
                  <img class=" img-fluid" src="./8df6bfb5f8a77874ef7a51d698827667.jpg" alt="school of fashion"/>
              </div>
              <div class="col-7  px-2 mb-3">
                <div class=" title-color flex-col flex justify-center min-h-40 p-2 p-sm-3 p-lg-4 p-xl-5 text-white">
                  <h3 className="text-2xl">Building character and inspiring careers</h3>
                </div>
              </div>
              <div class="col-5 align-self-start pl-2 pr-10 mb-3">
                  <img class="border-radius-3 img-fluid" src="./666e0b80a3c87c51a35f226b8ed47274.png" alt="school of fashion"/>
              </div>
            </div>
          </div>
        </div>
        <div className="slg:w-1/2 h-auto slg:h-96 w-full flex  items-center ">
          <div className="pt-4 justify-center flex flex-col  h-full px-6">
            <div className="title-color slg:block hidden mt-6 mb-6 text-3xl  pt-1 pb-2 text-center text-white">School of Fashion design</div>
            <p className="pb-6 title-text">RCCMS is here to nurture your interest in ​the hospitality industry & empower your ​ambitions.</p>
            <p className="title-text">There is nothing that can stop you from ​achieving what you want, except yourself. If ​you devote yourself to it you will achieve ​your goal.</p>
            <Link href={`/${Schools[2]}`}><div className="title-gradien mt-6 text-xl w-32 pt-0.5 pb-2 text-center text-white ">Learn More</div></Link>
          </div>
        </div>
      </div>
      {/* school of Business*/}
      <div className="flex mb-8 p-6 mlg:pb-8 slg:p-0 flex-col slg:flex-row justify-center relative items-center gap-4 w-full">
        <div className="title-color w-full block slg:hidden mt-6 mb-6 text-3xl  pt-1 pb-2 text-center text-white">School of Business</div>
        <div className="slg:w-1/2 h-auto slg:h-96 w-full flex  items-center ">
          <div className="pt-4 justify-center flex flex-col  h-full px-6">
            <div className="title-color slg:block hidden mt-6 mb-6 text-3xl  pt-1 pb-2 text-center text-white">School of Business</div>
            <p className="pb-6 title-text">Step into the word of business with confidence & expertise by enrolling in a dynamic business courses designed for individuals at all stages of your career.</p>
            <p className="pb-6 title-text">Our programs provide the knowledge, skills & insights necessary to thrive in todays competitive world</p>
            <Link href={`/${Schools[3]}`}><div className="title-gradien mt-6 text-xl w-32 pt-0.5 pb-2 text-center text-white ">Learn More</div></Link>
          </div>
        </div>
        <div className="w-full flex justify-center scaler xxsm:!scale-75 mlg:!scale-100  items-center h-72 slg:w-1/2">
          <Image alt="school of Business" style={{transform: 'translate(20px, 0px)'}} className="absolute border-4 border-white m-1 z-10" width={300} height={400} src={'/ce1c35c07233d4a240d31e0875810db9.png'}/>
          <div style={{transform: 'translate(-80px, 150px)'}} className="p-3 title-color h-32 w-48 text-3xl text-white z-10">Become a leading ​business mind</div>
        </div>
      </div>
      {/* school of ICT */}
      <div className="flex mb-8 p-6 mlg:pb-8 slg:p-0 flex-col slg:flex-row justify-center relative items-center gap-4 w-full">
        <div className="title-color w-full block slg:hidden mt-6 mb-6 text-3xl  pt-1 pb-2 text-center text-white">School of ICT & Computer ​packages</div>
        <div className="w-full flex justify-center scaler xxsm:!scale-75 mlg:!scale-100  items-center h-72 slg:w-1/2">
          <div style={{transform: 'translate(197px, -130px)'}} className="p-3 title-color h-32 w-32 text-3xl text-white"></div>
          <Image alt="school of ICT" className="absolute border-4 border-white m-1 z-10" width={400} height={400} src={'/ea111b13ddd50698f161e6d24a14140e.jpg'}/>
          <div style={{transform: 'translate(-137px, 135px)'}} className="p-3 title-color h-32 w-48 text-3xl text-white "></div>
        </div>
        <div className="slg:w-1/2 h-auto slg:h-96 w-full flex  items-center ">
          <div className="pt-4 justify-center flex flex-col  h-full px-6">
            <div className="title-color slg:block hidden mt-6 mb-6 text-3xl  pt-1 pb-2 text-center text-white">School of ICT & Computer ​packages</div>
            <p className="pb-6 title-text">In todays rapidly evolving digital landscape, profecincy in information technology and computer packages is not just a skill but a necesity.</p>
            <Link href={`/${Schools[4]}`}><div className="title-gradien mt-6 text-xl w-32 pt-0.5 pb-2 text-center text-white ">Learn More</div></Link>
          </div>
        </div>
      </div>
      {/* school of  Front Office & Administration*/}
      <div className="flex mb-8 p-6 mlg:pb-8 slg:p-0 flex-col slg:flex-row justify-center relative items-center gap-4 w-full">
        <div className="title-color w-full block slg:hidden mt-6 mb-6 text-3xl  pt-1 pb-2 text-center text-white">School of Front Office & Administration</div>
        <div className="slg:w-1/2 h-auto slg:h-96 w-full flex  items-center ">
          <div className="pt-4 justify-center flex flex-col  h-full px-6">
            <div className="title-color slg:block hidden mt-6 mb-6 text-3xl  pt-1 pb-2 text-center text-white">School of Front Office & Administration</div>
            <p className="pb-6 title-text">Graduates in our programs are well prepared for a variety of roles in front office operations & customer service among others no matter the industry and sector.</p>
            <Link href={`/${Schools[5]}`}><div className="title-gradien mt-6 text-xl w-32 pt-0.5 pb-2 text-center text-white ">Learn More</div></Link>
          </div>
        </div>
        <div className="w-full flex justify-center scaler xxsm:!scale-75 mlg:!scale-100  items-center h-72 slg:w-1/2">
          <div style={{transform: 'translate(197px, -130px)'}} className="p-3 title-color h-32 w-32 text-3xl text-white"></div>
          <Image alt="school of ICT" className="absolute border-4 border-white m-1 z-10" width={400} height={400} src={'/6f4175f2499f20423e439f7fe12f5600.png'}/>
          <div style={{transform: 'translate(-137px, 135px)'}} className="p-3 title-color h-32 w-48 text-3xl text-white "></div>
        </div>
      </div>
      {/* ------------ Short courses ------------- */}
      <div className="bg-highlight px-3 pt-5 pb-6">
        <div className="text-4xl title-text  sm:text-start mb-3">Short Courses</div>
        <div className="title-text text-2xl w-32 pt-0.5 pb-2  ">Join Us today</div>
      </div>
      {/* short courses */}
      <div className="flex justify-center">
        <div style={{maxWidth:1000}} className="p-6 grid gap-0.5 grid-cols-1 slg:grid-cols-2">
          {shortCourses.map((course, index) => (
            <div  key={index} className=" relative max-w-96 slg:max-w-full">
              <Image alt={course.name} width={800} height={600} src={course.image}/>
              <div className="absolute flex flex-col justify-end short-coursebg text-white h-2/3 bottom-0 w-full p-5">
                <h1 className="text-3xl font-bold pb-6">{course.name}</h1>  
                <ApplyButton shortCourse={true} applyTitle={course.name}/>
                </div>
            </div>
          ))}
        </div>
      </div>
      {/* testimonials */}
      <div className="bg-highlight px-3 pt-5 pb-6">
        <div className="text-4xl title-text  text-center mb-3">Alumni & Student Testimonials
        </div>
        <div className="flex flex-col justify-center gap-4 p-4 items-center slg:flex-row">
          {student.map((t, index) => (
            <div className="rounded-3xl w-80 p-4 bg-white items-center flex gap-6">
              <div className=" min-w-20 justify-center h-20 rounded-full overflow-hidden">
                <Image alt="" width={150} height={150} src={t.image}/>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h4 className="text-2xl title-text font-bold w-full text-start">{t.name}</h4>
                <h5 className="text-base title-text font-bold w-full text-start pb-1">{t.ocupation}</h5>
                <p className="">
                  {t.testimonial}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Partners */}
      <div className="px-4 pb-10">
        <div className="w-full text-center pt-6 pb-12 text-3xl title-text">Our Partners</div>
        <div className="flex justify-center gap-8">
          {partners.map((i, index)=> (
            <Image key={index} width={300} className="max-h-24 " height={300} src={i}/>
          ))}
        </div>
      </div>
      {/* Footer */}
      <Footer/>
    </div>
  );
}

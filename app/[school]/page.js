import Image from 'next/image';
import React from 'react';
import Footer from '@/components/Footer';
import ApplyButton from '@/components/ApplyButton';

function page({params}) {

  const { school } = params;
  const schoolName = school.split("-").join(' ');
  const allSchools = [
    {
      name: 'School-Of-Hospitality-Management',
      map: [0, 8]
    },
    {
      name:'School-Of-Frontoffice',
      map: [8, 9]
    },
    {
      name:'School-Of-Fashion-Design',
      map: [9, 10]
    },
    {
      name: 'School-Of-Tourism',
      map: [10, 11]
    },
    {
      name: 'School-Of-ICT',
      map: [14, 15]
    },
    {
      name: 'School-Of-Business',
      map: [11, 14]
    },
    {
      name: 'School-Of-Beauty-And-Cosmetology',
      map: [15, 23]
    }
  ];

  const schoolCourses = allSchools.find((x) => x.name === school);
  console.log(schoolCourses.map);

  const schools = [
    //course 1 -- school of Hospitality management
    {
      name: 'Hospitality Management',
      Description: [
        'This is an ICM certification course.',
        'Minimum grade to start your studies on this ​course is -D. ',
        'You will be able to complete your ​certification in 36 months. ',
        'There are 3 levels ​in this course.'
      ],
      levels: [
        {
          level: 'Certificate',
          requirements: {
            a: 'Minimum grade of D-'
          },
          time: '12 months',
          units: [
            'Fundamentals of the hotel &Catering Industry', 
            'Housekeeping & Accomodation Studies',
            'Restaurant Services',
            'Front Office Operations & Admisnistration',
            'Food & Beverage Management',
            'Food Production Theory & Practical'
          ]
        },
        {
          level: 'Diploma',
          requirements: {
            a: 'Minimum grade of D-'
          },
          time: '12 months',
          units: [
            'Hotel & Catering Law',
            'Accounting, Purchasing & Cost Control',
            'Human resource in Hospitaliy',
            'Hospitality Management',
            'Marketing For Hospitality & Tourisim'
          ]
        },
        {
          level: 'Advanced Diploma',
          requirements: {
            a: 'Minimum grade of D-'
          },
          time: '12 months',
          units: [
            'Strategic Management in Hospitality',
            'Customer Service',
            'Economics & Hospitality',
            'Organisational Behaviour & Hospitality Management',
            'Environmental Management in The Hospitality Industry'
          ]
        }
      ]
    },
    //course 2
    {
      name: 'Certificate In Food & Beverage Production Sles & Service',
      Description: [
        'This is an ICM certification course.',
        'Minimum grade to start your studies on this ​course is -D. ',
        'You will be able to complete your ​certification in 36 months. ',
        'There are 3 levels ​in this course.'
      ],
      levels: [
        {
          level: 'Module 1',
          requirements: {
          },
          time: '12 months',
          units: [
            'Food & Beverage Production Theory',
            'Food and Beverage Production Practice',
            'Food Science and Nutriion',
            'Mathematics',
            'Information Communication Technology',
            'Entrepreneurship',
            'Life Skills',
            'Communication Skills'
          ]
        },
        {
          level: 'Module 2',
          requirements: {
          },
          time: '12 months',
          units: [
            'Food and Beverage sales and Service Theory',
            'Food and Beverage Sales and Service Practice',
            'Food and Beverage Control',
            'Catering Premises and Equipment',
            'Trade Projection'
          ]
        }
      ]
    },
    //course 3
    {
      name: 'Diploma In Food & Beverage Production Sles & Service',
      Description: [
        'This is an KNEC certification course.',
        'Minimum grade to start your studies on this ​course is -D. ',
        'You will be able to complete your ​certification in 36 months. ',
        'There are 3 levels ​in this course.'
      ],
      levels: [
        {
          level: 'Module 1',
          requirements: {
          },
          time: '12 months',
          units: [
            'Food & Beverage Production Theory',
            'Food and Beverage Production Practice',
            'Food Science and Nutriion',
            'Mathematics',
            'Information Communication Technology',
            'Entrepreneurship',
            'Life Skills',
            'Communication Skills'
          ]
        },
        {
          level: 'Module 2',
          requirements: {
          },
          time: '12 months',
          units: [
            'Food and Beverage sales and Service Theory',
            'Food and Beverage Sales and Service Practice',
            'Food and Beverage Control',
            'Catering Premises and Equipment',
            'Trade Projection'
          ]
        }
      ]
    },
    //course 4
    {
      name: 'Diploma In Food & Beverage Production, Pastry &  Baking',
      Description: [
        'This is an ICM certification course.',
        'Minimum grade to start your studies on this ​course is -D. ',
        'You will be able to complete your ​certification in 36 months. ',
        'There are 3 levels ​in this course.'
      ],
      levels: [
        {
          level: 'Module 1',
          requirements: {
          },
          time: '12 months',
          units: [
            'Food & Beverage Management',
            'Food Production Theory & Practical',
            'Restaurant Service Theory & Practical',
            'Accounting, Purchasing & Cost Control'
          ]
        }
      ]
    },
    //course 5
    {
      name: 'Certificate in Housekeeping & Accomodation',
      Description: [
        'This is an ICM certification course.',
        'Minimum grade to start your studies on this ​course is -D. ',
        'You will be able to complete your ​certification in 36 months. ',
        'There are 3 levels ​in this course.'
      ],
      levels: [
        {
          level: 'Units',
          requirements: {
          },
          time: '12 months',
          units: [
            'Using Cleaning Chemicals, Maerials & Equipment',
            'Cleaning Internal Areas, Surfaces and Furnishings',
            'Cleaning Floors & Carpets',
            'Cleaning & Servicing Guest Bedrooms'
          ]
        }
      ]
    },
    //course 6
    {
      name: 'Diploma In Event Management',
      Description: [
        'This is an ICM certification course.',
        'Minimum grade to start your studies on this ​course is -D. ',
        'You will be able to complete your ​certification in 36 months. ',
        'There are 3 levels ​in this course.'
      ],
      levels: [
        {
          level: 'Units',
          requirements: {
          },
          time: '12 months',
          units: [
            'Exploring the Events Industry',
            'Events Planning',
            'Assist the Management of Health & Safety at Events Site',
            'Assist the Set-Up and Take-Down of an Event',
            'Assist in Running an Event'
          ]
        }
      ]
    },
    //course 7
    {
      name: 'Diploma In Culinary Arts',
      Description: [
        'This is an ICM certification course.',
        'Minimum grade to start your studies on this ​course is -D. ',
        'You will be able to complete your ​certification in 36 months. ',
        'There are 3 levels ​in this course.'
      ],
      levels: [
        {
          level: 'Units',
          requirements: {
          },
          time: '12 months',
          units: [
            'Prepering & Cooking Fruit & Vegetable Dishes',
            'Prepering & Cooking Stocks, Sauces & Soups',
            'Prepering & Cooking Farinaccous & Egg Dishes',
            'Prepering & Cooking Meat & Poulry',
            'Prepering & Cooking Fish & Shellfish',
            'Prepering & Cooking Dough Products',
            'Prepering & Cooking Paste & Dessert Products',
            'Prepering & Cooking Biscuit, Cake & Sponge'
          ]
        }
      ]
    },
    //course 8
    {
      name: 'Diploma In Food & Beverage Service',
      Description: [
        'This is an ICM certification course.',
        'Minimum grade to start your studies on this ​course is -D. ',
        'You will be able to complete your ​certification in 36 months. ',
        'There are 3 levels ​in this course.'
      ],
      levels: [
        {
          level: 'Units',
          requirements: {
          },
          time: '12 months',
          units: [
            'Setting up and Closing doen Service Areas',
            'Food Service',
            'Preparing and Serving Hot and Cold Bevrages',
            'Preparing and Serving Alcohol Beverages'
          ]
        }
      ]
    },
    //course 9 --- school of front office
    {
      name: 'Diploma In Office Management / Front Office Operations',
      Description: [
        'This is an ICM certification course.',
        'Minimum grade to start your studies on this ​course is -D. ',
        'You will be able to complete your ​certification in 36 months. ',
        'There are 3 levels ​in this course.'
      ],
      levels: [
        {
          level: 'Certificate in Office Practice',
          requirements: {
          },
          time: '9 months',
          units: [
            'Accounting',
            'Business Management & Admiistration',
            'Computer Appreciaion & Applications',
            'International Business Communications',
            'Office Procedure & Administration'
          ]
        },
        {
          level: 'Diploma in Office Practice',
          requirements: {
          },
          time: '9 months',
          units: [
            'Business Law',
            'Human Resource Management',
            'Management Theory & Practice',
            'Purchasing Management',
            'Sales & Salea Marketing'
          ]
        }
      ]
    },
    //course 10 --- school of fashion design
    {
      name: 'Fashion Design Level 4',
      Description: [
        'This is an ICM certification course.',
        'Minimum grade to start your studies on this ​course is -D. ',
        'You will be able to complete your ​certification in 36 months. ',
        'There are 3 levels ​in this course.'
      ],
      levels: [
        {
          level: 'Basic Units',
          requirements: {
          },
          time: '9 months',
          units: [
            'Communication Skills',
            'Numeracy Skills',
            'Digital Literacy',
            'Entrepreneur Skills',
            'Environmenal Literacy',
            'Occupational Safety and Health Practices'
          ]
        },
        {
          level: 'Core Units',
          requirements: {
          },
          time: '9 months',
          units: [
            'Sewing Machine Operations',
            'Garment Sketching & Constration',
            'Fabrics and Garment Decoraion',
            'Industrial Attachment'
          ]
        }
      ]
    },
    //course 11 --- school of Tourism
    {
      name: 'Diploma In Tourism Operations & Travel',
      Description: [
        'This is an ICM certification course.',
        'Minimum grade to start your studies on this ​course is -D. ',
        'You will be able to complete your ​certification in 36 months. ',
        'There are 3 levels ​in this course.'
      ],
      levels: [
        {
          level: 'Part 1',
          requirements: {
          },
          time: '9 months',
          units: [
            'Characteristics of World Destionaions',
            'Fundamentals of the Hotel & Catering Industry',
            'Numeracy & Statistics',
            'Retail Travel Operations',
            'Structure of Travel & Tourism'
          ]
        },
        {
          level: 'Part 2',
          requirements: {
          },
          time: '9 months',
          units: [
            'Accounting',
            'Business Management',
            'Management of Travel & Tourii Operations',
            'Tour Operations',
            'Tourisim Markrting & Promotion'
          ]
        }
      ]
    },
    //course 12 --- school of business
    {
      name: 'Diploma In Sales Marketing & Marketing',
      Description: [
        'This is an ICM certification course.',
        'Minimum grade to start your studies on this ​course is -D. ',
        'You will be able to complete your ​certification in 36 months. ',
        'There are 3 levels ​in this course.'
      ],
      levels: [
        {
          level: 'Part 1',
          requirements: {
          },
          time: '9 months',
          units: [
            'Principal and Practice of selling',
            'Marketing',
            'International Business Communication',
            'Business Economics',
            'Business Management & Administration'
          ]
        },
        {
          level: 'Part 2',
          requirements: {
          },
          time: '9 months',
          units: [
            'Public Relations',
            'Advertising / Marketing Management',
            'Sales & Sales Manaement',
            'Quantitative Method'
          ]
        }
      ]
    },
    //course 13
    {
      name: 'Diploma In Business Studies',
      Description: [
        'This is an ICM certification course.',
        'Minimum grade to start your studies on this ​course is -D. ',
        'You will be able to complete your ​certification in 36 months. ',
        'There are 3 levels ​in this course.'
      ],
      levels: [
        {
          level: 'Part 1',
          requirements: {
          },
          time: '9 months',
          units: [
            'Business Marketing & Administration',
            'International Business Communicatons',
            'Marketing',
            'Numeracy & Statistics'
          ]
        },
        {
          level: 'Part 2',
          requirements: {
          },
          time: '9 months',
          units: [
            'Accounting',
            'Business Law',
            'Econimics for Business',
            'Organisational Behaviour'
          ]
        }
      ]
    },
    //course 14
    {
      name: 'Diploma In Business Management & Administration',
      Description: [
        'This is an ICM certification course.',
        'Minimum grade to start your studies on this ​course is -D. ',
        'You will be able to complete your ​certification in 36 months. ',
        'There are 3 levels ​in this course.'
      ],
      levels: [
        {
          level: '',
          requirements: {
          },
          time: '36 months',
          units: []
        }
      ]
    },
    //course 15 --- school of ICT
    {
      name: 'Diploma In Computer Science & Cyber Security',
      Description: [
        'This is an ICM certification course.',
        'Minimum grade to start your studies on this ​course is -D. ',
        'You will be able to complete your ​certification in 36 months. ',
        'There are 3 levels ​in this course.'
      ],
      levels: [
        {
          level: 'Units',
          requirements: {
          },
          time: '18 months',
          units: [
            'Computer Systems',
            'Software Testing',
            'Computer Science',
            'Computer Security'
          ]
        },
      ]
    },
    //course 16 --- school of beauty
    {
      name: 'Hairdressing & Beaty Therapy',
      Description: [
        'This is an ICM certification course.',
        'Minimum grade to start your studies on this ​course is -D. ',
        'You will be able to complete your ​certification in 36 months. ',
        'There are 3 levels ​in this course.'
      ],
      levels: [
        {
          level: 'Hairdressing',
          requirements: {
          },
          time: '9 months',
          units: [
            'Blow-dry',
            'Thermal Styling',
            'Plain Corntows',
            'Braiding',
            'Twisting',
            'Crocheting',
            'Roller Seting',
            'Jamaicas',
            'Ghanians',
            'Droplines',
            'Ethiopians',
            'Weaving',
            'Realaxing',
            'Haircuting',
            'Dreadlocks',
            'Haircutting',
            'Piece Lines'
          ]
        },
        {
          level: 'Beaty',
          requirements: {
          },
          time: '9 months',
          units: [
            'Manicure',
            'Pedicure',
            'Eye blow Tweezing',
            'Make-up',
            'Facial',
            'Waxing',
            'Body Massage',
            'Ear Piercing',
            'Stickons'
          ]
        }
      ]
    },
    //course 17
    {
      name: 'Hairdressing',
      Description: [
        'This is an ICM certification course.',
        'Minimum grade to start your studies on this ​course is -D. ',
        'You will be able to complete your ​certification in 36 months. ',
        'There are 3 levels ​in this course.'
      ],
      levels: [
        {
          level: 'Hairdressing',
          requirements: {
          },
          time: '6 months',
          units: [
            'Hairdressing theory and practical'
          ]
        },
      ]
    },
    //course 18
    {
      name: 'Beauty Therapy',
      Description: [
        'This is an ICM certification course.',
        'Minimum grade to start your studies on this ​course is -D. ',
        'You will be able to complete your ​certification in 36 months. ',
        'There are 3 levels ​in this course.'
      ],
      levels: [
        {
          level: 'Hairdressing',
          requirements: {
          },
          time: '6 months',
          units: [
            'Beauty theory and practical'
          ]
        },
      ]
    },
    //course 19
    {
      name: 'Diploma In Hairdressing & Beauty Therapy',
      Description: [
        'This is an ICM certification course.',
        'Minimum grade to start your studies on this ​course is -D. ',
        'You will be able to complete your ​certification in 36 months. ',
        'There are 3 levels ​in this course.'
      ],
      levels: [
        {
          level: 'Core Unts',
          requirements: {
          },
          time: '12 months',
          units: [
            'Salon Hygene, Health and Safety',
            'Consultation and Client Care',
            'Abatomy and Physiology for Hairdressing and Barbering'
          ]
        },
        {
          level: 'Hairdressing Units',
          requirements: {
          },
          time: '12 months',
          units: [
            'Shampooning and Conditioning hair',
            'Braiding Twisting and Thread Wrapping Hair',
            'Hair Styling and Finishing',
            'Barbering',
            'Hair Colouring',
            'Hair Cutting'
          ]
        },
        {
          level: 'Beauty therapy units',
          requirements: {
          },
          time: '12 months',
          units: [
            'Facial sin care treatment',
            'Makeup application',
            'Waxing Rechniques',
            'Manicure Trearments',
            'Pedicre Treatments',
            'Nail Art and Gel Application'
          ]
        },
        {
          level: 'Profesional units',
          requirements: {
          },
          time: '12 months',
          units: [
            'Workinh in the Hairdressing and Beauty Industry',
            'Salon Profesionalism',
            'Salon Team work',
            'Salon reception duties',
            'Salon Merchandising and sales promotion'
          ]
        },
      ]
    },
    //course 20
    {
      name: 'Certificate In Barbering',
      Description: [
        'This is an ICM certification course.',
        'Minimum grade to start your studies on this ​course is -D. ',
        'You will be able to complete your ​certification in 36 months. ',
        'There are 3 levels ​in this course.'
      ],
      levels: [
        {
          level: 'Hairdressing',
          requirements: {
          },
          time: '2 months',
          units: [
            'Theory & Practice'
          ]
        },
      ]
    },
    //course 21
    {
      name: 'Certificate In Nail Technology',
      Description: [
        'This is an ICM certification course.',
        'Minimum grade to start your studies on this ​course is -D. ',
        'You will be able to complete your ​certification in 36 months. ',
        'There are 3 levels ​in this course.'
      ],
      levels: [
        {
          level: 'Hairdressing',
          requirements: {
          },
          time: '2 months',
          units: [
            'Theory & Practice'
          ]
        },
      ]
    },
    //course 22
    {
      name: 'Tutors Trainging Course',
      Description: [
        'This is an ICM certification course.',
        'Minimum grade to start your studies on this ​course is -D. ',
        'You will be able to complete your ​certification in 36 months. ',
        'There are 3 levels ​in this course.'
      ],
      levels: [
        {
          level: 'Hairdressing',
          requirements: {
          },
          time: '6 months',
          units: [
            'Theory & Practice'
          ]
        },
      ]
    },
    //course 23
    {
      name: 'Hairdressing Packages (Short course)',
      Description: [
        'This is an ICM certification course.',
        'Minimum grade to start your studies on this ​course is -D. ',
        'You will be able to complete your ​certification in 36 months. ',
        'There are 3 levels ​in this course.'
      ],
      levels: [
        {
          level: 'Hairdressing',
          requirements: {
          },
          time: '2 months',
          units: [
            'Weaving and Braiding',
            'Setting and Styling',
            'Chemical Hair styling and Coluring',
            'Dreadlock'
          ]
        },
      ]
    },
  ]

  return (
    <div className='w-full h-full overflow-hidden' >
      <div className='w-full  school-banner-height flex flex-col justify-center overflow-hidden' >
        <Image alt={schoolName} width={1300} height={800}  className=' min-h-full contain' src={'/13e6b5defdc2cb87e53a9dbf027e70ca.jpg'} />
        <div style={{lineHeight: '70px'}} className='text-5xl slg:text-7xl text-center p-6  school-banner-height top-0 font-bold text-white z-10 flex justify-center items-center absolute school-banner-shadow w-full h-96'>
          <h1>{schoolName}</h1>
        </div>
      </div>
      <div className='px-4 py-6'>
        {schools.slice(schoolCourses.map[0], schoolCourses.map[1]).map((course, index) => (
          <div key={index} className='w-full mb-12'>
            <div className="flex mb-6 p-1 slg:p-6 mlg:pb-8 slg:p-0 flex-col slg:flex-row justify-center relative items-center gap-4 w-full">
              <div className="title-color w-full block slg:hidden mt-6 mb-6 text-3xl text-start px-2 pt-1 pb-2 slg:text-center text-white">{index + 1}. {course.name}</div>
              <div className="slg:w-1/2 h-auto slg:h-96 w-full flex  items-center ">
                <div className="pt-4 justify-center flex flex-col  h-full px-6">
                  <div className="title-color slg:block hidden mt-6 mb-6 text-3xl px-2 pt-1 pb-2 text-start slg:text-center text-white">{index + 1}. {course.name}</div>
                  {course.Description.map((d, i) => (
                    <p key={i} className="pb-3 text-xl title-text">{d}</p>
                  ))}
                  <ApplyButton applyTitle={course.name} />
                  <div className="title-gradien mt-6 text-xl w-32 pt-0.5 pb-2 text-center text-white ">Apply</div>
                </div>
              </div>
              <div className="w-full flex justify-center scaler xxsm:!scale-75 mlg:!scale-100  items-center h-72 slg:w-1/2">
                <Image alt={` `} style={{transform: 'translate(20px, 0px)'}} className="absolute border-4 border-white m-1 z-10" width={300} height={400} src={'/ce1c35c07233d4a240d31e0875810db9.png'}/>
                <div style={{transform: 'translate(-80px, 150px)'}} className="p-3 title-color h-32 w-48 text-3xl text-white z-10">Become a leading ​business mind</div>
              </div>
            </div>
            <div className='flex flex-col'>
              {course.levels.map((course, index) => (
                <div className='w-full mb-8 title-text bg-highlight px-3 pt-3 pb-6'>
                  <h3 className='w-full text-center text-3xl font-medium pb-3'>{course.level}</h3>
                  {course.requirements.length > 0 &&
                    <>
                      <h5 className='text-2xl font-medium'>Requirements</h5>
                      <ul>
                        {course.requirements?.map((requirement, index) => (
                          <li>{requirement}</li>
                        ))}
                      </ul>
                    </>
                  }
                  <h5 className='text-2xl font-medium pb-2'>Study Areas</h5>
                  <ul style={{listStyleType: 'disc'}} className='ml-5'>
                    {course.units?.map((requirement, index) => (
                      <li className='text-base' key={index}>{requirement}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  )
}

export default page
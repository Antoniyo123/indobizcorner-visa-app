const visaServices = [
  {
    id: 1,
    country: 'indonesia',
    countryName: 'Indonesia',
    visaType: 'tourist',
    title: 'B1 Tourist Visa (Visa on Arrival)',
    description: 'Visa on Arrival untuk wisatawan dari negara tertentu yang ingin berkunjung ke Indonesia untuk tujuan wisata, kunjungan keluarga, dan transit. Memungkinkan aktivitas wisata, meeting bisnis, dan perawatan medis.',
    price: 'USD 35',
    priceNumeric: 35,
    processingTime: 'Instant (upon arrival)',
    requirements: ['Passport valid for at least 6 months', 'Outbound ticket from Indonesia'],
    success_rate: '99%',
    icon: '🇮🇩',
    iconColor: '#dc2626',
    features: ['Visa on Arrival', 'Extendable for 30 days', 'Multiple activities allowed', 'Instant processing'],
    detailedInfo: {
      validity: '30 days',
      maxStay: '30 days (extendable for another 30 days)',
      entries: 'Single',
      interview: 'Not required'
    },
    allowedActivities: [
      'Activities related to tourism and visiting friends or family',
      'Discussion, negotiation, and/or signing of business agreements',
      'Field visits to production sites, mines, offices, factories',
      'Activities related to medical treatment at health facilities'
    ],
    restrictions: [
      'Prohibited from selling goods or services',
      'Prohibited from receiving rewards or wages from individuals or companies in Indonesia',
      'Must comply with Indonesian laws and regulations',
      'Must respect local customs, culture, and wisdom',
      'Must have sufficient living expenses while in Indonesia'
    ],
    penalties: 'Staying in Indonesia over the period of your stay permit, engaging in prohibited activities, not complying with visa conditions, and/or not complying with Indonesian laws may result in paying fines, deportation, and/or other legal charges.'
  },
  {
    id: 2,
    country: 'indonesia',
    countryName: 'Indonesia',
    visaType: 'business',
    title: 'C1 Tourist Single Entry Visitor Visa',
    description: 'A person who plans to visit Indonesia for the purpose of tourism',
    price: 'USD 35',
    priceNumeric: 35,
    processingTime: 'Instant (upon arrival)',
    requirements: ['Passport valid for at least 6 months', 'Outbound ticket from Indonesia', 'Business invitation letter (recommended)'],
    success_rate: '99%',
    icon: '🇮🇩',
    iconColor: '#f59e0b',
    features: ['Visa on Arrival', 'Business activities', 'Site visits allowed', 'Extendable'],
    detailedInfo: {
      validity: '30 days',
      maxStay: 'Up to 60 Days (Extendable)',
      entries: 'Single',
      interview: 'Not required'
    },
    allowedActivities: [
      'Discussion, negotiation, and/or signing of business agreements',
      'Field visits to production sites, mines, offices, factories',
      'Attending business meetings and conferences',
      'Site inspections and investment surveys'
    ],
    restrictions: [
      'Prohibited from selling goods or services',
      'Prohibited from receiving rewards or wages from Indonesian entities',
      'Must comply with Indonesian laws and regulations',
      'Cannot engage in employment activities'
    ]
  },
  {
    id: 3,
    country: 'indonesia',
    countryName: 'Indonesia',
    visaType: 'tourist',
    title: 'Tourist Multiple Entry Visa',
    description: 'Single entry visit visa for tourism purposes, allowing longer stays in Indonesia for comprehensive travel experiences.',
    price: 'USD 50',
    priceNumeric: 50,
    processingTime: '7-14 days',
    requirements: ['Passport valid for at least 6 months', 'Completed visa application form', 'Passport photos', 'Flight itinerary', 'Hotel bookings', 'Financial proof'],
    success_rate: '95%',
    icon: '🇮🇩',
    iconColor: '#059669',
    features: ['60 days stay', 'Tourism activities', 'Single entry', 'Pre-arranged visa'],
    detailedInfo: {
      validity: 'Please note that the visa validity period is different from the period of stay, kindly check your visa for the period of stay Information.',
      maxStay: 'Up to 60 Days per entry',
      entries: 'Single',
      interview: 'May be required'
    },
    allowedActivities: [
      'Tourism and sightseeing',
      'Visiting friends or family',
      'Cultural activities and experiences',
      'Short-term recreational activities'
    ]
  },
  {
    id: 4,
    country: 'indonesia',
    countryName: 'Indonesia',
    visaType: 'business',
    title: 'Tourist Multiple Entry Visa (1 Years)',
    description: 'A person who will visit Indonesia for recreational purposes. You can apply for a multiple-entry visa valid for 1 year. Periods of stay for this visa will be granted for up to 60 days for each visit.',
    price: 'USD 50',
    priceNumeric: 50,
    processingTime: '7-14 days',
    requirements: ['Passport valid for at least 6 months', 'Business invitation letter', 'Company registration documents', 'Completed application form', 'Financial proof'],
    success_rate: '92%',
    icon: '🇮🇩',
    iconColor: '#7c3aed',
    features: ['60 days stay', 'Business activities', 'Single entry', 'Commercial purposes'],
    detailedInfo: {
      validity: 'Please note that the visa validity period is different from the period of stay, kindly check your visa for the period of stay Information.',
      maxStay: 'Up to 60 Days per entry',
      entries: 'Single',
      interview: 'May be required'
    },
    allowedActivities: [
      'Business meetings and negotiations',
      'Signing commercial agreements',
      'Factory and site inspections',
      'Investment consultations'
    ]
  },
  {
    id: 5,
    country: 'indonesia',
    countryName: 'Indonesia',
    visaType: 'medical',
    title: 'Medical Treatment',
    description: 'A person who visits Indonesia for medical treatment',
    price: 'USD 75',
    priceNumeric: 75,
    processingTime: '10-21 days',
    requirements: ['Passport valid for at least 6 months', 'Medical recommendation letter', 'Hospital appointment confirmation', 'Financial guarantee', 'Health insurance'],
    success_rate: '98%',
    icon: '🇮🇩',
    iconColor: '#dc2626',
    features: ['Medical treatment', 'Extended stay possible', 'Hospital coordination', 'Health focused'],
    detailedInfo: {
      validity: 'This visa must be used to enter Indonesia within 90 days from the date of issue.',
      maxStay: 'Up to 60 Days (Extendable)',
      entries: 'Single/Multiple',
      interview: 'Required'
    },
    allowedActivities: [
      'Medical treatment at approved facilities',
      'Medical consultations and check-ups',
      'Recovery and rehabilitation',
      'Accompanying family member care'
    ]
  },
  {
    id: 6,
    country: 'indonesia',
    countryName: 'Indonesia',
    visaType: 'transit',
    title: 'Transit Visa',
    description: 'Short-term visa for travelers transiting through Indonesia to their final destination.',
    price: 'USD 25',
    priceNumeric: 25,
    processingTime: 'Instant (upon arrival)',
    requirements: ['Passport valid for at least 6 months', 'Onward flight ticket', 'Visa for final destination (if required)'],
    success_rate: '99%',
    icon: '🇮🇩',
    iconColor: '#0891b2',
    features: ['Short stay', 'Transit only', 'Airport vicinity', 'Quick processing'],
    detailedInfo: {
      validity: '7 days',
      maxStay: '7 days',
      entries: 'Single',
      interview: 'Not required'
    },
    allowedActivities: [
      'Transit to final destination',
      'Short city tours (if time permits)',
      'Hotel stay near airport',
      'Basic tourism activities'
    ]
  },
  {
    id: 7,
    country: 'indonesia',
    countryName: 'Indonesia',
    visaType: 'family',
    title: 'Medical Treatment Multiple Entry Visa (2 Years)',
    description: 'A person who visits Indonesia for medical treatment (multiple entry visa)',
    price: 'USD 50',
    priceNumeric: 50,
    processingTime: '14-21 days',
    requirements: ['Passport valid for at least 6 months', 'Family relationship proof', 'Sponsor letter from Indonesian family member', 'Sponsor\'s ID card', 'Financial guarantee'],
    success_rate: '96%',
    icon: '🇮🇩',
    iconColor: '#db2777',
    features: ['Family visits', 'Longer stays', 'Local sponsor required', 'Relationship based'],
    detailedInfo: {
      validity: 'Visa validity period is different from the period of stay, kindly check your visa for the period of stay Information.',
      maxStay: 'Up to 60 Days per entry (extendable)',
      entries: 'Multiple',
      interview: 'May be required'
    },
    allowedActivities: [
      'Visiting Indonesian family members',
      'Attending family events and ceremonies',
      'Cultural immersion with local family',
      'Tourism activities with family'
    ]
  },
  {
    id: 8,
    country: 'indonesia',
    countryName: 'Indonesia',
    visaType: 'Medical',
    title: 'Medical Treatment Multiple Entry Visa (1 Years)',
    description: 'A person who visits Indonesia for medical treatment (multiple entry visa)',
    price: 'USD 100',
    priceNumeric: 100,
    processingTime: '21-30 days',
    requirements: ['Passport valid for at least 6 months', 'Educational institution acceptance letter', 'Academic transcripts', 'Financial proof', 'Health certificate'],
    success_rate: '94%',
    icon: '🇮🇩',
    iconColor: '#059669',
    features: ['Educational purposes', 'Institution required', 'Study activities', 'Academic focus'],
    detailedInfo: {
      validity: 'Visa validity period is different from the period of stay, kindly check your visa for the period of stay Information.',
      maxStay: 'Up to 60 Days per entry (extendable)',
      entries: 'Single',
      interview: 'Required'
    },
    allowedActivities: [
      'Attending educational courses and training',
      'Academic research activities',
      'Educational tours and field studies',
      'Cultural exchange programs'
    ]
  },
  {
    id: 9,
    country: 'indonesia',
    countryName: 'Indonesia',
    visaType: 'Social',
    title: 'Social, Humanitarian, and Volunteering',
    description: 'A person who conducts social program, humanitarian assistance, or voluntary program in Indonesia',
    price: 'USD 100',
    priceNumeric: 100,
    processingTime: '21-30 days',
    requirements: ['Passport valid for at least 6 months', 'Educational institution acceptance letter', 'Academic transcripts', 'Financial proof', 'Health certificate'],
    success_rate: '94%',
    icon: '🇮🇩',
    iconColor: '#059669',
    features: ['Educational purposes', 'Institution required', 'Study activities', 'Academic focus'],
    detailedInfo: {
      validity: 'Visa validity period is different from the period of stay, kindly check your visa for the period of stay Information.',
      maxStay: 'Up to 60 Days (Extendable)',
      entries: 'Single',
      interview: 'Required'
    },
    allowedActivities: [
      'Attending educational courses and training',
      'Academic research activities',
      'Educational tours and field studies',
      'Cultural exchange programs'
    ]
  },
  {
    id: 8,
    country: 'indonesia',
    countryName: 'Indonesia',
    visaType: 'Medical',
    title: 'Medical Treatment Multiple Entry Visa (1 Years)',
    description: 'A person who visits Indonesia for medical treatment (multiple entry visa)',
    price: 'USD 100',
    priceNumeric: 100,
    processingTime: '21-30 days',
    requirements: ['Passport valid for at least 6 months', 'Educational institution acceptance letter', 'Academic transcripts', 'Financial proof', 'Health certificate'],
    success_rate: '94%',
    icon: '🇮🇩',
    iconColor: '#059669',
    features: ['Educational purposes', 'Institution required', 'Study activities', 'Academic focus'],
    detailedInfo: {
      validity: 'Visa validity period is different from the period of stay, kindly check your visa for the period of stay Information.',
      maxStay: 'Up to 60 Days per entry (extendable)',
      entries: 'Single',
      interview: 'Required'
    },
    allowedActivities: [
      'Attending educational courses and training',
      'Academic research activities',
      'Educational tours and field studies',
      'Cultural exchange programs'
    ]
  },
  {
    id: 8,
    country: 'indonesia',
    countryName: 'Indonesia',
    visaType: 'Medical',
    title: 'Medical Treatment Multiple Entry Visa (1 Years)',
    description: 'A person who visits Indonesia for medical treatment (multiple entry visa)',
    price: 'USD 100',
    priceNumeric: 100,
    processingTime: '21-30 days',
    requirements: ['Passport valid for at least 6 months', 'Educational institution acceptance letter', 'Academic transcripts', 'Financial proof', 'Health certificate'],
    success_rate: '94%',
    icon: '🇮🇩',
    iconColor: '#059669',
    features: ['Educational purposes', 'Institution required', 'Study activities', 'Academic focus'],
    detailedInfo: {
      validity: 'Visa validity period is different from the period of stay, kindly check your visa for the period of stay Information.',
      maxStay: 'Up to 60 Days per entry (extendable)',
      entries: 'Single',
      interview: 'Required'
    },
    allowedActivities: [
      'Attending educational courses and training',
      'Academic research activities',
      'Educational tours and field studies',
      'Cultural exchange programs'
    ]
  },
  {
    id: 8,
    country: 'indonesia',
    countryName: 'Indonesia',
    visaType: 'Medical',
    title: 'Medical Treatment Multiple Entry Visa (1 Years)',
    description: 'A person who visits Indonesia for medical treatment (multiple entry visa)',
    price: 'USD 100',
    priceNumeric: 100,
    processingTime: '21-30 days',
    requirements: ['Passport valid for at least 6 months', 'Educational institution acceptance letter', 'Academic transcripts', 'Financial proof', 'Health certificate'],
    success_rate: '94%',
    icon: '🇮🇩',
    iconColor: '#059669',
    features: ['Educational purposes', 'Institution required', 'Study activities', 'Academic focus'],
    detailedInfo: {
      validity: 'Visa validity period is different from the period of stay, kindly check your visa for the period of stay Information.',
      maxStay: 'Up to 60 Days per entry (extendable)',
      entries: 'Single',
      interview: 'Required'
    },
    allowedActivities: [
      'Attending educational courses and training',
      'Academic research activities',
      'Educational tours and field studies',
      'Cultural exchange programs'
    ]
  },
  {
    id: 8,
    country: 'indonesia',
    countryName: 'Indonesia',
    visaType: 'Medical',
    title: 'Medical Treatment Multiple Entry Visa (1 Years)',
    description: 'A person who visits Indonesia for medical treatment (multiple entry visa)',
    price: 'USD 100',
    priceNumeric: 100,
    processingTime: '21-30 days',
    requirements: ['Passport valid for at least 6 months', 'Educational institution acceptance letter', 'Academic transcripts', 'Financial proof', 'Health certificate'],
    success_rate: '94%',
    icon: '🇮🇩',
    iconColor: '#059669',
    features: ['Educational purposes', 'Institution required', 'Study activities', 'Academic focus'],
    detailedInfo: {
      validity: 'Visa validity period is different from the period of stay, kindly check your visa for the period of stay Information.',
      maxStay: 'Up to 60 Days per entry (extendable)',
      entries: 'Single',
      interview: 'Required'
    },
    allowedActivities: [
      'Attending educational courses and training',
      'Academic research activities',
      'Educational tours and field studies',
      'Cultural exchange programs'
    ]
  }
];

export default visaServices;
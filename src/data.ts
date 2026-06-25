import { TreatmentService, TimelineEvent, CaseStudy, Testimonial, FAQItem } from './types';

export const DOCTOR_INFO = {
  name: 'Dr. Abdul Jabbar',
  title: 'Associate Professor & Consultant Orthodontist',
  degrees: ['BDS', 'FCPS (Orthodontics)', 'FFD (RCSI, Ireland)', 'MPhil'],
  experience: '14+ Years',
  successRate: '99.2%',
  completedCases: '1,200+',
  satisfaction: '100%',
  aboutShort: 'Dr. Abdul Jabbar is a highly distinguished orthodontist, academician, and specialist in advanced braces and digital smile designing. Combining world-class clinical training from the Royal College of Surgeons in Ireland with over 14 years of teaching and practice, he delivers exceptional, long-term smile alignments and facial symmetry for patients of all ages.',
  aboutLong: 'Dr. Abdul Jabbar stands at the forefront of modern orthodontics in Pakistan. As an Associate Professor and Consultant Orthodontist, his dual role in academia and private clinical practice ensures that his treatment plans are backed by the latest peer-reviewed scientific advancements. He specializes in complex malocclusion corrections, digital smile design, and state-of-the-art clear aligner systems. Over the last 14 years, he has transformed over 1,200 smiles, specializing in conservative, non-extraction-first orthodontic solutions that enhance the natural facial profile.',
  clinicName: 'Dr. Abdul Jabbar Orthodontics & Smile Design Center',
  tagline: 'Creating Confident Smiles Through Advanced Orthodontics',
};

export const TREATMENTS_DATA: TreatmentService[] = [
  {
    id: 'orthodontic-consultation',
    title: 'Advanced Orthodontic Consultation',
    shortDesc: 'Comprehensive clinical evaluation with digital facial analysis, treatment planning, and 3D smile pre-visualization.',
    longDesc: 'Your orthodontic journey begins with a complete digital assessment. We perform detailed extra-oral and intra-oral photography, structural cephalometric analysis, and dental panoramic evaluations to map your exact facial profile. This comprehensive workup allows Dr. Abdul Jabbar to craft a highly customized treatment path that respects your natural skeletal symmetry and goals.',
    category: 'Braces',
    iconName: 'Sparkles',
    duration: '45 - 60 mins',
    recovery: 'Immediate',
    faq: {
      q: 'What should I expect during the first consultation?',
      a: 'We will take high-definition diagnostic photographs, review digital X-rays, and provide a clinical evaluation of your teeth, bite, and jaw alignment. Dr. Abdul Jabbar will then personally discuss initial treatment timelines, modern options, and cost structures.'
    }
  },
  {
    id: 'ceramic-braces',
    title: 'Aesthetic Ceramic Braces',
    shortDesc: 'Semi-translucent, tooth-colored ceramic brackets that blend naturally with your teeth for discrete orthodontic correction.',
    longDesc: 'Ceramic braces offer the strong engineering performance of traditional metal braces but with advanced aesthetic materials. Crafted from premium polycrystalline ceramic, these brackets resist staining and closely mimic the natural color of enamel, making them a favorite among working professionals and university students who desire a less visible treatment.',
    category: 'Braces',
    iconName: 'ShieldCheck',
    duration: '12 - 18 months',
    recovery: '3 - 5 days adjustment',
    faq: {
      q: 'Do ceramic braces stain easily?',
      a: 'The ceramic brackets themselves do not stain. However, the clear elastic bands surrounding them can absorb pigments from coffee, turmeric, or tea. We replace these bands at every monthly adjustment visit to keep your braces looking clean and translucent.'
    }
  },
  {
    id: 'clear-aligners',
    title: 'Premium Clear Aligners',
    shortDesc: 'Virtually invisible, removable, custom-engineered trays designed to align teeth comfortably without metal wires.',
    longDesc: 'Our premium clear aligners represent the pinnacle of modern digital dentistry. Using advanced CAD/CAM software, we design a series of custom medical-grade polymer trays that gradually guide your teeth into their ideal alignment. Removable for eating, brushing, and presenting, they offer unmatched comfort and lifestyle convenience.',
    category: 'Cosmetic',
    iconName: 'Layers',
    duration: '6 - 15 months',
    recovery: 'Immediate',
    faq: {
      q: 'Do I have to wear clear aligners all day?',
      a: 'For optimal orthodontic movement, aligners must be worn for 20 to 22 hours daily. They should only be removed during meals, brushing, and flossing.'
    }
  },
  {
    id: 'smile-design',
    title: 'Digital Smile Design (DSD)',
    shortDesc: 'A revolutionary cosmetic planning system that designs custom veneers and crowns matching your unique facial features.',
    longDesc: 'Smile Design is where art meets advanced bio-engineering. Using state-of-the-art photographic planning, we analyze the golden proportions of your face, lips, and gums to preview your ideal tooth shape, length, and shade. We then construct premium ultra-thin porcelain veneers and cosmetic enhancements that create a harmonious, spectacular smile.',
    category: 'Cosmetic',
    iconName: 'Smile',
    duration: '2 - 3 visits',
    recovery: '1 - 2 days',
    faq: {
      q: 'How long do porcelain veneers last?',
      a: 'With proper oral hygiene and regular professional dental cleanings, premium porcelain veneers typically last between 10 to 15 years, and often much longer.'
    }
  },
  {
    id: 'jaw-expansion',
    title: 'Palatal Expanders & Jaw Orthopedics',
    shortDesc: 'Specialized orthopedic devices to gently widen the upper jaw, correcting crossbites and severe dental crowding early.',
    longDesc: 'Palatal expanders are customized orthodontic appliances used primarily during childhood and adolescence. By taking advantage of the active growth suture of the upper jaw, expanders gently widen the maxillary arch, creating the necessary room for permanent teeth to erupt naturally and correcting transverse skeletal discrepancies.',
    category: 'Surgical',
    iconName: 'Maximize2',
    duration: '3 - 6 months',
    recovery: '3 - 7 days adaptation',
    faq: {
      q: 'At what age is a palatal expander most effective?',
      a: 'Palatal expanders are most effective in growing patients, typically between ages 7 and 14, before the mid-palatal suture fuses. It allows us to solve severe crowding and bite issues non-surgically.'
    }
  },
  {
    id: 'metal-braces',
    title: 'Advanced Modern Metal Braces',
    shortDesc: 'Highly durable, ultra-precise metal brackets utilizing low-friction technology for efficient and reliable tooth movement.',
    longDesc: 'Traditional braces have evolved. We use premium, low-profile, medical-grade stainless steel brackets that are smaller, flatter, and far more comfortable than older systems. Combined with high-tech memory-alloy archwires, these modern metal braces deliver high-efficiency movement and are ideal for correction of complex tooth crowding and severe bites.',
    category: 'Braces',
    iconName: 'Activity',
    duration: '12 - 24 months',
    recovery: '3 - 5 days adjustment',
    faq: {
      q: 'Can I play sports or musical instruments with metal braces?',
      a: 'Absolutely! We recommend wearing a customized orthodontic mouthguard to protect your lips and braces during contact sports. Wind instrument players usually adapt completely within a couple of weeks.'
    }
  },
  {
    id: 'teeth-whitening',
    title: 'Cosmetic Laser Teeth Whitening',
    shortDesc: 'In-office professional whitening system delivering up to 8 shades of brightened enamel in a single session.',
    longDesc: 'Our advanced laser whitening uses a high-concentration, pH-balanced hydrogen peroxide gel activated by a safe therapeutic cold-light laser. This system breaks down deep-set corporate organic stains from food, age, and smoking safely, protecting the underlying dentin and minimizing post-treatment tooth sensitivity.',
    category: 'Cosmetic',
    iconName: 'Flame',
    duration: '45 - 60 mins',
    recovery: 'Immediate',
    faq: {
      q: 'Will whitening make my teeth sensitive?',
      a: 'Some temporary sensitivity is normal for 24 hours. We apply a post-treatment soothing desensitizing gel rich in calcium phosphate and fluoride to immediately seal micro-tubules and ensure maximum comfort.'
    }
  },
  {
    id: 'dental-implants',
    title: 'Premium Dental Implants',
    shortDesc: 'Permanent, medical-grade titanium roots supporting custom porcelain crowns to replace missing teeth seamlessly.',
    longDesc: 'Dental implants are the absolute gold standard for replacing missing teeth. Dr. Abdul Jabbar works with leading implantologists to digitally plan the precise placement of a bio-compatible titanium post. Once fused to the jawbone, a customized, handcrafted porcelain crown is secured, restoring full biting force and beautiful aesthetics.',
    category: 'Surgical',
    iconName: 'Anchor',
    duration: '3 - 6 months (inc. fusion)',
    recovery: '3 - 5 days',
    faq: {
      q: 'Are dental implants painful?',
      a: 'The procedure is performed under deep local anesthesia and is completely painless. Post-operative discomfort is minor, easily managed with standard oral analgesics for 2-3 days, and typically less than a standard tooth extraction.'
    }
  }
];

export const TIMELINE_DATA: TimelineEvent[] = [
  {
    year: '2008',
    title: 'Bachelor of Dental Surgery (BDS)',
    institution: 'Liaquat University of Medical & Health Sciences (LUMHS)',
    description: 'Graduated with multiple academic distinctions, securing top positions in Clinical Dentistry and Maxillofacial Orthopedics.',
    type: 'academic'
  },
  {
    year: '2012',
    title: 'FCPS Residency in Orthodontics',
    institution: 'College of Physicians and Surgeons Pakistan (CPSP)',
    description: 'Completed a rigorous, 4-year structured clinical residency program focused on complex orthodontic treatments, skeletal growth modification, and surgical orthodontics.',
    type: 'academic'
  },
  {
    year: '2013',
    title: 'Senior Clinical Registrar & Lecturer',
    institution: 'Department of Orthodontics, LUMHS',
    description: 'Began teaching undergraduate dental students while managing full-time clinical cases of skeletal jaw malocclusion.',
    type: 'experience'
  },
  {
    year: '2015',
    title: 'FCPS Fellowship in Orthodontics',
    institution: 'College of Physicians and Surgeons Pakistan',
    description: 'Awarded the prestigious fellowship after passing comprehensive clinical, oral, and written boards, establishing consultant status.',
    type: 'credential'
  },
  {
    year: '2018',
    title: 'FFD Fellowship (Royal College of Surgeons in Ireland)',
    institution: 'Royal College of Surgeons in Ireland (RCSI), Dublin',
    description: 'Elected Fellow of the Faculty of Dentistry (FFD RCSI) in Orthodontics, earning international clinical credentials and accreditation.',
    type: 'credential'
  },
  {
    year: '2021',
    title: 'Associate Professor & Consultant Orthodontist',
    institution: 'LUMHS & Smile Design Center',
    description: 'Promoted to Associate Professor in Orthodontics, leading key clinical research papers, publishing over 15 articles, and establishing his state-of-the-art specialist clinic in Hyderabad, Pakistan.',
    type: 'experience'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-1',
    title: 'Severe Crowding and Overbite Correction',
    description: 'Non-extraction treatment utilizing advanced low-friction self-ligating braces.',
    age: 19,
    treatmentType: 'Ceramic Braces',
    duration: '14 Months',
    beforeImage: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=600',
    afterImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600',
    problem: 'Severe upper and lower dental crowding, narrow maxillary arch, and an overbite of 6mm causing speech articulation issues.',
    solution: 'Arched-wire development and gentle lateral expansion of the upper jaw to create natural space, followed by teeth alignment with translucent ceramic braces without extracting any premolars.'
  },
  {
    id: 'case-2',
    title: 'Diastema (Gap) & Aesthetic Smile Designing',
    description: 'Symmetric gap closure combined with digital tooth contouring.',
    age: 24,
    treatmentType: 'Premium Clear Aligners & DSD',
    duration: '8 Months',
    beforeImage: 'https://images.unsplash.com/photo-1544717297-fa154da09f51?auto=format&fit=crop&q=80&w=600',
    afterImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600',
    problem: '4mm central diastema (large gap between upper front teeth), causing patient to feel self-conscious and avoid smiling in public.',
    solution: 'Used custom clear aligners for 6 months to close the gap bodily and correct root inclination, followed by ultra-conservative bonding and digital smile design contouring to perfect the tooth widths.'
  },
  {
    id: 'case-3',
    title: 'Adult Class II Malocclusion & Deep Bite',
    description: 'Orthodontic correction of retroclined incisors and mandibular deep bite.',
    age: 31,
    treatmentType: 'Modern Metal Braces',
    duration: '18 Months',
    beforeImage: 'https://images.unsplash.com/photo-1512223792601-592a9809eed4?auto=format&fit=crop&q=80&w=600',
    afterImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600',
    problem: 'Severe deep bite where top teeth completely covered the bottom teeth, causing early enamel wear on lower incisors and chewing dysfunction.',
    solution: 'Bite opening using orthodontic bite turbos, intrusive mechanics of anterior teeth, and leveling of the lower arch with high-tech memory-alloy archwires.'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't-1',
    name: 'Zainab Ahmed',
    age: 22,
    role: 'Medical Student',
    rating: 5,
    comment: 'I had severe crowding and felt so insecure about my smile. Dr. Abdul Jabbar suggested ceramic braces, and the entire 14-month process was incredibly smooth. Being a medical student, I highly appreciated his scientific approach, precise adjustments, and absolute cleanliness of the clinic. The results are truly miraculous!',
    treatment: 'Ceramic Braces',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
    date: '3 weeks ago'
  },
  {
    id: 't-2',
    name: 'Asad Ali Talpur',
    age: 29,
    role: 'Software Engineer',
    rating: 5,
    comment: 'Choosing clear aligners with Dr. Abdul Jabbar was the best decision of my life. I had a huge gap between my front teeth. As my job requires continuous remote video meetings, I wanted something completely invisible. The custom aligners worked perfectly, and nobody even noticed I was wearing them. Professionalism at its peak!',
    treatment: 'Clear Aligners',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150',
    date: '2 months ago'
  },
  {
    id: 't-3',
    name: 'Dr. Maria Qureshi',
    age: 35,
    role: 'Assistant Professor of Pathology',
    rating: 5,
    comment: 'As a fellow medical professional, I am extremely particular about sterilization and clinical protocol. Dr. Abdul Jabbar Orthodontics maintains outstanding, premium standards comparable to international clinics. He explained every detail of my child\'s deep bite treatment on a digital screen. Truly Hyderabad\'s finest specialist.',
    treatment: 'Palatal Expander & Braces',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150',
    date: '1 month ago'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is the ideal age to see an Orthodontist?',
    answer: 'While orthodontics can align teeth at any age, the American Association of Orthodontists recommends a child’s first orthodontic evaluation at age 7. At this stage, early skeletal jaw discrepancies can be intercepted and corrected non-surgically using growth modification appliances.',
    category: 'General'
  },
  {
    id: 'faq-2',
    question: 'How long does a standard braces treatment take?',
    answer: 'The average treatment duration ranges between 12 to 24 months. Complex skeletal corrections may take longer, while simple spacing or cosmetic corrections can be completed in as little as 6 to 10 months. Dr. Abdul Jabbar will give you a precise timeline during your first diagnostic visit.',
    category: 'Braces'
  },
  {
    id: 'faq-3',
    question: 'Are dental braces painful?',
    answer: 'Fitting the braces does not hurt at all. However, you will feel a mild pressure, soreness, or aching sensation for 3 to 5 days after brackets are first placed or when archwires are tightened. This is easily managed with soft foods and over-the-counter pain relievers.',
    category: 'Braces'
  },
  {
    id: 'faq-4',
    question: 'Do I need to wear retainers after my braces are off?',
    answer: 'Yes, wearing a retainer is absolutely mandatory. Teeth have a natural "memory" and will drift back toward their original crooked positions if not supported. We provide both discrete bonded fixed wire retainers and clear removable retainers to lock your perfect smile permanently.',
    category: 'Retainers'
  },
  {
    id: 'faq-5',
    question: 'What are the payment structures for braces treatment?',
    answer: 'We understand that orthodontic treatment is an investment in your confidence and health. To make it highly affordable, we offer flexible interest-free monthly installment plans. After a small initial down payment for bracket placement, the remaining balance is paid in low monthly increments over your treatment duration.',
    category: 'Costs'
  }
];

export const CLINIC_CONTACT = {
  phone: '+92 300 1234567',
  whatsapp: '923001234567', // international format without spaces/plus for api link
  email: 'appointments@drabduljabbarortho.com',
  address: 'Suite #204, 2nd Floor, Premium Medical Arcade, Saddar Cantonment, Hyderabad, Pakistan',
  workingHours: [
    { days: 'Monday - Friday', hours: '4:00 PM - 9:00 PM' },
    { days: 'Saturday', hours: '2:00 PM - 7:00 PM' },
    { days: 'Sunday', hours: 'Closed (By Emergency Only)' }
  ],
  mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14408.384594165682!2d68.35824581335449!3d25.39316658428383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c70f6d34e6015%3A0x6b45a0b769f70d23!2sSaddar%20Hyderabad%2C%20Sindh%2071000%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s',
};

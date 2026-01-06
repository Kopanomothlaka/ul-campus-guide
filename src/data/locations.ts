export interface Location {
  id: string;
  name: string;
  category: 'academic' | 'administrative' | 'library' | 'services' | 'residence' | 'sports' | 'dining';
  description: string;
  building?: string;
  floor?: string;
}

export const categories = [
  { id: 'all', label: 'All Locations', icon: 'MapPin' },
  { id: 'academic', label: 'Academic Buildings', icon: 'GraduationCap' },
  { id: 'administrative', label: 'Administrative Offices', icon: 'Building2' },
  { id: 'library', label: 'Libraries', icon: 'BookOpen' },
  { id: 'services', label: 'Student Services', icon: 'Users' },
  { id: 'residence', label: 'Residences', icon: 'Home' },
  { id: 'sports', label: 'Sports Facilities', icon: 'Trophy' },
  { id: 'dining', label: 'Dining & Cafeterias', icon: 'UtensilsCrossed' },
] as const;

export const locations: Location[] = [
  // Academic Buildings
  {
    id: 'sci-block-a',
    name: 'Science Block A',
    category: 'academic',
    description: 'Physics and Chemistry laboratories, lecture halls for natural sciences.',
    building: 'Science Complex',
    floor: 'Ground - 3rd Floor',
  },
  {
    id: 'sci-block-b',
    name: 'Science Block B',
    category: 'academic',
    description: 'Biology and Environmental Science labs, research facilities.',
    building: 'Science Complex',
    floor: 'Ground - 2nd Floor',
  },
  {
    id: 'eng-building',
    name: 'Engineering Building',
    category: 'academic',
    description: 'Civil and Mechanical Engineering labs, workshops, and lecture theaters.',
    building: 'Engineering Complex',
  },
  {
    id: 'law-faculty',
    name: 'Law Faculty Building',
    category: 'academic',
    description: 'Law lecture halls, moot court, and faculty offices.',
    building: 'Law Complex',
  },
  {
    id: 'humanities-block',
    name: 'Humanities Block',
    category: 'academic',
    description: 'Languages, Philosophy, and Social Sciences departments.',
    building: 'Humanities Complex',
  },
  {
    id: 'cs-building',
    name: 'Computer Science Building',
    category: 'academic',
    description: 'Computer labs, programming suites, and IT lecture halls.',
    building: 'ICT Complex',
    floor: 'Ground - 4th Floor',
  },
  {
    id: 'medicine-faculty',
    name: 'Faculty of Medicine',
    category: 'academic',
    description: 'Medical sciences, anatomy labs, and clinical training facilities.',
    building: 'Health Sciences Complex',
  },
  {
    id: 'education-block',
    name: 'Education Building',
    category: 'academic',
    description: 'Teacher training facilities, education resource center.',
    building: 'Education Complex',
  },
  
  // Administrative Offices
  {
    id: 'admin-building',
    name: 'Main Administration Building',
    category: 'administrative',
    description: 'University central administration, Vice-Chancellor\'s office.',
    building: 'Admin Block',
  },
  {
    id: 'registrar-office',
    name: 'Registrar\'s Office',
    category: 'administrative',
    description: 'Student registration, academic records, and transcripts.',
    building: 'Admin Block',
    floor: '1st Floor',
  },
  {
    id: 'finance-office',
    name: 'Finance Office',
    category: 'administrative',
    description: 'Fee payments, bursary applications, and financial aid.',
    building: 'Admin Block',
    floor: 'Ground Floor',
  },
  {
    id: 'hr-office',
    name: 'Human Resources',
    category: 'administrative',
    description: 'Staff recruitment, employment services.',
    building: 'Admin Block',
    floor: '2nd Floor',
  },
  
  // Libraries
  {
    id: 'main-library',
    name: 'Main University Library',
    category: 'library',
    description: 'Central library with study spaces, digital resources, and archives.',
    building: 'Library Complex',
    floor: 'Ground - 4th Floor',
  },
  {
    id: 'law-library',
    name: 'Law Library',
    category: 'library',
    description: 'Specialized legal resources and research materials.',
    building: 'Law Complex',
    floor: '2nd Floor',
  },
  {
    id: 'med-library',
    name: 'Medical Sciences Library',
    category: 'library',
    description: 'Medical journals, health sciences resources.',
    building: 'Health Sciences Complex',
  },
  
  // Student Services
  {
    id: 'student-affairs',
    name: 'Student Affairs Office',
    category: 'services',
    description: 'Student support services, counseling, and wellness.',
    building: 'Student Center',
  },
  {
    id: 'career-center',
    name: 'Career Development Center',
    category: 'services',
    description: 'Career guidance, job placements, and internship programs.',
    building: 'Student Center',
    floor: '1st Floor',
  },
  {
    id: 'health-center',
    name: 'Campus Health Center',
    category: 'services',
    description: '24/7 medical services for students and staff.',
    building: 'Health Services Building',
  },
  {
    id: 'src-office',
    name: 'SRC Office',
    category: 'services',
    description: 'Student Representative Council headquarters.',
    building: 'Student Center',
    floor: '2nd Floor',
  },
  
  // Residences
  {
    id: 'res-dishonge',
    name: 'Dishonge Residence',
    category: 'residence',
    description: 'Male student accommodation with dining facilities.',
  },
  {
    id: 'res-nkhoma',
    name: 'Nkhoma Residence',
    category: 'residence',
    description: 'Female student accommodation, newly renovated.',
  },
  {
    id: 'res-matlala',
    name: 'Matlala Residence',
    category: 'residence',
    description: 'Mixed gender postgraduate accommodation.',
  },
  {
    id: 'res-modjadji',
    name: 'Modjadji Residence',
    category: 'residence',
    description: 'Female student residence with study facilities.',
  },
  
  // Sports Facilities
  {
    id: 'sports-center',
    name: 'Sports Center',
    category: 'sports',
    description: 'Gymnasium, indoor courts, and fitness center.',
    building: 'Sports Complex',
  },
  {
    id: 'stadium',
    name: 'University Stadium',
    category: 'sports',
    description: 'Main sports field for athletics and football.',
  },
  {
    id: 'swimming-pool',
    name: 'Olympic Swimming Pool',
    category: 'sports',
    description: 'Heated swimming pool and aquatic center.',
    building: 'Sports Complex',
  },
  
  // Dining
  {
    id: 'main-cafeteria',
    name: 'Main Cafeteria',
    category: 'dining',
    description: 'Central dining hall serving breakfast, lunch, and dinner.',
    building: 'Student Center',
  },
  {
    id: 'coffee-corner',
    name: 'Coffee Corner',
    category: 'dining',
    description: 'Coffee shop and light refreshments near the library.',
    building: 'Library Complex',
    floor: 'Ground Floor',
  },
  {
    id: 'food-court',
    name: 'Campus Food Court',
    category: 'dining',
    description: 'Various food vendors and fast food options.',
    building: 'Student Center',
    floor: 'Ground Floor',
  },
];

import { Layout } from '@/components/layout/Layout';
import { 
  GraduationCap, 
  Users, 
  MapPin, 
  Building2, 
  BookOpen, 
  Globe, 
  Award, 
  Heart,
  Target,
  Lightbulb,
  Shield,
  Clock
} from 'lucide-react';
import SEO from '@/components/SEO';

const milestones = [
  { year: '1959', event: 'University of the North established at Turfloop' },
  { year: '1976', event: 'Students played key role in the Soweto Uprising' },
  { year: '1999', event: 'MEDUNSA and University of the North merged to form University of Limpopo' },
  { year: '2005', event: 'Official establishment of University of Limpopo' },
  { year: '2015', event: 'MEDUNSA campus became Sefako Makgatho Health Sciences University' },
  { year: '2024', event: 'UL Campus Navigator launched to improve campus experience' },
];

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'Striving for the highest standards in teaching, research, and community engagement.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Embracing new ideas and technologies to solve real-world problems.'
  },
  {
    icon: Users,
    title: 'Inclusivity',
    description: 'Creating a welcoming environment for students from all backgrounds.'
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'Upholding ethical standards in all academic and administrative activities.'
  },
];

const faculties = [
  {
    name: 'Faculty of Humanities',
    departments: ['Languages', 'Social Sciences', 'Education', 'Psychology', 'Philosophy'],
    students: '5,000+',
    description: 'Dedicated to understanding human society, culture, and behavior through rigorous academic study.'
  },
  {
    name: 'Faculty of Science and Agriculture',
    departments: ['Biochemistry', 'Chemistry', 'Computer Science', 'Mathematics', 'Physics', 'Agriculture'],
    students: '6,000+',
    description: 'Leading research and education in natural sciences and sustainable agricultural practices.'
  },
  {
    name: 'Faculty of Management and Law Sciences',
    departments: ['Accounting', 'Business Management', 'Economics', 'Public Administration', 'Law'],
    students: '5,500+',
    description: 'Preparing future leaders in business, law, and public service.'
  },
  {
    name: 'Faculty of Health Sciences',
    departments: ['Medicine', 'Nursing', 'Pharmacy', 'Allied Health'],
    students: '3,500+',
    description: 'Training healthcare professionals to serve communities across South Africa.'
  },
];

const teamMembers = [
  {
    role: 'Project Lead',
    department: 'Computer Science Department',
    contribution: 'Overall project management and strategic direction'
  },
  {
    role: 'Development Team',
    department: 'Information Technology Services',
    contribution: 'Web development, database management, and technical implementation'
  },
  {
    role: 'Content Team',
    department: 'Communications & Marketing',
    contribution: 'Campus information, photography, and content creation'
  },
  {
    role: 'User Experience',
    department: 'Student Affairs',
    contribution: 'User testing, feedback collection, and accessibility'
  },
];

export default function AboutPage() {
  return (
    <Layout>
      <SEO 
        title="About UL Campus Navigator"
        description="Learn about UL Campus Navigator, the official navigation platform for University of Limpopo. Discover our mission, the university's history, academic faculties, and development team."
        canonicalUrl="https://ulmap.netlify.app/about"
      />
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-golden-muted text-primary text-sm font-medium mb-4">
            <GraduationCap className="w-4 h-4" />
            About Us
          </div>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            About UL Campus Navigator
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            The official campus navigation platform for the University of Limpopo, designed to help students, 
            staff, and visitors find their way around our beautiful Turfloop campus with ease.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="card-featured p-6 md:p-8">
            <div className="w-12 h-12 rounded-full bg-golden-muted flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              To provide an intuitive, accessible, and comprehensive navigation solution that enhances the campus 
              experience for all members of the University of Limpopo community. We aim to eliminate the confusion 
              that comes with navigating a large university campus, making it easier for everyone to find buildings, 
              facilities, and services they need.
            </p>
          </div>
          
          <div className="card-featured p-6 md:p-8">
            <div className="w-12 h-12 rounded-full bg-golden-muted flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-primary" />
            </div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-4">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              To become the leading university campus navigation platform in South Africa, setting the standard 
              for how educational institutions can leverage technology to improve student and visitor experiences. 
              We envision a future where getting lost on campus is a thing of the past, and where every person 
              can confidently navigate to any location.
            </p>
          </div>
        </div>

        {/* University History */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              University of Limpopo History
            </h2>
            <p className="text-muted-foreground">
              A proud legacy of academic excellence and social responsibility spanning over six decades.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20" />
              
              {milestones.map((milestone, index) => (
                <div 
                  key={milestone.year}
                  className={`relative flex items-start gap-4 mb-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} hidden md:block`}>
                    <div className="card-featured p-4 inline-block">
                      <span className="font-heading font-bold text-primary">{milestone.year}</span>
                      <p className="text-muted-foreground text-sm mt-1">{milestone.event}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                      <Clock className="w-4 h-4 text-primary-foreground" />
                    </div>
                  </div>
                  
                  <div className="flex-1 md:hidden">
                    <div className="card-featured p-4">
                      <span className="font-heading font-bold text-primary">{milestone.year}</span>
                      <p className="text-muted-foreground text-sm mt-1">{milestone.event}</p>
                    </div>
                  </div>
                  
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground">
              The principles that guide everything we do at UL Campus Navigator.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="card-featured p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-golden-muted flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Faculties */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Academic Faculties
            </h2>
            <p className="text-muted-foreground">
              The University of Limpopo comprises four faculties offering diverse academic programs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {faculties.map((faculty) => (
              <div key={faculty.name} className="card-featured p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-golden-muted flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-foreground mb-2">{faculty.name}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{faculty.description}</p>
                    <div className="flex items-center gap-2 text-sm text-primary mb-2">
                      <Users className="w-4 h-4" />
                      <span>{faculty.students} students</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {faculty.departments.slice(0, 4).map((dept) => (
                        <span 
                          key={dept} 
                          className="px-2 py-0.5 text-xs rounded-full bg-muted text-muted-foreground"
                        >
                          {dept}
                        </span>
                      ))}
                      {faculty.departments.length > 4 && (
                        <span className="px-2 py-0.5 text-xs rounded-full bg-muted text-muted-foreground">
                          +{faculty.departments.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Development Team */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Development Team
            </h2>
            <p className="text-muted-foreground">
              UL Campus Navigator is developed by a dedicated team from the University of Limpopo.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div key={member.role} className="card-featured p-6">
                <div className="w-12 h-12 rounded-full bg-golden-muted flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-1">{member.role}</h3>
                <p className="text-primary text-sm mb-2">{member.department}</p>
                <p className="text-muted-foreground text-sm">{member.contribution}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="card-featured p-8 md:p-12 bg-gradient-to-br from-primary/5 to-primary/10">
          <div className="text-center mb-8">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              UL Campus Navigator Impact
            </h2>
            <p className="text-muted-foreground">
              Helping the university community navigate campus since 2024.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-heading text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground text-sm">Campus Locations</div>
            </div>
            <div className="text-center">
              <div className="font-heading text-3xl md:text-4xl font-bold text-primary mb-2">7</div>
              <div className="text-muted-foreground text-sm">Location Categories</div>
            </div>
            <div className="text-center">
              <div className="font-heading text-3xl md:text-4xl font-bold text-primary mb-2">20K+</div>
              <div className="text-muted-foreground text-sm">Students Served</div>
            </div>
            <div className="text-center">
              <div className="font-heading text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground text-sm">Available Online</div>
            </div>
          </div>
        </div>

        {/* Acknowledgments */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <Heart className="w-5 h-5 text-destructive" />
            <span className="text-muted-foreground">Acknowledgments</span>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Special thanks to the University of Limpopo administration, IT Services, and all the students 
            and staff who provided valuable feedback during the development of this platform. Your input 
            has been instrumental in making UL Campus Navigator a useful tool for our community.
          </p>
        </div>
      </div>
    </Layout>
  );
}

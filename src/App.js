import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ContactPage from './pages/ContactPage';
import HelpDonation from './pages/HelpDonation';
import AboutPage from './pages/AboutPage';
import EducationProject from './pages/EducationProject';
import Footer2 from './components/Footer2';
import NepalEarthquake from './pages/NepalEarthquake';
import AllEvents from './components/AllEvents';
import home_guidance_photo from './assets/home-gui.jpg'
import drink_waterr from './assets/pure-water.jpg'
import earthquake from './assets/earthquake-relief.jpg'
import emergency_fds from './assets/emergency-foods.jpg'
import poor_fam_photo from './assets/family-support.jpg'
import birth_photo from './assets/birtday-project.jpg'
import SponserChild from './pages/SponserChild'
import SponserPokhrel from './pages/SponserPokhrel';
import SponserKalawati from './pages/SponserKalawati';
import SponserAnsh from './pages/SponserAnsh';
import volunter_photo from './assets/volunteer.jpg'
import tent_photo from './assets/tent.jpg'
import agriculture_photo from './assets/agricultre.jpg'
import notebook_photo from './assets/notebook.jpg'
import support_teacher_photo from './assets/supporting-teacher.jpg'
import aid_photo from './assets/rice.jpg'
import TeamSection from './components/TeamSection';
import MissionGoal from './components/MissionGoal';
import FAQ from './components/FAQ';
import Message from './components/Message';
function App() {
  const shoes_dis = [
    {
        "name":"Project Location: Bhaktipur-05, Sarlahi",
        "message":"",
    },
    {
        "name":"Date of project completion: 23 October 2022",
        "message":"",
    },
    {
        "name":"Donated By: Katsuta Fumitaka Dai ",
        "message":"",
    },
    {
      "name":"",
      "message":`Children attending the beneficiary School in Sarlahi are from very poor families. Parents cannot even afford a pair of school shoes for their children. Even though shoes alone cannot solve the problems children face, we can all agree that they enhance their self-esteem and give them hope. Children's feet will be protected from infection and injuries when they wear shoes. A child in full uniform attending school is a delight to watch. Hopefully, we will be able to provide them with further educational support materials in the future through different projects.

      The sight of children walking to schools without even slippers is common in rural areas. Kids who walk barefoot to school often contract diseases that kill or seriously threaten their health. The provision of school shoes to needy students is an effective way to protect their feet on their way to school and instill hope in them.
      
      A total of 150 pairs of shoes were distributed to students in the Sarlahi district.`,
  },
  {
    "name":"Project Goal",
    "message":`The project aimed to support students in the Sarlahi district, where many students come barefoot because they cannot afford shoes.`,
},
{
  "name":"The objective of the Project",
  "message":`Support students of Janaki School in the Sarlahi district, where many students come barefoot because they cannot afford shoes.`,
},
{
  "name":"Results",
  "message":`The provision of school shoes to needy students is an effective way to protect their feet on their way to school and instill hope in them. It will be easier for children to come to school wearing shoes and they will be more motivated to stay fit. This will reduce the financial burden on parents who may be sad because their kids do not have shoes. Finally, the school officials will be pleased to see their wards dressed appropriately.

  Thus, when children wear good clothing, they are less likely to skip classes. As a result, they are able to walk with pride alongside students from more privileged backgrounds.`,
},
]
const home_guidance = [
  {
      "name":"Project Overview",
      "message":"The Home Guidance Class project at Bal Bikash Sumudayik School, located in Letang-01, Morang, has been a tremendous success in providing essential support to weak students. Sponsored by Mr. Katsuta Fumitaka Dai from Japan, the project has made a significant impact on the lives of 40 students who attend the classes regularly. By offering after-school guidance and support, the program has improved the academic performance of students and brought joy to their parents who, due to their lack of education, struggled to guide their children effectively.",
  },
  {
      "name":"Project Description",
      "message":`The Home Guidance Class project, sponsored by Mr. Katsuta Fumitaka Dai, was initiated at Bal Bikash Sumudayik School in Letang-01, Morang. Recognizing the challenges faced by weak students and the limitations of their parents, who often lacked education, the project aimed to provide additional guidance and support to enhance the academic performance of these students.

      The project started in the academic year 2022/2023 and continued with remarkable success. The school authorities identified 40 students who required extra attention and selected them for the Home Guidance Class program. The classes were conducted after regular school hours to ensure that students received personalized attention without affecting their regular curriculum.
      
      Under the dedicated guidance of qualified teachers, the Home Guidance Class program focused on strengthening the weak areas of the students' academic performance. The classes provided a conducive environment for learning, with interactive sessions, practical exercises, and individualized attention to address each student's specific needs.
      
      The impact of the Home Guidance Class program has been remarkable. Students attending the classes regularly have shown significant improvements in their academic results. The additional support and focused guidance have boosted their confidence and motivation to excel academically. Not only have their grades improved, but they have also developed a love for learning and a positive attitude towards education.
      
      The success of the program has brought immense happiness to the parents of these students. With limited educational backgrounds, they found it challenging to guide their children effectively. The Home Guidance Class program has bridged this gap, providing the necessary support to the students and empowering the parents to see their children succeed. The parents express heartfelt gratitude to Mr. Katsuta Fumitaka Dai for his generous sponsorship and commitment to improving the lives of these students.`,
  },
  {
      "name":"Conclusion",
      "message":`The Home Guidance Class project at Bal Bikash Sumudayik School has proven to be a transformative initiative for weak students in Letang-01, Morang. Through the generous sponsorship of Mr. Katsuta Fumitaka Dai, the project has provided personalized guidance and support to 40 students, enabling them to overcome their academic challenges and excel in their studies.

      By conducting after-school classes, the project has created a conducive learning environment where students receive individual attention and focused instruction. This has led to significant improvements in their academic performance, instilled confidence, and fostered a love for learning.
      
      Importantly, the Home Guidance Class program has also had a positive impact on the parents of these students. The program has empowered them to see their children succeed academically, providing hope for a brighter future. The gratitude expressed by the parents towards Mr. Katsuta Fumitaka Dai for his sponsorship is heartfelt and genuine.
      
      The Home Guidance Class project stands as a testament to the power of education and the transformative impact of philanthropy. It has not only improved the academic outcomes of the students but also brought joy, hope, and gratitude to the entire community.`,
  }
]
const drink_water = [
  {
      "name":"Project Overview",
      "message":"The Pure Water Filter with Water Tank project, generously donated by Mr. Katsuta Fumitaka from Japan, has significantly improved the water quality at Janki English Boarding School in Babarganj-02, Sarlahi. The project, implemented on 3rd November 2022, aimed to address the health concerns of the students caused by drinking unfiltered water. With the installation of a water filter system, pipes, and a water tank, the project has provided access to clean and pure drinking water, benefiting over 200 students, teachers, and staff members.",
  },
  {
      "name":"Project Description",
      "message":`The Pure Water Filter with Water Tank project was initiated at Janki English Boarding School in Babarganj-02, Sarlahi, with the objective of improving the water quality and ensuring the well-being of the students, teachers, and staff members.

      Prior to the project, the school faced a major issue as children were consuming unfiltered water, leading to various health problems. Recognizing the urgency of the situation, Mr. Katsuta Fumitaka witnessed the conditions and graciously decided to support the school. His generous donation included a state-of-the-art water filter machine, pipes for distribution, and a water tank to facilitate the supply of clean water.
      
      On 3rd November 2022, the project was implemented, with the installation of the water filter system, pipes, and the water tank. The school authorities ensured that the entire system was set up in an efficient and sustainable manner, guaranteeing a consistent supply of pure drinking water.
      
      The impact of the project has been remarkable. With the new water filter system in place, the school now provides clean and safe drinking water to over 200 students, teachers, and staff members. The installation of pipes and the water tank has streamlined the distribution process, ensuring that everyone has easy access to the filtered water.
      
      The project has not only addressed the immediate health concerns but also created a long-term solution for the school. By providing pure drinking water, the project has reduced the risk of waterborne diseases and improved the overall well-being of the school community. Students can now focus on their studies without worrying about falling ill due to contaminated water.
      
      The school community is immensely grateful to Mr. Katsuta Fumitaka for his generous donation and his commitment to improving the lives of the students. His contribution has made a lasting impact on the school, and they proudly share the success of this project with others.`,
  },
  {
      "name":"Conclusion",
      "message":`The Pure Water Filter with Water Tank project at Janki English Boarding School has been a transformative initiative, made possible by the generous donation from Mr. Katsuta Fumitaka. By addressing the issue of unfiltered water and its adverse effects on the health of the students, the project has made a significant difference in the lives of over 200 students, teachers, and staff members.

      Through the installation of a water filter system, pipes, and a water tank, the project has ensured a consistent supply of clean and safe drinking water within the school premises. This has reduced the risk of waterborne diseases and improved the overall well-being of the school community.
      
      The school expresses deep gratitude to Mr. Katsuta Fumitaka for his extraordinary contribution and his commitment to the welfare of the students. His support has not only solved an immediate problem but also provided a sustainable solution for the future. The school proudly shares the success of this project and the positive impact it has had on the lives of the students and staff members.`,
  }
]
const emergency_food = [
  {
    "name":"Emergency Foods Serve Communities in Crisis",
    "message":`Welcome to Emergency Foods Serve One, a compassionate initiative dedicated to providing essential food support during times of crisis. Since February 13, 2021, we have been actively involved in addressing the urgent food needs of vulnerable communities affected by the COVID-19 pandemic. Our primary focus is on assisting homeless families residing in Monhara Riverside, Khamndu, and Kusunti-13, Lalitpur.

    At Emergency Foods Serve One, we understand the tremendous hardships faced by those who have lost their homes or are struggling to make ends meet during these challenging times. Our mission is to alleviate hunger and provide sustenance to families in need, ensuring that no one goes to bed on an empty stomach.
    
    Through our dedicated efforts, we have been able to extend a helping hand to 300 families in the targeted areas. We firmly believe that access to nutritious food is a basic human right, and it is our responsibility to stand by those who are most vulnerable in our society.
    
    In collaboration with local volunteers and community partners, we organize regular food drives and distribution events. These initiatives are designed to reach those who are unable to access adequate meals due to financial constraints, displacement, or other circumstances. By delivering emergency food supplies, we aim to provide immediate relief and support families in their journey towards stability.
    
    However, our work extends beyond short-term aid. We are committed to empowering individuals and communities through sustainable solutions. Alongside our food distribution efforts, we provide education and resources on nutrition, meal planning, and food security. By equipping families with knowledge and skills, we strive to create a lasting impact and foster self-sufficiency.
    
    Join us in our mission to make a meaningful difference in the lives of those affected by the pandemic. Your support, whether through donations, volunteering, or spreading awareness, can bring hope and nourishment to those who need it most. Together, we can build a stronger, more resilient community where no one has to face hunger alone.
    
    Explore our website to learn more about our initiatives, impact stories, and how you can contribute to our cause. Every action you take, no matter how small, has the power to create a positive ripple effect and transform lives. Together, let's stand united and ensure that no one is left behind in the face of adversity.`
  }
]
const earthquake_relief = [
  {
      "name":" Earthquake Relief Efforts BLSO Team",
      "message":"On April 25, 2015, Nepal experienced a catastrophic earthquake that caused widespread devastation and loss of life. The Better Life Social Organization recognized the urgency of the situation and promptly initiated relief efforts to assist the affected population. Our dedicated team of volunteers, working closely with Nepal Police, played a pivotal role in providing much-needed rescue operations, as well as essential supplies like food and medicine.",
  },
  {
      "name":"Rescue Operations",
      "message":`In the immediate aftermath of the earthquake, our team of volunteers actively participated in rescue operations. They tirelessly worked alongside Nepal Police and other rescue teams to locate and save individuals trapped under collapsed buildings and debris. Their commitment, courage, and determination were instrumental in saving lives and providing a glimmer of hope amidst the chaos.`,
  },
  {
      "name":"Food and Medicine Support",
      "message":`Understanding the urgent need for sustenance and medical aid, the Better Life Social Organization swiftly organized the distribution of food and medicine to the affected communities. Our team coordinated with local authorities, relief agencies, and generous donors to gather essential supplies. These supplies were then distributed systematically to ensure equitable access to food and medicine for those in need.`,
  },
  {
    "name":"Collaboration with Nepal Police",
    "message":`The Better Life Social Organization greatly values partnerships and collaboration, recognizing the collective strength in responding to such disasters. During the earthquake relief efforts, our organization closely collaborated with Nepal Police. This collaboration enhanced the effectiveness and efficiency of our operations, as both organizations pooled resources, expertise, and manpower to provide comprehensive support to the affected population.`,
},
{
  "name":"Impact",
  "message":`The collective efforts of the Better Life Social Organization, along with Nepal Police and other dedicated volunteers, made a significant impact during the earthquake relief operations. Through our rescue operations, many lives were saved, and hope was restored to individuals and families amidst the devastation. The distribution of food and medicine provided vital sustenance and medical care to those who had been displaced or injured.`,
},
{
  "name":"Conclusion",
  "message":`The Better Life Social Organization's response to the 2015 earthquake in Nepal stands as a testament to our commitment to serving communities during times of crisis. Our team of volunteers, in collaboration with Nepal Police, displayed exceptional dedication, selflessness, and resilience in providing rescue operations, as well as distributing essential supplies to affected areas. Through our collective efforts, we aimed to alleviate suffering, restore hope, and support the affected population during their time of need.

  We express our heartfelt gratitude to all the volunteers, donors, and supporters who made these relief efforts possible. Together, we demonstrated the power of compassion and solidarity, reaffirming our commitment to making a positive difference in the lives of those facing adversity.`,
}
]
const poor_fam_arr = [
  {
      "name":"Project Name: Family Support Project",
      "message":"",
  },
  {
      "name":"Support Areas: Small Business Investment, Agriculture, Livestock, Land Lease, Equipment Support",
      "message":``,
  },
  {
      "name":"Target Group: Poor Families",
      "message":``,
  },
  {
    "name":"Project Overview",
    "message":`The Family Support Project aims to empower needy families by providing assistance in various areas, including small business investment, agriculture, livestock, land lease, and equipment support. The project recognizes the challenges faced by impoverished families who struggle to make ends meet and aims to offer them the opportunity to improve their lives. The project welcomes sponsors from anywhere to contribute and make a meaningful impact on these families' livelihoods.`,
},
{
  "name":"Why Support Needy Families?",
  "message":`Needy families face numerous challenges, relying on daily wages for survival. In Nepal, job opportunities are limited, leaving families vulnerable to financial instability. A lack of consistent work means they cannot afford basic necessities, such as food or fuel for cooking. By supporting these families and providing opportunities for self-sufficiency, we can alleviate their daily struggles and foster long-term change.`,
},
{
  "name":"Monitoring and Reporting",
  "message":`The Better Life Social Organization closely monitors the Family Support Project. We ensure that funds and resources reach the intended families and are utilized effectively. Regular reports are provided to donors, allowing them to stay connected with the families they support. This direct connection creates a sense of fulfillment and reinforces the significant impact donors have in transforming lives.`
},
{
  "name":"Why This Program Was Designed",
  "message":`The Family Support Project was designed by The Better Life Social Organization after years of working in this field. We realized that simply providing assistance on a monthly basis was not enough to create lasting change. By offering families better opportunities and pathways to economic independence, we enable them to lead happier, more comfortable lives. Our aim is to break the cycle of poverty and help families achieve long-term stability and happiness for themselves and future generations.`
},
{
  "name":"Conclusion",
  "message":`The Family Support Project is an initiative that empowers needy families to improve their lives by offering support in areas such as small business investment, agriculture, livestock, land lease, and equipment. By contributing to this project, sponsors have the opportunity to make a significant impact on these families' well-being, enabling them to break free from the cycle of poverty. The Better Life Social Organization ensures effective monitoring and reporting, keeping sponsors connected with the families they support. Together, we can create a better future for these families, transforming their lives and fostering happiness and prosperity.`
},
{
  "name":"Benefits of Supporting Needy Families",
  "message":`Supporting needy families in starting their own businesses and earning a sustainable income has a ripple effect. As families become self-reliant, they can send their children to school, afford necessary medical care, and gradually improve their quality of life. Your one-time donation can pave the way for a lifetime of happiness and success for these families. By empowering them with opportunities, they can thrive, break the cycle of poverty, and create a better future for themselves and their children.`
}
]
const birthday_arr = [
  {
      "name":"Summary",
      "message":"The Group Birthday Project aims to bring joy and happiness to underprivileged children who may not have the opportunity to celebrate their birthdays. On the 15th of every month, a group celebration will be organized for children born from the 1st to the end of that month. The project invites donors and volunteers to participate and gift the children with simple but meaningful presents, making their birthdays special and memorable.",
  },
  {
      "name":"Description",
      "message":`The Group Birthday Project recognizes that celebrating birthdays is a cherished experience for many children, but unfortunately, it is a luxury that some underprivileged children do not have. With the aim of spreading happiness and making every child feel special, this project organizes group birthday celebrations on the 15th of each month.

      The project focuses on children born from the 1st to the end of that particular month. By gathering these children together, the project creates a sense of community and enables them to celebrate their birthdays collectively.
      
      The celebration itself is a joyful occasion where the children can enjoy activities, games, and shared moments of laughter. The project encourages volunteers to participate, helping create a memorable experience for the children by organizing fun games, entertainment, and engaging activities.
      
      To make each child's birthday celebration truly special, the project invites donors to contribute gifts. The gifts can range from simple but meaningful items that bring joy to the children's lives. Donors are encouraged to personalize their gifts according to their preferences and the age group of the children. Whether it's toys, books, art supplies, or other thoughtful presents, each gift contributes to making the children's birthdays a memorable experience.
      
      The Group Birthday Project believes that every child deserves to feel special and experience the joy of their own birthday celebration. By joining this initiative as a donor or volunteer, you have the opportunity to make a positive impact in these children's lives, bringing smiles and happiness on their special day.
      
      The project is open to collaboration and welcomes individuals who share the vision of making a difference in the lives of underprivileged children. Together, we can create a supportive and inclusive environment where all children, regardless of their socioeconomic background, have the chance to experience the joy of celebrating their birthdays.
      
      Join the Group Birthday Project today and help make a difference in the lives of underprivileged children. Your participation as a donor or volunteer will create lasting memories and bring happiness to those who need it the most. Together, we can ensure that every child's birthday is a special occasion filled with love, joy, and meaningful gifts.`,
  }
]
const vol_arr = [
  {
      "name":"Project Name: Volunteer Nepal",
      "message":"",
  },
  {
      "name":"Volunteer Areas: Education, Health, Agriculture, Office Management, and More",
      "message":``
  },
  {
    "name":"Why Volunteer with Better Life Social Organization?",
    "message":`Volunteering with Better Life Social Organization (BLSO) Nepal offers a unique opportunity to make a positive impact in the lives of others. With years of experience in the field, our staff and volunteers are kind, friendly, and highly experienced. By joining our volunteer program, you become part of a dedicated team working towards creating a better future for the communities we serve.`
  },
  {
    "name":"Date of Volunteering",
    "message":"Volunteer placements are available every week and every month, but it's important to book your spot at least one week in advance. This allows us to ensure proper arrangements are made for your meaningful volunteer experience."
  },
  {
    "name":"Who Can Volunteer",
    "message":`Volunteering with BLSO Nepal is open to any citizen above 18 years of age who is in good health and physically fit. We welcome individuals from all walks of life who have the passion and commitment to contribute to our projects and make a difference in the lives of others.

    Duration of Volunteer Placement:
    The duration of your volunteer placement can be tailored to your availability and preferences. Whether you can volunteer for a single day or commit to a period of three months, we can accommodate your requirements and provide you with a meaningful experience.`
  },
  {
    "name":"Volunteer Fees",
    "message":`At BLSO Nepal, we believe in providing volunteering opportunities free of cost. However, as a volunteer, you are responsible for covering your own expenses, including food, accommodation, healthcare, and transportation fees. Our team can assist you in finding suitable accommodations, whether it's a hotel or a low-cost option recommended by our organization for short or long stays. Please discuss your preferences with our staff.`
  },
  {
    "name":"Supporting a Project",
    "message":"As a volunteer, you have the option to support our projects or make donations according to your wish. Your contribution can make a significant difference in the lives of the communities we serve, helping us further our mission and bring about positive change."
  },
  {
    "name":"Benefits of Volunteering",
    "message":"Volunteering with BLSO Nepal offers numerous benefits. By immersing yourself in the local community, you have the opportunity to build strong relationships, gain a deeper understanding of Nepalese culture, and experience the daily lifestyle firsthand. You become a valued member of the Better Life team, making a positive impact and leaving a lasting impression. Additionally, after your volunteer experience, you can explore Nepal as a tourist, although the expenses for your travel would be your responsibility."
  }
]
const tent_arr = [
  {
      "name":"Project Name: Tent Provision for 20 Homeless Riverside Families"
  },
  {
      "name":"Date: April 25, 2015",
    },
  {
    "name":"Donation By: Tukumi Katyama"
  },
  {
    "name":"Summary",
    "message":`The Better Life Social Organization, with the generous donation from Tukumi Katyama, initiated a project to provide tents for 20 homeless families living by the riverside. This project aimed to offer temporary shelter and improve the living conditions of the vulnerable families in need.

    Description: In April 2015, the Better Life Social Organization embarked on a project to provide temporary shelter for 20 homeless families residing by the riverside. The project aimed to address the immediate housing needs of these vulnerable families and improve their living conditions.
    
    The initiative was made possible by the generous donation from Tukumi Katyama, whose compassionate contribution supported the procurement of the tents. Tukumi Katyama's act of kindness played a pivotal role in enabling the Better Life Social Organization to fulfill its mission of helping those in need.
    
    The tents provided through this project offered a safe and secure living environment for the homeless families. They offered protection against the elements and created a temporary haven for the families to regain a sense of stability and security.
    
    The Better Life Social Organization worked diligently to identify and select the 20 most vulnerable families in need of shelter. Through careful assessment and collaboration with local authorities, the organization ensured that the tents reached those who required them the most.
    
    The provision of the tents not only offered physical shelter but also provided a glimmer of hope for the families. It gave them an opportunity to rebuild their lives and work towards a better future.
    
    The Better Life Social Organization expresses profound gratitude to Tukumi Katyama for their generous donation, which made the Tent Provision project possible. Their support exemplifies the spirit of compassion and solidarity, making a significant difference in the lives of 20 homeless riverside families.
    
    This project stands as a testament to the Better Life Social Organization's commitment to addressing the immediate needs of vulnerable individuals and families, while also striving to create lasting change in their lives.
    
    The Better Life Social Organization extends its heartfelt appreciation to Tukumi Katyama for their contribution, as well as to all the dedicated individuals who worked tirelessly to ensure the success of the project. Together, they have made a positive impact on the lives of the homeless families, offering them temporary shelter and a renewed sense of hope for a brighter future.`
  }
]
const argi_arr = [
  {
    "name":"",
    "message":``
  },
]
const note_arr = [
  {
    "name":"Note book project",
    "message":`Better Life Social Organization (BLSO) is dedicated to helping underprivileged children in rural villages of eastern Nepal who lack access to education. Many of these children face difficulties obtaining essential educational materials such as books, notebooks, pencils, and school bags, as their parents cannot afford to buy these items. Since our establishment in 2011, BLSO Nepal has been working towards supporting children in public schools who are unable to attend classes due to financial constraints. We firmly believe that education is the key to a brighter future for every child.

    We extend a heartfelt invitation to donors to join us in our mission to assist these needy children. Your generous contributions can include books, notebooks, bags, clothing, and school fees according to your preferences. Your support will bring immense joy to these children and open doors to promising opportunities in their futures.`
  },
]
const sup_teacher_arr = [
  {
    "name":"Introduction",
    "message":`The Education Empowerment Initiative aims to address the critical issue of limited teacher salaries in community and private schools, thereby ensuring quality education and creating brighter futures for children. This project seeks support from individual donors and organizations to contribute to teacher salary support, enabling schools to attract and retain competent teachers.`
  },
  {
    "name":"Problem Statement",
    "message":`In many community and private schools, there is a shortage of teachers, leading to one teacher handling multiple subjects. Due to financial constraints, some schools are unable to afford the salaries of additional teachers, leaving them understaffed and overburdened. Consequently, teachers are forced to work without proper compensation, negatively impacting their motivation and dedication.`
  },
  {
    "name":"Objectives",
    "message":`Ensure quality education by hiring additional teachers to reduce workload and enhance subject expertise.
    Support the salaries of teachers in schools facing financial constraints to prevent them from working without proper compensation.
    Promote a positive learning environment by enabling schools to attract and retain talented teachers.
    Improve students' academic performance and overall educational experience.`
  },
  {
    "name":"Strategy and Implementation",
    "message":`a. Identifying schools in need: Conduct surveys and collaborate with education authorities to identify community and private schools experiencing teacher shortages and financial limitations.
    b. Fundraising campaign: Launch a comprehensive fundraising campaign targeting individual donors and organizations passionate about education and the welfare of teachers.
    
    c. Collaboration with stakeholders: Establish partnerships with local NGOs, government agencies, and corporate entities to maximize outreach and funding opportunities.
    
    d. Transparent allocation of funds: Implement a transparent and accountable system to allocate funds to schools based on their needs and the number of teachers to be supported.
    
    e. Monitoring and evaluation: Regularly assess the impact of the project through performance evaluations, student progress tracking, and feedback mechanisms.`
  },
  {
    "name":"Success Stories",
    "message":`Highlight the success of the Sarlahi Teacher Support Project, which achieved improved education quality and created happy learning environments. Share testimonials from students, teachers, and parents who benefited from the project.`
  },
  {
    "name":"Home Guidance Classes",
    "message":`Emphasize the success of the Home Guidance Class project in Morang, where students received personalized tutoring and mentorship, leading to significant academic progress and increased motivation. Showcase individual success stories and academic achievements.`
  },
  {
    "name":"Call to Action",
    "message":`Invite individual donors and organizations to support the Education Empowerment Initiative by making financial contributions toward teacher salary support. Emphasize the profound impact their support can have on the future of countless children and the education system as a whole.`
  },
  {
    "name":"Conclusion",
    "message":`The Education Empowerment Initiative seeks to alleviate the financial burden faced by community and private schools, ensuring quality education through adequate teacher salaries. By supporting this project, donors and organizations contribute to shaping a brighter future for children, enabling them to receive a high-quality education and empowering them to achieve their dreams. Together, we can make a meaningful difference in the lives of teachers and students alike.`
  },
]
const aid_arr = [
  {
    "name":"Rice, Oil, and Emergency Aid",
    "message":`we proudly share the remarkable initiative of providing emergency support to the Kusunti-13 community in Lalitpur. On June 6, 2021, in collaboration with the Rotary Club USA, we distributed essential supplies, including rice, oil, and emergency support, to 150 families in need.

    At our organization, we understand the critical importance of immediate assistance during challenging times. The COVID-19 pandemic has brought about unprecedented hardships, particularly for vulnerable communities. Our mission is to extend a helping hand and provide essential support to those who are facing difficulties in accessing basic necessities.
    
    Thanks to the generous partnership with the Rotary Club USA, we were able to donate rice packs, salt, oil, and vital medicines to the families residing in Kusunti-13, Lalitpur. This collaboration exemplifies the power of global solidarity and the impact that can be achieved when communities come together to support one another.
    
    The distribution of rice packs not only addresses the immediate food needs of these families but also ensures their sustenance for an extended period. We recognize that access to nutritious food is a fundamental right, and our aim is to alleviate hunger and promote overall well-being within the community.
    
    In addition to the provision of food supplies, we understand the importance of comprehensive emergency support. This includes essential items such as salt, oil, and medicines, which are vital for maintaining health and ensuring the overall welfare of individuals and families.
    
    Our heartfelt gratitude goes to the Rotary Club USA for their unwavering support and commitment to making a difference in the lives of those in need. Their contribution has played a significant role in addressing the immediate challenges faced by the community in Kusunti-13.
    
    We believe that true transformation occurs through collective effort, and we invite you to join us in our mission. Together, we can make a lasting impact on the lives of individuals and communities in need. Your support, whether through donations, volunteerism, or spreading awareness, can create a ripple effect of positive change and bring hope to those facing adversity.
    
    Explore our website to learn more about our initiatives, impact stories, and how you can contribute to our cause. Together, let us build a stronger, more compassionate world where everyone has access to essential resources and support, regardless of their circumstance`
  }
]
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/donation' element={<HelpDonation/>} />
        <Route path='/contact' element={<ContactPage/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/education-project' element={<EducationProject/>} />
        <Route path='/nepal-earthquake' element={<NepalEarthquake/>} />
        <Route path='/shoes-distribution-project' element={<AllEvents img="https://www.blsonepal.org.np/uploads/medium/shoes-2-POcEmWbN0f2twJ2HBkvfHgiohko524sw1lCHPxYp.jpg" title="Shoes Distribution Project" arr={shoes_dis}/>} />
        <Route path='/home-guidance' element={<AllEvents img={home_guidance_photo} title="Home Guidance Class project" arr={home_guidance}/>} />
        <Route path='/pure-drinking-water' element={<AllEvents img={drink_waterr} title="Pure Drinking Water Project at School" arr={drink_water}/>} />
        <Route path='/earthquake-relief' element={<AllEvents img={earthquake} title="Earthquake Relief Efforts" arr={earthquake_relief}/>} />
        <Route path='/volunteer-project' element={<AllEvents img={volunter_photo} title="Volunteer Opportunity Nepal" arr={vol_arr}/>} />
        <Route path='/emergency-foods' element={<AllEvents img={emergency_fds} title="Earthquake Relief Efforts" arr={emergency_food}/>} />
        <Route path='/tent-provision-project' element={<AllEvents img={tent_photo} title="Tent Provision for 20 Homeless Riverside Families" arr={tent_arr}/>} />
        <Route path='/family-support-project' element={<AllEvents img={poor_fam_photo} arr={poor_fam_arr} title="Poor Families sponsor program" />} />
        <Route path='/birthday-project' element={<AllEvents img={birth_photo} arr={birthday_arr} title="Group Birthday Project" />} />
        <Route path='/agriculture-project' element={<AllEvents img={agriculture_photo} arr={argi_arr} title="Agricultures Project with BLSO" />} />
        <Route path='/notebook-project' element={<AllEvents img={notebook_photo} arr={note_arr} title="Note book project" />} />
        <Route path='/supporting-teacher' element={<AllEvents img={support_teacher_photo} arr={sup_teacher_arr} title="Supporting Teacher Salaries for Quality Education" />} />
        <Route path='/emergency-aid' element={<AllEvents img={aid_photo} arr={aid_arr} title="Rice, Oil, and Emergency Aid" />} />
        <Route path='/sponser-tara' element={<SponserChild/>} />
        <Route path='/sponser-pokhrel' element={<SponserPokhrel/>} />
        <Route path='/sponser-kalawati' element={<SponserKalawati/>} />
        <Route path='/sponser-ansh' element={<SponserAnsh/>} />
        <Route path='/our-team' element={<TeamSection/>} />
        <Route path='/our-mission' element={<MissionGoal/>} />
        <Route path='/resources' element={<>
        <Message/>
        <FAQ/>
        </>} />
      </Routes>
      <Footer2/>
    </>
  );
}

export default App;

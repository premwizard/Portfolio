import { title } from "framer-motion/client";

const _rawCertificateData = [
{
  title: "Artificial Intelligence Fundamentals",
  issuer: "GREAT LEARNING",
  date: "AUG 2024",
  link: "https://drive.google.com/file/d/1F76R0L4weRfG65C8wnYGEbpF9Mz2fXzb/view?usp=sharing",
  category: "AI/ML",
},
{
    title: "Floyd Warshall Algorithm",
    issuer: "Great Learning",
    date: "June 2024",
    link: "https://drive.google.com/file/d/1mP4DYOHX1qZDg4wQxEQgg57Vfy0mWDrM/view?usp=sharing",
    category: "Others",
    },
{
    title: "Generative AI of Beginners",
    issuer: "Great Learning",
    date: "Nov 2024",
    link: "https://drive.google.com/file/d/1opevvwWvw287kInm5qjvxFNBTRsYIqyI/view?usp=sharing",
    category: "AI/ML",
},
{
    title: "Python Data Structures",
    issuer: "Great Learning",
    date: "Jan 2023",
    link: "https://drive.google.com/file/d/12CaN7xc3D2U2hnN5G1EQYNMEkNzCHATV/view?usp=sharing",
    category: "Python",
},
{
    title: "Python for Non-Programmers",
    issuer: "Great Learning",
    date: "JAN 2023",
    link: "https://drive.google.com/file/d/1joTsoQTuhc5n4kAHhyVZhUN0Pt_W8yWE/view?usp=sharing",
    category: "Python",
},
{
    title: "Cloud Computing",
    issuer: "NPTEL",
    date: "OCT 2024",
    link: "https://drive.google.com/file/d/1RrIvXrZgux5iw0neWsUeTemese7boq1I/view?usp=sharing",
    category: "Cloud",
},
{
    title: "Basic Coding Course",
    issuer: "Prepinsta",
    date: "June 2023",
    link: "https://drive.google.com/file/d/1DLI85jmusm8MO-eai--Fi72ASjoYVb56/view?usp=sharing",
    category: "Others",
},
{
    title: "Cloud Computing",
    issuer: "Prepinsta",
    date: "FEB 2024",
    link: "https://drive.google.com/file/d/1EQF539an1Sqa2YMFb-M3-Bzrpurehs2G/view?usp=sharing",
    category: "Cloud",
},
{
    title: "Data Analytics",
    issuer: "Prepinsta",
    date: "MAR 2024",
    link: "https://drive.google.com/file/d/1EkJB1cWvGRXy9HqT4g3f5a5-4jw-UQvC/view?usp=sharing",
    category: "Others",
},
{
    title: "Computer Networks",
    issuer: "Prepinsta",
    date: "APR 2024",
    link: "https://drive.google.com/file/d/17fhYFBERyGWQ__C2BxUo8Pdp3HSiq2oY/view?usp=sharing",
    category: "Others",
},
{
    title: "DBMS",
    issuer: "Prepinsta",
    date: "MAY 2024",
    link: "https://drive.google.com/file/d/1yVI4AeUuWJAMb7wLoiITuLBf7qle8Ocy/view?usp=sharing",
    category: "Others",
},
{
    title: "DSA in C",
    issuer: "Prepinsta",
    date: "FEB 2024",
    link: "https://drive.google.com/file/d/10REdKIAe110iwk7_gRcmZ3Y0M9cg7TJc/view?usp=sharing",
    category: "Others",
},
{
    title: "Intermediate Coding in Python",
    issuer: "Prepinsta",
    date: "APR 2024",
    link: "https://drive.google.com/file/d/1nqUenGCH6M8pGRjl-3AN7ofU5ptm4n9S/view?usp=sharing",
    category: "Python",
},
{
    title: "Mongo DB",
    issuer: "Prepinsta",
    date: "OCT 2024",
    link: "https://drive.google.com/file/d/1QZmotmdUvwDbjyoGeUJExPcmRoihWpj1/view?usp=sharing",
    category: "Web Development",
},
{
    title: "Python Nano Degree Course",
    issuer: "Prepinsta",
    date: "JAN 2023",
    link: "https://drive.google.com/file/d/1G853mS6qweq7VOMEhKIDeJyv_ZZHtGeO/view?usp=sharing",
    category: "Python",
},
{
    title: "AR/VR",
    issuer: "Reccsar Private Limited",
    date: "DEC 2024",
    link: "https://drive.google.com/file/d/1N_elGUiqCPa6cebjhovOq4sBt6gTjykH/view?usp=sharing",
    category: "Others",
},
{
    title: "BigData Analytics",
    issuer: "Reccsar Private Limited",
    date: "DEC 2024",
    link: "https://drive.google.com/file/d/1f-AHPvGWXi4nC3nvnuHMZ02MxDKgIcap/view?usp=sharing",
    category: "Others",
},
{
    title: "Data Science",
    issuer: "NoviTech R&D Private Limited",
    date: "Sep 2023",
    link: "https://drive.google.com/file/d/1v4fKtl4y6ADkiEjGPIregzYt1CObTPXN/view?usp=sharing",
    category: "Others",
},
{
    title: "Deep Learning",
    issuer: "Reccsar Private Limited",
    date: "NOV 2024",
    link: "https://drive.google.com/file/d/1JlyGv7FOCr0gTtN7HqKhJSdsVvjV_kvP/view?usp=sharing",
    category: "AI/ML",
},
{
    title: "FIGMA BOOTCAMP WORKSHOP",
    issuer: "Qaroo Learnings India Private Limited",
    date: "DEC 2023",
    link: "https://drive.google.com/file/d/1ggWY8ceEMJmvv7mE21c99yISvPMRhVWT/view?usp=sharing",
    category: "UI/UX",
},
{
    title: "JAVA",
    issuer: "Reccsar Private Limited",
    date: "DEC 2024",
    link: "https://drive.google.com/file/d/1chA6rLJVgbyvq9y9lLvLVauBoGlEOg5L/view?usp=sharing",
    category: "Others",
},
{
    title: "Natural Language Processing",
    issuer: "Reccsar Private Limited",
    date: "NOV 2024",
    link: "https://drive.google.com/file/d/1OAkp0uB9wyz-5FI_2vwEpCpK_TUx8S94/view?usp=sharing",
    category: "AI/ML",
},
{
    title: "Power BI",
    issuer: "Reccsar Private Limited",
    date: "JAN 2025",
    link: "https://drive.google.com/file/d/1oShd2bYCybfUv1IkssuPJpYGGjcA6WxN/view?usp=sharing",
    category: "Others",
},
{
    title: "Progressive Hands-on App Developement",
    issuer: "KPR Institute of Engineering and Technology",
    date: "JAN 2025",
    link: "https://drive.google.com/file/d/1A5_z72VLES2dQ-Yzga4WK5Y2ymqs_2sb/view?usp=sharing",
    category: "Web Development",
},
{
    title: "EDGE AI INNOVATION CHALLANGE 2024",
    issuer: "STMicroeletronics,France and DigiToad Technologies Pvt,Ltd",
    date: "AUG 2024",
    link: "https://drive.google.com/file/d/12xcWRoL27ykv6PRMBkKTssDkDm39vktl/view?usp=sharing",
    category: "Others",
},
{
    title: "Enterprise Design Thinking Co-Creator",
    issuer: "IBM",
    date: "FEB 2024",
    link: "https://drive.google.com/file/d/16RDh6ayXZ70O8nHk6tR86ZanVS9XdvK4/view?usp=sharing",
    category: "Others",
},
{
    title: "Enterprise Design Thinking Practitioner",
    issuer: "IBM",
    date: "FEB 2024",
    link: "https://drive.google.com/file/d/1_N7Kv6mFAhIbivTqt5uOURKh42QcvpHE/view?usp=sharing",
    category: "Others",
},
{
    title: "Machine Learning",
    issuer: "EMGLITZ TECHNOLOGIES",
    date: "JAN 2025",
    link: "https://drive.google.com/file/d/1rlGq-DlhQdjmXtUImowxsNeyOkqhGFFo/view?usp=sharing",
    category: "AI/ML",
},
{
    title: "Python Essentials 1",
    issuer: "CISCO Networking Academy",
    date: "JUN 2025",
    link: "https://drive.google.com/file/d/1yCsETyGhFLiTgq6e6NMnVhsE48ut1L2P/view?usp=sharing",
    category: "Python",
},
{
    title: "AI Masterclass: How AI Thinks",
    issuer: "SARAS AI INSTITUTE",
    date: "MAY 2025",
    link: "https://drive.google.com/file/d/105vcVUNS-KyTTVk65rVZ8Hvr8sBDSHN6/view?usp=sharing",
    category: "AI/ML",
},
{
    title: "Python Programming Language",
    issuer: "MindLuster",
    date: "MAY 2025",
    link: "https://drive.google.com/file/d/1Ye2hY1PAizukeRAe01Clsokezvq7eVFY/view?usp=sharing",
    category: "Python",
},
{
    title: "Basic of Python",
    issuer: "Uniathena",
    date: "APR 2025",
    link: "https://drive.google.com/file/d/14bl82bQfFjhGEmIvcwm5L18a3ur3C7uG/view?usp=sharing",
    category: "Python",
},
// {
//     title: "Programming Foundations with Python",
//     issuer: "Code Signal",
//     date: "Jun 2025",
//     link: "public/certificates/PFWPY.png",
//     category: "Python",
// },
{
    title: "Python",
    issuer: "Prepinsta",
    date: "AUG 2024",
    link: "https://drive.google.com/file/d/1a-Dh5kUodwB8R39gN7FyznwsMCwIc_7G/view?usp=sharing",
    category: "Python",
},
{
    title: "Python Flask",
    issuer: "Mind Luster",
    date: "MAY 2025",
    link: "https://drive.google.com/file/d/14xXTsx7IfAsXfQ4yR37oBTBDYgzgPag8/view?usp=sharing",
    category: "Web Development",
},
{
    title: "Code Forker",
    issuer: "Kaggle",
    date: "APR 2025",
    link: "https://drive.google.com/file/d/1-_-WU4Q-nzGNUMfegim4t8-5fkBP-cTQ/view?usp=sharing",
    category: "Others",
},
{
    title: "INTRODUCTION TO MONGODB",
    issuer: "MongoDB University",
    date: "JUN 2025",
    link: "https://drive.google.com/file/d/16St9IwwlNsgBp8y_-A5Ssz34ACjYvOiS/view?usp=sharing",
    category: "Web Development",
},
// {
//     title: "MongoDB CRUD Operations: Replace and Delete Documents",
//     issuer: "MongoDB University",
//     date: "JUN 2025",
//     link: "public/certificates/m-prem-28a836e1-4980-4a18-9ed5-6590931ee1f0-certificate.pdf",
//     category: "Web Development",
// },
// {
//     title: "MongoDB Aggregation",
//     issuer: "MongoDB University",
//     date: "JUN 2025",
//     link: "public/certificates/m-prem-048cb03f-9baa-4060-8f3c-c4b1ec2b75de-certificate.pdf",
//     category: "Web Development",
// },
// {
//     title: "MongoDB and the Document Model",
//     issuer: "MongoDB University",
//     date: "JUN 2025",
//     link: "public/certificates/m-prem-9997cc0a-cb55-47fb-bbc1-d7b243df5897-certificate.pdf",
//     category: "Web Development",
// },
// {
//     title: "Connecting to a MongoDB Database using MongoDB Shell",
//     issuer: "MongoDB University",
//     date: "JUN 2025",
//     link: "public/certificates/m-prem-56121e2f-2f0f-4cd7-b7a1-9c1869c44ca4-certificate.pdf",
//     category: "Web Development",
// },
// {
//     title: "MongoDB Transactions",
//     issuer: "MongoDB University",
//     date: "JUN 2025",
//     link: "public/certificates/m-prem-98385736-1c45-49fc-8ffd-cb98f48344d1-certificate.pdf",
//     category: "Web Development",
// },
// {
//     title: "MongoDB CRUD Operations: Insert and Find Documents",
//     issuer: "MongoDB University",
//     date: "JUN 2025",
//     link: "public/certificates/m-prem-a86894c7-30a6-4c97-b2e3-b238884e4b6d-certificate.pdf",
//     category: "Web Development",
// },
// {
//     title: "Introduction to Atlas Search",
//     issuer: "MongoDB University",
//     date: "JUN 2025",
//     link: "public/certificates/m-prem-cdadc3d3-2813-4a38-baf2-85babdf2580a-certificate.pdf",
//     category: "Web Development",
// },
// {
//     title: "MongoDB Indexes",
//     issuer: "MongoDB University",
//     date: "JUN 2025",
//     link: "public/certificates/m-prem-f5c2ce89-e311-4529-aef8-aa35e1885ea0-certificate.pdf",
//     category: "Web Development",
// },
// {
//     title: "Getting Started with MongoDB Atlas",
//     issuer: "MongoDB University",
//     date: "JUN 2025",
//     link: "public/certificates/m-prem-f7f35999-eaaf-49fb-8bb9-6ab997b963f4-certificate.pdf",
//     category: "Web Development",
// },
{
    title: "Postman API Fundamentals Student Expert",
    issuer: "Postman",
    date: "JUN 2025",
    link: "https://drive.google.com/file/d/18_DLdiBrpmPAkTCuEqLsK4cWL6L5OTpW/view?usp=sharing",
    category: "Web Development",
},
{
    title: "Basics of Machine Learning Algorithms",
    issuer: "Uniathena",
    date: "Apr 2025",
    link: "https://drive.google.com/file/d/14G5-QG-Wf5IiXWBdE1m-PQUs0MpynFld/view?usp=sharing",
    category: "AI/ML",
},
{
    title: "Python Coder",
    issuer: "Kaggle",
    date: "APR 2025",
    link: "https://drive.google.com/file/d/178_sR9sLXyqOpLQW8cBAurO_OnaHr_PQ/view?usp=sharing",
    category: "Python",
},
{
    title: "UI/UX Design Traineeship",
    issuer: "Maiyyam",
    date: "FEB 2025",
    link: "https://drive.google.com/file/d/1VXCWRL3o3q6CiHjWMgxSdtpHsz4vd-qd/view?usp=sharing",
    category: "UI/UX",
},
{
    title: "Full-Stack(MERN) App/Web Development Traineeship",
    issuer: "Maiyyam",
    date: "MAY 2025",
    link: "https://drive.google.com/file/d/1G6_UOHwgkzhiBEZk3S2hJnZ3b2yykp6k/view?usp=sharing",
    category: "Web Development",
},
{
    title: "Responsive Web Design",
    issuer: "FreeCodeCamp",
    date: "APR 2025",
    link: "https://drive.google.com/file/d/1VTgDhH1xBEseStf3pCAavx4bSVnHFVbw/view?usp=sharing",
    category: "Web Development",
},
{
    title: "Python(Basic)",
    issuer: "Hackerrank",
    date: "MAY 2025",
    link: "https://drive.google.com/file/d/1N4JkRu_GSbMEuZqI8a5E-oz9aOrPCXw6/view?usp=sharing",
    category: "Python",
},
{
    title: "Git In The Game: A Github Workshop",
    issuer: "IEEE MAIT",
    date: "MAY 2025",
    link: "https://drive.google.com/file/d/1GOpzsr8wY5fT5ZvXn9b98FaErfwuOhWP/view?usp=sharing",
    category: "Web Development",
},
{
    title: "Application Designer",
    issuer: "EduBridge",
    date: "Apr 2025",
    link: "https://drive.google.com/file/d/1j67Q7GnjRccsxM7xvhC7SPFARqCr9WQy/view?usp=sharing",
    category: "UI/UX",
},

{
  title: "NVIDIA DEEP LEARNING",
  issuer: "GYAN GANGA INSTITUTE OF TECHNOLOGY AND SCIENCE",
  date: "JUL 2025",
  link: "https://drive.google.com/file/d/15StVMzDWUuXbtz0H3GjVzjet2YFPrAT7/view?usp=sharing",
  category: "AI/ML",
},

// {
//     title: "Mastering Control Structures in Python",
//     issuer: "Code Signal",
//     date: "Jul 2025",
//     link: "public/certificates/certificate.png",
//     category: "Python",
// },

// {
//     title: "Introduction to Simple Data Structures in Python",
//     issuer: "Code Signal",
//     date: "Jun 2025",
//     link: "public/certificates/ISDSPY.png",
//     category: "Python",
// },
// {
//     title: "Exploring iterations and loops in Python",
//     issuer: "Code Signal",
//     date: "July 2025",
//     link: "public/certificates/certificate (1).png",
//     category: "Python",
// },
{
    title: "Introduction to programming with Python",
    issuer: "Code Signal",
    date: "July 2025",
    link: "https://drive.google.com/file/d/1IYju_ev-1EXP6ObI8GhU84kWchktDlCD/view?usp=sharing",
    category: "Python",
},
{
    title: "React.js Unfiltered - AIALCHEMIST",
    issuer: "Gyan Ganga Institute of Technology and Science",
    date: "July 2025",
    link: "https://drive.google.com/file/d/14v66PG3Is-SOPwh1VNTUI2K3GY3o8EtA/view?usp=sharing",
    category: "Web Development",
},
{
    title: "Think like a Designer(UI/UX Webinar)",
    issuer: "Indian Institute of Technology, Gandhinagar",
    date: "July 2025",
    link: "https://drive.google.com/file/d/146AmKk87cBlH7MhEPHtvIm9px4UFLOQB/view?usp=sharing",
    category: "UI/UX",
},
{
    title: "Introduction to AWS SDK for Python",
    issuer: "Code Signal",
    date: "July 2025",
    link: "https://drive.google.com/file/d/1M_08YBpQegqCrnxYtblMwyQaV9fzjkNz/view?usp=sharing",
    category: "Cloud",
},
{
    title: "Mastering Amazon S3 with AWS SDK for Python",
    issuer: "Code Signal",
    date: "July 2025",
    link: "https://drive.google.com/file/d/1IdQV5J7d9oWGcRuiGE08AYyiJw1jveYi/view?usp=sharing",
    category: "Cloud",
},
{
    title: "Introduction to DynamoDB with AWS SDK for Python",
    issuer: "Code Signal",
    date: "Aug 2025",
    link: "https://drive.google.com/file/d/1HAmDUCjdPUz7XpjNRELm6E5QLObcUkv2/view?usp=sharing",
    category: "Cloud",
},
{
    title: "Prompt Engineering",
    issuer: "Infosys SpringBoard",
    date: "Aug 2025",
    link: "https://drive.google.com/file/d/1ZYYtEWVnnS2GMl2qX9UefbNf66w8mp8O/view?usp=sharing",
    category: "AI/ML",
},
{
    title: "Introduction to Machine Learning: Art of the Possible",
    issuer: "AWS Training and Certification",
    date: "July 2025",
    link: "https://drive.google.com/file/d/1q7iF0PtGNTVA5MEHq4o5UtxHTKSqPE3B/view?usp=sharing",
    category: "AI/ML",
},
{
    title: "Mastering Messaging with AWS SDK for Python",
    issuer: "Code Signal",
    date: "Aug 2025",
    link: "https://drive.google.com/file/d/1y8AcHSqg_GKQq4WgSqy3QMceEMONrYZZ/view?usp=sharing",
    category: "Cloud",
},
{
    title: "Fundamentals of Machine Learning and Artificial Intelligence",
    issuer: "AWS Training and Certification",
    date: "Aug 2025",
    link: "https://drive.google.com/file/d/1nkzp81NG_Zwiyh5W-wLwfykh0iOSPiI9/view?usp=sharing",
    category: "AI/ML",
},
{
    title: "Azure AI Fundamentals",
    issuer: "Microsoft",
    date: "Sep 2025",
    link: "https://drive.google.com/file/d/1p1lLS18B673mL-LfGNlG8frkDIcqmmB8/view?usp=sharing",
    category: "AI/ML",
},
{
    title: "Mastering Algorithms and Data Structures in Python",
    issuer: "Code Signal",
    date: "Sep 2025",
    link: "https://drive.google.com/file/d/1qlGAkfx47ut9UxqhMZuFBbMvUMnXjOTc/view?usp=sharing",
    category: "Python",
},
{
    title: "Introduction to HTML",
    issuer: "Code Signal",
    date: "Sep 2025",
    link: "https://drive.google.com/file/d/1eFU9BHnaIRM6wbusOUiw1DjC8c1778Nl/view?usp=sharing",
    category: "Web Development",
},
{
    title: "Basic of CSS",
    issuer: "Code Signal",
    date: "Sep 2025",
    link: "https://drive.google.com/file/d/118EOu0dyCEBYOMtgT4t4stw65KA142Fc/view?usp=sharing",
    category: "Web Development",
},
{
    title: "Machine Learning Essentials for Business and Technical Decision Makers",
    issuer: "AWS Training and Certification",
    date: "Oct 2025",
    link: "https://drive.google.com/file/d/1aVBYzOuJSlsKIBNkdLkUeJRMnXBRFqOb/view?usp=sharing",
    category: "AI/ML",
},
{
    title: "Machine Learning Terminology and Process",
    issuer: "AWS Training and Certification",
    date: "Oct 2025",
    link: "https://drive.google.com/file/d/1OG4D6YvFNPbo3WGHRtvgh4OCIdOPjrSJ/view?usp=sharing",
    category: "AI/ML",
},
{
    title: "Introduction to Amazon SageMaker",
    issuer: "AWS Training and Certification",
    date: "Oct 2025",
    link: "https://drive.google.com/file/d/1Ru-_Rc7JvKnyFY5vV-v1yasCBgqheHd9/view?usp=sharing",
    category: "AI/ML",
},
{
    title: "Planning a Machine Learning Project",
    issuer: "AWS Training and Certification",
    date: "Oct 2025",
    link: "https://drive.google.com/file/d/1ec-bCrTz5uugi7U3oO2y4MBypQRWU7rK/view?usp=sharing",
    category: "AI/ML",
},
{
    title: "Machine Learning Learning Plan",
    issuer: "AWS Training and Certification",
    date: "Oct 2025",
    link: "https://drive.google.com/file/d/1fenPWUcpizGRaajEsM7TxXIciV5y4ymQ/view?usp=sharing",
    category: "AI/ML",
},
{
    title: "Get Started with Databricks for Data Engineering",
    issuer: "Databricks Academy",
    date: "Oct 2025",
    link: "https://drive.google.com/file/d/1X5makojogRLSZPHU2PRZnALT30QQzASD/view?usp=sharing",
    category: "Others",
},
{
    title: "Databricks Accredited Generative AI Fundamentals",
    issuer: "Databricks Academy",
    date: "Oct 2025",
    link: "https://drive.google.com/file/d/1DQJHeTVeVkruKl807332W3zD3769S-Zp/view?usp=sharing",
    category: "AI/ML",
},
{
    title: "AWS Databricks Platform Architect",
    issuer: "Databricks Academy",
    date: "Oct 2025",
    link: "https://drive.google.com/file/d/112G5k0HgOzlSv96NZsGM7nSOuJRAvxEX/view?usp=sharing",
    category: "Cloud",
},
{
    title: "Micro-Certification - Agentic AI Executive",
    issuer: "ServiceNow",
    date: "Sep 2025",
    link: "https://drive.google.com/file/d/1ZUIATVwRx38dsCb9YSv2xGWmpS19npk6/view?usp=sharing",
    category: "AI/ML",
},
{
    title: "Foundation: Introduction to Langsmith",
    issuer: "Langchain Academy",
    date: "Aug 2025",
    link: "https://drive.google.com/file/d/1LkxPLVltCsdYNl9uoKyDVJdDzfsjBadC/view?usp=sharing",
    category: "AI/ML",
},
{
    title: "Mastering Cloud Engineering with AWS and Python",
    issuer: "Code Signal",
    date: "Aug 2025",
    link: "https://drive.google.com/file/d/18WR1_bpaKtEbdFlN5iPFtICIdY5dZK8P/view?usp=sharing",
    category: "Cloud",
}
];

// Helper to parse month-year strings like "AUG 2024", "June 2024", "Jan 2023" etc.
function parseDateMonthYear(dateStr) {
    if (!dateStr || typeof dateStr !== 'string') return { year: 0, month: 0 };
    const s = dateStr.trim();
    // try to capture month name and 4-digit year
    const yearMatch = s.match(/(\d{4})/);
    const year = yearMatch ? parseInt(yearMatch[1], 10) : 0;

    // normalize string for month detection
    const low = s.toLowerCase();
    const months = [
        ['jan', 'january'],
        ['feb', 'february'],
        ['mar', 'march'],
        ['apr', 'april'],
        ['may'],
        ['jun', 'june'],
        ['jul', 'july'],
        ['aug', 'august'],
        ['sep', 'sept', 'september'],
        ['oct', 'october'],
        ['nov', 'november'],
        ['dec', 'december'],
    ];

    let month = 0;
    for (let i = 0; i < months.length; i++) {
        const group = months[i];
        for (const token of group) {
            if (low.includes(token)) {
                month = i + 1; // 1-based month
                break;
            }
        }
        if (month) break;
    }

    return { year, month };
}

// Export a sorted copy: recent (newer) first, then title ascending for ties
export const certificateData = _rawCertificateData.slice().sort((a, b) => {
    const da = parseDateMonthYear(a.date);
    const db = parseDateMonthYear(b.date);
    if (db.year !== da.year) return db.year - da.year;
    if (db.month !== da.month) return db.month - da.month;
    // fallback to case-insensitive title compare
    return String(a.title || '').localeCompare(String(b.title || ''), undefined, { sensitivity: 'base' });
});

export default certificateData;

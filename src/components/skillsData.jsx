import { 
  SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs, SiTailwindcss, SiBootstrap, SiExpress, SiDjango, SiFlask, 
  SiPython, SiJupyter, SiNumpy, SiPandas, SiScikitlearn, SiOpenai, SiOllama, 
  SiMongodb, SiMysql, SiSqlite, SiFirebase,
  SiGithub, SiPycharm, SiSpyderide, SiAndroidstudio, 
  SiCanva, SiFigma, SiTableau, SiAdobe, SiLangchain,
} from "react-icons/si";

import { FaAws,FaChartLine } from "react-icons/fa";
import { VscAzure, VscVscode } from "react-icons/vsc";
import { MdCloud } from 'react-icons/md';
import { TfiMicrosoftAlt } from "react-icons/tfi";
import { Camera } from 'react-feather';
import { BiBarChartAlt2 } from 'react-icons/bi';


const skillCategories = [
  {
    name: "Web Development",
    skills: [
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
      { name: "JavaScript", icon: SiJavascript },
      { name: "React.js", icon: SiReact },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap 5", icon: SiBootstrap },
      { name: "Express.js", icon: SiExpress },
      { name: "Django", icon: SiDjango },
      { name: "Flask", icon: SiFlask },
    ],
  },
  {
    name: "AI & Machine Learning",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "Jupyter Notebook", icon: SiJupyter },
      { name: "NumPy", icon: SiNumpy },
      { name: "Pandas", icon: SiPandas },
      { name: "Matplotlib", icon: FaChartLine },
      { name: "Scikit-learn", icon: SiScikitlearn },
      { name: "LLMs", icon: SiOpenai },
      { name: "Ollama", icon: SiOllama },
      { name: "Langchain", icon: SiLangchain },
    ],
  },
  {
    name: "Databases & Cloud",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "SQLite", icon: SiSqlite },
      { name: "Firebase", icon: SiFirebase },
      { name: "AWS", icon: FaAws },
      { name: "Azure", icon: VscAzure },
      { name: "GCP", icon: MdCloud },
    ],
  },
  {
    name: "Dev Tools & Design Software",
    skills: [
      { name: "Git & GitHub", icon: SiGithub },
      { name: "VS Code", icon: VscVscode },
      { name: "PyCharm", icon: SiPycharm },
      { name: "Spyder IDE", icon: SiSpyderide },
      { name: "Thonny", icon: SiPython },
      { name: "Android Studio", icon: SiAndroidstudio },
      { name: "Canva", icon: SiCanva },
      { name: "Figma", icon: SiFigma },
      { name: "FlutterFlow", icon: Camera },
      { name: "Adobe", icon: SiAdobe },
    ],
  },
  {
    name: "Data Analytics",
    skills: [
      { name: "Power BI", icon: BiBarChartAlt2},
      { name: "Tableau", icon: SiTableau },
      { name: "Microsoft 365", icon: TfiMicrosoftAlt },
    ],
  },

];

export default skillCategories;

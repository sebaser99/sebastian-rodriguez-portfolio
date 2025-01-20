import { Injectable } from '@angular/core';
import { IProject } from '../interfaces/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  stackClass = {
    marginTop: "0",
    marginBottom: "0px",
    fontSize: "1rem",
    color: "#fff"
  }

  linkClass = {
    marginTop: "0px",
    marginBottom: "10px",
    fontSize: "1.5rem",

  }

  private projects : IProject[] = [
    {
      title: "Onemall Ecommerce",
      description: "Ecommerce para fondo de empleados con plataforma de gestión granular.",
      image: "../../../assets/images/onemall-1.png",
      stack : [
        {icon:"simpleAngular", name: "Angular", color: "#DD0031" }, {icon:"simpleNodedotjs", name: "Node", color: "#339933"},
        {icon:"simpleTsnode", name: "TypeScript", color: "#0176c5" }, {icon:"simplePostgresql", name: "Postgresql", color: "#30648b"}
      ],
      stackShowText: false,
      links : [{icon: 'bootstrapLink45deg', name: "Preview", url: "https://tiendaonemall.com.co/#/"},
        // {icon: "bootstrapGithub", name: "GitHub" },
      ],
      stackClass : this.stackClass,
      linkClass: this.linkClass
    },
    {
      title: "Coutivaq Perfumería",
      description: "Ecommerce de perfumería, con website y plataforma de gestión.",
      image: "../../../assets/images/coutivaq_site.png",
      stack : [{icon:"simpleAngular", name: "Angular", color: "#DD0031" }, {icon:"simpleNodedotjs", name: "Node", color: "#339933"},
        {icon:"simpleTsnode", name: "TypeScript", color: "#0176c5" }, {icon:"simplePostgresql", name: "Postgresql", color: "#30648b"}
      ],
      stackShowText: false,
      links : [{icon: 'bootstrapLink45deg', name: "Preview", url: "https://coutivaq-fronted.vercel.app/" },
        // {icon: "simpleGithub", name: "GitHub" },
      ],
      stackClass : this.stackClass,
      linkClass: this.linkClass
    },
    {
      title: "Vox Studio Digital",
      description: "Landing Page para agencia de publicidad.",
      image: "../../../assets/images/vox-studio.png",
      stack : [
        {icon:"simpleWordpress ", name: "Wordpress", color: "#00699b" }, {icon:"simplePhp", name: "php", color: "#8693bd"},
        {icon:"simpleCss3", name: "CSS3", color: "#205fad" }, {icon:"simpleJavascript", name: "JavaScript", color: "#f6dd1e"}
      ],
      stackShowText: false,
      links : [{icon: 'bootstrapLink45deg', name: "Preview", url: "https://voxstudiodigital.com/" },
        // {icon: "bootstrapGithub", name: "GitHub" },
      ],
      stackClass : this.stackClass,
      linkClass: this.linkClass
    },
  ];

  get getProjects (){
    return this.projects;
  }
}

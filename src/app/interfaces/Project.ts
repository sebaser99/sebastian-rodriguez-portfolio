export interface IProject {
  title: string,
  description: string,
  image: string,
  stack : IconName[],
  links : ILink[],
  stackClass?: any,
  linkClass?: any,
  stackShowText?: boolean
}

interface IconName {
  icon: string, name: string, color?: string
}

interface ILink {
  icon: string, name: string, color?: string, url: string
}

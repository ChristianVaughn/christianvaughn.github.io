import { IFilterNav, IPortoflio, EProjectType } from "../interfaces/gallery.interface";
import { imagePath } from "../../custom.config";

export const filterNav2: IFilterNav[] = [
  {
    key: "all",
    text: "All"
  },
  {
    key: "python",
    text: "Python"
  },
  {
    key: "javascript",
    text: "Javascript"
  },
  {
    key: "cpp",
    text: "C++"
  }
]

export const portoflio: IPortoflio[] = [
  {
    tags: ["Python", "PyTorch", "SkLearn"],
    title: "Reflex-Based Local Training",
    type: EProjectType.PYTHON,
    img: "pytorch.svg",
    groups: '["python"]',
	altLink: "Awaiting publication"
  },
  {
    tags: ["Python", "NumPy"],
    title: "Maze Generator",
    type: EProjectType.PYTHON,
    img: "python.png",
    groups: '["python"]',
	link: "https://github.com/ChristianVaughn/Maze-Generation",
	altLink: "View on Github"
  },
  {
    tags: ["Python", "NumPy", "CuPy"],
    title: "PDCGMM Matrix Mul.",
	type: EProjectType.PYTHON,
    img: "python.png",
    groups: '["python"]',
	link: "https://github.com/JohnEaganFS/CSCI174-Project",
	altLink: "View on Github"
  },
  {
    tags: ["HTML", "Javascript", "NodeJs"],
    title: "Halo Online Fileshare",
    type: EProjectType.JAVASCRIPT,
    img: "nodejs-icon.svg",
    groups: '["javascript"]',
	link: "https://github.com/ChristianVaughn/fileshare",
	altLink: "View on Github"
  },
  {
    tags: ["Python", "MatPlotLib", "NumPy"],
    title: "Traveling Salseman",
    type: EProjectType.PYTHON,
    img: "python.png",
    groups: '["python"]',
	link: "https://github.com/ChristianVaughn/Traveling-Salseman-Problem-264",
	altLink: "View on Github"
  },
  {
    tags: ["Python", "Pandas", "MatPlotLib"],
    title: "Disease Simulation",
    type: EProjectType.PYTHON,
    img: "python.png",
    groups: '["python"]',
	link: "https://github.com/ChristianVaughn/Disease-Simulation",
	altLink: "View on Github"
  },
  {
    tags: ["python", "blender", "binary files"],
    title: "Halo Online Blender Plugin",
    type: EProjectType.PYTHON,
    img: "python.png",
    groups: '["python"]',
	link: "https://github.com/Just-Weeb/Eldewrito-Prefab-Exporter",
	altLink: "View on Github"
  },
  {
    tags: ["C++"],
    title: "Monte Carlo Tic-Tac-Toe",
    type: EProjectType.CPP,
    img: "cpp.svg",
    groups: '["cpp"]',
	link: "https://github.com/ChristianVaughn/Tic-Tac-Toe",
	altLink: "View on Github"
  },
  {
    tags: ["HTML", "Javascript", "PHP", "sql"],
    title: "Othello",
    type: EProjectType.JAVASCRIPT,
    img: "nodejs-icon.svg",
    groups: '["javascript"]',
	link: "https://github.com/ChristianVaughn/Othello",
	altLink: "View on Github"
  },

]
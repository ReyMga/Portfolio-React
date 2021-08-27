import { v4 as uuidv4 } from 'uuid';
import MemesImg from '../images/proyecto6.PNG';
import ComicImg from '../images/proyecto1.PNG';
import MoviesImg from '../images/proyect2.PNG';
import PhrasesImg from '../images/proyecto3.PNG';
import ToDoListImg from '../images/proyecto4.PNG';
import MatcheadasImg from '../images/proyecto5.PNG';



const projects = [
  {
    id: uuidv4(),
    name: 'Memes Aplication',
    desc:
      'Application that allows the user to create personalized memes.',
    img: MemesImg,
  },
  {
    id: uuidv4(),
    name: 'Comics Factory',
    desc:
      'Application that allows you to see different types of comics.',
    img: ComicImg,
  },
  {
    id: uuidv4(),
    name: "Movies App",
    desc:
      'Application that shows all the movies including the movies that are in premiere.',
    img: MoviesImg,
  },
  {
    id: uuidv4(),
    name: 'Braking Bad Phrases',
    desc:
      'App developed that presents random phrases from the famous Braking Bad series.',
    img: PhrasesImg,
  },
  {
    id: uuidv4(),
    name: 'To-Do List',
    desc:
      'Application developed so that the user can create their list of tasks in a simple way.',
    img: ToDoListImg,
  },
  {
    id: uuidv4(),
    name: 'Matcheadas Game',
    desc:
      'In this game you can enjoy and play as many times as you want. Your objective is to find a match of 3 or more of the same items to accumulate points in a given period of time.',
    img: MatcheadasImg,
  }
];

export default projects;
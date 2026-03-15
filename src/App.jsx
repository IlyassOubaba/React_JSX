// App.js
import HelloWorld from './HelloWorld';
import Greeting from './Greeting';
import Profil from './Profil';
import Voiture from './Voiture';
import ListeCourses from './ListCourses';

function App() {
  const utilisateur = { nom: 'Emma', photo: '/user.png' };

  const langages = ["C", "C#", "C++"];
  const frameworks = ["SpringBoot", "React", "Symphony"];

  return (
    <div>
      <HelloWorld />
      <br/>
      <Greeting prenom="Alice" />
      <br/>
      <Profil utilisateur={utilisateur} taille={150} />
      <br />
        <Voiture marque="Jaguar" modele="C12" couleur="Rouge" />
      <Voiture marque="Porsh" modele="panamera" couleur="Noir" />
      <Voiture marque="Mercedes" modele="C200" couleur="bleu" />     

      <h2>Liste de languages</h2>
      <ListeCourses elements={langages} />

      <h2>Liste de frameworks</h2>
      <ListeCourses elements={frameworks} />  
      
      
     
    </div>
  );
}

export default App;
import React, { useState } from 'react';
import './App.css';
import TabsTitle from './component/TabsTitle';
import TabsContent from './component/TabsContent';

const tabsContent = [
  {
    id: 1,
    title: "Le Dernier Roi d'Écosse",
    content: "Le Dernier Roi d'Écosse (The Last King of Scotland) est un film britannique de Kevin Macdonald, sorti en 2006. Le film est tiré du roman éponyme de Giles Foden et s'inspire de faits réels : il traite du règne du dictateur ougandais Idi Amin Dada. Plusieurs prix prestigieux sont décernés au film à sa sortie, et surtout à son acteur principal, Forest Whitaker."
  },
  {
    id: 2,
    title: "The Grand Budapest Hotel",
    content: "The Grand Budapest Hotel is a 2014 comedy-drama film written and directed by Wes Anderson. Ralph Fiennes leads an ensemble cast as Monsieur Gustave H., famed concierge of a twentieth-century mountainside resort in the fictional country of Zubrowka in Central Europe. When Gustave is framed for the murder of a wealthy dowager (Tilda Swinton), he and his recently befriended protégé Zero (Tony Revolori) embark on a quest for fortune and a priceless Renaissance painting amidst the backdrop of an encroaching fascist regime. Anderson's American Empirical Pictures produced the film in association with Studio Babelsberg, Fox Searchlight Pictures, and Indian Paintbrush's Scott Rudin and Steven Rales. Fox Searchlight supervised the commercial distribution, and The Grand Budapest Hotel's funding was sourced through Indian Paintbrush and German government-funded tax rebates."
  },
  {
    id: 3,
    title: "Bienvenue à CollinWood",
    content: "Welcome to Collinwood is a 2002 American caper comedy film written and directed by Anthony and Joe Russo and starring William H. Macy, Isaiah Washington, Sam Rockwell, Michael Jeter, Luis Guzmán, Patricia Clarkson, Andrew Davoli, George Clooney, Jennifer Esposito, and Gabrielle Union. The screenplay concerns a group of small-time thieves and misfits from the Collinwood neighborhood of Cleveland, who attempt to carry out a major theft from a jeweller's apartment safe. It is a remake of the Oscar-nominated 1958 Italian film I soliti ignoti by Mario Monicelli. It is the final film featuring Michael Jeter to be released during his lifetime."
  },
];

function App() {
  const [id, setId] = useState(1);
  const [content, setContent] = useState(tabsContent[0].content);

  const handleTitleClick = (id, content) => {
      setId(id);
      setTimeout(() => {
        setContent(content);
      }, 250);
  };

  return (
    <ul className="List">
      <TabsTitle tabsContent={tabsContent} handleTitleClick={handleTitleClick} id={id}/>
      <TabsContent content={content} />
    </ul>
  );
};

export default App;

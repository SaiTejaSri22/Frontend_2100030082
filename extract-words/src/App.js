import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [highlightedText, setHighlightedText] = useState('');

  useEffect(() => {
   
    let paragraphText = "Hey, you're not permitted in there. It's restricted. You'll be deactivated for sure.. Don't call me a mindless philosopher, you overweight glob of grease! Now come out before somebody sees you. Secret mission? What plans? What are you talking about? I'm not getting in there! I'm going to regret this. There goes another one. Hold your fire. There are no life forms. It must have been short-circuited. That's funny, the damage doesn't look as bad from out here. Are you sure this thing's safe?";
    paragraphText = paragraphText.replace(/\?/g, '🤔').replace(/\!/g, '😲');
    paragraphText = paragraphText.split(' ').map(word => word.length > 8 ? `<span style="background-color: yellow">${word}</span>` : word).join(' ');

    paragraphText = paragraphText.split('.').join('.</p><p>') + '</p>';
    setHighlightedText(paragraphText);

    Array.from(document.querySelectorAll('p')).forEach(p => {
      p.innerHTML = p.innerHTML.replace(/\?/g, '🤔').replace(/\!/g, '😲');
    });

    const newLink = (
      <a href="https://forcemipsum.com/" key="newLink">Force</a>
    );

    const wordCount = paragraphText.split(' ').length;
    const wordEle = (
      <div key="wordEle">Total {wordCount} words</div>
    );

 
    setHighlightedText(prevState => [prevState, newLink, wordEle]);
  }, []);

  return (
    <div className="App">
      <div id="paragraph" dangerouslySetInnerHTML={{ __html: highlightedText }}></div>
    </div>
  );
}

export default App;

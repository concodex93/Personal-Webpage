import React from 'react';
import { P } from '../styles/BlurbStyle';
import getAllReservedKeywords from '../reservedKeywords/reservedKeywords';

const Blurb = () => {
  const blurb = `Hello there! My name is Conor. I'm just writing some stuff right now
  because I'm not quite sure what to say yet. But rest assured, I will
  know when the time comes! const class Lorem, ipsum dolor sit amet
  consectetur adipisicing elit. Exercitationem repudiandae iusto nostrum
  cupiditate mollitia illo ex incidunt voluptas recusandae quisquam veniam
  in dolore fugiat, itaque debugger amet architecto? Cumque, log!`;
  const blurbList = blurb.split(' ');

  const processKeywords = () => {
    console.log('test');
    // get all reserved words
    const reservedKeywords = getAllReservedKeywords();
    // for each color cat
    for (let item in reservedKeywords) {
      // for each word in array
      reservedKeywords[item].forEach(keyword => {
        // is reserved word in blurb
        if (blurbList.includes(keyword.toLowerCase())) {
          // set approperaite color
          let word = blurbList.find(keyword);
          setColor(word, item);
        }
      });
    }

    return blurb;
  };

  const setColor = (word, color) => {
    let colorHex;
    switch (color) {
      case 'magenta':
        colorHex = '#FF00FF';
        break;
      case 'cyan':
        colorHex = '#00FFFF';
        break;
      case 'indigo':
        colorHex = '#3F00FF';
        break;
      case 'red':
        colorHex = '#c01b1b';
        break;
      case 'yellow':
        colorHex = ' #ffff00';
        break;
      default:
        colorHex = '';
    }
    word.style.color = colorHex;
  };

  return (
    <div className="ui center aligned text container">
      <P>{processKeywords()}</P>
    </div>
  );
};

export default Blurb;

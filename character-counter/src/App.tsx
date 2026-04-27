import React, { useState } from 'react';
import { TextInput } from './components/TextInput/TextInput';
import { CharacterCounter } from './components/CharacterCounter/CharacterCounter';

function App() {
  const [text, setText] = useState('');

  return (
    <div className="max-w-xl mx-auto mt-10">
      <TextInput
        onTextChange={setText}
        placeholder="Type something..."
      />

      <CharacterCounter
        text={text}
        minWords={5}
        maxWords={100}
        targetReadingTime={1}
      />
    </div>
  );
}

export default App;
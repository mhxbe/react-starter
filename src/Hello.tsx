import * as React from 'react';

interface HelloProps {
  name: string;
}

var object = {
  dog: { name: 'Lilly' },
};

const Hello: React.FC<HelloProps> = ({ name }) => {
  return (
    <p>
      Hello {name} {object?.dog?.name}
    </p>
  );
};

export default Hello;

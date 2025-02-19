import { useState, useTransition } from "react";
const defaultList = [1, 2, 3, 4, 5];

const App = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState(defaultList);
  const [isPending, startTransition] = useTransition();
  const sizeOfList = 10000;

  const handleChange = (e: any) => {
    const { value } = e.target;
    setName(value);

    startTransition(() => {
      const data = [];
      for (let i = 0; i < sizeOfList; i++) {
        data[i] = value;
      }
      setList(data);
    });
  };

  return (
    <>
      <input type="text" value={name} onChange={handleChange} />
      {isPending ? (
        <div>Loading...</div>
      ) : (
        list.map((list) => {
          return <div>List Item: {list}</div>;
        })
      )}
    </>
  );
};

export default App;

import { useAtom } from 'jotai';
import atoms from '../../atoms';

const useToDoList = ({ scrollToIndex = () => {} }) => {
  const [items, setItems] = useAtom(atoms.items);

  const [completedItems, setCompletedItems] = useAtom(atoms.completedItems);

  const addItem = ({name, description}) => {
    let index = 0;

    setItems((s) => {
      const newItem = {
        name: name,
        description: description,
        done: false,
      };

      const oldState = [...s];

      oldState.push(newItem);

      index = oldState.length - 1;

      scrollToIndex({ index });

      return oldState;
    });
  };

  const completeItem = ({ item, index }) => {
    if (item.done) {
      setItems((s) => {
        const oldState = [...s];

        const itemToAdd = {
          ...item,
          done: false,
        };

        oldState.push(itemToAdd);

        return oldState;
      });

      setCompletedItems((s) => {
        const oldState = [...s];

        oldState.splice(index, 1);

        return oldState;
      });

      return;
    }

    setItems((s) => {
      const oldState = [...s];

      oldState.splice(index, 1);

      return oldState;
    });

    setCompletedItems((s) => {
      const oldState = [...s];

      const itemToAdd = {
        ...item,
        done: true,
      };

      oldState.push(itemToAdd);

      return oldState;
    });
  };

  const removeItem = ({ index }) => {
    setItems((s) => {
      const oldState = [...s];

      oldState.splice(index, 1);

      return oldState;
    });
  };

  const editItem = ({ index, newContent }) => {
    setItems((s) => {
      const oldState = [...s];

      oldState[index] = {
        ...oldState[index],
        ...newContent,
      };

      return oldState;
    });
  };

  return {
    items,
    completedItems,
    addItem,
    completeItem,
    removeItem,
    editItem,
  };
};

export default useToDoList;

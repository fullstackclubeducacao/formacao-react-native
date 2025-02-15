import { useAtom } from 'jotai';
import atoms from '../../atoms';
import asyncStorage, { keys } from '../../asyncStorage';

const useToDoList = ({ scrollToIndex = () => {} }) => {
  const [items, setItems] = useAtom(atoms.items);

  const [completedItems, setCompletedItems] = useAtom(atoms.completedItems);

  const saveItemsOnAsyncStorage = (data) => {
    asyncStorage.saveData({
      key: keys.items,
      value: data,
    });
  };

  const saveCompletedItemsOnAsyncStorage = (data) => {
    asyncStorage.saveData({
      key: keys.completedItems,
      value: data,
    });
  };

  const addItem = ({ name, description }) => {
    let index = 0;

    setItems((s) => {
      const newItem = {
        name: name,
        description: description,
        done: false,
      };

      const oldState = [...s];

      oldState.push(newItem);

      saveItemsOnAsyncStorage(oldState);

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

        saveItemsOnAsyncStorage(oldState);

        return oldState;
      });

      setCompletedItems((s) => {
        const oldState = [...s];

        oldState.splice(index, 1);

        saveCompletedItemsOnAsyncStorage(oldState);

        return oldState;
      });

      return;
    }

    setItems((s) => {
      const oldState = [...s];

      oldState.splice(index, 1);

      saveItemsOnAsyncStorage(oldState);

      return oldState;
    });

    setCompletedItems((s) => {
      const oldState = [...s];

      const itemToAdd = {
        ...item,
        done: true,
      };

      oldState.push(itemToAdd);

      saveCompletedItemsOnAsyncStorage(oldState);

      return oldState;
    });
  };

  const removeItem = ({ index }) => {
    setItems((s) => {
      const oldState = [...s];

      oldState.splice(index, 1);

      saveItemsOnAsyncStorage(oldState);

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

  const loadLocalData = async () => {
    const localItems = await asyncStorage.loadData({ key: keys.items });

    if (localItems) {
      setItems(localItems);
    }

    const localCompletedItems = await asyncStorage.loadData({ key: keys.completedItems });

    if (localCompletedItems) {
      setCompletedItems(localCompletedItems);
    }
  };

  return {
    items,
    completedItems,
    addItem,
    completeItem,
    removeItem,
    editItem,
    loadLocalData,
  };
};

export default useToDoList;

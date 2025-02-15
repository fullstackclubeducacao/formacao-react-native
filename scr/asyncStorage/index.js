import AsyncStorage from '@react-native-async-storage/async-storage';

export const keys = {
  items: 'items',
  completedItems: 'completedItems',
};

const saveData = async ({ key, value }) => {
  const jsonValue = JSON.stringify(value);

  let response = null;
  try {
    response = await AsyncStorage.setItem(key, jsonValue);
  } catch (err) {
    throw new Error(err);
  }

  return response;
};

const loadData = async ({ key }) => {
  try {
    const data = await AsyncStorage.getItem(key);

    const dataToReturn = data != null ? JSON.parse(data) : null;

    console.log('dataToReturn: ', dataToReturn);

    return dataToReturn;
  } catch (err) {
    console.error(`Failed to load data using key ${key} - ${err}`);
  }
};

const asyncStorage = {
  saveData,
  loadData,
};

export default asyncStorage;

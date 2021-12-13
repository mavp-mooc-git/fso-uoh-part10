import React/*, { useEffect }*/ from 'react';
import { StyleSheet, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#808080',
    alignItems: 'center',
    justifyContent: 'center',
  },
  picker:{
    borderColor: theme.colors.bgLight,
    height: 64,
    width: '70%',
    //color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.subheading,
    justifyContent: 'center',
  }
});

const PickerList = ({sortlist, setSortlist}) => {
  const onValueChange = (value, index) => {
    setSortlist({value, index});
  };
  
  return(
    <View style={styles.container}>
      <Picker
        style={styles.picker}
        mode="dropdown"   // dialog, dropdown
        selectedValue={sortlist.value}
        onValueChange={onValueChange}>
        <Picker.Item
          color='#808080'
          label="Select an item..."
          value=""
        />
        <Picker.Item
          label="Latest repositories"
          value="repo"
        />
        <Picker.Item
          label="Highest rated repositories"
          value="high"
        />
        <Picker.Item
          label="Lowest rated repositories"
          value="low"
        />
      </Picker>
    </View>
  );
};

export default PickerList;

import React from 'react';
import { Text, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const SprocketPicker = ({ onValueChange, items, style }) => {
  return (
    <View>
      <Text style={style.label}>Sprocket Size:</Text>
      <RNPickerSelect
        onValueChange={onValueChange}
        items={items}
        placeholder={{ label: "Select sprocket size...", value: undefined }}
      />
    </View>
  );
};

export default SprocketPicker;

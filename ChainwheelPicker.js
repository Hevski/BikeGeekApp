import React from 'react';
import { Text, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const ChainwheelPicker = ({ onValueChange, items, style }) => {
  return (
    <View>
      <Text style={style.label}>Chainwheel Size:</Text>
      <RNPickerSelect
        onValueChange={onValueChange}
        items={items}
        placeholder={{ label: "Select chainwheel size...", value: undefined }}
      />
    </View>
  );
};

export default ChainwheelPicker;

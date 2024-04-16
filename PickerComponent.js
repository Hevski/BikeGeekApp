import React from 'react';
import { Text, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const PickerComponent = ({ label, items, onValueChange, style }) => {
  return (
    <View style={style.container}>
      <Text style={style.label}>{label}</Text>
      <RNPickerSelect
        onValueChange={onValueChange}
        items={items.map(item => ({ label: `${item} teeth`, value: item }))}
        placeholder={{ label: "Select...", value: undefined }}
      />
    </View>
  );
};

export default PickerComponent;

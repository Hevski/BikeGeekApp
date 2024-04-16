import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PickerComponent from './PickerComponent';

const gearData = {
  sprockets: Array.from({length: 47}, (_, i) => i + 9), // Sprockets from 9 to 55
  chainwheels: Array.from({length: 33}, (_, i) => i + 20) // Chainwheels from 20 to 52
};

const App = () => {
  const [selectedSprocket, setSelectedSprocket] = useState();
  const [selectedChainwheel, setSelectedChainwheel] = useState();
  const [gearRatio, setGearRatio] = useState('');

  useEffect(() => {
    // Check if both sprocket and chainwheel have been selected
    if (selectedSprocket && selectedChainwheel) {
      const ratio = (selectedChainwheel / selectedSprocket).toFixed(2);
      setGearRatio(`Gear Ratio: ${ratio}`);
    } else {
      setGearRatio(''); // Clear the gear ratio if one of the values is missing
    }
  }, [selectedSprocket, selectedChainwheel]); // Depend on both selected sprocket and chainwheel

  const handleSprocketChange = (sprocket) => {
    setSelectedSprocket(sprocket);
  };

  const handleChainwheelChange = (chainwheel) => {
    setSelectedChainwheel(chainwheel);
  };

  return (
    <View style={styles.container}>
      <PickerComponent
        label="Select Sprocket Size:"
        items={gearData.sprockets}
        onValueChange={handleSprocketChange}
        style={styles}
      />
      <PickerComponent
        label="Select Chainwheel Size:"
        items={gearData.chainwheels}
        onValueChange={handleChainwheelChange}
        style={styles}
      />
      {gearRatio && (
        <Text style={styles.resultText}>{gearRatio}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 20
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    marginTop: 10,
    fontWeight: 'bold'
  },
  resultText: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center'
  }
});

export default App;

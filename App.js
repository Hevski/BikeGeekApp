import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SprocketPicker from './SprocketPicker';
import ChainwheelPicker from './ChainwheelPicker';
import gearRatios from './gearRatios.json';

const App = () => {
  const [selectedSprocket, setSelectedSprocket] = useState(undefined);
  const [selectedChainwheel, setSelectedChainwheel] = useState(undefined);
  const [gearRatio, setGearRatio] = useState('');
  const [initialSelectionMade, setInitialSelectionMade] = useState(false);

  useEffect(() => {
    // Update the gear ratio anytime there's a valid sprocket and chainwheel after initial selections
    if (initialSelectionMade && selectedSprocket && selectedChainwheel) {
      updateGearRatio(selectedSprocket, selectedChainwheel);
    }
  }, [selectedSprocket, selectedChainwheel, initialSelectionMade]);

  const handleSprocketChange = (sprocket) => {
    setSelectedSprocket(sprocket);
    if (!initialSelectionMade) {
      setSelectedChainwheel(undefined); // Only reset chainwheel if initial selection hasn't been made
    }
  };

  const handleChainwheelChange = (chainwheel) => {
    setSelectedChainwheel(chainwheel);
    if (selectedSprocket && chainwheel) {
      if (!initialSelectionMade) {
        setInitialSelectionMade(true); // Mark that the initial manual selection has been made
      }
    }
  };

  const updateGearRatio = (sprocket, chainwheel) => {
    const sprocketData = gearRatios.find(item => item.sprocket_size === sprocket);
    if (sprocketData && chainwheel in sprocketData.ratios) {
      const ratio = sprocketData.ratios[chainwheel];
      setGearRatio(`Gear Ratio: ${ratio}`);
    } else {
      setGearRatio('');  // Clear the gear ratio if invalid selections are detected
    }
  };

  return (
    <View style={styles.container}>
      <SprocketPicker
        onValueChange={handleSprocketChange}
        items={gearRatios.map(item => ({
          label: `${item.sprocket_size} teeth`,
          value: item.sprocket_size
        }))}
        style={styles}
      />
      {selectedSprocket && (
        <ChainwheelPicker
          onValueChange={handleChainwheelChange}
          items={Object.keys(gearRatios.find(item => item.sprocket_size === selectedSprocket)?.ratios || {}).map(size => ({
            label: `${size} teeth`,
            value: size
          }))}
          style={styles}
        />
      )}
      {gearRatio && (
        <Text style={styles.resultText}>{gearRatio}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

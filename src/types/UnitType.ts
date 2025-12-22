const types = {
  Fahrenheit: 'fahrenheit',
  Celsius: 'celsius',
  Kelvin: 'kelvin',
  Miles: 'miles',
  Kilometers: 'kilometers',
} as const;

declare type UnitType = keyof typeof types;

export default UnitType;

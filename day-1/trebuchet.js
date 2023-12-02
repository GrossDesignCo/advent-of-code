// Sum the first and last digits in each line
// https://adventofcode.com/2023/day/1
// https://adventofcode.com/2023/day/1/input

// First half
const calibrate = (input) => {
  let sum = 0;
  for (const string of input) {
    const first = string.match(/\d/);
    const last = string.match(/(\d)(?!.*\d)/);
    const together = parseInt(`${first}${last}`);
    sum += together;
  }

  console.log(sum);
};

calibrate(calibrations);

// Second half
calibrateWithStrings = (input) => {
  const intMap = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  let sum = 0;

  for (const string of input) {
    let firstIndex = -1;
    let first = '';

    /**
     * Look for the first instance of one of the int values in the string
     * - The other forEach loops are just quick tweaks to cover string v int, and first v last
     */
    Object.keys(intMap).forEach((key) => {
      // Find each of the int values in the string
      const i = string.indexOf(key);

      // If found, and if it's closer to the start of the string than any other int values so far, save it
      if (i > -1 && (firstIndex === -1 || i <= firstIndex)) {
        // For the string versions of each value, get the real value from the map above
        first = intMap[key];

        // Save the new lowest index
        firstIndex = i;
      }
    });

    Object.values(intMap).forEach((value) => {
      const i = string.indexOf(value);
      if (i > -1 && (firstIndex === -1 || i <= firstIndex)) {
        first = value;
        firstIndex = i;
      }
    });

    let lastIndex = -1;
    let last = '';

    Object.keys(intMap).forEach((key) => {
      const i = string.lastIndexOf(key);
      if (i > -1 && (lastIndex === -1 || i > lastIndex)) {
        last = intMap[key];
        lastIndex = i;
      }
    });

    Object.values(intMap).forEach((value) => {
      const i = string.lastIndexOf(value);
      if (i > -1 && (lastIndex === -1 || i > lastIndex)) {
        last = value;
        lastIndex = i;
      }
    });

    const together = parseInt(`${first}${last}`);

    sum += together;
  }

  console.log(sum);
};

calibrateWithStrings(calibrations);

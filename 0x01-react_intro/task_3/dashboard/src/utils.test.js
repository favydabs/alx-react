import { getFooterCopy } from "./utils";
import { getFullYear } from "./utils";
import { getLatestNotification } from "./utils";


test('getFullYear returns the correct year', () => {
  // Get the current year
  const currentYear = new Date().getFullYear();

  // Call the getFullYear function
  const result = getFullYear();

  // Check if the result matches the current year
  expect(result).toBe(currentYear);
});


test('getFooterCopy returns correct value', () => {
  // Test when isIndex is true
  expect(getFooterCopy(true)).toBe('Holberton School');

  // Test when isIndex is false
  expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});


test('getLatestNotification returns the correct string', () => {
  // Define the expected notification string
  const expectedNotification = "New version of the app is available. Click here to update.";

  // Call the getLatestNotification function
  const result = getLatestNotification();

  // Check if the result matches the expected notification string
  expect(result).toBe(expectedNotification);
});

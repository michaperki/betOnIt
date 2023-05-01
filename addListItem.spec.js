import { addListItem } from './addListItem.js';

// lets write a test for the addListItem function
// create a function to test the addListItem function
describe('addListItem', function () {
    // create a test to check that the addListItem function exists
    it('should exist', function () {
        // expect the addListItem function to exist
        expect(addListItem).toBeDefined();
    });
    // create a test to check that the addListItem function is a function
    it('should be a function', function () {
        // expect the addListItem function to be a function
        expect(typeof addListItem).toBe('function');
    });
});
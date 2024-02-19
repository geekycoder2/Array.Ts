// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.


// Step 1: Create the showMagicians function
function showMagicians(...magicians: string[]): void {
    // Step 2: Use forEach to iterate through the array and print each magician's name
    magicians.forEach((magician) => {
      console.log(magician);
    });
  }
  
  // Step 3: Call the showMagicians function with the magician names
  showMagicians("Harry Houdini", "David Copperfield", "Penn Jillette", "Teller");
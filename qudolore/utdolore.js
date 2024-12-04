function customPromiseFunction() {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation
    setTimeout(() => {
      const result = { key: 'value' }; // Example resolved value
      resolve(result);
    }, 1000);
  });
}

// Using the custom Promise function
customPromiseFunction()
  .then(opt => {
    // Perform operations with the resolved value 'opt'
    console.log(opt); // Output: { key: 'value' }
    // Add more code here to work with 'opt'
  })
  .catch(error => {
    // Handle any errors
    console.error('Error:', error);
  });

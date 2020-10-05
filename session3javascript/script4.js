console.log('Before defining');
Object.defineProperty(window,'TEST_GST',{value:35, writable:false});
console.log('After defining');
console.log(window.TEST_GST);

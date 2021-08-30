// so.js


function recursion() {
     recursion(); 
}

recursion();




// Parameters and local variables are allocated on the stack 
// (with reference types, the object lives on the heap and a 
// variable in the stack references that object on the heap). 
// The stack typically lives at the upper end of your address 
// space and as it is used up it heads towards the bottom of 
// the address space (i.e. towards zero).

// Your process also has a heap, which lives at the bottom end of 
// your process. As you allocate memory, this heap can grow towards 
// the upper end of your address space. As you can see, there is a potential 
// for the heap to "collide" with the stack (a bit like tectonic plates!!!).

// The common cause for a stack overflow is a bad recursive call. Typically, 
// this is caused when your recursive functions doesn't have the correct termination 
// condition, so it ends up calling itself forever. Or when the termination condition 
// is fine, it can be caused by requiring too many recursive calls before fulfilling it.
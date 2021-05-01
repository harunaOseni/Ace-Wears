import Commerce from "@chec/commerce.js"; 

export const commerce = new Commerce(process.env.REACT_APP_CHEC_PUBLIC_KEY, true);
//A commerce.js store has been created and exported for used in 
//every part of our app!
 
const addToDb = (id, breakTime) => {
    console.log(id);
    let selectedActivityCart ;
    // get the shopping cart
    const storedCart = localStorage.getItem('selectedBreakTime');
    if (storedCart) {
        selectedActivityCart= JSON.parse(storedCart);
    }
    else {
        selectedActivityCart= {};
    }


    const breakingTime =selectedActivityCart[breakTime];
    if (breakingTime) {
        // console.log('Already Exists');
        
        selectedActivityCart[breakTime] = breakingTime;

        // localStorage.setItem(id,newQuantity );
    }
    else {
        selectedActivityCart[breakTime] = breakTime;
        // console.log('New Item');

        // localStorage.setItem(id, 1);
    }
    localStorage.setItem('selectedBreakTime', JSON.stringify(selectedActivityCart));
    
}
 
export   { addToDb }
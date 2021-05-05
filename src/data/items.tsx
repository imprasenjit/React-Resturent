const items = [
    {
        id:0,
        name: 'Chiken burger',
        ingredients: 'Chiken Burger',
        price: '10.00',
        product_img: './images/food1.png',
        qty:0
    },
    {
        id: 1,
        name: 'Veg burger',
        ingredients: 'Veg Burger',
        price: '10.00',
        product_img:'./images/food2.png',
        qty:0
    },
    {
        id: 2,
        name: 'Chiken Roll',
        ingredients: 'Chiken Roll',
        price: '10.00',
        product_img:'./images/food3.png',
        qty:0
    },
    {
        id: 3,
        name: 'Veg Roll',
        ingredients: 'Veg Roll',
        price: '10.00',
        product_img:'./images/food4.png',
        qty:0
    },
    {
        id: 4,
        name: 'burger',
        ingredients: 'Chiken Burger',
        price: '10.00',
        product_img:'./images/food5.png',
        qty:0
    }
];
function getItem(product_id: number) {
    
    return items.find((val) => {
        if (val.id === product_id) {
            // console.log(product_id+'|'+val.name)
            return val;
        } else {
            return null
        }
    })
}
export {items,getItem};
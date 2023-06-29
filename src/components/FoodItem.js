
const FoodItem=(props)=>{
    const {items} =props; 
    console.log(items);
    const {description, name}= items?.card?.info;
    return(
        <div className=" h-20 p-3 m-3 bg-slate-400">
            <h1>This is cart</h1>
            <p>{description}</p>
            <p>{name}</p>

        </div>
    );
};
export default FoodItem;
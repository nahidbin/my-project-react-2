import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": "$30 per month",
            "features": [
                "Access to gym facilities",
                "Unlimited use of cardio equipment",
                "Free weights area access",
                "Locker room access",
                "10% off on personal training sessions"
            ]
        },
        {
            "id": 2,
            "name": "Silver Membership",
            "price": "$50 per month",
            "features": [
                "All features of Basic Membership",
                "Access to group fitness classes",
                "Sauna and steam room access",
                "Monthly body composition analysis",
                "15% off on personal training sessions"
            ]
        },
        {
            "id": 3,
            "name": "Gold Membership",
            "price": "$80 per month",
            "features": [
                "All features of Silver Membership",
                "24/7 gym access",
                "Priority booking for fitness classes",
                "Personalized workout plan",
                "20% off on personal training sessions"
            ]
        }
    ];
    
    
    return (
        <div className="m-12">
            <h2 className="text-5xl">Best Prices in the town</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
          </div>
        </div>
    );
};

export default PriceOptions;
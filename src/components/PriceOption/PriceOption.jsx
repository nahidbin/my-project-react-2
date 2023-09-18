import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    const {name,price,features} = option;
    return (
        <div className='bg-pink-700 rounded-lg p-4 flex flex-col  text-white mt-4'>
            <h2 className='text-center'>
            <span className='text-7xl font-extrabold'>{price}
            </span>
            <span className='text-3xl'>/mon</span>
            </h2>
            <h4 className='text-4xl text-center my-8'>{name}</h4>

            <div className='pl-4 flex-grow'>
            {
                features.map((feature, index)=> <Feature key={index} feature={feature}></Feature> )
            }
            </div>
            <button className='mt-12 bg-blue-700 w-full rounded-lg h-8 font-bold hover:bg-blue-900'> Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;
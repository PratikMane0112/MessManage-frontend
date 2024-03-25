import React from 'react';

const Ad = ({ imageUrl, title, description, time, address }) => {
    return (
        <div className="bg-gradient-to-r from-red-100 to-red-200 shadow-lg p-4 rounded-md mx-2 my-4 flex flex-col md:flex-row items-center">
            <div className="md:mr-4 mb-4 md:mb-0">
                <img src={imageUrl} alt="Ice Cream" className="w-48 h-auto rounded-md" />
            </div>
            <div >
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-red-500 mb-2">{title}</h2>                    
                <p className="text-lg text-black mb-2">{description}</p> 
                <p className="text-lg text-black mb-2">{time}</p> 
                <p className="text-lg text-black mb-2">{address}</p> 
                <button className="bg-white text-red-500 hover:bg-red-400 font-bold py-2 px-4 rounded-full mt-4 md:mt-6">
                    Visit Us Today!
                </button>
            </div>
        </div>
    );
};

const AdvertisementLine = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center">
            <Ad
                imageUrl="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/ice-cream-design-template-e1ed7201f997c0e351f8a996442dea37_screen.jpg?ts=1659011989"
                title="Amul Ice Creams"
                description="Ice creams made from the finest ingredients "
                time="9:00 AM to 10:00 PM."
                address="Chintamani nagar, katraj, pune."
            />
            <Ad
                imageUrl="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/healthy-vegetables-limited-offer-ads-design-template-f9cded95773a24c09de0a4a658b1756c_screen.jpg?ts=1697479397"
                title="SadGuru Store"
                description="Discover a variety of leafy vegetables "
                time="9:00 AM to 10:00 PM."
                address="Sukhsagar nagar, katraj, pune."
            />
        </div>
    );
};

export default AdvertisementLine;






















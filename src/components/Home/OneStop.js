import React from 'react';
import {Link} from 'react-router-dom';

//Images
import Icon9 from './../../assets/images/icons/icon9.svg';
import Icon10 from './../../assets/images/icons/icon10.svg';
import Icon11 from './../../assets/images/icons/icon11.svg';
import Icon12 from './../../assets/images/icons/icon12.svg';
import Icon13 from './../../assets/images/icons/icon13.svg';
import pic1 from './../../assets/images/about/pic1.jpg';
import support1 from './../../assets/images/icons/support1.png';
import logoo from './../../assets/images/logoo.png';

const cardData = [
    {image: Icon9, title:'Competitive Pricing', desc:"Buy fractional ownership in properties across America for just $50 and start earling rent daily."},
    {image: Icon10, title:'Support',desc:"Choose wisely, and use your rental income to buy more real estate and voilà – you’re on the path to financial freedom."},
    {image: Icon11, title:'Fast and Easy KYC',desc:"Once you create your account and verify your email address, you will be prompted to fill in some information about yourself, otherwise known as KYC (Know Your Customer)."},
    {image: Icon12, title:'Security',desc:"Forget expensive brokers and lock-in periods. Easily reinvest your rental income for the long term, or list your holdings for sale, whenever you like."},
    {image: Icon13, title:'Fast Transactions',desc:"You’ll get your first partial rent payment that same day, and daily after that. Your holdings will grow along with the property value, too."},
];

function OneStop(){
    return(
        <>
            {cardData.map((item, ind)=>(
                <div className="col-xl-4 col-md-6 m-b60" key={ind}>
                    <div className="icon-bx-wraper style-3 text-center">
                        <div className="icon-media">
                            <img src={item.image} alt="" />
                        </div>
                        <div className="icon-content">
                            <h4 className="title">{item.title}</h4>
                            <p className="m-b0">{item.desc}</p>
                        </div>
                    </div>
                </div>
            ))}
            <div className="col-xl-4 col-md-6 m-b60">
                <div className="icon-bx-wraper style-4" style={{backgroundImage: "url("+ pic1 + ")"}}>
                    <div className="inner-content">
                        <div className="icon-media m-b30">
                            <img src={logoo} alt="" />
                        </div>
                        <div className="icon-content">
                            <Link to={"/contact-us"} className="btn btn-primary">Call Us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default OneStop;
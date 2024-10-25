import { useEffect, useState } from 'react';
import "./promotionPage.scss";
import { useParams } from 'react-router-dom';
import ListDataPromo from "../../listdata/Promotion";

function PromotionPage() {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const foundItem = ListDataPromo.find(item => item.id === parseInt(id));
        setItem(foundItem);
        setLoading(false);
    }, [id]);

    const formatUrl = (url) => {
        if (!/^https?:\/\//i.test(url)) {
            return `http://${url}`;
        }
        return url;
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!item) {
        return <div>Promotion not found.</div>;
    }

    return (
        <section className="promotion-page">
            <div className="image-container">
                <img src={item.image} alt={item.title} />
            </div>
            <div className="details-container">
                <p>For <span>{item.heading}</span></p>
                <div className="container">
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <span>Start: <b>{item.dateStart}</b> <br /> Ends: <b>{item.dateEnd}</b></span>
                    <div className="more-info">
                        <h3>For more information</h3>
                        {item.forMoreInfo.map(info => (
                            <div className="mi-container">
                                <span>Name: <b>{info.name} ({info.role})</b></span>
                                <div className="contacts">
                                    <span>{info.whatsApp && info.whatsApp}</span> /
                                    <span>{info.email && info.email}</span>
                                </div>
                            </div>
                        ))}
                        {Infinity.url !== '' && 
                            <div className="mi-links">
                            <b>Or press <a href={formatUrl(item.url)} target="_blank" rel="noopener noreferrer">HERE</a> to visit their website.</b>
                    </div>}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PromotionPage;

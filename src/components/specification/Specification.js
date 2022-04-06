import React from 'react';
import "./Specification.css";

const Specification = ({title, titleSpec, description, descriptionSpec, numbOfSubscribers, numbOfSubscribersSpec}) => {
    return (
            <section className="specification">
                <h2>{title}</h2>
                <p>{titleSpec}</p>

                <h2>{description}</h2>
                <p>{descriptionSpec}</p>

                <h2>{numbOfSubscribers}</h2>
                <p>{numbOfSubscribersSpec}</p>
            </section>
    );
};

export default Specification;
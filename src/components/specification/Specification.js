import React from 'react';

const Specification = ({title, titleSpec, description, descriptionSpec, numbOfSubscribers, numbOfSubscribersSpec}) => {
    return (
        <div className="outer-container-specification">
            <article className="inner-container-specification">
                <h2>{title}</h2>
                <p>{titleSpec}</p>

                <h2>{description}</h2>
                <p>{descriptionSpec}</p>

                <h2>{numbOfSubscribers}</h2>
                <p>{numbOfSubscribersSpec}</p>
            </article>
        </div>
    );
};

export default Specification;
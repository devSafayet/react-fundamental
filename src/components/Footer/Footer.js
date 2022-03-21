import React from 'react';

const Footer = () => {

    const footerStyle = {
        backgroundColor: "#e67e22",
        color: "#fff",
        padding: "15px 0"
    }

    return (
        <div className="mt-5" style={footerStyle}>
            <p className="text-center fs-6 fw-bold">Designed with loved<span className="text-success"> &copy; mrishafayet003@gmail.com!</span> </p>
        </div>

    );
};

export default Footer;
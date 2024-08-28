import React from 'react';
import './footer.css'; 

const Footer: React.FC = () => {
    return (
        <footer className="footer-section">
            <div className="footer-content">
                <div className="footer-links">
                    <a href="#">About Us</a>
                    <a href="#">Contact</a>
                    <a href="#">Privacy Policy</a>
                </div>
                <div className="footer-social">
                    <a href="#">Facebook</a>
                    <a href="#">Twitter</a>
                    <a href="#">Instagram</a>
                </div>
                <div className="footer-info">
                    <p>&copy; 2024 Your Company. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

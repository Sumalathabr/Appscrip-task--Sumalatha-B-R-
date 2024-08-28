'use client'
import React, { useState, useEffect } from 'react';
import './products.css';

interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
}


type DropdownSection = 'ideal' | 'occasion' | 'work' | 'fabric' | 'segment';

const Products: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [showFilters, setShowFilters] = useState<boolean>(false);
    const [showRecommendedDropdown, setShowRecommendedDropdown] = useState<boolean>(false);
    const [selectedCustomizable, setSelectedCustomizable] = useState<string>('Select Customizable');
    const [sortOption, setSortOption] = useState<string>('Sort By');
    const [showDropdowns, setShowDropdowns] = useState<Record<DropdownSection, boolean>>({
        ideal: false,
        occasion: false,
        work: false,
        fabric: false,
        segment: false
    });

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const handleFilterToggle = () => {
        setShowFilters(!showFilters);
    };

    const handleRecommendedToggle = () => {
        setShowRecommendedDropdown(!showRecommendedDropdown);
    };

    const handleSortOptionChange = (option: string) => {
        setSortOption(option);
        setShowRecommendedDropdown(false);

        let sortedProducts = [...products];
        switch (option) {
            case 'Newest First':
                sortedProducts.sort((a, b) => b.id - a.id); 
                break;
            case 'Popular':
                break;
            case 'Price (Low to High)':
                sortedProducts.sort((a, b) => a.price - b.price);
                break;
            case 'Price (High to Low)':
                sortedProducts.sort((a, b) => b.price - a.price);
                break;
            default:
                break;
        }
        setProducts(sortedProducts);
    };

    const toggleDropdown = (section: DropdownSection) => {
        setShowDropdowns(prevState => ({
            ...prevState,
            [section]: !prevState[section] 
        }));
    };

    return (
        <div className="products-page">
            {}
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Discover Our Products</h1>
                    <p>Explore our wide range of products designed to meet your needs. From stylish apparel to essential accessories, find what you're looking for today!</p>
                    <button className="cta-button">Shop Now</button>
                </div>
            </section>

            {}
            <div className="header-section">
                <button className="header-item show-filters-btn" onClick={handleFilterToggle}>
                    {showFilters ? 'Hide Filters' : 'Show Filters'}
                </button>
                <button className="header-item recommended" onClick={handleRecommendedToggle}>
                    {sortOption}
                </button>
                {}
                <div className={`recommended-dropdown ${showRecommendedDropdown ? 'active' : ''}`}>
                    <ul>
                        <li onClick={() => handleSortOptionChange('Newest First')}>Newest First</li>
                        <li onClick={() => handleSortOptionChange('Popular')}>Popular</li>
                        <li onClick={() => handleSortOptionChange('Price (Low to High)')}>Price (Low to High)</li>
                        <li onClick={() => handleSortOptionChange('Price (High to Low)')}>Price (High to Low)</li>
                    </ul>
                </div>
            </div>

            {}
            <div className="main-content">
                {}
                {showFilters && (
                    <div className="customizable-sidebar">
                        <div className="dropdown-header" onClick={() => toggleDropdown('ideal')}>
                            <h3>Ideal for</h3>
                            <div className={`arrow ${showDropdowns.ideal ? 'up' : ''}`}></div>
                        </div>
                        <div className={`dropdown-content ${showDropdowns.ideal ? 'active' : ''}`}>
                            <input type="checkbox" id="men" name="ideal" />
                            <label htmlFor="men">Men</label>
                            <input type="checkbox" id="women" name="ideal" />
                            <label htmlFor="women">Women</label>
                            <input type="checkbox" id="baby-kids" name="ideal" />
                            <label htmlFor="baby-kids">Baby & Kids</label>
                        </div>

                        <div className="dropdown-header" onClick={() => toggleDropdown('occasion')}>
                            <h3>Occasion</h3>
                            <div className={`arrow ${showDropdowns.occasion ? 'up' : ''}`}></div>
                        </div>
                        <div className={`dropdown-content ${showDropdowns.occasion ? 'active' : ''}`}>
                            <input type="checkbox" id="all-occasion" name="occasion" />
                            <label htmlFor="all-occasion">All</label>
                        </div>

                        <div className="dropdown-header" onClick={() => toggleDropdown('work')}>
                            <h3>Work</h3>
                            <div className={`arrow ${showDropdowns.work ? 'up' : ''}`}></div>
                        </div>
                        <div className={`dropdown-content ${showDropdowns.work ? 'active' : ''}`}>
                            <input type="checkbox" id="all-work" name="work" />
                            <label htmlFor="all-work">All</label>
                        </div>

                        <div className="dropdown-header" onClick={() => toggleDropdown('fabric')}>
                            <h3>Fabric</h3>
                            <div className={`arrow ${showDropdowns.fabric ? 'up' : ''}`}></div>
                        </div>
                        <div className={`dropdown-content ${showDropdowns.fabric ? 'active' : ''}`}>
                            {}
                        </div>

                        <div className="dropdown-header" onClick={() => toggleDropdown('segment')}>
                            <h3>Segment</h3>
                            <div className={`arrow ${showDropdowns.segment ? 'up' : ''}`}></div>
                        </div>
                        <div className={`dropdown-content ${showDropdowns.segment ? 'active' : ''}`}>
                            {}
                        </div>
                    </div>
                )}

                <div className={`products-list ${showFilters ? 'with-sidebar' : ''}`}>
                    {products.length > 0 ? (
                        products.map(product => (
                            <div key={product.id} className="product-card">
                                <img src={product.image} alt={product.title} className="product-image" />
                                <h3 className="product-title">{product.title}</h3>
                                <p className="product-price">${product.price}</p>
                            </div>
                        ))
                    ) : (
                        <p>No products available</p>
                    )}
                </div>
            </div>

            {/* Dropdown for smaller screens */}
            <div className={`dropdown-filters ${showFilters ? 'active' : ''}`}>
                <div className="customizable-dropdown">
                    <label htmlFor="customizable">Customizable:</label>
                    <select
                        id="customizable"
                        value={selectedCustomizable}
                        onChange={(e) => setSelectedCustomizable(e.target.value)}
                    >
                        <option value="Select Customizable" disabled>Select Customizable</option>
                        <option value="Ideal for">Ideal for</option>
                        <option value="Occasion">Occasion</option>
                        <option value="Work">Work</option>
                        <option value="Fabric">Fabric</option>
                        <option value="Segment">Segment</option>
                        <option value="Suitable for">Suitable for</option>
                    </select>
                </div>
                <button className="header-item recommended" onClick={handleRecommendedToggle}>
                    {sortOption}
                </button>
            </div>
        </div>
    );
};

export default Products;

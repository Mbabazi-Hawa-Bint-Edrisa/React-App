import React from 'react';


class Gallery extends React.Component {
    render() {
        return (
            <div className="Gallery">
                <h1>Image Gallery</h1>
                <div className="image-container">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdHtqioLW3qAdaZCALAUcebNjUHLGPovCJ4A&s" alt="Apartment view" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1dzAY9vxSYgd7Zz6Aji9j2-LaG3-BF5iw5w&s" alt="Student portrait" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSicyqxwmE_Y5pzB2u7gHbDVdTdgfRuaSy3iw&s" alt="Beautiful view" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI2RLOBO8DYvk8aAUNEs6DJzCJzlgHT7HfAg&s" alt="Classroom background" />
                </div>
            </div>
        );
    }
}

export default Gallery;

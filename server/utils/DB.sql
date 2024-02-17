-- Reviews table

CREATE TABLE reviews (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    restaurant_id BIGSERIAL NOT NULL,
    username VARCHAR(255) NOT NULL,
    review TEXT NOT NULL,
    rating INTEGER NOT NULL CHECK (rating>=1 AND rating<=5),
    FOREIGN KEY (restaurant_id) REFERENCES restaurants (id)
);

INSERT INTO reviews (restaurant_id, username, review, rating) VALUES
(22, 'JohnDoe123', 'Great food and atmosphere!', 5),
(22, 'JaneSmith456', 'The service was excellent, but the food was mediocre.', 3),
(23, 'FoodieFan', 'Authentic Japanese cuisine!', 4),
(24, 'FrenchFoodLover', 'Delicious pastries and bread!', 5),
(25, 'SushiMaster', 'Best sushi in town!', 5),
(26, 'SpiceLover22', 'Amazing flavors and spices!', 4),
(22, 'SeafoodFanatic', 'Fresh seafood dishes!', 5),
(23, 'VeggieEater', 'Great vegetarian options!', 4),
(24, 'SteakConnoisseur', 'Juicy steaks cooked to perfection!', 5),
(25, 'SweetTooth', 'Decadent desserts!', 5),
(26, 'TacoLover', 'The tacos were amazing!', 4),
(27, 'PizzaFan', 'Delicious pizza, but the service was slow.', 3),
(28, 'BurgerEnthusiast', 'Best burgers in town!', 5),
(29, 'WineConnoisseur', 'Extensive wine selection!', 4),
(30, 'CoffeeAddict', 'Great coffee and ambiance!', 5),
(31, 'HealthyEater', 'Fresh salads and smoothies!', 4);

SELECT * FROM reviews WHERE restaurant_id = 22;

-- Restaurants table

INSERT INTO restaurants (name, location, price) VALUES
('The Golden Spoon', 'New York City, NY', floor(random() * 5) + 1),
('Bella Italia', 'Los Angeles, CA', floor(random() * 5) + 1),
('Tokyo Sushi House', 'London, UK', floor(random() * 5) + 1),
('La Petite Boulangerie', 'Paris, France', floor(random() * 5) + 1),
('The Rustic Tavern', 'Tokyo, Japan', floor(random() * 5) + 1),
('Spice Garden', 'Sydney, Australia', floor(random() * 5) + 1),
('Ocean Blue Grill', 'Rome, Italy', floor(random() * 5) + 1),
('Green Leaf Cafe', 'Vancouver, Canada', floor(random() * 5) + 1),
('Fire & Ice Steakhouse', 'Barcelona, Spain', floor(random() * 5) + 1),
('Mango Tango Thai Cuisine', 'Dubai, UAE', floor(random() * 5) + 1);

SELECT * FROM restaurants;
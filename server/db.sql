CREATE TABLE customers(
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL

);

CREATE TABLE feedbacks(
    id BIGSERIAL PRIMARY KEY,
    content TEXT NOT NULL,
    customer_id INT NOT NULL,
    CONSTRAINT fk_customer FOREIGN KEY(customer_id) REFERENCES customers(id)
);



INSERT INTO customers (name) values('ahmed');
INSERT INTO customers (name) values('nazih');
INSERT INTO customers (name) values('zainab');

INSERT INTO feedbacks (content,customer_id) values('This app is so Amazing OMG!!',1);
INSERT INTO feedbacks (content,customer_id) values('This app need some features',1);

INSERT INTO feedbacks (content,customer_id) values('The app crashes alot',2);

INSERT INTO feedbacks (content,customer_id) values('The app have some bugs',3);

SELECT * FROM customers;

-- "customers_pkey"
create database if not exists startersql;
use startersql;

create table users (
    id int auto_increment primary key,
    name varchar(100) not null,
    email varchar(100)  unique not null,
    gender enum('male', 'female', 'other'),
    date_of_birth date,
    created_at timestamp default current_timestamp
);




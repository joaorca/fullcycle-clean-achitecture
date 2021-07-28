DROP TABLE IF EXISTS parking_lot;
CREATE TABLE parking_lot
(
    code       VARCHAR,
    capacity   INTEGER,
    open_hour  INTEGER,
    close_hour INTEGER
);

DROP TABLE IF EXISTS parked_car;
CREATE TABLE parked_car
(
    code       VARCHAR,
    plate      VARCHAR,
    enter_date TIMESTAMP,
    leave_date TIMESTAMP
);
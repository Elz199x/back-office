CREATE TABLE `DBZ3865` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `f1` FLOAT DEFAULT 5.6,
  `f2` FLOAT(10, 2) DEFAULT NULL,
  `f3` FLOAT(35, 5) DEFAULT NULL,
  `f4_23` FLOAT(23) DEFAULT NULL,
  `f4_24` FLOAT(24) DEFAULT NULL,
  `f4_25` FLOAT(25) DEFAULT NULL,
  `weight` FLOAT UNSIGNED DEFAULT '0',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4;
INSERT INTO DBZ3865(f1, f2, f3, f4_23, f4_24, f4_25, weight) VALUE (5.6, 5.61, 30.123456, 64.1, 64.1, 64.1, 64.1234);
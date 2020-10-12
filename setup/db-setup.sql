DROP TABLE IF EXISTS `colours`;
CREATE TABLE `colours` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `slug` varchar(64) NOT NULL,
  `name` varchar(256) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `colours` (`id`, `slug`, `name`) VALUES
(1,	'black',	'Black'),
(2,	'white',	'White'),
(3,	'tabby',	'Tabby'),
(4,	'ginger',	'Ginger'),
(5,	'grey',	'Grey');

DROP TABLE IF EXISTS `favourite_food`;
CREATE TABLE `favourite_food` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `slug` varchar(64) CHARACTER SET latin1 NOT NULL,
  `name` varchar(256) CHARACTER SET latin1 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `favourite_food` (`id`, `slug`, `name`) VALUES
(1,	'catnip',	'Catnip'),
(2,	'fish',	'Fish'),
(3,	'icecream',	'Ice Cream'),
(4,	'bread',	'Bread'),
(5,	'doughnuts',	'Doughnuts');

DROP TABLE IF EXISTS `cats`;
CREATE TABLE `cats` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(256) NOT NULL,
  `colour_id` int(11) NOT NULL,
  `favourite_food_id` tinyint(4) NOT NULL,
  `owner_id` int(11) NOT NULL,
  `on_holiday_at_owner_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `cats` (`id`, `name`, `colour_id`, `favourite_food_id`, `owner_id`, `on_holiday_at_owner_id`) VALUES
(3,	'Pusheen',	5,	5,	2,	NULL),
(4,	'Meowingtons',	1,	2,	3,	2),
(5,	'Tofu',	4,	4,	4,	2),
(6,	'Pipistrelle',	3,	4,	5,	2);

DROP TABLE IF EXISTS `owners`;
CREATE TABLE `owners` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(256) CHARACTER SET latin1 NOT NULL,
  `email` varchar(256) CHARACTER SET latin1 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `owners` (`id`, `name`, `email`) VALUES
(2,	'Claire Belton',	'dirk@exanple.com'),
(3,	'Chris Vogt',	'chris@example.com'),
(4,	'Dylan Jones',	'andrew@example.com'),
(5,	'No owner',	'noone@example.com');

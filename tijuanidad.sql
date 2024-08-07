

CREATE TABLE `contacts` (
  `id` int(11) NOT NULL,
  `fullname` varchar(125) DEFAULT NULL,
  `company` varchar(125) DEFAULT NULL,
  `email` varchar(175) DEFAULT NULL,
  `telephone` varchar(90) DEFAULT NULL,
  `city` varchar(90) DEFAULT NULL,
  `source` varchar(90) DEFAULT NULL,
  `access_level` varchar(35) DEFAULT NULL,
  `newsletter` varchar(3) DEFAULT NULL,
  `active` int(11) DEFAULT 1,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE `reservations` (
  `id` int(11) NOT NULL,
  `contact_id` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `product` varchar(25) NOT NULL,
  `description` varchar(185) DEFAULT NULL,
  `address` varchar(195) DEFAULT NULL,
  `city` varchar(95) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `time` varchar(6) DEFAULT NULL,
  `meridian` varchar(2) DEFAULT NULL,
  `adults` int(4) DEFAULT NULL,
  `children` int(4) DEFAULT NULL,
  `price` decimal(6,2) DEFAULT 0.00,
  `notes` text DEFAULT NULL,
  `accepted` int(11) DEFAULT 0,
  `accepted_at` datetime DEFAULT NULL,
  `completed` int(11) DEFAULT 0,
  `completed_at` datetime DEFAULT NULL,
  `status` varchar(12) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE `sales` (
  `id` int(11) NOT NULL,
  `contact_id` int(11) NOT NULL,
  `product` varchar(25) NOT NULL,
  `items` int(11) DEFAULT NULL,
  `total` decimal(6,2) DEFAULT 0.00,
  `notes` text DEFAULT NULL,
  `accepted` int(11) DEFAULT 0,
  `accepted_at` datetime DEFAULT NULL,
  `completed` int(11) DEFAULT 0,
  `completed_at` datetime DEFAULT NULL,
  `status` varchar(12) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE `sales_details` (
  `id` int(11) NOT NULL,
  `sale_id` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `product` varchar(25) NOT NULL,
  `quatity` int(11) DEFAULT NULL,
  `price` decimal(6,2) DEFAULT 0.00,
  `description` text DEFAULT NULL,
  `accepted` int(11) DEFAULT 0,
  `accepted_at` datetime DEFAULT NULL,
  `completed` int(11) DEFAULT 0,
  `completed_at` datetime DEFAULT NULL,
  `status` varchar(12) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE `sessions` (
  `user_id` int(11) NOT NULL,
  `token` varchar(125) DEFAULT NULL,
  `time` int(11) NOT NULL,
  `active` int(11) DEFAULT 1,
  `created_at` datetime DEFAULT current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE `tours` (
  `id` int(11) NOT NULL,
  `product` varchar(35) NOT NULL,
  `name` varchar(125) NOT NULL,
  `description` text DEFAULT NULL,
  `hours` int(11) DEFAULT NULL,
  `minutes` int(11) DEFAULT NULL,
  `price_mxn` decimal(6,2) DEFAULT NULL,
  `price_usd` decimal(6,2) DEFAULT NULL,
  `status` int(11) DEFAULT 1,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE `tour_schedules` (
  `id` int(11) NOT NULL,
  `tour_id` int(11) NOT NULL,
  `day_of_week` int(11) UNSIGNED NOT NULL,
  `day_name` varchar(35) NOT NULL,
  `open_time` time NOT NULL,
  `close_time` time NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `fullname` varchar(125) DEFAULT NULL,
  `email` varchar(155) DEFAULT NULL,
  `telephone` varchar(22) DEFAULT NULL,
  `password` varchar(90) DEFAULT NULL,
  `city` varchar(85) DEFAULT NULL,
  `access_level` varchar(35) DEFAULT NULL,
  `active` int(11) DEFAULT 1,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;


ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `reservations`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `sales`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `sales_details`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `tours`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `tour_schedules`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `contacts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `reservations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `sales`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `sales_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `tours`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `tour_schedules`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;


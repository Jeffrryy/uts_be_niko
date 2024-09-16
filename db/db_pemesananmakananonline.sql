-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 16, 2024 at 01:39 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_pemesananmakananonline`
--

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `id` int(11) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `alamat` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`id`, `nama`, `email`, `password`, `alamat`, `createdAt`, `updatedAt`) VALUES
(1, 'John Doe', 'john@gmail.com', '$2b$10$Tx2.CRFQEgNLlVRG7o1bEOOo2N1Hw83PGVHtO31QKE7LUTbkauOCG', 'Jl. Imam Bonjol', '2024-09-16 11:31:27', '2024-09-16 11:31:27'),
(2, 'adam', 'adam@gmail.com', '$2b$10$nr4qTaywchZguIQoqf/0ueTHeqkLDey1fIouqu8mDo13m3cyF9Rcy', 'jl benda baru', '2024-09-16 11:31:28', '2024-09-16 11:31:28');

-- --------------------------------------------------------

--
-- Table structure for table `fooditem`
--

CREATE TABLE `fooditem` (
  `id` int(11) NOT NULL,
  `itemName` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fooditem`
--

INSERT INTO `fooditem` (`id`, `itemName`, `price`, `createdAt`, `updatedAt`) VALUES
(1, 'Nasi Goreng', 'Rp20.000', '2024-09-16 11:31:28', '2024-09-16 11:31:28'),
(2, 'Pempek', 'Rp10.000', '2024-09-16 11:31:28', '2024-09-16 11:31:28');

-- --------------------------------------------------------

--
-- Table structure for table `listmenus`
--

CREATE TABLE `listmenus` (
  `id` int(11) NOT NULL,
  `details` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `foodItemId` int(11) DEFAULT NULL,
  `customerId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `listmenus`
--

INSERT INTO `listmenus` (`id`, `details`, `createdAt`, `updatedAt`, `foodItemId`, `customerId`) VALUES
(1, 'makanan berat', '2024-09-16 11:31:28', '2024-09-16 11:31:28', 1, 1),
(2, 'makanan ringan', '2024-09-16 11:31:28', '2024-09-16 11:31:28', 2, 2);

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE `order` (
  `id` int(11) NOT NULL,
  `status` varchar(255) NOT NULL,
  `orderDate` datetime NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `customerId` int(11) DEFAULT NULL,
  `paymentId` int(11) DEFAULT NULL,
  `listMenuId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `order`
--

INSERT INTO `order` (`id`, `status`, `orderDate`, `createdAt`, `updatedAt`, `customerId`, `paymentId`, `listMenuId`) VALUES
(1, 'onDelivery', '2024-09-16 11:31:28', '2024-09-16 11:31:28', '2024-09-16 11:31:28', 1, 1, 1),
(2, 'Delivered', '2024-09-16 11:31:28', '2024-09-16 11:31:28', '2024-09-16 11:31:28', 2, 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `id` int(11) NOT NULL,
  `paymentDate` datetime NOT NULL,
  `amount` varchar(255) NOT NULL,
  `paymentType` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `payment`
--

INSERT INTO `payment` (`id`, `paymentDate`, `amount`, `paymentType`, `createdAt`, `updatedAt`) VALUES
(1, '2024-09-16 11:31:28', 'Rp20.000', 'Cash', '2024-09-16 11:31:28', '2024-09-16 11:31:28'),
(2, '2024-09-16 11:31:28', 'Rp10.000', 'Cash', '2024-09-16 11:31:28', '2024-09-16 11:31:28');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `fooditem`
--
ALTER TABLE `fooditem`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `listmenus`
--
ALTER TABLE `listmenus`
  ADD PRIMARY KEY (`id`),
  ADD KEY `foodItemId` (`foodItemId`),
  ADD KEY `customerId` (`customerId`);

--
-- Indexes for table `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`id`),
  ADD KEY `customerId` (`customerId`),
  ADD KEY `paymentId` (`paymentId`),
  ADD KEY `listMenuId` (`listMenuId`);

--
-- Indexes for table `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `fooditem`
--
ALTER TABLE `fooditem`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `listmenus`
--
ALTER TABLE `listmenus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `order`
--
ALTER TABLE `order`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `payment`
--
ALTER TABLE `payment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `listmenus`
--
ALTER TABLE `listmenus`
  ADD CONSTRAINT `listmenus_ibfk_1` FOREIGN KEY (`foodItemId`) REFERENCES `fooditem` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `listmenus_ibfk_2` FOREIGN KEY (`customerId`) REFERENCES `customer` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `order`
--
ALTER TABLE `order`
  ADD CONSTRAINT `order_ibfk_1` FOREIGN KEY (`customerId`) REFERENCES `customer` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `order_ibfk_2` FOREIGN KEY (`paymentId`) REFERENCES `payment` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `order_ibfk_3` FOREIGN KEY (`listMenuId`) REFERENCES `listmenus` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 01, 2019 at 09:02 AM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `shareed`
--

-- --------------------------------------------------------

--
-- Table structure for table `comment_detail`
--

CREATE TABLE `comment_detail` (
  `CommentID` int(20) NOT NULL,
  `Detail` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `PostID` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `UserID` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `Date_Time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `comment_detail`
--

INSERT INTO `comment_detail` (`CommentID`, `Detail`, `PostID`, `UserID`, `Date_Time`) VALUES
(1, 'test1', 'a1000000001', '100000001', '2019-11-22 10:57:31'),
(2, 'test2', 'a1000000001', '100000001', '2019-11-22 10:57:31'),
(3, 'test4', 'a1000000001', '100000001', '2019-11-22 10:57:43'),
(4, 'test5', 'a1000000001', '100000001', '2019-11-22 10:57:43');

-- --------------------------------------------------------

--
-- Table structure for table `faq`
--

CREATE TABLE `faq` (
  `FAQID` varchar(20) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `title` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `description` mediumtext CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `UserID` varchar(20) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `date_Time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `faq`
--

INSERT INTO `faq` (`FAQID`, `title`, `description`, `UserID`, `date_Time`) VALUES
('f100000001', 'akarapon what do you mean?', 'akaskskskdkdkskkdkskdkdksjdksjskdlfkjdlsdjdk', '100000001', '2019-11-30 20:56:38');

-- --------------------------------------------------------

--
-- Table structure for table `favorite`
--

CREATE TABLE `favorite` (
  `favoriteID` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `UserID` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `TypePost` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `PostID` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `notification`
--

CREATE TABLE `notification` (
  `NotificationID` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `UserID_Comment` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `TypePost` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `PostID` varchar(20) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `picture`
--

CREATE TABLE `picture` (
  `PictureID` int(20) NOT NULL,
  `Picture` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `PostID` varchar(20) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `picture`
--

INSERT INTO `picture` (`PictureID`, `Picture`, `PostID`) VALUES
(1, 'img_test2.jpg', 'a1000000001'),
(2, 'img_con2.jpg', 'a1000000001'),
(3, 'img_test3.jpg', 'a1000000001'),
(4, 'img_con1.jpg', 'a1000000001'),
(5, 'test', 'd1000000002'),
(6, 'oneP22ic.jpg', 'd1000000005'),
(7, 'oneP22ic.jpg', 'd1000000006'),
(8, 'oneP22ic.jpg', 'd1000000009'),
(9, 'oneP22ic.jpg', 'd1000000010'),
(10, 'oneP22ic.jpg', 'd1000000011'),
(11, 'ic.jpg', 'd1000000006'),
(12, 'ic.jpg', 'd1000000007'),
(13, 'ic.jpg', 'd1000000007'),
(14, 'ic.jpg', 'd1000000007'),
(15, 'i.jpg', 'd1000000009'),
(16, 'i.jpg', 'e1000000002'),
(17, 'i.jpg', 'e1000000003'),
(18, 'i.jpg', 'e1000000004'),
(19, 'i.jpg', 'd100000002'),
(20, 'test', 'a1000000010'),
(21, 'test', 'a1000000011'),
(22, 'test', 'a1000000012'),
(23, 'test', 'a1000000013'),
(24, 'test', 'a1000000014'),
(25, 'test', 'a1000000015');

-- --------------------------------------------------------

--
-- Table structure for table `report`
--

CREATE TABLE `report` (
  `ReportID` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `Des` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `TypePost` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `PostID` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `UserID` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `date_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `reviewbook`
--

CREATE TABLE `reviewbook` (
  `ReviewBookID` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `Cover` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Title` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `WrittenBy` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Edition` varchar(5) COLLATE utf8_unicode_ci NOT NULL,
  `Link` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Des` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `BookName` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `UserID` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `date_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `reviewbook`
--

INSERT INTO `reviewbook` (`ReviewBookID`, `Cover`, `Title`, `WrittenBy`, `Edition`, `Link`, `Des`, `BookName`, `UserID`, `date_time`) VALUES
('a1000000001', 'img_tests.jpg', 'reviewbooktest', 'ty', '1', 'none', 'test book for project!!!! ภาษาไทยก็มาน้ะ', 'คนกับงานใครตายก่อนกัน', '100000001', '2019-11-16 15:24:26'),
('a1000000002', 'img_test2.jpg', 'reviewbook2', 'ty', '2', 'test.com', 'test test tesss', 'post', '100000001', '2019-11-23 05:32:03'),
('a1000000003', 'test', 'posttest', 'test', 'tset', 'link', 'desss', 'tyuhlkjll', '100000001', '2019-12-01 04:24:39'),
('a1000000004', 'test', 'posttest', 'test', 'tset', 'link', 'desss', 'tyuhlkjll', '100000001', '2019-12-01 04:26:58'),
('a1000000005', 'test', 'posttest', 'test', 'tset', 'link', 'desss', 'tyuhlkjll', '100000001', '2019-12-01 04:29:42'),
('a1000000006', 'test', 'posttest', 'test', 'tset', 'link', 'desss', 'tyuhlkjll', '100000001', '2019-12-01 04:30:58'),
('a1000000007', 'test', 'posttest', 'test', 'tset', 'link', 'desss', 'tyuhlkjll', '100000001', '2019-12-01 04:35:20'),
('a1000000008', 'test', 'posttest', 'test', 'tset', 'link', 'desss', 'tyuhlkjll', '100000001', '2019-12-01 04:36:16'),
('a1000000009', 'test', 'posttest', 'test', 'tset', 'link', 'desss', 'tyuhlkjll', '100000001', '2019-12-01 04:37:08'),
('a1000000010', 'test', 'posttest', 'test', 'tset', 'link', 'desss', 'tyuhlkjll', '100000001', '2019-12-01 04:37:51'),
('a1000000011', 'test', 'posttest', 'test', 'tset', 'link', 'desss', 'tyuhlkjll', '100000001', '2019-12-01 04:39:09'),
('a1000000012', 'test', 'posttest', 'test', 'tset', 'link', 'desss', 'tyuhlkjll', '100000001', '2019-12-01 04:41:16'),
('a1000000013', 'test', 'posttest', 'test', 'tset', 'link', 'desss', 'tyuhlkjll', '100000001', '2019-12-01 04:41:23'),
('a1000000014', 'test', 'posttest', 'test', 'tset', 'link', 'desss', 'tyuhlkjll', '100000001', '2019-12-01 04:42:29'),
('a1000000015', 'test', 'posttest', 'test', 'tset', 'link', 'desss', 'tyuhlkjll', '100000001', '2019-12-01 04:43:43');

-- --------------------------------------------------------

--
-- Table structure for table `reviewsubject`
--

CREATE TABLE `reviewsubject` (
  `ReviewSubjectID` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `SubjectID` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `SubjectName` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `Instructor_Name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Des` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `Title` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `Section` int(3) NOT NULL,
  `UserID` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `Date_Time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `reviewsubject`
--

INSERT INTO `reviewsubject` (`ReviewSubjectID`, `SubjectID`, `SubjectName`, `Instructor_Name`, `Des`, `Title`, `Section`, `UserID`, `Date_Time`) VALUES
('b100000001', 'CPE 101', 'coppp', 'test tea', '123123', 'asdasdas', 1, '100000001', '2019-11-30 12:30:37');

-- --------------------------------------------------------

--
-- Table structure for table `reviewtutor`
--

CREATE TABLE `reviewtutor` (
  `ReviewTutorID` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `TutorName` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Academy` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Subject_Teach` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Des` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `ContactLink` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `Title` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Cover` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `UserID` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `Date_Time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `reviewtutor`
--

INSERT INTO `reviewtutor` (`ReviewTutorID`, `TutorName`, `Academy`, `Subject_Teach`, `Des`, `ContactLink`, `Title`, `Cover`, `UserID`, `Date_Time`) VALUES
('c100000001', 'ty', 'po', 'po', 'popopo', 'popopopo', 'study', 'po.jpg', '100000001', '2019-11-24 08:51:06');

-- --------------------------------------------------------

--
-- Table structure for table `shareevent`
--

CREATE TABLE `shareevent` (
  `ShareEventID` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `Cover` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Register` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Location` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `Condi` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `Describ` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `Title` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `UserID` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `Data_Time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `shareevent`
--

INSERT INTO `shareevent` (`ShareEventID`, `Cover`, `Register`, `Location`, `Condi`, `Describ`, `Title`, `UserID`, `Data_Time`) VALUES
('d100000001', 'po.jpg', 'sas', 'asd', 'sad', 'sadasd', 'sdad', '100000001', '2019-11-30 12:18:52'),
('d100000002', 'covernote.jpg', 'notetes', '1', 't2', '1', 's22', '100000001', '2019-11-30 12:18:57');

-- --------------------------------------------------------

--
-- Table structure for table `sharenote`
--

CREATE TABLE `sharenote` (
  `ShareNoteID` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `Cover` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Subject_Name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Section` int(3) NOT NULL,
  `Instructor_Name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Semeter` int(2) NOT NULL,
  `Title` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `UserID` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `Date_Time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sharenote`
--

INSERT INTO `sharenote` (`ShareNoteID`, `Cover`, `Subject_Name`, `Section`, `Instructor_Name`, `Semeter`, `Title`, `UserID`, `Date_Time`) VALUES
('e1000000001', 'po.jpg', 'as', 2, 'asd', 1, 'reviewbook2', '100000001', '2019-11-27 19:13:52'),
('e1000000002', 'covernote.jpg', 'notetes', 1, 't2', 1, 's22', '100000001', '2019-11-27 19:15:25'),
('e1000000003', 'covernote.jpg', 'notetes', 1, 't2', 1, 's22', '100000001', '2019-11-27 19:19:46'),
('e1000000004', 'covernote.jpg', 'notetes', 1, 't2', 1, 's22', '100000001', '2019-11-27 19:19:47');

-- --------------------------------------------------------

--
-- Table structure for table `tagpost`
--

CREATE TABLE `tagpost` (
  `TagID` int(20) NOT NULL,
  `TagDetail` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `PostID` varchar(20) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `tagpost`
--

INSERT INTO `tagpost` (`TagID`, `TagDetail`, `PostID`) VALUES
(2, 'math', 'a1000000001'),
(3, 'thai', 'a1000000001'),
(13, 'oe', 'e1000000002'),
(14, 'oe', 'e1000000003'),
(15, 'oe', 'e1000000004'),
(16, 'oe', 'd100000002'),
(17, 'test', 'a1000000012'),
(18, 'test', 'a1000000015');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `UserID` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `UserName` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Picture_Profile` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `Email` varchar(60) COLLATE utf8_unicode_ci NOT NULL,
  `Password` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `status` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `UserPermission` varchar(50) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`UserID`, `UserName`, `Picture_Profile`, `Email`, `Password`, `status`, `UserPermission`) VALUES
('100000001', 'akarapon', 'img_testprofile.jpg', 'aar@mail.com', '123456789', 'available', 'user');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comment_detail`
--
ALTER TABLE `comment_detail`
  ADD PRIMARY KEY (`CommentID`),
  ADD KEY `comment_ibfk_6` (`UserID`);

--
-- Indexes for table `faq`
--
ALTER TABLE `faq`
  ADD PRIMARY KEY (`FAQID`);

--
-- Indexes for table `favorite`
--
ALTER TABLE `favorite`
  ADD PRIMARY KEY (`favoriteID`);

--
-- Indexes for table `notification`
--
ALTER TABLE `notification`
  ADD PRIMARY KEY (`NotificationID`);

--
-- Indexes for table `picture`
--
ALTER TABLE `picture`
  ADD PRIMARY KEY (`PictureID`);

--
-- Indexes for table `report`
--
ALTER TABLE `report`
  ADD PRIMARY KEY (`ReportID`);

--
-- Indexes for table `reviewbook`
--
ALTER TABLE `reviewbook`
  ADD PRIMARY KEY (`ReviewBookID`);

--
-- Indexes for table `reviewsubject`
--
ALTER TABLE `reviewsubject`
  ADD PRIMARY KEY (`ReviewSubjectID`);

--
-- Indexes for table `reviewtutor`
--
ALTER TABLE `reviewtutor`
  ADD PRIMARY KEY (`ReviewTutorID`),
  ADD KEY `reviewtutor_ibfk_1` (`UserID`);

--
-- Indexes for table `shareevent`
--
ALTER TABLE `shareevent`
  ADD PRIMARY KEY (`ShareEventID`),
  ADD KEY `UserID` (`UserID`);

--
-- Indexes for table `sharenote`
--
ALTER TABLE `sharenote`
  ADD PRIMARY KEY (`ShareNoteID`),
  ADD KEY `UserID` (`UserID`);

--
-- Indexes for table `tagpost`
--
ALTER TABLE `tagpost`
  ADD PRIMARY KEY (`TagID`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`UserID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comment_detail`
--
ALTER TABLE `comment_detail`
  MODIFY `CommentID` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `picture`
--
ALTER TABLE `picture`
  MODIFY `PictureID` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `tagpost`
--
ALTER TABLE `tagpost`
  MODIFY `TagID` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comment_detail`
--
ALTER TABLE `comment_detail`
  ADD CONSTRAINT `comment_ibfk_6` FOREIGN KEY (`UserID`) REFERENCES `user` (`UserID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `reviewtutor`
--
ALTER TABLE `reviewtutor`
  ADD CONSTRAINT `reviewtutor_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `user` (`UserID`);

--
-- Constraints for table `shareevent`
--
ALTER TABLE `shareevent`
  ADD CONSTRAINT `shareevent_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `user` (`UserID`);

--
-- Constraints for table `sharenote`
--
ALTER TABLE `sharenote`
  ADD CONSTRAINT `sharenote_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `user` (`UserID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

CREATE DATABASE  IF NOT EXISTS `appointment` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `appointment`;
-- MySQL dump 10.13  Distrib 8.0.31, for macos12 (x86_64)
--
-- Host: localhost    Database: appointment
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `appointment_list`
--

DROP TABLE IF EXISTS `appointment_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `appointment_list` (
  `appointmentId` varchar(45) NOT NULL,
  `patientId` varchar(45) DEFAULT NULL,
  `patientName` varchar(45) DEFAULT NULL,
  `doctorId` varchar(45) DEFAULT NULL,
  `doctorName` varchar(45) DEFAULT NULL,
  `appointmentDate` varchar(45) DEFAULT NULL,
  `appointmentDuration` varchar(45) DEFAULT NULL,
  `appointmentStatus` varchar(45) DEFAULT NULL,
  `appointmentType` varchar(45) DEFAULT NULL,
  `caseManagerId` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`appointmentId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `appointment_list`
--

LOCK TABLES `appointment_list` WRITE;
/*!40000 ALTER TABLE `appointment_list` DISABLE KEYS */;

INSERT INTO `appointment_list` VALUES 
('01','120','John Doe','1231','Stepehen','11/03/2022','30','True','Virtual','2234'),
('bdce0301-95e7-4206-a894-91cfb01da69b','12345','test','22345','Test Doctor','07/03/2022','30','True','virtual','1111'),
('101','121','John cena','1231','Stepehen','11/04/2022','30','True','InPerson','2234'),
('02','122','John singh','1231','Stepehen','11/04/2022','30','True','Virtual','2234'),
('03','123','Avtar','1233','Rajesh','11/05/2022','30','True','InPerson','2234'),
('04','124','Rajesh singh','1233','Rajesh','11/05/2022','30','True','InPerson','2234'),
('06','125','virk Doe','1235','Ravinder','11/06/2022','30','True','Virtual','2234'),
('07','126','sintu Doe','1235','Ravinder','11/06/2022','30','True','InPerson','2234'),
('08','127','simran Dome','1235','Ravinder','11/07/2022','30','True','InPerson','2234'),
('09','128','saket Dim','1235','Ravinder','11/07/2022','30','True','Virtual','2234'),
('10','129','narender modi','1239','Sanket','11/12/2022','30','True','InPerson','2221'),
('11','130','Amit sah','1239','Sanket','11/13/2022','30','True','Virtual','2221'),
('12','131','Lee carstens','1239','Sanket','11/13/2022','30','True','InPerson','2221'),
('13','132','raj kumar','1239','Sanket','11/14/2022','30','True','Virtual','2221'),
('14','133','Sunny Deol','1243','Prabhat','11/14/2022','30','True','InPerson','2221'),
('15','134','Amrish Puri','1243','Prabhat','11/14/2022','30','True','Virtual','2221'),
('16','135','Shakti kapoor','1243','Prabhat','11/15/2022','30','True','Virtual','2221'),
('17','136','Ramesh melody','1243','Prabhat','11/15/2022','30','True','InPerson','2221'),
('18','137','Suresh Melody','1247','Vashim','11/15/2022','30','True','Virtual','2121'),
('19','138','Surya sun','1247','Vashim','11/16/2022','30','True','Virtual','2121'),
('20','139','Chandni devi','1247','Vashim','11/16/2022','30','True','Virtual','2121'),
('21','140','Manish Balne','1247','Vashim','11/16/2022','30','True','InPerson','2121'),
('22','141','Dheeraj raj','1251','Sanjay','11/16/2022','30','True','InPerson','2120'),
('23','142','Abhishek bachan','1251','Sanjay','11/17/2022','30','True','Virtual','2120'),
('24','143','Jack Daniel','1251','Sanjay','11/17/2022','30','True','Virtual','2120'),
('25,'144','Indu mati','1251','Sanjay','11/17/2022','30','True','InPerson','2120'),
('26','145','Sylvie Saini','1251','Sanjay','11/17/2022','30','True','Virtual','2120'),
('27,'146','Indu tara','1251','Sanjay','11/18/2022','30','True','InPerson','2120'),
('28','147','Kareena Kapoor','1251','Sanjay','11/18/2022','30','True','Virtual','2120');

/*!40000 ALTER TABLE `appointment_list` ENABLE KEYS */;

UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-08 11:06:56
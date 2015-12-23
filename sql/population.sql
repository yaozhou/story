-- MySQL dump 10.13  Distrib 5.5.46, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: todolist
-- ------------------------------------------------------
-- Server version	5.5.46-0ubuntu0.14.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `t_population`
--

DROP TABLE IF EXISTS `t_population`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_population` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(1024) DEFAULT NULL,
  `phone_num` int(11) DEFAULT NULL,
  `population` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_population`
--

LOCK TABLES `t_population` WRITE;
/*!40000 ALTER TABLE `t_population` DISABLE KEYS */;
INSERT INTO `t_population` VALUES (34,'北京',4193,2114),(35,'天津',1336,1007),(36,'河北',6242,7287),(37,'辽宁',4486,4930),(38,'上海',3307,2415),(39,'江苏',8130,7939),(40,'浙江',7420,5493),(41,'福建',4276,3774),(42,'山东',8770,9579),(43,'广东',15217,10644),(44,'海南',914,803),(45,'山西',3295,3630),(46,'吉林',2605,2699),(47,'黑龙江',3388,3835),(48,'安徽',4225,6928),(49,'江西',2985,4522),(50,'河南',7653,9413),(51,'湖北',4611,5799),(52,'湖南',4788,6690),(53,'内蒙古',2469,2497),(54,'广西',3644,5282),(55,'重庆',2719,2970),(56,'四川',6819,8107),(57,'贵州',2981,3502),(58,'云南',3782,4687),(59,'西藏',265,300),(60,'陕西',3630,3763),(61,'甘肃',2082,2582),(62,'青海',539,529),(63,'宁夏',664,572),(64,'新疆',2028,2232);
/*!40000 ALTER TABLE `t_population` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-11-12 15:31:57

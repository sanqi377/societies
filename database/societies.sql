/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50726
Source Host           : localhost:3306
Source Database       : societies

Target Server Type    : MYSQL
Target Server Version : 50726
File Encoding         : 65001

Date: 2021-08-17 13:37:21
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for s_users
-- ----------------------------
DROP TABLE IF EXISTS `s_users`;
CREATE TABLE `s_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `open_id` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `class` varchar(255) DEFAULT NULL,
  `departments` varchar(255) DEFAULT NULL,
  `student_id` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of s_users
-- ----------------------------
INSERT INTO `s_users` VALUES ('15', 'oCyJb4xF_IpSqyyqn5kEiGG7UxeM', '叁柒', null, 'XX2021', '信息工程系', '123456');

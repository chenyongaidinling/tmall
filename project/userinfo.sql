/*
Navicat MySQL Data Transfer

Source Server         : HelloWord
Source Server Version : 50508
Source Host           : localhost:3306
Source Database       : tmall

Target Server Type    : MYSQL
Target Server Version : 50508
File Encoding         : 65001

Date: 2019-05-16 19:56:21
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `userinfo`
-- ----------------------------
DROP TABLE IF EXISTS `userinfo`;
CREATE TABLE `userinfo` (
  `sid` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `password` varchar(50) NOT NULL,
  `email` varchar(20) NOT NULL,
  `telphone` varchar(11) NOT NULL,
  `time` varchar(20) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of userinfo
-- ----------------------------
INSERT INTO `userinfo` VALUES ('4', 'Html5', '96e79218965eb72c92a549dd5a330112', '1@1', '13812345678', '2019-05-11 17:28:46');
INSERT INTO `userinfo` VALUES ('5', '符合国家和发货', '96e79218965eb72c92a549dd5a330112', '111@111', '13812345678', '2019-05-11 20:20:56');
INSERT INTO `userinfo` VALUES ('6', '花花火', '96e79218965eb72c92a549dd5a330112', '11@1', '13812345678', '2019-05-11 21:52:54');
INSERT INTO `userinfo` VALUES ('7', 'lovehtml5', '96e79218965eb72c92a549dd5a330112', '111@1', '13812345678', '2019-05-11 22:07:40');
INSERT INTO `userinfo` VALUES ('8', 'cat', '96e79218965eb72c92a549dd5a330112', '111@1', '13812345678', '2019-05-13 08:41:10');
INSERT INTO `userinfo` VALUES ('9', '我爱html5', '96e79218965eb72c92a549dd5a330112', '111@111', '13812345678', '2019-05-13 08:50:20');
INSERT INTO `userinfo` VALUES ('10', 'xiaoxiao', '96e79218965eb72c92a549dd5a330112', '111@1', '13812345678', '2019-05-13 11:08:32');
INSERT INTO `userinfo` VALUES ('11', '0000', '96e79218965eb72c92a549dd5a330112', '11121@1', '13812345678', '2019-05-13 11:35:05');
INSERT INTO `userinfo` VALUES ('12', '如花食欲', '96e79218965eb72c92a549dd5a330112', '111@1', '13812345678', '2019-05-13 19:29:14');
INSERT INTO `userinfo` VALUES ('13', 'aaaaa', '111111', '1@1', '13812345678', '2019-05-13 19:30:16');
INSERT INTO `userinfo` VALUES ('14', '111111', '111111', '1@1', '13812345678', '2019-05-13 19:52:09');
INSERT INTO `userinfo` VALUES ('15', '黄志强888', '111111', '111@1', '13812345678', '2019-05-13 20:36:19');
INSERT INTO `userinfo` VALUES ('16', '黄志强666', '111111', '111@1', '13812345678', '2019-05-13 20:37:31');
INSERT INTO `userinfo` VALUES ('17', '黄志强', '111111', '111@1', '13812345678', '2019-05-13 20:40:40');
INSERT INTO `userinfo` VALUES ('18', '黄志强2', '111111', '111@1', '13812345678', '2019-05-13 20:44:50');
INSERT INTO `userinfo` VALUES ('19', 'cat2', '111111', '111@1', '13812345678', '2019-05-13 20:58:18');
INSERT INTO `userinfo` VALUES ('20', 'javascript', '222222', '111@1', '13812345678', '2019-05-13 21:12:05');
INSERT INTO `userinfo` VALUES ('21', 'success', '111111', '11121@1', '13812345678', '2019-05-13 21:31:13');
INSERT INTO `userinfo` VALUES ('22', 'good', '96e79218965eb72c92a549dd5a330112', '111@1', '13812345678', '2019-05-13 21:34:07');
INSERT INTO `userinfo` VALUES ('23', 'javascript222', '670b14728ad9902aecba32e22fa4f6bd', '111@1', '13812345678', '2019-05-14 22:56:06');
INSERT INTO `userinfo` VALUES ('24', 'javascript22', '96e79218965eb72c92a549dd5a330112', '111@1', '13812345678', '2019-05-15 20:06:10');

/*
Navicat MySQL Data Transfer

Source Server         : HelloWord
Source Server Version : 50508
Source Host           : localhost:3306
Source Database       : tmall

Target Server Type    : MYSQL
Target Server Version : 50508
File Encoding         : 65001

Date: 2019-05-16 19:56:11
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `pic_list`
-- ----------------------------
DROP TABLE IF EXISTS `pic_list`;
CREATE TABLE `pic_list` (
  `sid` tinyint(1) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(300) NOT NULL,
  `title` varchar(300) NOT NULL,
  `price` float(20,2) unsigned NOT NULL,
  `urllist` varchar(2000) NOT NULL,
  `num` tinyint(3) unsigned NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pic_list
-- ----------------------------
INSERT INTO `pic_list` VALUES ('1', 'https://img.alicdn.com/imgextra/i1/738546912/O1CN01tiaqzX20vk7fizd6n_!!738546912.jpg', '夏装2019新款嘻哈宽松街舞短袖套装ins国潮hiphop潮男运动两件套', '208.00', 'https://img.alicdn.com/imgextra/i4/738546912/O1CN01ZbIjbq20vk7d16Lnd_!!738546912.jpg,https://img.alicdn.com/imgextra/i1/738546912/O1CN01zUCeRi20vk7d18Ur2_!!738546912.jpg,https://img.alicdn.com/imgextra/i2/738546912/O1CN01uA2Nmi20vk7dzWJxq_!!738546912.jpg,https://img.alicdn.com/imgextra/i2/738546912/O1CN01X0PkvE20vk7dqJTLw_!!738546912.jpg,https://img.alicdn.com/imgextra/i2/738546912/O1CN01WfSZFh20vk7bXtGUN_!!738546912.jpg,https://img.alicdn.com/imgextra/i2/738546912/O1CN01Y5v6U320vk7cd62VC_!!738546912.jpg,https://img.alicdn.com/imgextra/i1/738546912/O1CN01mfo29D20vk7fizd8H_!!738546912.jpg,https://img.alicdn.com/imgextra/i3/738546912/O1CN01p11QyT20vk7VruciE_!!738546912.jpg', '1');
INSERT INTO `pic_list` VALUES ('2', 'https://img.alicdn.com/imgextra/i4/738546912/O1CN01uhpM4820vk7fNW80N_!!738546912.jpg', '夏装2019新款宽松舒适潮流ins国潮街舞运动嘻哈短袖套装两件套', '188.00', 'https://img.alicdn.com/imgextra/i2/738546912/O1CN01ynbu0M20vk7fSFRvT_!!738546912.jpg,https://img.alicdn.com/imgextra/i1/738546912/O1CN01g3lBId20vk7eYvbjN_!!738546912.jpg,https://img.alicdn.com/imgextra/i3/738546912/O1CN01nhD5wi20vk7eYuXDZ_!!738546912.jpg,https://img.alicdn.com/imgextra/i3/738546912/O1CN014z1YSl20vk7hH4fHn_!!738546912.jpg,https://img.alicdn.com/imgextra/i1/738546912/O1CN018t3YI720vk7XOW5Eh_!!738546912.jpg,https://img.alicdn.com/imgextra/i3/738546912/O1CN018absaO20vk7g2gj48_!!738546912.jpg', '1');
INSERT INTO `pic_list` VALUES ('3', 'https://img.alicdn.com/imgextra/i1/738546912/O1CN012TgzK420vk7oNl8dS_!!738546912.jpg', '19夏季暗黑花卉国潮印花宽松嘻哈hiphop短裤男ins中性街舞六分裤', '128.00', 'https://img.alicdn.com/imgextra/i2/738546912/O1CN01xe5nw820vk7m24BaV_!!738546912.jpg,https://img.alicdn.com/imgextra/i1/738546912/O1CN01NjYSXK20vk7oNlk55_!!738546912.jpg,https://img.alicdn.com/imgextra/i2/738546912/O1CN01skrLKe20vk7kB1XQb_!!738546912.jpg,https://img.alicdn.com/imgextra/i2/738546912/O1CN01tcVXXk20vk7jP2o9T_!!738546912.jpg,https://img.alicdn.com/imgextra/i1/738546912/O1CN01tdXQgC20vk7kB3Pnp_!!738546912.jpg,https://img.alicdn.com/imgextra/i2/738546912/O1CN01fPVTb720vk7lddUWa_!!738546912.jpg,https://img.alicdn.com/imgextra/i3/738546912/O1CN01xOCtGI20vk7mvq1M9_!!738546912.jpg', '1');
INSERT INTO `pic_list` VALUES ('4', 'https://img.alicdn.com/imgextra/i1/738546912/O1CN0151zs9s20vk7m2NIml_!!738546912.jpg', '夏季条纹撞色拼接ins国潮宽松美式潮牌短袖oversize嘻哈街舞T恤男', '88.00', 'https://img.alicdn.com/imgextra/i4/738546912/O1CN01VSCvOG20vk7m2NhiZ_!!738546912.jpg,https://img.alicdn.com/imgextra/i4/738546912/O1CN01669TjU20vk7oD4RzT_!!738546912.jpg,https://img.alicdn.com/imgextra/i2/738546912/O1CN01OTImxi20vk7et1vIe_!!738546912.jpg,https://img.alicdn.com/imgextra/i3/738546912/O1CN01he2muM20vk7n4QKIE_!!738546912.jpg,https://img.alicdn.com/imgextra/i2/738546912/O1CN015zh6Xl20vk7mruiR3_!!738546912.jpg,https://img.alicdn.com/imgextra/i2/738546912/O1CN01qFVIqw20vk7lgW8Me_!!738546912.jpg,https://img.alicdn.com/imgextra/i2/738546912/O1CN010gz28920vk7et1Bc1_!!738546912.jpg,https://img.alicdn.com/imgextra/i2/738546912/O1CN01TZPlu120vk7opG5gD_!!738546912.jpg', '1');
INSERT INTO `pic_list` VALUES ('5', 'https://img.alicdn.com/imgextra/i1/738546912/O1CN01fB2okM20vk7m9Ueso_!!738546912.jpg', '夏季粉色嘻哈撞色拼接ins国潮短袖短裤套装网红中性情侣两件套', '188.00', 'https://img.alicdn.com/imgextra/i1/738546912/O1CN01YOYVO820vk7lSesQa_!!738546912.jpg,https://img.alicdn.com/imgextra/i4/738546912/O1CN01rNAVM920vk7m5apw6_!!738546912.jpg,https://img.alicdn.com/imgextra/i3/738546912/O1CN01X55VkB20vk7oHxIUl_!!738546912.jpg,https://img.alicdn.com/imgextra/i3/738546912/O1CN01KwDPqN20vk7m79yBi_!!738546912.jpg,https://img.alicdn.com/imgextra/i3/738546912/O1CN01M69hnx20vk7kIcLkP_!!738546912.jpg,https://img.alicdn.com/imgextra/i1/738546912/O1CN01hmq17l20vk7ou5Acg_!!738546912.jpg,https://img.alicdn.com/imgextra/i2/738546912/O1CN01n7CqYG20vk7ou2Hsh_!!738546912.jpg,https://img.alicdn.com/imgextra/i2/738546912/O1CN01aWwG6c20vk7lScGGu_!!738546912.jpg', '1');
INSERT INTO `pic_list` VALUES ('6', 'https://img.alicdn.com/imgextra/i1/738546912/O1CN013WqOCc20vk7mp2jfv_!!738546912.jpg', '夏季清爽白粉搭配运动嘻哈短袖套装ins国潮情侣hiphop街舞两件套', '198.00', 'https://img.alicdn.com/imgextra/i2/738546912/O1CN01kugVSy20vk7mU8Qqz_!!738546912.jpg,https://img.alicdn.com/imgextra/i1/738546912/O1CN01PDPsC520vk7oPJjnk_!!738546912.jpg,https://img.alicdn.com/imgextra/i4/738546912/O1CN01WFmmQx20vk7fgguK1_!!738546912.jpg,https://img.alicdn.com/imgextra/i4/738546912/O1CN01mltusI20vk7fggAau_!!738546912.jpg,https://img.alicdn.com/imgextra/i1/738546912/O1CN01q4qFLr20vk7p1H8fb_!!738546912.jpg,https://img.alicdn.com/imgextra/i1/738546912/O1CN01L6hVef20vk7l1TG4u_!!738546912.jpg,https://img.alicdn.com/imgextra/i4/738546912/O1CN01ZZb1Q820vk7nsDMg4_!!738546912.jpg,https://img.alicdn.com/imgextra/i1/738546912/O1CN01fR1bG420vk7pEXL1F_!!738546912.jpg', '1');
INSERT INTO `pic_list` VALUES ('7', 'https://img.alicdn.com/imgextra/i1/738546912/O1CN01MPnr3020vk7oVBk1z_!!738546912.jpg', '夏季黑绿撞色嘻哈宽松hiphop工装短袖套装ins国潮男生街舞两件套', '198.00', 'https://img.alicdn.com/imgextra/i1/738546912/O1CN01VwKdl820vk7mHsffI_!!738546912.jpg,https://img.alicdn.com/imgextra/i4/738546912/O1CN01iDyZUe20vk7nxyiqc_!!738546912.jpg,https://img.alicdn.com/imgextra/i2/738546912/O1CN01SxFawn20vk7ny0SyN_!!738546912.jpg,https://img.alicdn.com/imgextra/i2/738546912/O1CN01CoGJqu20vk7pKTMu6_!!738546912.jpg,https://img.alicdn.com/imgextra/i3/738546912/O1CN01Ph9R0p20vk7munQ4r_!!738546912.jpg,https://img.alicdn.com/imgextra/i1/738546912/O1CN01tE30RQ20vk7mHtXkg_!!738546912.jpg,https://img.alicdn.com/imgextra/i2/738546912/O1CN01RcKGfW20vk7kLCjDq_!!738546912.jpg,https://img.alicdn.com/imgextra/i1/738546912/O1CN01MLXDJK20vk7mHrjSx_!!738546912.jpg', '1');
INSERT INTO `pic_list` VALUES ('8', 'https://img.alicdn.com/imgextra/i2/738546912/O1CN012HaWzx20vk7ohlqB8_!!738546912.jpg', '夏季帅t中性破洞刮烂宽松哈伦九分裤ins坠感做旧情侣潮流阔腿裤', '118.00', 'https://img.alicdn.com/imgextra/i3/738546912/O1CN01p9ps1N20vk7ohlVPm_!!738546912.jpg,https://img.alicdn.com/imgextra/i1/738546912/O1CN01TlwLUa20vk7lJnyeL_!!738546912.jpg,https://img.alicdn.com/imgextra/i2/738546912/O1CN01v3xQ6p20vk7ny8v9f_!!738546912.jpg,https://img.alicdn.com/imgextra/i2/738546912/O1CN01NDbttR20vk7pJb7Kh_!!738546912.jpg,https://img.alicdn.com/imgextra/i4/738546912/O1CN01uZvU8V20vk7kXfRk5_!!738546912.jpg,https://img.alicdn.com/imgextra/i2/738546912/O1CN01Cv87oi20vk7ohlZaT_!!738546912.jpg,https://img.alicdn.com/imgextra/i3/738546912/O1CN01tRGxGZ20vk7ny8WEK_!!738546912.jpg,https://img.alicdn.com/imgextra/i1/738546912/O1CN01YQ4aSA20vk7mmXFMD_!!738546912.jpg,https://img.alicdn.com/imgextra/i3/738546912/O1CN01y5yc5x20vk7n8I2JF_!!738546912.jpg,https://img.alicdn.com/imgextra/i4/738546912/O1CN01XloyIH20vk7n8IEnF_!!738546912.jpg', '1');
INSERT INTO `pic_list` VALUES ('9', 'https://img.alicdn.com/imgextra/i2/738546912/O1CN01CwOSDM20vk7g3xYej_!!738546912.jpg', '小清新夏季黑白条纹宽松中性翻领polo衫oversize潮男情侣短袖T恤', '78.00', 'https://img.alicdn.com/imgextra/i4/738546912/O1CN01ggIBZS20vk7lOkEz7_!!738546912.jpg,https://img.alicdn.com/imgextra/i3/738546912/O1CN01UEizN820vk7omfpLm_!!738546912.jpg,https://img.alicdn.com/imgextra/i4/738546912/O1CN01FH9W1720vk7mrQDzt_!!738546912.jpg,https://img.alicdn.com/imgextra/i4/738546912/O1CN01tbUH9Y20vk7lOjAUM_!!738546912.jpg,https://img.alicdn.com/imgextra/i4/738546912/O1CN01g4Cjmp20vk7lkeAla_!!738546912.jpg,https://img.alicdn.com/imgextra/i2/738546912/O1CN01sQig9s20vk7nFt4Er_!!738546912.jpg,https://img.alicdn.com/imgextra/i2/738546912/O1CN01aIf5nV20vk7oFLDdo_!!738546912.jpg,https://img.alicdn.com/imgextra/i4/738546912/O1CN01B7IA5n20vk7mrP9XQ_!!738546912.jpg,https://img.alicdn.com/imgextra/i2/738546912/O1CN019FqZS320vk7nC6Qnc_!!738546912.jpg', '1');

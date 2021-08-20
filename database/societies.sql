/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50726
Source Host           : localhost:3306
Source Database       : societies

Target Server Type    : MYSQL
Target Server Version : 50726
File Encoding         : 65001

Date: 2021-08-20 20:48:16
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for s_activity
-- ----------------------------
DROP TABLE IF EXISTS `s_activity`;
CREATE TABLE `s_activity` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '活动id',
  `title` varchar(255) NOT NULL COMMENT '活动标题',
  `content` varchar(255) NOT NULL COMMENT '活动内容',
  `publisher_college_id` int(11) NOT NULL COMMENT '发布社团',
  `recipient_id` varchar(255) NOT NULL DEFAULT '-1' COMMENT '接受者id,可多人，为-1时表示所有人可接收',
  PRIMARY KEY (`id`) USING BTREE,
  KEY `publisher_college_id_copy_1` (`publisher_college_id`) USING BTREE,
  CONSTRAINT `publisher_college_id_copy_1` FOREIGN KEY (`publisher_college_id`) REFERENCES `s_societies` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of s_activity
-- ----------------------------

-- ----------------------------
-- Table structure for s_classification
-- ----------------------------
DROP TABLE IF EXISTS `s_classification`;
CREATE TABLE `s_classification` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `pid` int(10) DEFAULT '0' COMMENT '父分类id',
  `name` varchar(255) CHARACTER SET utf8mb4 DEFAULT NULL COMMENT '分类名称',
  `path` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_german2_ci DEFAULT NULL COMMENT '分类路由',
  `addtime` int(10) DEFAULT NULL COMMENT '添加时间',
  `sort` int(10) DEFAULT NULL COMMENT '分类排序',
  `status` int(1) DEFAULT '1' COMMENT '分类状态，1 = 正常，0 = 禁用',
  `icon` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_german2_ci DEFAULT NULL COMMENT '分类 icon',
  `Introduction` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_german2_ci DEFAULT NULL COMMENT '分类简介',
  `type` int(1) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of s_classification
-- ----------------------------
INSERT INTO `s_classification` VALUES ('1', '0', '知识笔记', '/notes', '0', '1', '1', 'el-icon-circle-plus-outline', '测试简介1111', '1');
INSERT INTO `s_classification` VALUES ('3', '0', '干货分享', '/share', '0', '2', '1', '', '嘻嘻嘻啦啦啦', '1');

-- ----------------------------
-- Table structure for s_department
-- ----------------------------
DROP TABLE IF EXISTS `s_department`;
CREATE TABLE `s_department` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of s_department
-- ----------------------------
INSERT INTO `s_department` VALUES ('1', '学院');
INSERT INTO `s_department` VALUES ('2', '信息工程系');
INSERT INTO `s_department` VALUES ('3', '机械工程系');
INSERT INTO `s_department` VALUES ('4', '电气工程系');
INSERT INTO `s_department` VALUES ('5', '智能控制系');
INSERT INTO `s_department` VALUES ('6', '车辆工程系');
INSERT INTO `s_department` VALUES ('7', '经济管理系');

-- ----------------------------
-- Table structure for s_menu
-- ----------------------------
DROP TABLE IF EXISTS `s_menu`;
CREATE TABLE `s_menu` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `pid` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '父级ID',
  `title` varchar(30) NOT NULL COMMENT '菜单标题',
  `icon` varchar(50) DEFAULT NULL COMMENT '图标',
  `path` varchar(150) DEFAULT NULL COMMENT '菜单路径',
  `permission` varchar(150) DEFAULT NULL COMMENT '权限标识',
  `status` tinyint(1) unsigned DEFAULT '1' COMMENT '是否显示：1显示 2不显示',
  `sort` smallint(5) unsigned DEFAULT '125' COMMENT '显示顺序',
  `create_time` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '创建时间',
  PRIMARY KEY (`id`) USING BTREE,
  KEY `index_pid` (`pid`) USING BTREE,
  KEY `index_name` (`title`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=92 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT COMMENT='系统菜单表';

-- ----------------------------
-- Records of s_menu
-- ----------------------------
INSERT INTO `s_menu` VALUES ('1', '0', '系统管理', 'el-icon-setting', null, null, '1', '3', '1605787979');
INSERT INTO `s_menu` VALUES ('6', '0', '用户管理', 'el-icon-_user-group', null, null, '0', '5', '1605787979');
INSERT INTO `s_menu` VALUES ('17', '1', '菜单管理', 'el-icon-s-operation', '/system/menu', 'sys:menu:view', '1', '2', '1605787979');
INSERT INTO `s_menu` VALUES ('37', '1', '登录日志', 'el-icon-date', '/system/loginlog', 'sys:loginlog:view', '1', '3', '1605787979');
INSERT INTO `s_menu` VALUES ('40', '1', '操作日志', 'el-icon-_template', '/system/actionlog', 'sys:operlog:view', '0', '4', '1605787979');
INSERT INTO `s_menu` VALUES ('44', '0', '仪表盘111', 'el-icon-stopwatch', '', null, '1', '1', '1605787979');
INSERT INTO `s_menu` VALUES ('45', '44', '工作台', 'el-icon-monitor', '/dashboard/workplace', null, '1', '1', '1605787979');
INSERT INTO `s_menu` VALUES ('46', '44', '数据分析', 'el-icon-data-analysis', '/dashboard/analysis', null, '1', '2', '1605787979');
INSERT INTO `s_menu` VALUES ('65', '6', '全部用户', 'el-icon-user', '/user/index', null, '1', '1', '1605787979');
INSERT INTO `s_menu` VALUES ('73', '0', '文章管理', 'el-icon-document-copy', null, null, '1', '2', '0');
INSERT INTO `s_menu` VALUES ('74', '73', '新建文章', 'el-icon-_feedback', '/article/new', null, '1', '1', '0');
INSERT INTO `s_menu` VALUES ('75', '73', '文章列表', 'el-icon-tickets', '/article/list', null, '1', '2', '0');
INSERT INTO `s_menu` VALUES ('76', '73', '分类列表', 'el-icon-folder-opened', '/article/classification', null, '1', '3', '0');
INSERT INTO `s_menu` VALUES ('77', '73', '标签列表', 'el-icon-discount', '/article/tags', null, '0', '4', '0');
INSERT INTO `s_menu` VALUES ('78', '1', '站点设置11', 'el-icon-_network', '/system/site', null, '1', '1', '0');
INSERT INTO `s_menu` VALUES ('79', '0', '评论管理', 'el-icon-chat-dot-square', '/comment/index', null, '1', '6', '0');
INSERT INTO `s_menu` VALUES ('85', '0', '用户管理', 'el-icon-_user-group', '/user/index', null, '1', '10', '0');
INSERT INTO `s_menu` VALUES ('86', '0', '社团管理', 'el-icon-bangzhu', '', null, '1', '10', '0');
INSERT INTO `s_menu` VALUES ('87', '86', '社团列表', 'el-icon-_nav', '/societies/index', null, '1', '4', '0');
INSERT INTO `s_menu` VALUES ('88', '86', '添加社团', 'el-icon-_user-add', '/societies/add', null, '1', '2', '0');
INSERT INTO `s_menu` VALUES ('89', '0', '角色管理', 'el-icon-user', '', null, '1', '8', '0');
INSERT INTO `s_menu` VALUES ('90', '89', '角色添加', 'el-icon-circle-plus-outline', '/role/add', null, '1', '1', '0');
INSERT INTO `s_menu` VALUES ('91', '89', '角色列表', 'el-icon-document', '/role/list', null, '1', '2', '0');

-- ----------------------------
-- Table structure for s_notice
-- ----------------------------
DROP TABLE IF EXISTS `s_notice`;
CREATE TABLE `s_notice` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '公告ID',
  `content` varchar(255) NOT NULL COMMENT '公告内容',
  `college_id` int(11) NOT NULL COMMENT '所属社团ID',
  `add_time` int(12) NOT NULL COMMENT '发布时的时间戳，自动生成',
  `status` int(1) NOT NULL DEFAULT '1' COMMENT '1 = 显示,2=不显示',
  PRIMARY KEY (`id`) USING BTREE,
  KEY `college_id_copy_1` (`college_id`) USING BTREE,
  CONSTRAINT `college_id` FOREIGN KEY (`college_id`) REFERENCES `s_societies` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of s_notice
-- ----------------------------
INSERT INTO `s_notice` VALUES ('2', '及尾鳍截哦我去接五七九二', '6', '1629302026', '1');
INSERT INTO `s_notice` VALUES ('3', '及尾鳍截哦我去接五七九二', '6', '1629302040', '1');
INSERT INTO `s_notice` VALUES ('4', '6666空客我破空而去我看赔款脾气', '6', '1629303535', '1');
INSERT INTO `s_notice` VALUES ('5', '撒东', '7', '1629359124', '1');

-- ----------------------------
-- Table structure for s_role
-- ----------------------------
DROP TABLE IF EXISTS `s_role`;
CREATE TABLE `s_role` (
  `id` int(11) NOT NULL COMMENT '角色id',
  `name` varchar(255) NOT NULL COMMENT '角色名',
  `sign` varchar(255) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of s_role
-- ----------------------------
INSERT INTO `s_role` VALUES ('1', '超级管理员', '1:44:89:86:79:85:86:73');
INSERT INTO `s_role` VALUES ('2', '测试', '17:78:87:88:73');

-- ----------------------------
-- Table structure for s_societies
-- ----------------------------
DROP TABLE IF EXISTS `s_societies`;
CREATE TABLE `s_societies` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '社团ID',
  `name` varchar(255) NOT NULL COMMENT '社团名称',
  `logo` varchar(255) NOT NULL COMMENT '社团头像',
  `notice_id` int(11) DEFAULT NULL COMMENT '公告ID',
  `number` int(11) DEFAULT NULL COMMENT '社团人数',
  `department` varchar(255) NOT NULL COMMENT '所属院系',
  `type_id` int(11) NOT NULL COMMENT '社团级别',
  `about` varchar(255) NOT NULL COMMENT '社团简介',
  PRIMARY KEY (`id`) USING BTREE,
  KEY `notice_id` (`notice_id`) USING BTREE,
  KEY `type_id` (`type_id`) USING BTREE,
  CONSTRAINT `notice_id` FOREIGN KEY (`notice_id`) REFERENCES `s_notice` (`id`),
  CONSTRAINT `type_id` FOREIGN KEY (`type_id`) REFERENCES `s_societies_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of s_societies
-- ----------------------------
INSERT INTO `s_societies` VALUES ('6', '计算机协会', 'http://localhost:3000/dist/uploads/5bfb8acf2b27a4ed4c56e9f9d455c835.jpg', null, null, '2', '2', '计算机协会');
INSERT INTO `s_societies` VALUES ('7', '信息中心', 'http://localhost:3000/dist/uploads\\\\eb57d49c0230e89d253fa612463cab88.jpg', null, null, '2', '1', '赛复赛');

-- ----------------------------
-- Table structure for s_societies_type
-- ----------------------------
DROP TABLE IF EXISTS `s_societies_type`;
CREATE TABLE `s_societies_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of s_societies_type
-- ----------------------------
INSERT INTO `s_societies_type` VALUES ('1', '学院');
INSERT INTO `s_societies_type` VALUES ('2', '系部');

-- ----------------------------
-- Table structure for s_task
-- ----------------------------
DROP TABLE IF EXISTS `s_task`;
CREATE TABLE `s_task` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '任务id',
  `title` varchar(255) NOT NULL COMMENT '任务标题',
  `content` varchar(255) NOT NULL COMMENT '任务内容',
  `publisher_college_id` int(11) NOT NULL COMMENT '发布社团',
  `recipient_id` varchar(255) NOT NULL COMMENT '接受者id,可多人',
  PRIMARY KEY (`id`) USING BTREE,
  KEY `publisher_college_id` (`publisher_college_id`) USING BTREE,
  CONSTRAINT `publisher_college_id` FOREIGN KEY (`publisher_college_id`) REFERENCES `s_societies` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of s_task
-- ----------------------------

-- ----------------------------
-- Table structure for s_users
-- ----------------------------
DROP TABLE IF EXISTS `s_users`;
CREATE TABLE `s_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `open_id` varchar(255) DEFAULT NULL COMMENT '微信唯一id',
  `name` varchar(255) DEFAULT NULL COMMENT '姓名',
  `avatar` varchar(255) DEFAULT NULL COMMENT '头像',
  `class` varchar(255) DEFAULT NULL COMMENT '班级',
  `departments` varchar(255) DEFAULT NULL COMMENT '系部',
  `student_id` varchar(255) DEFAULT NULL COMMENT '学号',
  `college_id` int(11) DEFAULT NULL COMMENT '所属社团',
  `phone` varchar(255) DEFAULT NULL COMMENT '手机号',
  `status` int(11) DEFAULT '1' COMMENT '状态0为关闭1为启用',
  `user` varchar(255) DEFAULT NULL COMMENT '账号',
  `pass` varchar(255) DEFAULT NULL COMMENT '密码',
  `salt` varchar(255) DEFAULT NULL COMMENT '密码盐',
  `role` int(1) DEFAULT NULL COMMENT '角色',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of s_users
-- ----------------------------
INSERT INTO `s_users` VALUES ('5', null, null, null, null, null, null, null, null, '1', 'admin', '33b6a749ca776f112555cf32d82072f0', 'H5nJ8c', '1');
INSERT INTO `s_users` VALUES ('6', null, null, null, null, null, null, null, null, '1', 'admin888', '33b6a749ca776f112555cf32d82072f0', 'H5nJ8c', '2');

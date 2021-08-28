/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50726
Source Host           : localhost:3306
Source Database       : societies

Target Server Type    : MYSQL
Target Server Version : 50726
File Encoding         : 65001

Date: 2021-08-28 19:12:14
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
-- Table structure for s_apply_log
-- ----------------------------
DROP TABLE IF EXISTS `s_apply_log`;
CREATE TABLE `s_apply_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) DEFAULT NULL COMMENT '申请人id',
  `societies` int(11) DEFAULT NULL COMMENT '社团id',
  `introduce` text COMMENT '自我介绍',
  `apply_time` int(11) DEFAULT NULL COMMENT '申请时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of s_apply_log
-- ----------------------------

-- ----------------------------
-- Table structure for s_classification
-- ----------------------------
DROP TABLE IF EXISTS `s_classification`;
CREATE TABLE `s_classification` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 DEFAULT NULL COMMENT '分类名称',
  `addtime` varchar(20) DEFAULT NULL COMMENT '添加时间',
  `status` int(1) DEFAULT '1' COMMENT '分类状态，1 = 正常，0 = 禁用',
  `Introduction` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_german2_ci DEFAULT NULL COMMENT '分类简介',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of s_classification
-- ----------------------------
INSERT INTO `s_classification` VALUES ('4', '技术社团1', '1629961235960', '1', '技术类社团');
INSERT INTO `s_classification` VALUES ('5', '学生会', '1629961235960', '1', '学生会组织');
INSERT INTO `s_classification` VALUES ('6', '11', '1629961235960', '1', '11');

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
-- Table structure for s_dynamic
-- ----------------------------
DROP TABLE IF EXISTS `s_dynamic`;
CREATE TABLE `s_dynamic` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) DEFAULT NULL COMMENT '发布人 id',
  `value` longtext COMMENT '动态文字内容',
  `views` int(11) DEFAULT '0' COMMENT '浏览量',
  `create_time` int(11) DEFAULT NULL COMMENT '发布时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of s_dynamic
-- ----------------------------
INSERT INTO `s_dynamic` VALUES ('1', '18', '测试发布动态', '0', '1629901237');
INSERT INTO `s_dynamic` VALUES ('2', '18', '再发一条', '0', '1629901237');
INSERT INTO `s_dynamic` VALUES ('3', '18', '发第三条', '0', '1629901237');
INSERT INTO `s_dynamic` VALUES ('4', '18', '好多条了', '0', '1629901237');
INSERT INTO `s_dynamic` VALUES ('5', '18', '213231321', '0', '1630143514');
INSERT INTO `s_dynamic` VALUES ('6', '18', '你阿巴阿巴像个傻瓜', '0', '1630143554');
INSERT INTO `s_dynamic` VALUES ('7', '18', '小柴睡不醒', '0', '1630143589');
INSERT INTO `s_dynamic` VALUES ('8', '18', '小柒巴巴吧', '0', '1630143738');
INSERT INTO `s_dynamic` VALUES ('9', '18', '测试动态数量', '0', '1630144182');
INSERT INTO `s_dynamic` VALUES ('10', '18', '测试动态数量', '0', '1630144252');
INSERT INTO `s_dynamic` VALUES ('11', '18', '王企鹅王企鹅', '0', '1630144355');
INSERT INTO `s_dynamic` VALUES ('12', '18', '文本域标签', '0', '1630144392');

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
) ENGINE=InnoDB AUTO_INCREMENT=95 DEFAULT CHARSET=utf8mb4 ROW_FORMAT=COMPACT COMMENT='系统菜单表';

-- ----------------------------
-- Records of s_menu
-- ----------------------------
INSERT INTO `s_menu` VALUES ('1', '0', '系统管理', 'el-icon-setting', null, null, '1', '3', '1605787979');
INSERT INTO `s_menu` VALUES ('6', '0', '用户管理', 'el-icon-_user-group', null, null, '1', '5', '1605787979');
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
INSERT INTO `s_menu` VALUES ('87', '86', '社团列表', 'el-icon-_nav', '/societies/index', null, '0', '4', '0');
INSERT INTO `s_menu` VALUES ('88', '86', '添加社团', 'el-icon-_user-add', '/societies/add', null, '1', '2', '0');
INSERT INTO `s_menu` VALUES ('89', '0', '角色管理', 'el-icon-user', '', null, '1', '8', '0');
INSERT INTO `s_menu` VALUES ('91', '89', '角色列表', 'el-icon-document', '/role/index', null, '1', '2', '0');
INSERT INTO `s_menu` VALUES ('92', '86', '社团分类', 'el-icon-_menu', '/societies/class', null, '1', '3', '0');
INSERT INTO `s_menu` VALUES ('93', '86', '社团列表', 'el-icon-_integral', '/societies/list', null, '1', '4', '0');

-- ----------------------------
-- Table structure for s_message
-- ----------------------------
DROP TABLE IF EXISTS `s_message`;
CREATE TABLE `s_message` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fid` int(11) DEFAULT NULL COMMENT '会话列表',
  `send` int(11) DEFAULT NULL COMMENT '发送人',
  `accept` int(11) DEFAULT NULL COMMENT '接收人',
  `message` varchar(255) DEFAULT NULL COMMENT '消息内容',
  `create_time` int(11) DEFAULT NULL COMMENT '发送时间',
  `type` varchar(255) DEFAULT NULL,
  `status` int(1) DEFAULT '0' COMMENT '消息是否未读   0=未读  1=已读',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=352 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of s_message
-- ----------------------------
INSERT INTO `s_message` VALUES ('84', '3', '2', '1', 'zz', '1629898438', 'private', '1');
INSERT INTO `s_message` VALUES ('85', '3', '2', '1', '', '1629898444', 'private', '1');
INSERT INTO `s_message` VALUES ('86', '3', '2', '1', 'aha', '1629898470', 'private', '1');
INSERT INTO `s_message` VALUES ('87', '1', '1', '2', '??', '1629898512', 'private', '1');
INSERT INTO `s_message` VALUES ('88', '1', '1', '2', '1', '1629898568', 'private', '1');
INSERT INTO `s_message` VALUES ('89', '1', '1', '2', '????', '1629898572', 'private', '1');
INSERT INTO `s_message` VALUES ('90', '3', '2', '1', '??', '1629898575', 'private', '1');
INSERT INTO `s_message` VALUES ('91', '1', '1', '2', '0', '1629898647', 'private', '1');
INSERT INTO `s_message` VALUES ('92', '1', '1', '2', '?', '1629898722', 'private', '1');
INSERT INTO `s_message` VALUES ('93', '3', '2', '1', '?', '1629898791', 'private', '1');
INSERT INTO `s_message` VALUES ('94', '3', '2', '1', '???', '1629898833', 'private', '1');
INSERT INTO `s_message` VALUES ('95', '3', '2', '1', '1', '1629899220', 'private', '1');
INSERT INTO `s_message` VALUES ('96', '3', '2', '1', '111', '1629899487', 'private', '1');
INSERT INTO `s_message` VALUES ('97', '3', '2', '1', '333', '1629899495', 'private', '1');
INSERT INTO `s_message` VALUES ('98', '3', '2', '1', 'xxxxxxxx', '1629899505', 'private', '1');
INSERT INTO `s_message` VALUES ('99', '1', '1', '2', 'zzzz', '1629899518', 'private', '1');
INSERT INTO `s_message` VALUES ('100', '3', '2', '1', 'xxx', '1629899524', 'private', '1');
INSERT INTO `s_message` VALUES ('101', '1', '1', '2', 'xx', '1629899760', 'private', '1');
INSERT INTO `s_message` VALUES ('102', '1', '1', '2', 'zz', '1629900136', 'private', '1');
INSERT INTO `s_message` VALUES ('103', '1', '1', '2', 'aa', '1629900321', 'private', '1');
INSERT INTO `s_message` VALUES ('104', '1', '1', '2', 'xxxxx', '1629900342', 'private', '1');
INSERT INTO `s_message` VALUES ('105', '1', '1', '2', 'vv', '1629900369', 'private', '1');
INSERT INTO `s_message` VALUES ('106', '1', '1', '2', 'aaa', '1629900373', 'private', '1');
INSERT INTO `s_message` VALUES ('107', '1', '1', '2', 'k', '1629900440', 'private', '1');
INSERT INTO `s_message` VALUES ('108', '1', '1', '2', 'kkk', '1629900450', 'private', '1');
INSERT INTO `s_message` VALUES ('109', '1', '1', '2', 'k', '1629900481', 'private', '1');
INSERT INTO `s_message` VALUES ('110', '1', '1', '2', 'l', '1629900554', 'private', '1');
INSERT INTO `s_message` VALUES ('111', '1', '1', '2', 'p', '1629900635', 'private', '1');
INSERT INTO `s_message` VALUES ('112', '1', '1', '2', 'zz', '1629900639', 'private', '1');
INSERT INTO `s_message` VALUES ('113', '1', '1', '2', 'yy', '1629900642', 'private', '1');
INSERT INTO `s_message` VALUES ('114', '1', '1', '2', 'iu', '1629900680', 'private', '1');
INSERT INTO `s_message` VALUES ('115', '1', '1', '2', 'oo', '1629900689', 'private', '1');
INSERT INTO `s_message` VALUES ('116', '1', '1', '2', 'yy', '1629900790', 'private', '1');
INSERT INTO `s_message` VALUES ('117', '1', '1', '2', 'ee', '1629900855', 'private', '1');
INSERT INTO `s_message` VALUES ('118', '1', '1', '2', 'bb', '1629900923', 'private', '1');
INSERT INTO `s_message` VALUES ('119', '3', '2', '1', 'v', '1629900932', 'private', '1');
INSERT INTO `s_message` VALUES ('120', '3', '2', '1', 'bbnn', '1629900945', 'private', '1');
INSERT INTO `s_message` VALUES ('121', '1', '1', '2', 'aaaa', '1629900964', 'private', '1');
INSERT INTO `s_message` VALUES ('122', '3', '2', '1', 'dd', '1629901012', 'private', '1');
INSERT INTO `s_message` VALUES ('123', '1', '1', '2', 'jj', '1629901049', 'private', '1');
INSERT INTO `s_message` VALUES ('124', '3', '2', '1', 'pp', '1629901069', 'private', '1');
INSERT INTO `s_message` VALUES ('125', '3', '2', '1', ';;;;;', '1629901075', 'private', '1');
INSERT INTO `s_message` VALUES ('126', '3', '2', '1', 'dfrfwerewrewrw', '1629901081', 'private', '1');
INSERT INTO `s_message` VALUES ('127', '1', '1', '2', 'aaaa', '1629901225', 'private', '1');
INSERT INTO `s_message` VALUES ('128', '1', '1', '2', 'kkkkk', '1629901231', 'private', '1');
INSERT INTO `s_message` VALUES ('129', '3', '2', '1', 'oooo', '1629901237', 'private', '1');
INSERT INTO `s_message` VALUES ('130', '1', '1', '2', '2222', '1629901275', 'private', '1');
INSERT INTO `s_message` VALUES ('131', '1', '1', '2', 'aaaa', '1629901324', 'private', '1');
INSERT INTO `s_message` VALUES ('132', '1', '1', '2', '111', '1629901378', 'private', '1');
INSERT INTO `s_message` VALUES ('133', '1', '1', '2', 'xxxx', '1629901381', 'private', '1');
INSERT INTO `s_message` VALUES ('134', '1', '1', '2', 'aaaaaa', '1629901384', 'private', '1');
INSERT INTO `s_message` VALUES ('135', '1', '1', '2', 'uuuuu', '1629901634', 'private', '1');
INSERT INTO `s_message` VALUES ('136', '1', '1', '2', 'aa', '1629901666', 'private', '1');
INSERT INTO `s_message` VALUES ('137', '1', '1', '2', 'aaaa', '1629901986', 'private', '1');
INSERT INTO `s_message` VALUES ('138', '1', '1', '2', 'xxxxxx', '1629902219', 'private', '1');
INSERT INTO `s_message` VALUES ('139', '4', '2', '3', '??', '1629954527', 'private', '1');
INSERT INTO `s_message` VALUES ('140', '4', '2', '3', '???????????', '1629954538', 'private', '1');
INSERT INTO `s_message` VALUES ('141', '4', '2', '3', '???', '1629954580', 'private', '1');
INSERT INTO `s_message` VALUES ('142', '4', '2', '3', '??????????????', '1629954585', 'private', '1');
INSERT INTO `s_message` VALUES ('143', '4', '2', '3', '1111', '1629954590', 'private', '1');
INSERT INTO `s_message` VALUES ('144', '4', '2', '3', '???', '1629954634', 'private', '1');
INSERT INTO `s_message` VALUES ('145', '4', '2', '3', '1', '1629954707', 'private', '1');
INSERT INTO `s_message` VALUES ('146', '4', '2', '3', '222222', '1629954709', 'private', '1');
INSERT INTO `s_message` VALUES ('147', '4', '2', '3', '在？？？？', '1629954715', 'private', '1');
INSERT INTO `s_message` VALUES ('148', '4', '2', '3', '？', '1629954756', 'private', '1');
INSERT INTO `s_message` VALUES ('149', '4', '2', '3', '1', '1629954757', 'private', '1');
INSERT INTO `s_message` VALUES ('150', '4', '2', '3', '2', '1629954758', 'private', '1');
INSERT INTO `s_message` VALUES ('151', '4', '2', '3', '3', '1629954758', 'private', '1');
INSERT INTO `s_message` VALUES ('152', '4', '2', '3', '4', '1629954759', 'private', '1');
INSERT INTO `s_message` VALUES ('153', '4', '2', '3', '2', '1629954771', 'private', '1');
INSERT INTO `s_message` VALUES ('154', '4', '2', '3', '3', '1629954774', 'private', '1');
INSERT INTO `s_message` VALUES ('155', '4', '2', '3', '111', '1629954835', 'private', '1');
INSERT INTO `s_message` VALUES ('156', '4', '2', '3', '4', '1629956495', 'private', '1');
INSERT INTO `s_message` VALUES ('157', '3', '2', '1', 'qqq', '1629956626', 'private', '1');
INSERT INTO `s_message` VALUES ('158', '3', '2', '1', '222', '1629956637', 'private', '1');
INSERT INTO `s_message` VALUES ('159', '4', '2', '3', '1', '1629956878', 'private', '1');
INSERT INTO `s_message` VALUES ('160', '4', '2', '3', '2', '1629956887', 'private', '1');
INSERT INTO `s_message` VALUES ('161', '4', '2', '3', '3', '1629956922', 'private', '1');
INSERT INTO `s_message` VALUES ('162', '3', '2', '1', '2', '1629956948', 'private', '1');
INSERT INTO `s_message` VALUES ('163', '3', '2', '1', 'yy', '1629956989', 'private', '1');
INSERT INTO `s_message` VALUES ('164', '3', '2', '1', 'ooo', '1629956991', 'private', '1');
INSERT INTO `s_message` VALUES ('165', '3', '2', '1', 'pppppp', '1629956996', 'private', '1');
INSERT INTO `s_message` VALUES ('166', '3', '2', '1', 'hhhh', '1629957004', 'private', '1');
INSERT INTO `s_message` VALUES ('167', '3', '2', '1', '22222', '1629957154', 'private', '1');
INSERT INTO `s_message` VALUES ('168', '3', '2', '1', '333333', '1629957156', 'private', '1');
INSERT INTO `s_message` VALUES ('169', '3', '2', '1', '111111', '1629957158', 'private', '1');
INSERT INTO `s_message` VALUES ('170', '3', '1', '2', '33333', '1629957206', 'private', '1');
INSERT INTO `s_message` VALUES ('171', '3', '1', '2', '?????', '1629957214', 'private', '1');
INSERT INTO `s_message` VALUES ('172', '3', '2', '1', '1111?', '1629957218', 'private', '1');
INSERT INTO `s_message` VALUES ('173', '3', '1', '2', '??????????', '1629957237', 'private', '1');
INSERT INTO `s_message` VALUES ('174', '1', '1', '2', '1111', '1629957297', 'private', '1');
INSERT INTO `s_message` VALUES ('175', '1', '1', '2', '11111', '1629957307', 'private', '1');
INSERT INTO `s_message` VALUES ('176', '1', '1', '2', '22222', '1629957308', 'private', '1');
INSERT INTO `s_message` VALUES ('177', '1', '1', '2', '3333', '1629957310', 'private', '1');
INSERT INTO `s_message` VALUES ('178', '1', '1', '2', '1111', '1629957329', 'private', '1');
INSERT INTO `s_message` VALUES ('179', '3', '2', '1', '2222', '1629957330', 'private', '1');
INSERT INTO `s_message` VALUES ('180', '3', '2', '1', '33333', '1629957332', 'private', '1');
INSERT INTO `s_message` VALUES ('181', '1', '1', '2', '??', '1629957349', 'private', '1');
INSERT INTO `s_message` VALUES ('182', '3', '2', '1', 'yyy', '1629957355', 'private', '1');
INSERT INTO `s_message` VALUES ('183', '1', '1', '2', '麻瓜', '1629957413', 'private', '1');
INSERT INTO `s_message` VALUES ('184', '3', '2', '1', '你tm麻瓜', '1629957418', 'private', '1');
INSERT INTO `s_message` VALUES ('185', '3', '2', '1', '111', '1629958114', 'private', '1');
INSERT INTO `s_message` VALUES ('186', '3', '2', '1', '2222', '1629958134', 'private', '1');
INSERT INTO `s_message` VALUES ('187', '3', '2', '1', '1111', '1629958140', 'private', '1');
INSERT INTO `s_message` VALUES ('188', '3', '2', '1', 'eee', '1629958544', 'private', '1');
INSERT INTO `s_message` VALUES ('189', '3', '2', '1', '1111', '1629958557', 'private', '1');
INSERT INTO `s_message` VALUES ('190', '3', '2', '2', '?', '1629958610', 'private', '1');
INSERT INTO `s_message` VALUES ('191', '3', '1', '2', '1111', '1629958818', 'private', '1');
INSERT INTO `s_message` VALUES ('192', '3', '2', '1', '/////', '1629958833', 'private', '1');
INSERT INTO `s_message` VALUES ('193', '3', '1', '2', '哈哈', '1629958838', 'private', '1');
INSERT INTO `s_message` VALUES ('194', '3', '2', '1', '嘚嘚', '1629958842', 'private', '1');
INSERT INTO `s_message` VALUES ('195', '2', '3', '1', '3333', '1629959003', 'private', '1');
INSERT INTO `s_message` VALUES ('196', '2', '1', '3', '11111', '1629959007', 'private', '1');
INSERT INTO `s_message` VALUES ('197', '4', '2', '3', 'xxx', '1629959015', 'private', '1');
INSERT INTO `s_message` VALUES ('198', '4', '3', '2', '???', '1629959021', 'private', '1');
INSERT INTO `s_message` VALUES ('199', '4', '2', '3', 'ddddd', '1629959024', 'private', '1');
INSERT INTO `s_message` VALUES ('200', '4', '3', '2', 'hahah', '1629959027', 'private', '1');
INSERT INTO `s_message` VALUES ('201', '2', '1', '3', '222222', '1629959030', 'private', '1');
INSERT INTO `s_message` VALUES ('202', '2', '3', '1', '????????', '1629959037', 'private', '1');
INSERT INTO `s_message` VALUES ('203', '2', '3', '1', '测试啦', '1629959057', 'private', '1');
INSERT INTO `s_message` VALUES ('204', '2', '1', '3', '嗯哼', '1629959063', 'private', '1');
INSERT INTO `s_message` VALUES ('205', '4', '2', '3', '你哈哈个锤子', '1629959083', 'private', '1');
INSERT INTO `s_message` VALUES ('206', '4', '3', '2', '？？？？', '1629959088', 'private', '1');
INSERT INTO `s_message` VALUES ('207', '2', '3', '1', '哇哇哇哇哇哇哇哇', '1629959095', 'private', '1');
INSERT INTO `s_message` VALUES ('208', '2', '1', '3', '嗡嗡嗡嗡嗡嗡嗡嗡嗡', '1629959101', 'private', '1');
INSERT INTO `s_message` VALUES ('209', '3', '1', '2', '测试未读', '1629960186', 'private', '0');
INSERT INTO `s_message` VALUES ('210', '3', '1', '2', '1111', '1629960254', 'private', '0');
INSERT INTO `s_message` VALUES ('211', '3', '1', '2', '2222', '1629960261', 'private', '0');
INSERT INTO `s_message` VALUES ('212', '3', '1', '2', '33333', '1629960262', 'private', '0');
INSERT INTO `s_message` VALUES ('213', '3', '1', '2', '1111', '1629960316', 'private', '0');
INSERT INTO `s_message` VALUES ('214', '3', '1', '2', '22222', '1629960318', 'private', '0');
INSERT INTO `s_message` VALUES ('215', '3', '1', '2', '1111', '1629960481', 'private', '0');
INSERT INTO `s_message` VALUES ('216', '3', '1', '2', '33333', '1629960482', 'private', '0');
INSERT INTO `s_message` VALUES ('217', '3', '1', '2', '11111', '1629960594', 'private', '0');
INSERT INTO `s_message` VALUES ('218', '3', '1', '2', '22222', '1629960596', 'private', '0');
INSERT INTO `s_message` VALUES ('219', '3', '1', '2', '111', '1629960637', 'private', '0');
INSERT INTO `s_message` VALUES ('220', '3', '1', '2', '22222', '1629960639', 'private', '0');
INSERT INTO `s_message` VALUES ('221', '3', '1', '2', '111', '1629960701', 'private', '0');
INSERT INTO `s_message` VALUES ('222', '3', '1', '2', '22222', '1629960704', 'private', '0');
INSERT INTO `s_message` VALUES ('223', '3', '1', '2', '11', '1629961321', 'private', '0');
INSERT INTO `s_message` VALUES ('224', '3', '1', '2', '222222', '1629961327', 'private', '0');
INSERT INTO `s_message` VALUES ('225', '3', '1', '2', '333333', '1629961329', 'private', '0');
INSERT INTO `s_message` VALUES ('226', '3', '1', '2', '22222', '1629961330', 'private', '0');
INSERT INTO `s_message` VALUES ('227', '3', '1', '2', '1111', '1629961381', 'private', '0');
INSERT INTO `s_message` VALUES ('228', '3', '1', '2', '111', '1629961489', 'private', '0');
INSERT INTO `s_message` VALUES ('229', '3', '1', '2', '2222', '1629961493', 'private', '0');
INSERT INTO `s_message` VALUES ('230', '3', '1', '2', '11111', '1629961543', 'private', '0');
INSERT INTO `s_message` VALUES ('231', '3', '1', '2', '2222', '1629961545', 'private', '0');
INSERT INTO `s_message` VALUES ('232', '3', '1', '2', '3333', '1629961547', 'private', '0');
INSERT INTO `s_message` VALUES ('233', '3', '1', '2', '32132312', '1629961586', 'private', '0');
INSERT INTO `s_message` VALUES ('234', '3', '1', '2', '2222', '1629961589', 'private', '0');
INSERT INTO `s_message` VALUES ('235', '3', '1', '2', '3333', '1629961626', 'private', '0');
INSERT INTO `s_message` VALUES ('236', '3', '1', '2', '3333', '1629961666', 'private', '0');
INSERT INTO `s_message` VALUES ('237', '3', '2', '1', '1111', '1629961669', 'private', '0');
INSERT INTO `s_message` VALUES ('238', '3', '1', '2', '2222', '1629961677', 'private', '0');
INSERT INTO `s_message` VALUES ('239', '3', '1', '2', '2222', '1629961691', 'private', '0');
INSERT INTO `s_message` VALUES ('240', '3', '1', '2', '11', '1629961693', 'private', '0');
INSERT INTO `s_message` VALUES ('241', '3', '2', '1', '3333', '1629961770', 'private', '0');
INSERT INTO `s_message` VALUES ('242', '3', '1', '2', '22222', '1629961806', 'private', '0');
INSERT INTO `s_message` VALUES ('243', '3', '1', '2', '22222', '1629961817', 'private', '0');
INSERT INTO `s_message` VALUES ('244', '3', '1', '2', '2222', '1629961825', 'private', '0');
INSERT INTO `s_message` VALUES ('245', '3', '1', '2', '3333', '1629961838', 'private', '0');
INSERT INTO `s_message` VALUES ('246', '3', '1', '2', '333', '1629961893', 'private', '0');
INSERT INTO `s_message` VALUES ('247', '3', '1', '2', '222', '1629961948', 'private', '0');
INSERT INTO `s_message` VALUES ('248', '3', '1', '2', '111', '1629962585', 'private', '0');
INSERT INTO `s_message` VALUES ('249', '3', '1', '2', '222', '1629962656', 'private', '0');
INSERT INTO `s_message` VALUES ('250', '3', '1', '2', '33333', '1629962657', 'private', '0');
INSERT INTO `s_message` VALUES ('251', '3', '1', '2', '111', '1629962762', 'private', '0');
INSERT INTO `s_message` VALUES ('252', '3', '1', '2', '2222', '1629962779', 'private', '0');
INSERT INTO `s_message` VALUES ('253', '3', '1', '2', '3333', '1629962781', 'private', '0');
INSERT INTO `s_message` VALUES ('254', '3', '2', '1', '11111', '1629962812', 'private', '0');
INSERT INTO `s_message` VALUES ('255', '3', '2', '1', '222', '1629962825', 'private', '0');
INSERT INTO `s_message` VALUES ('256', '3', '2', '1', '3333', '1629962828', 'private', '0');
INSERT INTO `s_message` VALUES ('257', '3', '2', '1', '5555', '1629962855', 'private', '0');
INSERT INTO `s_message` VALUES ('258', '3', '2', '1', '11111', '1629962871', 'private', '0');
INSERT INTO `s_message` VALUES ('259', '3', '2', '1', '2222', '1629962877', 'private', '0');
INSERT INTO `s_message` VALUES ('260', '3', '2', '1', '1', '1629962940', 'private', '0');
INSERT INTO `s_message` VALUES ('261', '3', '2', '1', '2222', '1629963004', 'private', '0');
INSERT INTO `s_message` VALUES ('262', '3', '2', '1', '111', '1629963027', 'private', '0');
INSERT INTO `s_message` VALUES ('263', '3', '2', '1', '2222', '1629963030', 'private', '0');
INSERT INTO `s_message` VALUES ('264', '3', '2', '1', '111', '1629963058', 'private', '0');
INSERT INTO `s_message` VALUES ('265', '3', '2', '1', '222', '1629963115', 'private', '0');
INSERT INTO `s_message` VALUES ('266', '3', '2', '1', '3333', '1629963129', 'private', '0');
INSERT INTO `s_message` VALUES ('267', '3', '2', '1', '1', '1629963180', 'private', '0');
INSERT INTO `s_message` VALUES ('268', '3', '2', '1', '222', '1629963251', 'private', '0');
INSERT INTO `s_message` VALUES ('269', '3', '2', '1', '3333', '1629963254', 'private', '0');
INSERT INTO `s_message` VALUES ('270', '3', '2', '1', '222', '1629963449', 'private', '0');
INSERT INTO `s_message` VALUES ('271', '3', '2', '1', '1', '1629963540', 'private', '0');
INSERT INTO `s_message` VALUES ('272', '3', '2', '1', '22', '1629963595', 'private', '0');
INSERT INTO `s_message` VALUES ('273', '3', '2', '1', '111', '1629963696', 'private', '0');
INSERT INTO `s_message` VALUES ('274', '3', '2', '1', '11', '1629963911', 'private', '0');
INSERT INTO `s_message` VALUES ('275', '3', '2', '1', '1', '1629964007', 'private', '0');
INSERT INTO `s_message` VALUES ('276', '3', '2', '1', '1', '1629964046', 'private', '0');
INSERT INTO `s_message` VALUES ('277', '3', '1', '2', '1', '1629964066', 'private', '0');
INSERT INTO `s_message` VALUES ('278', '3', '2', '1', '1', '1629964071', 'private', '0');
INSERT INTO `s_message` VALUES ('279', '3', '2', '1', '2', '1629964123', 'private', '0');
INSERT INTO `s_message` VALUES ('280', '3', '2', '1', '222', '1629964127', 'private', '0');
INSERT INTO `s_message` VALUES ('281', '3', '2', '1', '1', '1629964166', 'private', '0');
INSERT INTO `s_message` VALUES ('282', '3', '1', '2', '1', '1629964194', 'private', '0');
INSERT INTO `s_message` VALUES ('283', '3', '2', '1', '222', '1629964291', 'private', '0');
INSERT INTO `s_message` VALUES ('284', '3', '1', '2', '单独', '1629964382', 'private', '0');
INSERT INTO `s_message` VALUES ('285', '3', '2', '1', '222', '1629964392', 'private', '0');
INSERT INTO `s_message` VALUES ('286', '3', '2', '1', '11', '1629964436', 'private', '0');
INSERT INTO `s_message` VALUES ('287', '3', '2', '1', '22', '1629964473', 'private', '0');
INSERT INTO `s_message` VALUES ('288', '3', '1', '2', '333', '1629964481', 'private', '0');
INSERT INTO `s_message` VALUES ('289', '3', '1', '2', '3331', '1629964486', 'private', '0');
INSERT INTO `s_message` VALUES ('290', '3', '1', '2', '222', '1629964490', 'private', '0');
INSERT INTO `s_message` VALUES ('291', '3', '1', '2', '11', '1629964588', 'private', '0');
INSERT INTO `s_message` VALUES ('292', '3', '1', '2', '22', '1629964624', 'private', '0');
INSERT INTO `s_message` VALUES ('293', '3', '1', '2', '11', '1629964699', 'private', '0');
INSERT INTO `s_message` VALUES ('294', '3', '1', '2', '2222', '1629964811', 'private', '0');
INSERT INTO `s_message` VALUES ('295', '3', '1', '2', '33333', '1629964817', 'private', '0');
INSERT INTO `s_message` VALUES ('296', '3', '1', '2', '11', '1629964823', 'private', '0');
INSERT INTO `s_message` VALUES ('297', '3', '1', '2', '33', '1629964850', 'private', '0');
INSERT INTO `s_message` VALUES ('298', '3', '1', '2', '666', '1629964912', 'private', '0');
INSERT INTO `s_message` VALUES ('299', '3', '1', '2', '66666', '1629964917', 'private', '0');
INSERT INTO `s_message` VALUES ('300', '3', '1', '2', '77', '1629964983', 'private', '0');
INSERT INTO `s_message` VALUES ('301', '3', '1', '2', '7777', '1629964986', 'private', '0');
INSERT INTO `s_message` VALUES ('302', '3', '1', '2', '1111', '1629965012', 'private', '0');
INSERT INTO `s_message` VALUES ('303', '3', '2', '1', '1', '1629965062', 'private', '0');
INSERT INTO `s_message` VALUES ('304', '3', '1', '2', '22', '1629965115', 'private', '0');
INSERT INTO `s_message` VALUES ('305', '3', '1', '2', '22', '1629965152', 'private', '0');
INSERT INTO `s_message` VALUES ('306', '3', '1', '2', '333', '1629965230', 'private', '0');
INSERT INTO `s_message` VALUES ('307', '3', '1', '2', '2222', '1629965248', 'private', '0');
INSERT INTO `s_message` VALUES ('308', '3', '1', '2', '11', '1629965268', 'private', '0');
INSERT INTO `s_message` VALUES ('309', '3', '1', '2', '111111', '1629965275', 'private', '0');
INSERT INTO `s_message` VALUES ('310', '3', '2', '1', '3333', '1629965278', 'private', '0');
INSERT INTO `s_message` VALUES ('311', '3', '2', '1', '222', '1629965287', 'private', '0');
INSERT INTO `s_message` VALUES ('312', '3', '1', '2', '1111', '1629966045', 'private', '0');
INSERT INTO `s_message` VALUES ('313', '3', '1', '2', '222', '1629966132', 'private', '0');
INSERT INTO `s_message` VALUES ('314', '3', '2', '1', '22', '1629966175', 'private', '0');
INSERT INTO `s_message` VALUES ('315', '3', '1', '2', '333', '1629966181', 'private', '0');
INSERT INTO `s_message` VALUES ('316', '3', '2', '1', '222', '1629966186', 'private', '0');
INSERT INTO `s_message` VALUES ('317', '3', '1', '2', '333', '1629966197', 'private', '0');
INSERT INTO `s_message` VALUES ('318', '3', '2', '1', '22222', '1629966202', 'private', '0');
INSERT INTO `s_message` VALUES ('319', '3', '2', '1', '2222', '1629966203', 'private', '0');
INSERT INTO `s_message` VALUES ('320', '3', '2', '1', '333', '1629966206', 'private', '0');
INSERT INTO `s_message` VALUES ('321', '3', '2', '1', '2222', '1629966253', 'private', '0');
INSERT INTO `s_message` VALUES ('322', '3', '1', '2', '3333', '1629966260', 'private', '0');
INSERT INTO `s_message` VALUES ('323', '3', '1', '2', '33333', '1629966278', 'private', '0');
INSERT INTO `s_message` VALUES ('324', '3', '1', '2', '33333', '1629966283', 'private', '0');
INSERT INTO `s_message` VALUES ('325', '3', '1', '2', '111', '1629966290', 'private', '0');
INSERT INTO `s_message` VALUES ('326', '3', '1', '2', '222', '1629966294', 'private', '0');
INSERT INTO `s_message` VALUES ('327', '3', '1', '2', '2222', '1629966298', 'private', '0');
INSERT INTO `s_message` VALUES ('328', '3', '1', '2', '3123213213', '1629966300', 'private', '0');
INSERT INTO `s_message` VALUES ('329', '3', '1', '2', '213213213213', '1629966302', 'private', '0');
INSERT INTO `s_message` VALUES ('330', '3', '2', '1', '3213213213123', '1629966309', 'private', '0');
INSERT INTO `s_message` VALUES ('331', '3', '2', '1', '3213213213', '1629966311', 'private', '0');
INSERT INTO `s_message` VALUES ('332', '3', '2', '1', '3213213213', '1629966317', 'private', '0');
INSERT INTO `s_message` VALUES ('333', '3', '2', '1', '2313213123', '1629966318', 'private', '0');
INSERT INTO `s_message` VALUES ('334', '3', '2', '1', '3213213213', '1629966319', 'private', '0');
INSERT INTO `s_message` VALUES ('335', '3', '2', '1', '', '1629966320', 'private', '0');
INSERT INTO `s_message` VALUES ('336', '3', '2', '1', '21321321', '1629966321', 'private', '0');
INSERT INTO `s_message` VALUES ('337', '3', '2', '1', '', '1629966321', 'private', '0');
INSERT INTO `s_message` VALUES ('338', '3', '2', '1', '', '1629966321', 'private', '0');
INSERT INTO `s_message` VALUES ('339', '3', '2', '1', '', '1629966321', 'private', '0');
INSERT INTO `s_message` VALUES ('340', '3', '2', '1', '', '1629966322', 'private', '0');
INSERT INTO `s_message` VALUES ('341', '3', '2', '1', '', '1629966322', 'private', '0');
INSERT INTO `s_message` VALUES ('342', '3', '2', '1', '', '1629966322', 'private', '0');
INSERT INTO `s_message` VALUES ('343', '3', '2', '1', '', '1629966322', 'private', '0');
INSERT INTO `s_message` VALUES ('344', '3', '1', '2', '2222', '1629966441', 'private', '0');
INSERT INTO `s_message` VALUES ('345', '3', '1', '2', '22222', '1629966443', 'private', '0');
INSERT INTO `s_message` VALUES ('346', '3', '1', '2', '额前恶趣味', '1629966446', 'private', '0');
INSERT INTO `s_message` VALUES ('347', '3', '2', '1', '32131321', '1629966451', 'private', '0');
INSERT INTO `s_message` VALUES ('348', '3', '2', '1', '213131321', '1629966452', 'private', '0');
INSERT INTO `s_message` VALUES ('349', '3', '1', '2', '2222', '1629966499', 'private', '0');
INSERT INTO `s_message` VALUES ('350', '3', '1', '2', '2222222', '1629966501', 'private', '0');
INSERT INTO `s_message` VALUES ('351', '3', '1', '2', '11111', '1629966633', 'private', '0');

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
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '角色id',
  `name` varchar(255) NOT NULL COMMENT '角色名',
  `sign` varchar(255) NOT NULL COMMENT '角色权限',
  `introduction` varchar(255) DEFAULT NULL COMMENT '角色介绍',
  `status` int(1) NOT NULL COMMENT '角色状态：0 禁用 1 启用',
  `sort` int(10) DEFAULT NULL COMMENT '排序',
  `create_time` varchar(20) NOT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of s_role
-- ----------------------------
INSERT INTO `s_role` VALUES ('3', '超级管理', '17:88:92:93:91', '最高管理人员', '1', '3', '1629551540226');
INSERT INTO `s_role` VALUES ('4', '测试', '17:37:40:78:65:45:46:88:92:93', '测试', '1', '3', '1629965660393');

-- ----------------------------
-- Table structure for s_session
-- ----------------------------
DROP TABLE IF EXISTS `s_session`;
CREATE TABLE `s_session` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) DEFAULT NULL COMMENT '创建会话id  即 首次发送消息用户id',
  `accept` int(11) DEFAULT NULL COMMENT '对象用户id',
  `last_message` varchar(255) DEFAULT NULL COMMENT '最后一条消息',
  `last_datetime` varchar(255) DEFAULT NULL COMMENT '最后更新时间',
  `u_unread` int(11) DEFAULT '0' COMMENT '对应 uid 的未读消息',
  `a_unread` int(11) DEFAULT '0' COMMENT '对应 accept 的未读消息',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of s_session
-- ----------------------------
INSERT INTO `s_session` VALUES ('2', '1', '3', '嗡嗡嗡嗡嗡嗡嗡嗡嗡', '1629959101', '0', '2');
INSERT INTO `s_session` VALUES ('3', '2', '1', '11111', '1629966633', '0', '0');
INSERT INTO `s_session` VALUES ('4', '2', '3', '？？？？', '1629959088', '0', '0');

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
  `class_id` int(11) DEFAULT NULL COMMENT '社团分类id',
  `welcome_status` int(1) DEFAULT NULL COMMENT '社团纳新状态',
  `hots` int(20) DEFAULT '0' COMMENT '社团热度',
  `admin` int(11) DEFAULT NULL COMMENT '管理员id',
  PRIMARY KEY (`id`) USING BTREE,
  KEY `notice_id` (`notice_id`) USING BTREE,
  KEY `type_id` (`type_id`) USING BTREE,
  KEY `class_id` (`class_id`) USING BTREE,
  CONSTRAINT `class_id` FOREIGN KEY (`class_id`) REFERENCES `s_classification` (`id`),
  CONSTRAINT `notice_id` FOREIGN KEY (`notice_id`) REFERENCES `s_notice` (`id`),
  CONSTRAINT `type_id` FOREIGN KEY (`type_id`) REFERENCES `s_societies_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of s_societies
-- ----------------------------
INSERT INTO `s_societies` VALUES ('6', '计算机协会', 'http://localhost:3000/dist/uploads/5bfb8acf2b27a4ed4c56e9f9d455c835.jpg', '2', '111', '2', '2', '计算机协会', '4', '0', '2', '15');
INSERT INTO `s_societies` VALUES ('7', '信息中心', 'http://localhost:3000/dist/uploads\\\\eb57d49c0230e89d253fa612463cab88.jpg', '3', null, '2', '1', '赛复赛', '5', '0', '0', '1');
INSERT INTO `s_societies` VALUES ('8', '11', 'http://localhost:3000/dist/uploads\03f774e3f1b4f4b6d52326f6e44ab88f.jpg', null, null, '1', '1', '11', null, null, '0', '2');
INSERT INTO `s_societies` VALUES ('9', '11', 'http://localhost:3000/dist/uploadsca4b90bdbd7091f4ffd6513ff89864ab.jpg', null, null, '2', '1', '11', null, null, '0', '3');
INSERT INTO `s_societies` VALUES ('11', '5554', '5554', '3', '11', '2', '1', '11', '5', '0', '0', '4');
INSERT INTO `s_societies` VALUES ('12', 'dsdd', 'dsdsd', '2', '22', '2', '1', '22', '4', '0', '0', '5');
INSERT INTO `s_societies` VALUES ('13', 'ds', 'dsd', '2', '22', '2', '1', '22', '4', '0', '0', '6');

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
-- Table structure for s_subscribe
-- ----------------------------
DROP TABLE IF EXISTS `s_subscribe`;
CREATE TABLE `s_subscribe` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `be_subscribe` int(11) DEFAULT NULL COMMENT '被关注id',
  `subscribe` int(11) DEFAULT NULL COMMENT '关注id',
  `update_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of s_subscribe
-- ----------------------------
INSERT INTO `s_subscribe` VALUES ('27', '3', '18', '1630086096');
INSERT INTO `s_subscribe` VALUES ('38', '1', '18', '1630129333');
INSERT INTO `s_subscribe` VALUES ('39', '2', '18', '1630129335');

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
  PRIMARY KEY (`id`) USING BTREE,
  KEY `role` (`role`) USING BTREE,
  CONSTRAINT `role` FOREIGN KEY (`role`) REFERENCES `s_role` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of s_users
-- ----------------------------
INSERT INTO `s_users` VALUES ('5', null, '柯南', null, null, null, null, null, null, '1', 'svanrj', 'cdc1b953046cddd69f0258c50f8fd726', 'H5nJ8c', '3');
INSERT INTO `s_users` VALUES ('15', null, '叁柒', null, null, null, null, null, null, '1', 'admin', '33b6a749ca776f112555cf32d82072f0', 'H5nJ8c', '3');
INSERT INTO `s_users` VALUES ('16', null, 'weilaikeqi333', null, null, null, null, null, null, '1', 'weilaikeqi333', '2b4b14eee5d08c4f93417ed0f68c6266', 'H5nJ8c', '4');
INSERT INTO `s_users` VALUES ('18', 'oCyJb4xF_IpSqyyqn5kEiGG7UxeM', '叁柒', 'https://avatars.githubusercontent.com/u/75518418?v=4', '123', '123', '123456', '-1', '13333333333', '1', null, null, null, null);

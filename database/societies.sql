/*
 Navicat Premium Data Transfer

 Source Server         : mysql5
 Source Server Type    : MySQL
 Source Server Version : 50726
 Source Host           : localhost:3306
 Source Schema         : societies

 Target Server Type    : MySQL
 Target Server Version : 50726
 File Encoding         : 65001

 Date: 18/08/2021 20:07:18
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for s_activity
-- ----------------------------
DROP TABLE IF EXISTS `s_activity`;
CREATE TABLE `s_activity`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '活动id',
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '活动标题',
  `content` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '活动内容',
  `publisher_college_id` int(11) NOT NULL COMMENT '发布社团',
  `recipient_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '-1' COMMENT '接受者id,可多人，为-1时表示所有人可接收',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `publisher_college_id_copy_1`(`publisher_college_id`) USING BTREE,
  CONSTRAINT `publisher_college_id_copy_1` FOREIGN KEY (`publisher_college_id`) REFERENCES `s_college` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of s_activity
-- ----------------------------

-- ----------------------------
-- Table structure for s_classification
-- ----------------------------
DROP TABLE IF EXISTS `s_classification`;
CREATE TABLE `s_classification`  (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `pid` int(10) NULL DEFAULT 0 COMMENT '父分类id',
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '分类名称',
  `path` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_german2_ci NULL DEFAULT NULL COMMENT '分类路由',
  `addtime` int(10) NULL DEFAULT NULL COMMENT '添加时间',
  `sort` int(10) NULL DEFAULT NULL COMMENT '分类排序',
  `status` int(1) NULL DEFAULT 1 COMMENT '分类状态，1 = 正常，0 = 禁用',
  `icon` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_german2_ci NULL DEFAULT NULL COMMENT '分类 icon',
  `Introduction` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_german2_ci NULL DEFAULT NULL COMMENT '分类简介',
  `type` int(1) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 17 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of s_classification
-- ----------------------------
INSERT INTO `s_classification` VALUES (1, 0, '知识笔记', '/notes', 0, 1, 1, 'el-icon-circle-plus-outline', '测试简介1111', 1);
INSERT INTO `s_classification` VALUES (3, 0, '干货分享', '/share', 0, 2, 1, '', '嘻嘻嘻啦啦啦', 1);

-- ----------------------------
-- Table structure for s_college
-- ----------------------------
DROP TABLE IF EXISTS `s_college`;
CREATE TABLE `s_college`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '社团ID',
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '社团名称',
  `avatar` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '社团头像',
  `notice` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '公告',
  `number` int(11) NOT NULL COMMENT '社团人数',
  `department` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '所属院系',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of s_college
-- ----------------------------

-- ----------------------------
-- Table structure for s_department
-- ----------------------------
DROP TABLE IF EXISTS `s_department`;
CREATE TABLE `s_department`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of s_department
-- ----------------------------
INSERT INTO `s_department` VALUES (1, '学院');
INSERT INTO `s_department` VALUES (2, '信息工程系');
INSERT INTO `s_department` VALUES (3, '机械工程系');
INSERT INTO `s_department` VALUES (4, '电气工程系');
INSERT INTO `s_department` VALUES (5, '智能控制系');
INSERT INTO `s_department` VALUES (6, '车辆工程系');
INSERT INTO `s_department` VALUES (7, '经济管理系');

-- ----------------------------
-- Table structure for s_menu
-- ----------------------------
DROP TABLE IF EXISTS `s_menu`;
CREATE TABLE `s_menu`  (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `pid` int(11) UNSIGNED NOT NULL DEFAULT 0 COMMENT '父级ID',
  `title` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '菜单标题',
  `icon` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '图标',
  `path` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '菜单路径',
  `permission` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '权限标识',
  `status` tinyint(1) UNSIGNED NULL DEFAULT 1 COMMENT '是否显示：1显示 2不显示',
  `sort` smallint(5) UNSIGNED NULL DEFAULT 125 COMMENT '显示顺序',
  `create_time` int(11) UNSIGNED NOT NULL DEFAULT 0 COMMENT '创建时间',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `index_pid`(`pid`) USING BTREE,
  INDEX `index_name`(`title`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 89 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '系统菜单表' ROW_FORMAT = COMPACT;

-- ----------------------------
-- Records of s_menu
-- ----------------------------
INSERT INTO `s_menu` VALUES (1, 0, '系统管理', 'el-icon-setting', NULL, NULL, 1, 3, 1605787979);
INSERT INTO `s_menu` VALUES (6, 0, '用户管理', 'el-icon-_user-group', NULL, NULL, 0, 5, 1605787979);
INSERT INTO `s_menu` VALUES (17, 1, '菜单管理', 'el-icon-s-operation', '/system/menu', 'sys:menu:view', 1, 2, 1605787979);
INSERT INTO `s_menu` VALUES (37, 1, '登录日志', 'el-icon-date', '/system/loginlog', 'sys:loginlog:view', 1, 3, 1605787979);
INSERT INTO `s_menu` VALUES (40, 1, '操作日志', 'el-icon-_template', '/system/actionlog', 'sys:operlog:view', 0, 4, 1605787979);
INSERT INTO `s_menu` VALUES (44, 0, '仪表盘111', 'el-icon-stopwatch', '', NULL, 1, 1, 1605787979);
INSERT INTO `s_menu` VALUES (45, 44, '工作台', 'el-icon-monitor', '/dashboard/workplace', NULL, 0, 1, 1605787979);
INSERT INTO `s_menu` VALUES (46, 44, '数据分析', 'el-icon-data-analysis', '/dashboard/analysis', NULL, 1, 2, 1605787979);
INSERT INTO `s_menu` VALUES (65, 6, '全部用户', 'el-icon-user', '/user/index', NULL, 1, 1, 1605787979);
INSERT INTO `s_menu` VALUES (73, 0, '文章管理', 'el-icon-document-copy', NULL, NULL, 1, 2, 0);
INSERT INTO `s_menu` VALUES (74, 73, '新建文章', 'el-icon-_feedback', '/article/new', NULL, 1, 1, 0);
INSERT INTO `s_menu` VALUES (75, 73, '文章列表', 'el-icon-tickets', '/article/list', NULL, 1, 2, 0);
INSERT INTO `s_menu` VALUES (76, 73, '分类列表', 'el-icon-folder-opened', '/article/classification', NULL, 1, 3, 0);
INSERT INTO `s_menu` VALUES (77, 73, '标签列表', 'el-icon-discount', '/article/tags', NULL, 0, 4, 0);
INSERT INTO `s_menu` VALUES (78, 1, '站点设置11', 'el-icon-_network', '/system/site', NULL, 1, 1, 0);
INSERT INTO `s_menu` VALUES (79, 0, '评论管理', 'el-icon-chat-dot-square', '/comment/index', NULL, 1, 6, 0);
INSERT INTO `s_menu` VALUES (85, 0, '用户管理', 'el-icon-_user-group', '/user/index', NULL, 1, 10, 0);
INSERT INTO `s_menu` VALUES (86, 0, '社团管理', 'el-icon-bangzhu', '', NULL, 1, 10, 0);
INSERT INTO `s_menu` VALUES (87, 86, '社团列表', 'el-icon-_nav', '/societies/index', NULL, 1, 4, 0);
INSERT INTO `s_menu` VALUES (88, 86, '添加社团', 'el-icon-_user-add', '/societies/add', NULL, 1, 2, 0);

-- ----------------------------
-- Table structure for s_notice
-- ----------------------------
DROP TABLE IF EXISTS `s_notice`;
CREATE TABLE `s_notice`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '公告ID',
  `content` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '公告内容',
  `college_id` int(11) NOT NULL COMMENT '所属社团ID',
  `nowtime` datetime(0) NOT NULL ON UPDATE CURRENT_TIMESTAMP(0) COMMENT '发布时的时间戳，自动生成',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of s_notice
-- ----------------------------

-- ----------------------------
-- Table structure for s_powers
-- ----------------------------
DROP TABLE IF EXISTS `s_powers`;
CREATE TABLE `s_powers`  (
  `id` int(11) NOT NULL COMMENT '权限id',
  `sign` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '权限标识',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of s_powers
-- ----------------------------

-- ----------------------------
-- Table structure for s_remember
-- ----------------------------
DROP TABLE IF EXISTS `s_remember`;
CREATE TABLE `s_remember`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户uid',
  `nickname` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '用户昵称',
  `username` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '用户名',
  `password` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '用户密码',
  `avatar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `salt` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '密码盐',
  `status` int(1) NULL DEFAULT NULL COMMENT '用户状态，0 = 禁用，1 = 正常',
  `identity` int(1) NULL DEFAULT 0 COMMENT '用户身份，0 = 用户，1 = 管理员',
  `addtime` int(10) NULL DEFAULT NULL COMMENT '注册时间',
  `lasttime` int(10) NULL DEFAULT NULL COMMENT '登陆时间',
  `addip` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '注册IP',
  `loginip` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '登陆IP',
  `is_delect` int(1) NULL DEFAULT 0 COMMENT '是否删除',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of s_remember
-- ----------------------------
INSERT INTO `s_remember` VALUES (1, '小柒', 'admin', '33b6a749ca776f112555cf32d82072f0', 'https://p.ananas.chaoxing.com/star3/origin/9c06d6446cf85b07af5f3d495504deed.png', 'H5nJ8c', 1, 1, 1615106293, 1615106293, '42.89.112.153', '127.0.0.1', 0);
INSERT INTO `s_remember` VALUES (3, '小器器', '55076323@qq.com', '49a90765287e19b5891c92b2661e3695', NULL, 'XnDyuB', 1, 0, 1615120102, NULL, '127.0.0.1', NULL, 0);
INSERT INTO `s_remember` VALUES (5, '文强', 'zaiceshi ', '813b0be1640369c3713be61c7ac0f070', NULL, 'JjMcli', 0, 0, 1615120737, NULL, '127.0.0.1', NULL, 0);
INSERT INTO `s_remember` VALUES (6, '嘻嘻', NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, 0);
INSERT INTO `s_remember` VALUES (7, '嘻嘻', NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, 0);

-- ----------------------------
-- Table structure for s_role
-- ----------------------------
DROP TABLE IF EXISTS `s_role`;
CREATE TABLE `s_role`  (
  `id` int(11) NOT NULL COMMENT '角色id',
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '角色名',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of s_role
-- ----------------------------

-- ----------------------------
-- Table structure for s_role_powers_tie
-- ----------------------------
DROP TABLE IF EXISTS `s_role_powers_tie`;
CREATE TABLE `s_role_powers_tie`  (
  `role_id` int(11) NOT NULL COMMENT '角色ID',
  `powers_id` int(11) NOT NULL COMMENT '权限ID'
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of s_role_powers_tie
-- ----------------------------

-- ----------------------------
-- Table structure for s_societies_type
-- ----------------------------
DROP TABLE IF EXISTS `s_societies_type`;
CREATE TABLE `s_societies_type`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of s_societies_type
-- ----------------------------
INSERT INTO `s_societies_type` VALUES (1, '学院');
INSERT INTO `s_societies_type` VALUES (2, '系部');

-- ----------------------------
-- Table structure for s_task
-- ----------------------------
DROP TABLE IF EXISTS `s_task`;
CREATE TABLE `s_task`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '任务id',
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '任务标题',
  `content` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '任务内容',
  `publisher_college_id` int(11) NOT NULL COMMENT '发布社团',
  `recipient_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '接受者id,可多人',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `publisher_college_id`(`publisher_college_id`) USING BTREE,
  CONSTRAINT `s_task_ibfk_1` FOREIGN KEY (`publisher_college_id`) REFERENCES `s_college` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of s_task
-- ----------------------------

-- ----------------------------
-- Table structure for s_user_role_tie
-- ----------------------------
DROP TABLE IF EXISTS `s_user_role_tie`;
CREATE TABLE `s_user_role_tie`  (
  `user_id` int(11) NOT NULL COMMENT '用户ID',
  `role_id` int(11) NOT NULL COMMENT '角色ID'
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of s_user_role_tie
-- ----------------------------

-- ----------------------------
-- Table structure for s_users
-- ----------------------------
DROP TABLE IF EXISTS `s_users`;
CREATE TABLE `s_users`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `openid` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `avatar` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `class` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `departments` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `studentId` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `college_id` int(11) NOT NULL DEFAULT -1 COMMENT '所属社团，为-1时为新人用户',
  `phone` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '手机号',
  `status` int(1) NULL DEFAULT 1 COMMENT '用户状态 0：禁用，1：启用',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of s_users
-- ----------------------------
INSERT INTO `s_users` VALUES (2, 'oCyJb4xF_IpSqyyqn5kEiGG7UxeM', '叁柒123456', NULL, 'XX2021', '信息工程系', '123456', -1, '13333333333', 1);

SET FOREIGN_KEY_CHECKS = 1;

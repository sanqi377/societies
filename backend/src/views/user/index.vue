<template>
  <el-card class="ele-body" shadow="never">
    <el-form
      label-width="77px"
      class="ele-form-search"
      @keyup.enter.native="query"
      @submit.native.prevent
    >
      <el-row :gutter="15">
        <el-col :md="6" :sm="12">
          <el-form-item label="用户名:">
            <el-input
              v-model="where.username"
              placeholder="请输入用户名"
              clearable
            />
          </el-form-item>
        </el-col>
        <el-col :md="9" :sm="12">
          <div class="ele-form-actions">
            <el-button
              @click="query()"
              type="primary"
              icon="el-icon-search"
              class="ele-btn-icon is-plain"
              >查询</el-button
            >
            <el-button
              @click="add()"
              type="primary"
              icon="el-icon-plus"
              class="ele-btn-icon is-plain"
              >添加</el-button
            >
          </div>
        </el-col>
      </el-row>
    </el-form>
    <el-table :data="data" border style="width: 100%">
      <el-table-column type="index" label="编号" width="50" align="center">
      </el-table-column>
      <el-table-column prop="avatar" label="头像" align="center">
        <template slot-scope="{ row }">
          <el-avatar shape="square" :size="50" :src="row.avatar"></el-avatar>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" align="center">
      </el-table-column>
      <el-table-column prop="studentId" label="学号" align="center">
      </el-table-column>
      <el-table-column prop="departments" label="系部" align="center">
      </el-table-column>
      <el-table-column prop="class" label="班级" align="center">
      </el-table-column>
      <el-table-column prop="phone" label="手机号" align="center">
      </el-table-column>

      <el-table-column prop="status" label="状态" width="100" align="center">
        <template slot-scope="{ row }">
          <el-switch
            v-model="row.status"
            active-color="#00A854"
            :active-value="1"
            inactive-color="#F04134"
            :inactive-value="0"
            @change="isNo(row)"
          >
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column prop="identity" label="身份" width="120" align="center">
        <template slot-scope="{ row }">
          {{ row.role.name }}
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
        min-width="180"
        align="center"
        :resizable="false"
        fixed="right"
      >
        <template slot-scope="{ row }">
          <el-link
            @click="edit(row)"
            icon="el-icon-edit"
            type="primary"
            :underline="false"
            >修改</el-link
          >
          <el-popconfirm
            title="确定要删除此菜单吗？"
            @confirm="remove(row)"
            class="ele-action"
          >
            <el-link
              slot="reference"
              icon="el-icon-delete"
              type="danger"
              :underline="false"
              >删除</el-link
            >
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      :title="form.id ? '修改用户' : '添加用户'"
      :visible.sync="showEdit"
      width="600px"
      @closed="form = {}"
      :destroy-on-close="true"
      custom-class="ele-dialog-form"
      :lock-scroll="false"
    >
      <el-form
        :model="form"
        ref="editForm"
        :rules="rules"
        label-width="82px"
        @keyup.enter.native="save"
        @submit.native.prevent
      >
        <el-row :gutter="15">
          <el-col :sm="12">
            <el-form-item label="用户名:" prop="user">
              <el-input
                v-model="form.user"
                placeholder="请输入用户名"
                clearable
              />
            </el-form-item>
            <el-form-item label="密码:" prop="password">
              <el-input
                v-model="form.password"
                placeholder="请输入密码"
                clearable
                show-password
              />
            </el-form-item>
            <el-form-item label="身份:">
              <el-select v-model="form.role" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :sm="12">
            <el-form-item label="昵称:" prop="name">
              <el-input
                v-model="form.name"
                placeholder="请输入昵称"
                clearable
              />
            </el-form-item>
            <el-form-item label="状态:">
              <el-radio-group v-model="form.status">
                <el-radio :label="1">正常</el-radio>
                <el-radio :label="0">禁用</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer">
        <el-button @click="showEdit = false">取消</el-button>&nbsp;
        <el-button type="primary" @click="save">保存</el-button>
      </div>
    </el-dialog>
  </el-card>
</template>
<script>
export default {
  data() {
    return {
      data: [], // 列表数据
      showEdit: false, // 是否显示表单弹窗
      form: {}, // 表单数据
      where: {}, // 搜索条件
      options: [],
      rules: {
        // 表单验证规则
        user: [
          {
            required: true,
            message: "请输入登录名",
            trigger: "blur",
          },
        ],
        name: [
          {
            required: true,
            message: "请输入昵称",
            trigger: "blur",
          },
        ],
        // password: [
        //     {
        //         required: true,
        //         message: "请输入密码",
        //         trigger: "blur",
        //     },
        // ],
      },
    };
  },
  created() {
    this.query();
    this.getRoleSign();
  },
  methods: {
    query() {
      this.loading = true;
      this.$api.user
        .getUsers(this.where)
        .then((res) => {
          this.loading = false;
          this.data = res;
        })
        .catch((e) => {
          this.loading = false;
          this.$message.error(e.message);
        });
    },
    isNo(res) {
      this.$api.user
        .getUsers({ status: res.status, id: res.id })
        .then((res) => {
          this.$message({
            type: "success",
            message: res.msg,
          });
        });
    },
    getRoleSign() {
      this.$api.role.getRoleSign().then((res) => {
        this.options = res;
      });
    },
    add(row) {
      this.form = { status: 1 };
      this.showEdit = true;
    },
    edit(row) {
      this.form = row;
      this.showEdit = true;
    },
    save() {
      this.$refs["editForm"].validate((valid) => {
        if (valid) {
          const loading = this.$loading({ lock: true });
          this.$api.user
            .save(this.form)
            .then((res) => {
              if (res) {
                loading.close();
                this.showEdit = false;
                this.$message({
                  type: "success",
                  message: res.msg,
                });
              } else {
                loading.close();
              }
            })
            .catch((e) => {
              loading.close();
              this.$message.error(e.message);
            });
        } else {
          return false;
        }
      });
    },
  },
};
</script>
<template>
  <div>
    <h1>Employee List</h1>
    <table>
      <tr>
        <td>Name</td>
        <td>Position</td>
        <td>Age</td>
        <td>Start Date</td>
        <td>Salary</td>
      </tr>
      <tr v-for="employee in employee_list" v-bind:key="employee.id">
        <td>{{ employee.name }}</td>
        <td>{{ employee.position }}</td>
        <td>{{ employee.age }}</td>
        <td>{{ employee.start_date }}</td>
        <td>{{ employee.salary }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Employees",
  data() {
    return { employee_list: undefined };
  },
  mounted() {
    axios.get("http://admin-panel-api.test/api/get-employee-list-test")
      .then((response) => {
        this.employee_list = response.data.employee_list;
      });
  }
};
</script>

<style scoped>
table, td, th {
  border: 1px solid #ddd;
  text-align: left;
}

table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  padding: 5px;
}
</style>
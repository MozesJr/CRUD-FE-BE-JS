<template>
  <div>
    <h1>Student List</h1>
    <router-link to="/add-student">
      <button class="btn btn-primary mb-3">Add Student</button>
    </router-link>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Student ID</th>
          <th>Major</th>
          <th>Gender</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in students" :key="student._id">
          <td>{{ student.name }}</td>
          <td>{{ student.studentId }}</td>
          <td>{{ student.major ? student.major.name : 'Unknown' }}</td>
          <td>{{ student.gender }}</td>
          <td>
            <router-link :to="{ name: 'EditStudent', params: { id: student._id } }">
              <button class="btn btn-warning btn-sm">Edit</button>
            </router-link>
            <button class="btn btn-danger btn-sm" @click="deleteStudent(student._id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      students: []
    };
  },
  created() {
    this.fetchStudents();
  },
  methods: {
    async fetchStudents() {
      try {
        const response = await axios.get('http://localhost:5000/api/students');
        this.students = response.data;
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    },
    async deleteStudent(id) {
      try {
        await axios.delete(`http://localhost:5000/api/students/${id}`);
        this.fetchStudents();
      } catch (error) {
        console.error('Error deleting student:', error);
      }
    }
  }
};
</script>

<template>
  <div>
    <h1>Add Student</h1>
    <form @submit.prevent="addStudent">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" class="form-control" required />
      </div>
      <div class="form-group">
        <label for="studentId">Student ID:</label>
        <input type="text" id="studentId" v-model="studentId" class="form-control" required />
      </div>
      <div class="form-group">
        <label for="major">Major:</label>
        <select id="major" v-model="major" class="form-control" required>
          <option v-for="major in majors" :key="major._id" :value="major._id">{{ major.name }}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="gender">Gender:</label>
        <select id="gender" v-model="gender" class="form-control" required>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary">Add Student</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      name: '',
      studentId: '',
      major: '',
      gender: '',
      majors: []
    };
  },
  created() {
    this.fetchMajors();
  },
  methods: {
    async fetchMajors() {
      try {
        const response = await axios.get('http://localhost:5000/api/majors');
        this.majors = response.data;
      } catch (error) {
        console.error('Error fetching majors:', error);
      }
    },
    async addStudent() {
      try {
        const newStudent = {
          name: this.name,
          studentId: this.studentId,
          major: this.major,
          gender: this.gender
        };
        await axios.post('http://localhost:5000/api/students', newStudent);
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Student has been added successfully!'
        }).then(() => {
          this.$router.push({ name: 'Home' });
        });
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to add student!'
        });
        console.error('Error adding student:', error);
      }
    }
  }
};
</script>

<style>
/* Your CSS styles */
</style>

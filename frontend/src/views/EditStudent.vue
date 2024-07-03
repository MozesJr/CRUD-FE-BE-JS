<template>
  <div>
    <h1>Edit Student</h1>
    <form @submit.prevent="updateStudent">
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
      <button type="submit" class="btn btn-primary">Update Student</button>
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
    this.fetchStudent();
    this.fetchMajors();
  },
  methods: {
    async fetchStudent() {
      try {
        const response = await axios.get(`http://localhost:5000/api/students/${this.$route.params.id}`);
        const student = response.data;
        this.name = student.name;
        this.studentId = student.studentId;
        this.major = student.major._id;
        this.gender = student.gender;
      } catch (error) {
        console.error('Error fetching student:', error);
      }
    },
    async fetchMajors() {
      try {
        const response = await axios.get('http://localhost:5000/api/majors');
        this.majors = response.data;
      } catch (error) {
        console.error('Error fetching majors:', error);
      }
    },
    async updateStudent() {
      try {
        const updatedStudent = {
          name: this.name,
          studentId: this.studentId,
          major: this.major,
          gender: this.gender
        };
        await axios.put(`http://localhost:5000/api/students/${this.$route.params.id}`, updatedStudent);
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Student has been updated successfully!'
        }).then(() => {
          this.$router.push({ name: 'Home' });
        });
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to update student!'
        });
        console.error('Error updating student:', error);
      }
    }
  }
};
</script>

<style>
/* Your CSS styles */
</style>

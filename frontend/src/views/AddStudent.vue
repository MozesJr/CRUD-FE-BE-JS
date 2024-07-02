<template>
    <div>
      <h1>Add Student</h1>
      <form @submit.prevent="handleSubmit">
        <div class="mb-3">
          <label>Name:</label>
          <input v-model="student.name" required class="form-control" />
        </div>
        <div class="mb-3">
          <label>Student ID:</label>
          <input v-model="student.studentId" required class="form-control" />
        </div>
        <div class="mb-3">
          <label>Major:</label>
          <input v-model="student.major" required class="form-control" />
        </div>
        <div class="mb-3">
          <label>Gender:</label>
          <input v-model="student.gender" required class="form-control" />
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
        student: {
          name: '',
          studentId: '',
          major: '',
          gender: '',
        },
      };
    },
    methods: {
      async handleSubmit() {
        await axios.post('http://localhost:5000/api/students', this.student);
        Swal.fire('Added!', 'Student has been added.', 'success');
        this.$router.push('/');
      },
    },
  };
  </script>
  
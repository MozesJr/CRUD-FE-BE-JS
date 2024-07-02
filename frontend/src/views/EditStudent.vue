<template>
    <div>
      <h1>Edit Student</h1>
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
        student: {
          name: '',
          studentId: '',
          major: '',
          gender: '',
        },
      };
    },
    async created() {
      const id = this.$route.params.id;
      try {
        const response = await axios.get(`http://localhost:5000/api/students/${id}`);
        this.student = response.data;
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    },
    methods: {
      async handleSubmit() {
        const id = this.$route.params.id;
        try {
          await axios.put(`http://localhost:5000/api/students/${id}`, this.student);
          Swal.fire('Updated!', 'Student has been updated.', 'success');
          this.$router.push('/');
        } catch (error) {
          console.error("Error updating student data:", error);
        }
      },
    },
  };
  </script>
  
<template>
  <div>
    <h1>Student List</h1>
    <router-link to="/add-student" class="btn btn-primary mb-3">Add Student</router-link>
    <table class="table">
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
          <td>{{ student.major }}</td>
          <td>{{ student.gender }}</td>
          <td>
            <router-link :to="`/edit-student/${student._id}`" class="btn btn-warning">Edit</router-link>
            <button class="btn btn-danger" @click="confirmDeleteStudent(student._id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      students: [],
    };
  },
  methods: {
    async fetchStudents() {
      console.log("Fetching students from API");
      try {
        const response = await axios.get('http://localhost:5000/api/students');
        this.students = response.data;
        console.log("Students fetched successfully", this.students);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    },
    confirmDeleteStudent(id) {
      console.log("Confirming delete for student ID", id);
      Swal.fire({
        title: 'Are you sure?',
        text: 'You won\'t be able to revert this!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axios.delete(`http://localhost:5000/api/students/${id}`);
          this.fetchStudents();
          Swal.fire('Deleted!', 'Student has been deleted.', 'success');
        }
      });
    },
  },
  created() {
    this.fetchStudents();
  },
};
</script>

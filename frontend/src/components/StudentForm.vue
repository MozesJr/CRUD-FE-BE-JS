<template>
  <div>
    <h1>{{ isEdit ? 'Edit' : 'Add' }} Student</h1>
    <form @submit.prevent="handleSubmit">
      <div class="mb-3">
        <label for="name" class="form-label">Name:</label>
        <input type="text" id="name" v-model="student.name" class="form-control" required />
      </div>
      <div class="mb-3">
        <label for="studentId" class="form-label">Student ID:</label>
        <input type="text" id="studentId" v-model="student.studentId" class="form-control" required />
      </div>
      <div class="mb-3">
        <label for="major" class="form-label">Major:</label>
        <select id="major" v-model="student.major" class="form-control" required>
          <option v-for="major in majors" :key="major._id" :value="major._id">{{ major.name }}</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="gender" class="form-label">Gender:</label>
        <select id="gender" v-model="student.gender" class="form-control" required>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary">{{ isEdit ? 'Update' : 'Add' }} Student</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    studentData: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      student: {
        name: '',
        studentId: '',
        major: '',
        gender: 'Male',
      },
      majors: [],
      isEdit: false,
    };
  },
  created() {
    if (this.studentData && this.studentData._id) {
      this.student = { ...this.studentData };
      this.isEdit = true;
    }
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
    async handleSubmit() {
      try {
        if (this.isEdit) {
          await axios.put(`http://localhost:5000/api/students/${this.student._id}`, this.student);
        } else {
          await axios.post('http://localhost:5000/api/students', this.student);
        }
        this.$emit('student-saved');
        this.$router.push('/');
      } catch (error) {
        console.error('Error saving student:', error);
      }
    },
  },
};
</script>

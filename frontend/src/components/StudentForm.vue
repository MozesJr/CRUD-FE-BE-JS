<template>
    <div>
      <!-- Modal -->
      <div class="modal fade" id="studentModal" tabindex="-1" aria-labelledby="studentModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="studentModalLabel">{{ isEdit ? 'Edit' : 'Add' }} Student</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
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
                <button type="submit" class="btn btn-primary">{{ isEdit ? 'Update' : 'Add' }} Student</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import Swal from 'sweetalert2';
  
  export default {
    props: ['studentData'],
    data() {
      return {
        student: {
          name: '',
          studentId: '',
          major: '',
          gender: '',
        },
        isEdit: false,
      };
    },
    watch: {
      studentData: {
        immediate: true,
        handler(val) {
          if (val) {
            this.student = { ...val };
            this.isEdit = true;
          } else {
            this.isEdit = false;
          }
          this.showModal();
        },
      },
    },
    methods: {
      showModal() {
        const modalElement = document.getElementById('studentModal');
        const modal = new bootstrap.Modal(modalElement);
        modal.show();
      },
      async handleSubmit() {
        if (this.isEdit) {
          await axios.put(`http://localhost:5000/api/students/${this.student._id}`, this.student);
          Swal.fire('Updated!', 'Student has been updated.', 'success');
        } else {
          await axios.post('http://localhost:5000/api/students', this.student);
          Swal.fire('Added!', 'Student has been added.', 'success');
        }
        this.$emit('student-saved');
        this.resetForm();
      },
      resetForm() {
        this.student = {
          name: '',
          studentId: '',
          major: '',
          gender: '',
        };
        const modalElement = document.getElementById('studentModal');
        const modal = bootstrap.Modal.getInstance(modalElement);
        modal.hide();
      },
    },
  };
  </script>
  
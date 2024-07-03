<template>
    <div>
      <h1>Daftar Jurusan</h1>
      <form @submit.prevent="handleSubmit">
        <div class="mb-3">
          <label for="name" class="form-label">Nama Jurusan</label>
          <input type="text" class="form-control" id="name" v-model="major.name" required />
        </div>
        <button type="submit" class="btn btn-primary">{{ editing ? 'Update' : 'Add' }} Jurusan</button>
      </form>
      <table class="table mt-3">
        <thead>
          <tr>
            <th>Nama Jurusan</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="major in majors" :key="major._id">
            <td>{{ major.name }}</td>
            <td>
              <button class="btn btn-warning" @click="editMajor(major)">Edit</button>
              <button class="btn btn-danger" @click="confirmDeleteMajor(major._id)">Delete</button>
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
        majors: [],
        major: { name: '' },
        editing: false,
        currentId: null,
      };
    },
    async created() {
      await this.fetchMajors();
    },
    methods: {
      async fetchMajors() {
        try {
          const response = await axios.get('http://localhost:5000/api/majors');
          this.majors = response.data;
        } catch (error) {
          console.error("Error fetching majors:", error);
        }
      },
      async handleSubmit() {
        try {
          if (this.editing) {
            await axios.put(`http://localhost:5000/api/majors/${this.currentId}`, this.major);
            Swal.fire('Updated!', 'Jurusan telah diperbarui.', 'success');
          } else {
            await axios.post('http://localhost:5000/api/majors', this.major);
            Swal.fire('Added!', 'Jurusan telah ditambahkan.', 'success');
          }
          this.major = { name: '' };
          this.editing = false;
          this.currentId = null;
          await this.fetchMajors();
        } catch (error) {
          console.error("Error saving major:", error);
        }
      },
      editMajor(major) {
        this.major = { ...major };
        this.editing = true;
        this.currentId = major._id;
      },
      async confirmDeleteMajor(id) {
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
            await axios.delete(`http://localhost:5000/api/majors/${id}`);
            Swal.fire('Deleted!', 'Jurusan telah dihapus.', 'success');
            await this.fetchMajors();
          }
        });
      },
    },
  };
  </script>
  
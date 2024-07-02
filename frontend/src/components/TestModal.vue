<template>
    <b-modal :visible="show" @hide="hideModal" title="Test Modal">
      <div>This is a test modal.</div>
      <button @click="hideModal" class="btn btn-secondary">Close</button>
    </b-modal>
  </template>
  
  <script>
  export default {
    data() {
      return {
        show: false,
      };
    },
    methods: {
      hideModal() {
        this.show = false;
      },
    },
    mounted() {
      this.show = true;
    },
  };
  </script>
  
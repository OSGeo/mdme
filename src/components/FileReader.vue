<template>
        <v-file-input 
            label="Upload" @change="loadTextFromFile"
        ></v-file-input>
</template>

<script>
export default {
  methods: {
    loadTextFromFile(ev) {
      const reader = new FileReader();
      reader.onload = e => this.$emit("load", e.target.result);
      reader.readAsText(ev);
    }
  }
};
</script>
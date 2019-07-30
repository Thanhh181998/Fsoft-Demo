<template>
    <div class="modal-wrapper" v-if="visible">
        <h2> {{ title }} </h2>
        <p> {{ text }}</p>
        <div class="modal-buttons">
            <button class="modal-button" @click="hide">Close</button>
            <button class="modal-button" @click="confirm">Confirm</button>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            visible: false,
            title: '',
            text: ''
        }
    },

    methods: {
        hide() {
            this.visible = false;
        },

        confirm() {
            // abc
        }
    }
}
</script>

<style scope>
    .modal-wrapper {

  position: fixed;

  top: 50%;

  left: 50%;

  transform: translate(-50%, -50%);

  width: 300px;

  height: 200px;

  z-index: 1000;



  border-radius: 2px;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

}



.modal-buttons {

  position: absolute;

  bottom: 0;

  left: 0;

  right: 0; 

  display: flex;

}



.modal-button {

  flex-grow: 1;

}
</style>



<template>
  <div id="app">
    <div class="tab">
      <router-link
        :to="{ name: 'listTeam' }"
        tag="button"
        class="btn glyphicon glyphicon-plus"
      >List Team</router-link>
      <router-link
        :to="{ name: 'listPlayer' }"
        tag="button"
        class="btn glyphicon glyphicon-plus"
      >List Player</router-link>
      <router-link
        :to="{ name: 'listManager' }"
        tag="button"
        class="btn glyphicon glyphicon-plus"
      >List Manager</router-link>
    </div>
    <table class="table table-bordered">
      <thead class="thead-dark">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Team</th>
          <th>Nation</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody v-for="(item, index) in items" :key="index">
        <tr>
          <td>{{ index+1 }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.team }}</td>
          <td>{{ item.nation }}</td>
          <td>
            <div>
              <b-button id="show-btn" @click="showModal(index)" variant="success">Edit</b-button>
              <b-modal :id="'index' + index" hide-footer>
                <template slot="modal-title">
                  Edit Player Profile
                </template>
                <div class="d-block text-center">
                  <p>Name: <input v-model="item.name"/> </p>
                  <p>Team: <input v-model="item.team"/> </p>
                  <p>Nation: <input v-model="item.nation"/> </p>
                </div>
                <b-button class="mt-3" block @click="closeModal(index)">Edit Profile</b-button>
              </b-modal>
              <b-button id="show-btn" @click="deleteModal(index)" variant="danger">Delete</b-button>
            </div>
            <!-- <br />
            <div>
              <b-button id="show-btn" >Delete</b-button>
            </div> -->
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
// import { router } from 'router'
export default {
  name: 'List',
  props: ['data'],
  data () {
    return {
      check: false,
      items: [
        { name: 'Lionel Messi', team: 'Barcelona', nation: 'Argentina' },
        { name: 'Cristiano Ronaldo', team: 'Real Madrid', nation: 'Portugal' },
        { name: 'Mac Hong Quan', team: 'Manchester United', nation: 'Viet Nam' },
        { name: 'Lord Bendtner', team: 'All', nation: 'Denmark' },
        { name: 'Pele', team: 'Manchester', nation: 'Brazil' },
        { name: 'Neymar Jr', team: 'Paris Saint Germain', nation: 'Brazil' }
      ]
    }
  },
  methods: {
    showModal (index) {
      this.$bvModal.show('index' + index)
    },
    closeModal (index) {
      this.$bvModal.hide('index' + index)
    },
    deleteModal (index) {
      this.items.splice(index, 1)
    }
  }
}
</script>
<style type='text/css'>
tr > th {
  text-align: center !important;
}

.table {
    table-layout: fixed;
    word-wrap: break-word;
}

.tab {
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
  width: 22.7%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

/* Style the buttons inside the tab */
.tab button {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
  font-size: 17px;
}

/* Change background color of buttons on hover */
.tab button:hover {
  background-color: #ddd;
}

.tab button.active {
  background-color: #ccc;
}

/* Style the tab content */
.tabcontent {
  display: none;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
}
</style>

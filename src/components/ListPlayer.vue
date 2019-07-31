<template>
  <div id="app">
    <div >
        <b-button id="show-btn" @click="OpenForm()" variant="success">Create New Player</b-button>
        <b-modal id="addModal" hide-footer>
          <template slot="modal-title" >
            Add new player
          </template>
          <div class="d-block text-center">
            <p>Name: <input v-model="item.name" type="text"/> </p>
            <p v-if="check" class="error">Please enter the name of player</P>
            <p>Team: <input v-model="item.team" type="text"/> </p>
            <p>Nation: <input v-model="item.nation" type="text"/></p>
          </div>
          <b-button class="mt-3" block @click="addNewPlayer()">Add New Player</b-button>
        </b-modal>
    </div>
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
    <b-table :items="items" striped bordered :fields="fields" class="table table-bordered"
    id="my-table"
    :per-page="perPage"
    :current-page="currentPage"
      small>
      <template slot="actions" slot-scope="row">
        <b-button @click="showModal(row.item.id)" variant="success">Edit</b-button>
        <b-modal :id="'index' + row.item.id" hide-footer>
          <template slot="modal-title">
            Edit Player Profile
          </template>
          <div class="d-block text-center">
            <p>Name: <input v-model.lazy="row.item.name"/> </p>
            <p>Team: <input v-model.lazy="row.item.team"/> </p>
            <p>Nation: <input v-model.lazy="row.item.nation"/> </p>
          </div>
          <b-button class="mt-3" block @click="closeModal(row.item.id)">Edit Profile</b-button>
        </b-modal>
        <b-button id="show-btn" @click="deleteModal(row.item.id)" variant="danger">Delete</b-button>
      </template>
    </b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>
    <p class="mt-3">Current Page: {{ currentPage }}</p>
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
      perPage: 3,
      currentPage: 1,
      fields: [
        { key: 'id', sortable: true, label: 'ID' },
        { key: 'name', sortable: true, label: 'NAME' },
        { key: 'team', sortable: true, label: 'TEAM' },
        { key: 'nation', sortable: true, label: 'NATION' },
        { key: 'actions', label: 'Action' }
      ],
      items: [
        { id: 1, name: 'Lionel Messi', team: 'Barcelona', nation: 'Argentina' },
        { id: 2, name: 'Cristiano Ronaldo', team: 'Real Madrid', nation: 'Portugal' },
        { id: 3, name: 'Mac Hong Quan', team: 'Manchester United', nation: 'Viet Nam' },
        { id: 4, name: 'Lord Bendtner', team: 'All', nation: 'Denmark' },
        { id: 5, name: 'Pele', team: 'Manchester', nation: 'Brazil' },
        { id: 6, name: 'Neymar Jr', team: 'Paris Saint Germain', nation: 'Brazil' }
      ],
      item: { name: '', team: '', nation: '' }
    }
  },
  computed: {
    rows () {
      return this.items.length
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
      if (confirm('Do you really want to delete?')) {
        this.items.splice(index, 1)
      }
    },
    OpenForm () {
      this.$bvModal.show('addModal')
      this.item.name = ''
      this.item.team = ''
      this.item.nation = ''
    },
    addNewPlayer () {
      if (this.item.name === '') {
        this.check = true
        this.OpenForm()
      } else {
        let newUser = {
          id: this.items.length + 1,
          name: this.item.name,
          team: this.item.team,
          nation: this.item.nation
        }
        this.items.push(newUser)
        this.$bvModal.hide('addModal')
        this.check = false
      }
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
  width: 350px;
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

.error {
  color: red;
}
</style>

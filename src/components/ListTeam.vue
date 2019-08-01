<template>
  <div id="app" class="all">
    <div class="tab">
      <router-link
        :to="{ name: 'listTeam' }"
        tag="button"
        class="btn glyphicon glyphicon-plus"
      > Team</router-link>
      <router-link
        :to="{ name: 'listPlayer' }"
        tag="button"
        class="btn glyphicon glyphicon-plus"
      > Player</router-link>
      <router-link
        :to="{ name: 'listManager' }"
        tag="button"
        class="btn glyphicon glyphicon-plus"
      > Manager</router-link>
    </div>
    <div class="content">
      <div class="head-content">
        Wellcome to my team
      </div>
      <br/>
      <div >
          <b-button id="show-btn" @click="OpenForm()" variant="success">Create New Team</b-button>
          <b-modal id="addModal" hide-footer>
            <template slot="modal-title" >
              Add new player
            </template>
            <div class="d-block text-center">
              <p>Name: <input v-model="item.name" type="text"/> </p>
              <p v-if="check" class="error">Please enter the name of team</P>
              <p>Nation: <input v-model="item.nation" type="text"/></p>
            </div>
            <b-button class="mt-3" block @click="addNewTeam()">Add New team</b-button>
          </b-modal>
      </div>
      <br />
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
        { key: 'nation', sortable: true, label: 'NATION' },
        { key: 'actions', label: 'Action' }
      ],
      items: [
        { id: 1, name: 'Barcelona', nation: 'Spanish' },
        { id: 2, name: 'Real Madrid', nation: 'Spanish' },
        { id: 3, name: 'Arsenal', nation: 'England' },
        { id: 4, name: 'Milan', nation: 'Italian' },
        { id: 5, name: 'Liverpool', nation: 'England' },
        { id: 6, name: 'West Germany', nation: 'Germany' },
        { id: 7, name: 'Paris sant', nation: 'Freance' }
      ],
      item: { name: '', nation: '' }
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
      this.item.nation = ''
    },
    addNewTeam () {
      if (this.item.name === '') {
        this.check = true
        this.OpenForm()
      } else {
        let newUser = {
          id: this.items.length + 1,
          name: this.item.name,
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
  background-color:pink;
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
  background-color:pink;
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

.all {
  display: flex;
}

.tab {
  width: 10%;
  height: auto;
  display: initial
}

.content {
  width: 90%;
}

.head-content {
  height: 100px;
  background-color: aquamarine;
}
</style>

<template>
  <div>
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
          <th scope="col">ID</th>
          <th scope="col">Team</th>
          <th scope="col">City</th>
          <th scope="col">Nation</th>
        </tr>
      </thead>
      <tbody v-for="(item, index) in items" :key="index">
        <tr>
          <td>{{ index+1 }}</td>
          <td>{{ item.team }}</td>
          <td>{{ item.city }}</td>
          <td>{{ item.nation }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'List',
  props: ['data'],
  data () {
    return {
      items: [
        { team: 'Arsenal', city: 'London', nation: 'England' },
        { team: 'Barcelona', city: 'Catalunya', nation: 'Spain' },
        { team: 'Real Madrid', city: 'Madrid', nation: 'Spain' },
        { team: 'Paris Saint Germain', city: 'Paris', nation: 'Franch' },
        { team: 'Manchester City', city: 'Manchester', nation: 'England' }
      ]
    }
  }
}
</script>
<style type="text/css">
tr > th {
  text-align: center !important;
}
.tab {
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
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
.tab {
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
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

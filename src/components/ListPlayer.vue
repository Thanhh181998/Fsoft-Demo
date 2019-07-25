
<template>
  <div>
    <router-link
      :to="{ name: 'listTeam' }"
      tag="button"
      class="btn btn-success glyphicon glyphicon-plus"
    >List Team</router-link>
    <router-link
      :to="{ name: 'listPlayer' }"
      tag="button"
      class="btn btn-success glyphicon glyphicon-plus"
    >List Player</router-link>
    <router-link
      :to="{ name: 'listManager' }"
      tag="button"
      class="btn btn-success glyphicon glyphicon-plus"
    >List Manager</router-link>
    <hr />
    <table class="table table-bordered">
      <thead class="thead-dark">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Team</th>
          <th>Nation</th>
        </tr>
      </thead>
      <tbody v-for="(item, index) in items" v-bind:key="item">
        <tr>
          <td>{{ index+1 }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.team }}</td>
          <td>{{ item.nation }}</td>
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
      items: [
        { name: 'Lionel Messi', team: 'Barcelona', nation: 'Argentina' },
        { name: 'Cristiano Ronaldo', team: 'Real Madrid', nation: 'Portugal' },
        {
          name: 'Mac Hong Quan',
          team: 'Manchester United',
          nation: 'Viet Nam'
        },
        { name: 'Lord Bendtner', team: 'All', nation: 'Denmark' },
        { name: 'Pele', team: 'Manchester', nation: 'Brazil' },
        { name: 'Neymar Jr', team: 'Paris Saint Germain', nation: 'Brazil' }
      ]
    }
  }
}
</script>
<style type='text/css'>
  tr > th {
    text-align: center !important;
  }
</style>

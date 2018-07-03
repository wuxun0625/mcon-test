<template>
  <div class="list-group"
       role="tablist">
    <a class="list-group-item list-group-item-action">
      <div class="row"
           v-on:click="clickItemsHeader">
        <div class="col-12">
          <h5 class="mb-1">Jone</h5>
        </div>
      </div>
      <div style="display: none"
           v-on:click="$emit('click-view-list-content',$event)">
        <hr>
        <div class="row">
          <div class="col-12">
            <p class="mb-1 text-secondary">Current Company: Oracle</p>
          </div>
        </div>
        <div class="row">
          <div class="col-4">
            <p class="mb-1 text-secondary">Gender: Male</p>
          </div>
          <div class="col-4">
            <p class="mb-1 text-secondary">Age: 33</p>
          </div>
          <div class="col-4">
            <p class="mb-1 text-secondary">Position: IC2</p>
          </div>
        </div>
      </div>
    </a>
    <a class="list-group-item list-group-item-action">Profile</a>
    <a class="list-group-item list-group-item-action">Messages</a>
    <a class="list-group-item list-group-item-action">Settings</a>
  </div>
</template>
<script>
import $ from "jquery";

const items = [
];

export default {
  data() {
    return {
      //Variable to store listView's source data
      items: items,
      //Variable to store current expended bio area DOM object
      expendedItem: {}
    };
  },

  components: {},

  props: {},

  methods: {
    //Function for click view-list item's header
    clickItemsHeader: function(event) {
      //Show/Hide bio area
      $(event.currentTarget.parentNode.children[1]).toggle(500);
      //Store current expands bio area DOM object
      this.expendedItem = event.currentTarget.parentNode.children[1];
    }
  }
};
</script>

<style scoped>
/* Style for hr in listView */
hr {
  margin: 0px;
}
</style>

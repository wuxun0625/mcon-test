<template>
  <div class="list-group"
       role="tablist">
    <a class="list-group-item list-group-item-action"
       v-for="item in data"
       :key="item.id"
       v-on:click="clickItems">
      <div class="row">
        <div class="col-12">
          <h5 class="mb-1">{{item.name}}</h5>
        </div>
      </div>
      <div style="display: none"
           v-on:click.stop="clickItemsContent($event,item)">
        <hr>
        <div class="row">
          <div class="col-12">
            <p class="mb-1 text-secondary">Current Company: {{item.company}}</p>
          </div>
        </div>
        <div class="row">
          <div class="col-4">
            <p class="mb-1 text-secondary">Gender: {{item.gender}}</p>
          </div>
          <div class="col-4">
            <p class="mb-1 text-secondary">Age: {{item.age}}</p>
          </div>
          <div class="col-4">
            <p class="mb-1 text-secondary">Position: {{item.position}}</p>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>
<script>
import $ from "jquery";

export default {
  data() {
    return {
      //Variable to store current expended bio area DOM object
      expendedItem: ""
    };
  },

  components: {},

  props: ["data"],

  methods: {
    //Function for click view-list item's header
    clickItems: function(event) {
      //Get selected item's bio area
      var selectedBio = event.currentTarget.children[1];

      //If user select same item then show/hide it's bio area
      //then clear privious selected item's bio area
      //then return
      if (this.expendedItem === selectedBio) {
        $(this.expendedItem).toggle(500);
        this.expendedItem = "";
        return;
      }

      //Hide privious selected item's bio area when it's not ''
      if (this.expendedItem !== "") {
        $(this.expendedItem).toggle(500);
      }
      //Show selected item's bio area
      $(selectedBio).toggle(500);
      //Store current expands item's bio area DOM object as privious selected item's bio area
      this.expendedItem = selectedBio;
    },
    //Function for click item's content
    clickItemsContent: function(event, item) {
      //Emit click-view-list-content event to outside listView component
      this.$emit("click-view-list-content", event, item);
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

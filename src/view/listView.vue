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
            <p class="mb-1 text-secondary">Gender: 
              <span v-if="item.gender==='male'" class="icon-font-family-wuxun-cus icon-male"></span>
              <span v-else-if="item.gender==='female'" class="icon-font-family-wuxun-cus icon-female"></span>
            </p>

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
  name:'listView',
  data() {
    return {
      //Variable to store current expended bio area DOM object
      previousSelectedItem: ""
    };
  },

  components: {},

  props: ["data"],

  methods: {
    //Function for click view-list item's header
    clickItems: function(event) {
      //Get selected item
      var selectedItem = event.currentTarget;

      //If user select same item then show/hide it's bio area
      //then clear previous selected item
      //then return
      if (this.previousSelectedItem === selectedItem) {
        //Show/Hide selected item's bio area
        $(selectedItem.children[1]).toggle(500);
        //Clear previous selected item
        this.previousSelectedItem = "";
        //Set selected item style as selected/unselected
        $(selectedItem).toggleClass("selected");
        return;
      }

      //Hide previous selected item's bio area when previous selected item is not ''
      if (this.previousSelectedItem !== "") {
        $(this.previousSelectedItem.children[1]).toggle(500);
        //Set previous selected item style as unselected
        $(this.previousSelectedItem).toggleClass("selected");
      }
      //Show selected item's bio area
      $(selectedItem.children[1]).toggle(500);
      //Set selected item style as selected/unselected
      $(selectedItem).toggleClass("selected");
      //Store current expands item DOM object as previous selected item
      this.previousSelectedItem = selectedItem;
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
/* Style for selected item*/
.selected {
  background-color: rgba(108, 117, 125, 0.05);
}
</style>

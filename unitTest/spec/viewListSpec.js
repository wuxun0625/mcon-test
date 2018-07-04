import Vue from '../../node_modules/vue/dist/vue.esm';
import '../../src/css/common.css';
import listView from '../../src/view/listView.vue'
import '../spec/viewListSpec.js';
import { shallowMount } from '../../node_modules/@vue/test-utils/dist/vue-test-utils';

/* global QUnit */
QUnit.module("viewList", {
    //    beforeEach: function (assert) {
    //        window.console.log('start');
    //    }, afterEach: function (assert) {
    //        window.console.log('end');
    //    }
});
//Make sure specs execute in order
QUnit.config.reorder = false;

//Simulate to rendering listView component
const wrapper = shallowMount(listView);
//Prepare viewList data
var testData = [
    { id: '1', name: 'Wuxun', age: 33, gender: "male", position: "Staff", company: "Oracle" },
    { id: '2', name: 'John', age: 40, gender: "male", position: "Staff", company: "MCON" },
    { id: '3', name: 'Ann', age: 22, gender: "female", position: "Developer", company: "Amazon" },
    { id: '4', name: 'Vivienne', age: 36, gender: "female", position: "Manager", company: "Google" }
];
//Set prepared data to viewList's data prop
wrapper.setProps({ data: testData })

//Execute test cases
QUnit.test("1.Test if viewList item number correct", function (assert) {
    var done = assert.async();
    assert.equal(wrapper.find('div').element.childNodes.length, 4, "Success, 4 items.");
    done();
});
QUnit.test("2.Test if viewList item content correct", function (assert) {
    var done = assert.async();
    assert.equal(wrapper.find('div').find('a').find('h5').element.innerHTML, 'Wuxun', "Success, First item's Name is Wuxun.");
    assert.equal(wrapper.find('div').find('a').element.children[1].children[1].children[0].children[0].innerHTML, 'Current Company: Oracle', "Success, First item's Current Company is Oracle.");
    assert.equal(wrapper.find('div').find('a').element.children[1].children[2].children[0].children[0].children[0].className, 'icon-font-family-wuxun-cus icon-male', "Success, First item's Gender is male.");
    assert.equal(wrapper.find('div').element.children[3].children[1].children[2].children[0].children[0].children[0].className, 'icon-font-family-wuxun-cus icon-female', "Success, Third item's Gender is female.");
    assert.equal(wrapper.find('div').find('a').element.children[1].children[2].children[1].children[0].innerHTML, 'Age: 33', "Success, First item's Age is 33.");
    assert.equal(wrapper.find('div').find('a').element.children[1].children[2].children[2].children[0].innerHTML, 'Position: Staff', "Success, First item's Position is Staff.");
    done();
});
QUnit.test("3.Test if click viewList item expends/collapses correct", function (assert) {
    var done = assert.async();
    assert.equal(wrapper.find('div').find('a').element.children[1].style.display, 'none', "Success, before click first item it's bio area display value is none.");
    //Create event
    var event = document.createEvent('MouseEvents');
    event.initEvent("click", true, true);
    //Click first item
    wrapper.find('div').find('a').element.dispatchEvent(event);
    assert.equal(wrapper.find('div').find('a').element.children[1].style.display, '', "Success, after click first item it's bio area display value is ''.");
    //Click secont item
    wrapper.find('div').element.children[1].dispatchEvent(event);
    //Because bio area need 500ms to expends/collapses, so we need to wait for few seconds to verify
    setTimeout(function () {
        assert.equal(wrapper.find('div').element.children[1].children[1].style.display, '', "Success, after click second item it's bio area display value is ''.");
        assert.equal(wrapper.find('div').find('a').element.children[1].style.display, 'none', "Success, after click second item then first item's bio area display value is none.");
        //Click secont item again
        wrapper.find('div').element.children[1].dispatchEvent(event);
        setTimeout(function () {
            assert.equal(wrapper.find('div').element.children[1].children[1].style.display, 'none', "Success, after click second item again it's bio area display value is none.");
            done();
        }, 2000);
    }, 2000);
});
QUnit.test("5.Test if click viewList item's bio area the click-view-list-content event emited", function (assert) {
    var done = assert.async();
    //Create event
    var event = document.createEvent('MouseEvents');
    event.initEvent("click", true, true);
    //Click first item's bio area
    wrapper.find('div').find('a').element.children[1].dispatchEvent(event);
    assert.equal(wrapper.emitted('click-view-list-content').length, 1, "Success, the click-view-list-content event emited.");
    done();
});


QUnit.done(function (details) {

});





import Vue from 'vue'
import App from './App.vue'
import editor from 'vue2-medium-editor'
Vue.component('medium-editor', editor);


new Vue({
    el: '#app',
    data: {

        innerText: '',
        title: '',
        saved: 'false',
        uniqueId: '',
        stats: {
            textChars: '',
            textWords: '',
            timeToSay: '',
            splitSecs: '',
            splitMins: ''
        }

    },
    methods: {
        processEditOperation: function(operation) {
            console.log(operation)
            this.text = operation.api.origElements.innerHTML;
            this.innerText = operation.api.origElements.innerText;

            this.countText();
            this.speechStats();

        },

        countText: function(text) {

            // process text
            const charCount = (this.innerText.length) - 1;
            console.log(charCount)

            var wordCount = this.innerText.split(" ").length;
            console.log(wordCount)

            // Add stats to state 
            this.stats.textChars = charCount;
            this.stats.textWords = wordCount;

        },

        speechStats: function(text) {

            const timeToSay = (this.stats.textWords / 2.5);
            const splitSecs = ("0" + parseInt(timeToSay % 60, 10)).slice(-2);
            const splitMins = ("0" + Math.floor(timeToSay / 60)).slice(-2);


            this.stats.timeToSay = timeToSay;

            this.stats.splitSecs = splitSecs;
            this.stats.splitMins = splitMins;



        }



    },
    render: h => h(App),

})
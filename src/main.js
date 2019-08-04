import Vue from 'vue'
import App from './App.vue'
import editor from 'vue2-medium-editor'
import * as firebase from 'firebase';
import router from './router'
Vue.component('medium-editor', editor);

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAaNlLDXpIhCaG6P4MF_CeNoVmB_IsPJQA",
    authDomain: "lengthy-d9442.firebaseapp.com",
    databaseURL: "https://lengthy-d9442.firebaseio.com",
    projectId: "lengthy-d9442",
    storageBucket: "",
    messagingSenderId: "578635496219"
};

let app = firebase.initializeApp(config);
let db = app.database();
let scriptRef = db.ref('scriptId');

new Vue({
    el: '#app',
    router,
    data: {
        pageReady: 'false',
        innerText: '',
        scriptContent: {
            scriptId: '002',
            title: 'My Script Title 👋',
            text: ''
        },
        target: {
            set: false,
            targetSecs: '00',
            targetMins: '00',
            targetTotalSecs: '00',
            targetTotalWords: '00',
            wordsOver: ''
        },
        saved: 'false',
        shareLink: '',
        settings: {
            open: false,
            readSpeed: 2.5
        },
        stats: {
            textChars: '80',
            textWords: '',
            timeToSay: '',
            splitSecs: '',
            splitMins: ''
        }

    },
    methods: {
        processEditOperation: function(operation) {
            console.log(operation)
            this.scriptContent.text = operation.api.origElements.innerHTML;
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

            const timeToSay = (this.stats.textWords / this.settings.readSpeed);
            const splitSecs = ("0" + parseInt(timeToSay % 60, 10)).slice(-2);
            const splitMins = ("0" + Math.floor(timeToSay / 60)).slice(-2);

            this.stats.timeToSay = timeToSay;

            this.stats.splitSecs = splitSecs;
            this.stats.splitMins = splitMins;

            this.calculateTarget();



        },

        saveScript: function() {
            console.log('script saved');
            var newPostRef = scriptRef.push(this.scriptContent);
            console.log(newPostRef.key);

            router.push({ query: { id: newPostRef.key } });

            this.shareLink = window.location.href;
        },

        fetchData: function(key) {

            var self = this;
            var fetchedData = scriptRef.child(key).once('value').then(function(info) {
                self.scriptContent.title = info.val().title;
                self.scriptContent.text = info.val().text;
                self.shareLink = window.location.href;

                setTimeout(function() {
                    self.pageReady = true;
                }, 500);

            });

            console.log(fetchedData);
        },
        handleInput: function(event) {
            // var value = Number(event.target.value)
            // if (value > 59) {
            //     this.model = 59
            // } else if (value < 0 || Number.isNaN(value)) {
            //     this.model = 0
            // } else {
            //     this.model = value
            // }

            this.calculateTarget();

        },
        makePdf: function() {
            var self = this;
            var element = document.querySelector('.pdf-layout');
            html2pdf(element, {
                margin: 1,
                filename: `${self.scriptContent.title}.pdf`,
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { dpi: 192, letterRendering: true },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            });
        },
        calculateTarget: function() {
            var targetTotal = Number(this.target.targetMins * 60) + Number(this.target.targetSecs);

            this.target.targetTotalSecs = targetTotal;
            this.target.targetTotalWords = Math.round(targetTotal / this.settings.readSpeed);

            if (this.target.targetTotalWords < this.stats.textWords) {

                this.target.wordsOver = Math.abs(this.target.targetTotalWords - this.stats.textWords);

            } else {
                console.log('under')

                this.target.wordsOver = '';
            }

        }

    },

    mounted: function() {

        if (this.$route.query.id) {
            this.fetchData(this.$route.query.id);

            console.log('query found');
        } else {
            console.log('query not found');
            this.pageReady = true;
        }
    },
    render: h => h(App),

})
